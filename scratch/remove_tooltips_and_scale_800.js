const fs = require('fs');
const file_path = 'C:/Users/santa/ai-server-wiki/index.md';
let content = fs.readFileSync(file_path, 'utf8');

// 1. Remove the tooltip CSS rules in the stylesheet
// We can use a regex to match the tooltip CSS block.
// It starts with "/* 인터랙티브 툴팁 말풍선" and ends with the closing brace of ".tooltip-data-row span:last-child"
const cssRegex = /\/\* 인터랙티브 툴팁 말풍선[\s\S]*?\.tooltip-data-row span:last-child \{[\s\S]*?\}\r?\n/g;
content = content.replace(cssRegex, '');

// Also remove .bar-box:hover .label-val rule
const hoverLabelRegex = /\.bar-box:hover \.label-val \{[\s\S]*?\}\r?\n/g;
content = content.replace(hoverLabelRegex, '');

// 2. Define the new Point 2 HTML card (without tooltips, scaled to $800B max)
const newPoint2Html = `<div class="tech-card">
  <div class="tech-card-title">
    <span>📈 Point 2. 글로벌 시장 규모 추이 (Market Size)</span>
  </div>
  <div class="chart-scroll-area">
    <div class="chart-outer-wrapper">
      <div class="chart-legend-row">
        <div class="legend-chip">
          <span class="chip-color chip-general"></span>
          <span>General Server ($B)</span>
        </div>
        <div class="legend-chip">
          <span class="chip-color chip-ai"></span>
          <span>AI Server ($B)</span>
        </div>
      </div>
      <div class="chart-canvas">
        <div class="y-axis-labels">
          <div>$800B</div>
          <div>$600B</div>
          <div>$400B</div>
          <div>$200B</div>
          <div>$0</div>
        </div>
        <div class="chart-plot-container">
          <div class="chart-grid-lines">
            <div class="grid-horizontal-line"></div>
            <div class="grid-horizontal-line"></div>
            <div class="grid-horizontal-line"></div>
            <div class="grid-horizontal-line"></div>
            <div class="grid-horizontal-line" style="border-top-style: solid; border-top-color: rgba(255,255,255,0.15)"></div>
          </div>
          <div class="bars-flex-container">
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">110</span>
                  <div class="bar-shape bar-shape-general" style="height: 13.8%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">45</span>
                  <div class="bar-shape bar-shape-ai" style="height: 5.6%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2023</div>
            </div>
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">115</span>
                  <div class="bar-shape bar-shape-general" style="height: 14.4%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">98</span>
                  <div class="bar-shape bar-shape-ai" style="height: 12.3%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2024</div>
            </div>
            <div class="group-column">
              <div class="bars-pair" style="position: relative;">
                <div class="crossover-label-badge" style="position: absolute; bottom: calc(15.0% + 18px); left: 50%; transform: translateX(-50%); z-index: 5; margin: 0; white-space: nowrap;">Crossover</div>
                <div class="bar-box">
                  <span class="label-val label-val-general">120</span>
                  <div class="bar-shape bar-shape-general" style="height: 15.0%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">150</span>
                  <div class="bar-shape bar-shape-ai" style="height: 15.0%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2025 (E)</div>
            </div>
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">125</span>
                  <div class="bar-shape bar-shape-general" style="height: 15.6%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">210</span>
                  <div class="bar-shape bar-shape-ai" style="height: 26.3%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2026 (E)</div>
            </div>
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">132</span>
                  <div class="bar-shape bar-shape-general" style="height: 16.5%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">280</span>
                  <div class="bar-shape bar-shape-ai" style="height: 35.0%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2027 (E)</div>
            </div>
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">140</span>
                  <div class="bar-shape bar-shape-general" style="height: 17.5%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">360</span>
                  <div class="bar-shape bar-shape-ai" style="height: 45.0%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2028 (E)</div>
            </div>
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">150</span>
                  <div class="bar-shape bar-shape-general" style="height: 18.8%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">450</span>
                  <div class="bar-shape bar-shape-ai" style="height: 56.3%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2029 (E)</div>
            </div>
            <div class="group-column">
              <div class="bars-pair">
                <div class="bar-box">
                  <span class="label-val label-val-general">164</span>
                  <div class="bar-shape bar-shape-general" style="height: 20.5%;"></div>
                </div>
                <div class="bar-box">
                  <span class="label-val label-val-ai">550</span>
                  <div class="bar-shape bar-shape-ai" style="height: 68.8%;"></div>
                </div>
              </div>
              <div class="x-axis-lbl">2030 (E)</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <p style="font-size: 0.9rem; color: #e2e8f0; margin-top: 16px; margin-bottom: 16px; line-height: 1.5;">
    2023년부터 2030년(E)까지의 글로벌 서버 시장 투자 추정치 비교입니다. <strong>2025년을 분기점으로 두 시장 규모가 교차(Crossover)</strong>하는 대전환의 흐름을 확인하실 수 있습니다.
  </p>
  <div class="insight-box">
    <div class="insight-box-title">
      <span>💡 Market Insight</span>
    </div>
    <p class="insight-box-text">
      2024년까지는 일반 서버(Conventional Server)의 시장 규모가 근소한 우위를 점하였으나, 거대 언어 모델(LLM) 및 실시간 추론 연산 수요 증가에 따른 AI 인프라 투자 폭발로 인해 <strong>2025년을 기점으로 AI 서버 시장이 일반 서버 시장을 완전히 추월(Crossover)</strong>합니다. 2030년(E)에 이르러서는 AI 서버 시장이 약 $550B 규모에 육박하며 글로벌 데이터센터 인프라 투자의 절대적 축(약 77%)으로 완벽히 자리 잡을 것입니다.
    </p>
  </div>
</div>`;

// Replace the entire <div class="tech-card"> of Point 2
// The Point 2 card is identified by finding: <span>📈 Point 2. 글로벌 시장 규모 추이 (Market Size)</span>
// We will replace the entire tech-card container wrapping it.
// To do this, let's find the index of "📈 Point 2." and search backwards for '<div class="tech-card">' and forwards for the matching closing '</div>' before '</div> <!-- end of wiki-grid -->'

const marker = '📈 Point 2. 글로벌 시장 규모 추이';
const markerIdx = content.indexOf(marker);
if (markerIdx === -1) {
  console.error("Marker not found!");
  process.exit(1);
}

const cardStartIdx = content.lastIndexOf('<div class="tech-card">', markerIdx);
if (cardStartIdx === -1) {
  console.error("Card start not found!");
  process.exit(1);
}

// Find the corresponding closing </div> of the card.
// The card ends before `</div> <!-- end of wiki-grid -->` or we can find it by tracing nested divs.
// Let's search forwards for the closing </div> of the tech-card.
// Since we know the layout ends before `</div>\n\n</div> <!-- end of wiki-grid -->`
const endSearchStr = '</div>\n\n</div> <!-- end of wiki-grid -->';
let cardEndIdx = content.indexOf(endSearchStr, cardStartIdx);
if (cardEndIdx === -1) {
  // Let's try CRLF version
  const endSearchStrCRLF = '</div>\r\n\r\n</div> <!-- end of wiki-grid -->';
  cardEndIdx = content.indexOf(endSearchStrCRLF, cardStartIdx);
}

if (cardEndIdx === -1) {
  console.error("Card end search string not found!");
  process.exit(1);
}

// Perform replacement
const beforeCard = content.substring(0, cardStartIdx);
const afterCard = content.substring(cardEndIdx); // This starts with `</div>\n\n</div> <!-- end of wiki-grid -->` (we want to keep the closing div of wiki-grid)

const newContent = beforeCard + newPoint2Html + "\n\n" + afterCard;

console.log("Successfully rewrote Point 2 chart HTML and cleaned CSS.");
fs.writeFileSync(file_path, newContent, 'utf8');
