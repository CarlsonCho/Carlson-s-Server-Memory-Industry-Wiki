const fs = require('fs');
const file_path = 'C:/Users/santa/ai-server-wiki/index.md';
let content = fs.readFileSync(file_path, 'utf8');

// Using a robust regex to find all bar-box containers and move the tooltip-bubble inside the bar-shape
const regex = /( {16}<div class="bar-box">\r?\n)( {18}<span class="label-val [^"]+"[^>]*>[0-9]+<\/span>\r?\n)( {18}<div class="bar-shape [^"]+" style="height: [^;]+;">)<\/div>\r?\n( {18}<div class="tooltip-bubble">\r?\n)( {20}<div class="tooltip-title-span [^"]+">[\s\S]*?<\/div>\r?\n)( {20}<div class="tooltip-data-row"><span>연도<\/span><span>[\s\S]*?<\/span><\/div>\r?\n)( {20}<div class="tooltip-data-row"><span>시장 규모<\/span><span>[\s\S]*?<\/span><\/div>\r?\n)( {20}<div class="tooltip-data-row"><span>점유율<\/span><span>[\s\S]*?<\/span><\/div>\r?\n)( {18}<\/div>\r?\n)( {16}<\/div>)/g;

let count = 0;
const newContent = content.replace(regex, (match, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10) => {
  count++;
  // Indent tooltip-bubble content by 2 spaces
  const i_g4 = "  " + g4;
  const i_g5 = "  " + g5;
  const i_g6 = "  " + g6;
  const i_g7 = "  " + g7;
  const i_g8 = "  " + g8;
  const i_g9 = "  " + g9;
  
  return g1 + g2 + g3 + "\r\n" + i_g4 + i_g5 + i_g6 + i_g7 + i_g8 + i_g9 + "                  </div>\r\n" + g10;
});

console.log(`Successfully modified ${count} tooltips.`);
fs.writeFileSync(file_path, newContent, 'utf8');
