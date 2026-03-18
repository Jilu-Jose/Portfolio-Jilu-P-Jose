import os
import re

css_dir = r"c:\ProjectsIDE\Portfolio-Jilu-P-Jose\frontend\src"

red_patterns = [
    r"#ff3333", r"#e11d48", r"#ff4747", r"#990011", r"#ee0022",
    r"#ff0033", r"#b30000", r"#ff0022", r"#ff3355", r"#cc0022", r"#880011"
]
pattern = re.compile("|".join(red_patterns), re.IGNORECASE)

def replace_rgba(content):
    content = re.sub(r"rgba\(\s*255\s*,\s*51\s*,\s*51\s*,", r"rgba(255, 0, 85,", content)
    content = re.sub(r"rgba\(\s*225\s*,\s*29\s*,\s*72\s*,", r"rgba(255, 0, 85,", content)
    content = re.sub(r"rgba\(\s*255\s*,\s*0\s*,\s*51\s*,", r"rgba(255, 0, 85,", content)
    return content

for root, dirs, files in os.walk(css_dir):
    for filename in files:
        if filename.endswith(".css"):
            filepath = os.path.join(root, filename)
            with open(filepath, "r", encoding="utf-8") as f:
                content = f.read()
            
            new_content = pattern.sub("#ff0055", content)
            new_content = replace_rgba(new_content)
            
            if new_content != content:
                with open(filepath, "w", encoding="utf-8") as f:
                    f.write(new_content)
                print(f"Updated {filename}")
