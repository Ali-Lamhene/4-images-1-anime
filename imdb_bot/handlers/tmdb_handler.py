import requests

class TMDBHandler:
    def __init__(self, api_key):
        self.api_key = api_key
        self.base_url = "https://api.themoviedb.org/3"
        self.is_jwt = api_key.startswith("eyJ")
        self.headers = {
            "accept": "application/json",
        }
        if self.is_jwt:
            self.headers["Authorization"] = f"Bearer {api_key}"

    def search_id(self, name):
        """Search for an anime and return its TMDB ID and title."""
        url = f"{self.base_url}/search/multi"
        params = {"query": name, "language": "fr-FR"}
        if not self.is_jwt:
            params["api_key"] = self.api_key
            
        try:
            response = requests.get(url, params=params, headers=self.headers, timeout=10)
            if response.status_code == 200:
                data = response.json()
                if data["results"]:
                    # Take the first result that is a TV show or Movie
                    result = data["results"][0]
                    return {
                        "id": result["id"],
                        "title": result.get("name") or result.get("title"),
                        "type": result["media_type"]
                    }
        except Exception as e:
            print(f"  [X] TMDB Search Error: {e}")
        return None

    def fetch_raw_images(self, tmdb_id, media_type="tv"):
        """Fetch raw backdrop and poster paths from TMDB."""
        url = f"{self.base_url}/{media_type}/{tmdb_id}/images"
        params = {}
        if not self.is_jwt:
            params["api_key"] = self.api_key
            
        try:
            response = requests.get(url, params=params, headers=self.headers, timeout=10)
            if response.status_code == 200:
                data = response.json()
                # Combine backdrops and posters for a variety of choices
                paths = []
                for img in data.get("backdrops", []):
                    paths.append(img["file_path"])
                for img in data.get("posters", []):
                    paths.append(img["file_path"])
                return paths
        except Exception as e:
            print(f"  [X] TMDB Images Error: {e}")
        return []
