import os
import time
from handlers.tmdb_handler import TMDBHandler
from handlers.image_optimizer import ImageOptimizer
from handlers.persistence_handler import PersistenceHandler
from config import TMDB_API_KEY

class BotOrchestrator:
    def __init__(self, data_path):
        self.tmdb = TMDBHandler(TMDB_API_KEY)
        self.optimizer = ImageOptimizer()
        self.persistence = PersistenceHandler(data_path)

    def run(self, workload):
        """Executes the workload (batch or manual)."""
        mode = workload["mode"]
        animes = workload["animes"]
        indices = workload["indices"]
        update_vignette = workload["update_vignette"]
        
        if TMDB_API_KEY == "VOTRE_CLE_API_ICI":
            print("\n[!] Attention : Vous devez configurer votre TMDB_API_KEY dans config.py")
            return

        # Initialize log file (append mode)
        log_path = os.path.join(os.path.dirname(self.persistence.data_path), "..", "..", "imdb_bot", "requirements_log.txt")
        file_exists = os.path.exists(log_path)
        with open(log_path, "a", encoding="utf-8") as f:
            if not file_exists:
                f.write(f"--- Bot Run Log: {time.strftime('%Y-%m-%d %H:%M:%S')} ---\n")
            else:
                f.write(f"\n--- Bot Run Session: {time.strftime('%Y-%m-%d %H:%M:%S')} ---\n")

        print(f"Starting {mode} mode for {len(animes)} animes...")
        success_count = 0
        
        for i, name in enumerate(animes):
            if mode == "batch":
                print(f"[{i+1}/{len(animes)}] Processing: {name}")
            
            if self._process_single(name, indices, update_vignette, log_path):
                success_count += 1
                
            if mode == "batch" and i < len(animes) - 1:
                time.sleep(0.5) # TMDB is faster than IMDb but let's be safe
                
        print(f"\nDone! Processed {success_count}/{len(animes)} successfully.")

    def _process_single(self, name, indices=None, update_vignette=True, log_path=None):
        """Internal logic for a single anime update using TMDB."""
        # 1. Resolve ID and current state
        anime_id = self.persistence.find_id_by_name(name)
        if not anime_id:
            print(f"  [!] Name '{name}' not found in data.js")
            return False
            
        current = self.persistence.get_current_data(anime_id)
        
        # 2. Fetch from TMDB
        tmdb_info = self.tmdb.search_id(name)
        if not tmdb_info:
            print(f"  [!] No TMDB result for '{name}'")
            if log_path:
                with open(log_path, "a", encoding="utf-8") as f:
                    f.write(f"{name}: No TMDB result found.\n")
            return False
            
        raw_paths = self.tmdb.fetch_raw_images(tmdb_info["id"], tmdb_info["type"])
        if not raw_paths:
            print(f"  [!] Gallery empty for {tmdb_info['title']}")
            if log_path:
                with open(log_path, "a", encoding="utf-8") as f:
                    f.write(f"{name}: Gallery is empty on TMDB.\n")
            return False

        # 3. Optimize and Select
        optimized_urls = [self.optimizer.optimize_url(p) for p in raw_paths]
        
        new_images = list(current["images"])
        new_vignette = current["vignette"]

        if indices:
            # Manual index replacement
            selection = self.optimizer.select_images(optimized_urls, count=len(indices), existing_urls=new_images)
            for i, idx in enumerate(indices):
                real_idx = idx - 1
                if 0 <= real_idx < len(new_images) and i < len(selection):
                    new_images[real_idx] = selection[i]
        else:
            # Full refresh
            new_images = self.optimizer.select_images(optimized_urls, count=4)

        if update_vignette:
            new_vignette = self.optimizer.select_vignette(optimized_urls)

        # Log missing requirements
        if log_path:
            with open(log_path, "a", encoding="utf-8") as f:
                if len(new_images) < 4:
                    f.write(f"{name}: Only {len(new_images)} images found (Required: 4).\n")
                if not new_vignette:
                    f.write(f"{name}: Missing vignette.\n")

        # 4. Save
        if self.persistence.save_data(anime_id, new_images, new_vignette):
            print(f"  [✓] Updated {name} (via TMDB)")
            return True
        return False
