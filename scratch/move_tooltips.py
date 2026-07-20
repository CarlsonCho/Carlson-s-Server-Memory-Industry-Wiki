import re

file_path = 'C:/Users/santa/ai-server-wiki/index.md'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# We can search for each bar-box block and rewrite it.
# Let's find all occurrences of:
# <div class="bar-box">
#   <span class="label-val ...">...</span>
#   <div class="bar-shape ..." style="height: ...;"></div>
#   <div class="tooltip-bubble">
#     ...
#   </div>
# </div>

# Let's write a regex that matches the entire bar-box block and shifts the tooltip inside.
# Indentation inside bar-box is:
# - bar-box: 16 spaces
# - label-val: 18 spaces
# - bar-shape: 18 spaces
# - tooltip-bubble: 18 spaces
#   - tooltip contents: 20 spaces
#   - tooltip closing: 18 spaces
# - bar-box closing: 16 spaces

pattern = re.compile(
    r'( {16}<div class="bar-box">)\n'
    r'( {18}<span class="label-val [^"]+"[^>]*>[0-9]+</span>)\n'
    r'( {18}<div class="bar-shape [^"]+" style="height: [^;]+;">)</div>\n'
    r'( {18}<div class="tooltip-bubble">)\n'
    r'( {20}<div class="tooltip-title-span [^"]+">[^<]+</div>)\n'
    r'( {20}<div class="tooltip-data-row"><span>연도</span><span>[^<]+</span></div>)\n'
    r'( {20}<div class="tooltip-data-row"><span>시장 규모</span><span>[^<]+</span></div>)\n'
    r'( {20}<div class="tooltip-data-row"><span>점유율</span><span>[^<]+</span></div>)\n'
    r'( {18}</div>)\n'
    r'( {16}</div>)'
)

def replace_match(match):
    # Match groups:
    # 1: <div class="bar-box">
    # 2: <span class="label-val ...">...</span>
    # 3: <div class="bar-shape ..." style="height: ...;">
    # 4: <div class="tooltip-bubble">
    # 5-8: inner lines
    # 9: </div> (tooltip)
    # 10: </div> (bar-box)
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10 = match.groups()
    
    # We want:
    # bar-box
    #   label-val
    #   bar-shape
    #     tooltip-bubble
    #       inner lines (indented +2 spaces)
    #     tooltip closing (indented +2 spaces)
    #   bar-shape closing
    # bar-box closing
    
    # Let's indent tooltip lines by 2 spaces
    i_g4 = "  " + g4
    i_g5 = "  " + g5
    i_g6 = "  " + g6
    i_g7 = "  " + g7
    i_g8 = "  " + g8
    i_g9 = "  " + g9
    
    result = (
        f"{g1}\n"
        f"{g2}\n"
        f"{g3}\n"
        f"{i_g4}\n"
        f"{i_g5}\n"
        f"{i_g6}\n"
        f"{i_g7}\n"
        f"{i_g8}\n"
        f"{i_g9}\n"
        f"{" " * 18}</div>\n"
        f"{g10}"
    )
    return result

new_content, count = pattern.subn(replace_match, content)
print(f"Successfully modified {count} tooltips.")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(new_content)
