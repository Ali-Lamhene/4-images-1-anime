import sys
import argparse
from config import ANIME_LIST

class InputHandler:
    def __init__(self):
        self.parser = argparse.ArgumentParser(description="IMDb Anime Bot v3")
        self.parser.add_argument("anime", nargs="?", help="Anime name for manual override (if omitted, runs batch from config.py)")
        self.parser.add_argument("--indices", help="Indices to replace (e.g. '1,3'), only for manual mode", type=str)
        self.parser.add_argument("--no-vignette", action="store_true", help="Don't update vignette")
        
    def get_workload(self):
        """Resolves the workload based on CLI arguments or config.py."""
        args = self.parser.parse_args()
        
        mode = "batch" if not args.anime else "manual"
        animes = ANIME_LIST if mode == "batch" else [args.anime]
        
        # Parse indices if provided (manual mode only)
        indices = None
        if args.indices:
            try:
                indices = [int(i.strip()) for i in args.indices.split(',')]
            except ValueError:
                print("Error: Invalid indices format. Use '1,3' for example.")
                sys.exit(1)
                
        return {
            "mode": mode,
            "animes": animes,
            "indices": indices,
            "update_vignette": not args.no_vignette
        }
