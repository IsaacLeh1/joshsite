#!/usr/bin/env python3
import re
import json

# Read the file
with open('careers.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Find database boundaries
start = content.find('const careersDatabase = {')
end = content.rfind('};')

if start == -1 or end == -1:
    print("ERROR: Could not find database boundaries")
    exit(1)

before = content[:start]
after = content[end+2:]
db_str = content[start+len('const careersDatabase = '):end+1]

# Extract all category blocks with regex
pattern = r'(\w+):\s*\[([\s\S]*?)\](?=\s*[,}])'

# Build a map of categories to their matches
category_blocks = {}
for match in re.finditer(pattern, db_str):
    cat_name = match.group(1)
    cat_content = match.group(2)
    
    if cat_name not in category_blocks:
        category_blocks[cat_name] = []
    
    category_blocks[cat_name].append({
        'position': match.start(),
        'content': cat_content
    })

# Show duplicates
print(f"Total unique categories: {len(category_blocks)}")
print("\nDuplicate categories:")
for cat, blocks in sorted(category_blocks.items()):
    if len(blocks) > 1:
        print(f"  {cat}: {len(blocks)} times")

# Find which categories are duplicated
dupes = {k: v for k, v in category_blocks.items() if len(v) > 1}
print(f"\n{len(dupes)} duplicate categories to merge")

# We need to rebuild the database by removing all category blocks and then re-adding them in order
# First, let's extract just the raw database without all the whitespace issues

# Strategy: Parse out each category block, keep the first occurrence, remove subsequent ones
print("\nRemoving duplicate category blocks...")

# Sort by position (highest first) so we can remove from the end without affecting positions
all_matches = []
for match in re.finditer(pattern, db_str):
    all_matches.append({
        'cat': match.group(1),
        'start': match.start(),
        'end': match.end(),
        'content': match.group(2)
    })

# Group by category and keep track of which to remove
seen = set()
to_remove = []
to_keep = {}

for match in all_matches:
    cat = match['cat']
    if cat not in seen:
        seen.add(cat)
        to_keep[cat] = match
    else:
        to_remove.append(match)

print(f"Keeping {len(to_keep)} categories, removing {len(to_remove)} duplicate blocks")

# Sort removals by position (highest first)
to_remove.sort(key=lambda x: x['start'], reverse=True)

# Remove duplicate blocks from db_str
new_db_str = db_str
for removal in to_remove:
    new_db_str = new_db_str[:removal['start']] + new_db_str[removal['end']:]
    # Also remove trailing comma if present
    if new_db_str[removal['start']-1:removal['start']] == ',':
        new_db_str = new_db_str[:removal['start']-1] + new_db_str[removal['start']:]

# Clean up any double commas
new_db_str = re.sub(r',\s*,', ',', new_db_str)
new_db_str = re.sub(r',\s*([}\]])', r'\1', new_db_str)

# Rebuild the file
new_content = before + 'const careersDatabase = ' + new_db_str + after

# Validate it's still valid JavaScript
if new_content.count('{') != new_content.count('}') or new_content.count('[') != new_content.count(']'):
    print("ERROR: Bracket mismatch in result!")
    open_braces = new_content.count('{')
    close_braces = new_content.count('}')
    open_brackets = new_content.count('[')
    close_brackets = new_content.count(']')
    print(f"  Braces: open = {open_braces}, close = {close_braces}")
    print(f"  Brackets: open = {open_brackets}, close = {close_brackets}")
    exit(1)

# Write back
with open('careers.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("\n✓ File updated successfully!")
print(f"New file size: {len(new_content)} characters")

# Verify
with open('careers.js', 'r', encoding='utf-8') as f:
    verify = f.read()
    
# Count categories in new file
new_cats = re.findall(r'(\w+):\s*\[', verify)
from collections import Counter
counts = Counter(new_cats)
dupes_left = {k: v for k, v in counts.items() if v > 1}

if dupes_left:
    print(f"\n⚠ WARNING: Still have duplicate categories: {dupes_left}")
else:
    print("\n✓ No more duplicate categories!")
    print(f"✓ Total {len(counts)} unique categories")
