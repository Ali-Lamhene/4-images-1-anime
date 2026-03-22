import re
import os

class PersistenceHandler:
    def __init__(self, data_path):
        self.data_path = data_path

    def _read_file(self):
        with open(self.data_path, 'r', encoding='utf-8') as f:
            return f.readlines()

    def _write_file(self, lines):
        with open(self.data_path, 'w', encoding='utf-8') as f:
            f.writelines(lines)

    def find_id_by_name(self, name):
        """Find an anime ID by its name in the data.js file."""
        lines = self._read_file()
        current_id = None
        for line in lines:
            id_match = re.search(r'"id":\s*"(\d+)"', line)
            if id_match:
                current_id = id_match.group(1)
            if f'"{name}"' in line and current_id:
                return current_id
        return None

    def get_current_data(self, anime_id):
        """Get the current images and vignette for an anime."""
        lines = self._read_file()
        start_idx = -1
        for i, line in enumerate(lines):
            if re.search(fr'"id":\s*"{anime_id}"', line):
                start_idx = i
                break
        
        if start_idx == -1:
            return None

        images = []
        vignette = None
        in_images = False
        
        for i in range(start_idx, len(lines)):
            line = lines[i]
            # Check for images block
            if re.search(r'"images":\s*\[', line):
                in_images = True
                continue
            
            if in_images:
                if ']' in line:
                    in_images = False
                    continue
                img_match = re.search(r'"(https?://[^"]+)"', line)
                if img_match:
                    images.append(img_match.group(1))
            
            # Check for vignette
            vignette_match = re.search(r'"vignette":\s*"(https?://[^"]+)"', line)
            if vignette_match:
                vignette = vignette_match.group(1)
            
            # End of the main object (4 spaces indentation followed by },)
            if re.search(r'^\s{4}\},', line) and not in_images:
                break
        
        return {"images": images, "vignette": vignette}

    def save_data(self, anime_id, images=None, vignette=None):
        """Update the images and/or vignette for a specific anime ID."""
        lines = self._read_file()
        start_idx = -1
        for i, line in enumerate(lines):
            if re.search(fr'"id":\s*"{anime_id}"', line):
                start_idx = i
                break
        
        if start_idx == -1:
            return False

        # Find images range within the object
        img_start = img_end = -1
        for i in range(start_idx, len(lines)):
            if re.search(r'"images":\s*\[', lines[i]):
                img_start = i
            if img_start != -1 and ']' in lines[i]:
                img_end = i
                break
            if re.search(r'^\s{4}\},', lines[i]) and img_start == -1:
                break

        if images and img_start != -1 and img_end != -1:
            # Detect indentation from the "images" line
            indent_match = re.match(r'^(\s*)', lines[img_start])
            indent = indent_match.group(1) if indent_match else "        "
            
            new_lines = [f'{indent}"images": [\n']
            for j, img in enumerate(images):
                comma = "," if j < len(images) - 1 else ""
                new_lines.append(f'{indent}    "{img}"{comma}\n')
            new_lines.append(f'{indent}],\n')
            
            lines = lines[:img_start] + new_lines + lines[img_end+1:]
            
            # Adjust index for vignette search
            offset = len(new_lines) - (img_end - img_start + 1)
            img_end += offset

        # Search for vignette starting from after the ID or after the new images block
        search_start = img_end if img_start != -1 else start_idx
        for i in range(search_start, len(lines)):
            if '"vignette":' in lines[i]:
                indent_match = re.match(r'^(\s*)', lines[i])
                indent = indent_match.group(1) if indent_match else "        "
                if vignette:
                    lines[i] = f'{indent}"vignette": "{vignette}"\n'
                break
            if re.search(r'^\s{4}\},', lines[i]):
                break

        self._write_file(lines)
        return True
