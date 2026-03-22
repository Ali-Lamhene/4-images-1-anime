import random

class ImageOptimizer:
    def __init__(self, resolution="w500"):
        self.resolution = resolution
        self.base_url = "https://image.tmdb.org/t/p"

    def optimize_url(self, path):
        """Converts raw TMDB path into a full, optimized URL."""
        if not path:
            return None
        if path.startswith("http"):
             return path # Already full URL
        # Format: https://image.tmdb.org/t/p/w500/path.jpg
        return f"{self.base_url}/{self.resolution}{path}"

    def select_images(self, urls, count=4, existing_urls=None):
        """Randomly selects a specified number of unique images."""
        if not urls:
            return []
            
        # Optional: favor images not in current list
        if existing_urls:
            fresh = [u for u in urls if u not in existing_urls]
            if fresh:
                urls = fresh
                
        if len(urls) < count:
            return urls
            
        return random.sample(urls, count)

    def select_vignette(self, urls):
        """Selects a random image for the vignette."""
        if not urls:
            return None
        return random.choice(urls)
