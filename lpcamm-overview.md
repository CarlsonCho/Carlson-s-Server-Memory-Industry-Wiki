---
title: LPCAMM2 Overview
description: 차세대 PC/노트북용 LPCAMM2 (Low Power Compression Attached Memory Module) 아키텍처 및 LPDDR5X/6 기반 모듈 분석
---

<style>
.rdimm-board-container {
  background-color: #0b1329;
  border: 2px solid #1e293b;
  border-radius: 14px;
  padding: 24px;
  margin: 30px 0;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
}
.board-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: bold;
  color: #38bdf8;
  margin-bottom: 6px;
}
.board-subtitle {
  text-align: center;
  font-size: 0.88rem;
  color: #94a3b8;
  margin-bottom: 22px;
}
.comp-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 20px;
  margin: 30px 0;
}
.comp-card {
  background-color: #1e293b;
  border-left: 4px solid #38bdf8;
  border-radius: 0 10px 10px 0;
  padding: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}
.comp-card-lpcamm { border-left-color: #38bdf8; }
.comp-card-jedec { border-left-color: #10b981; }

.comp-header {
  font-size: 1.05rem;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.badge {
  font-size: 0.75rem;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: bold;
}
.badge-lpcamm { background-color: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid #38bdf8; }
.badge-jedec { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }

.insight-box {
  background-color: rgba(56, 189, 248, 0.1);
  border-left: 4px solid #38bdf8;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
}
.insight-box-title {
  font-weight: bold;
  color: #38bdf8;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.insight-box-text {
  font-size: 0.92rem;
  color: #cbd5e1;
  margin: 0;
  line-height: 1.6;
}
.legend-chip-bar {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #334155;
  font-size: 0.82rem;
  color: #cbd5e1;
}
</style>

# 💻 LPCAMM2 Overview (PC / 노트북용 차세대 LPDDR 모듈)

**LPCAMM2 (Low Power Compression Attached Memory Module)** 는 JEDEC(국제반도체표준협의기구)에서 표준화한 **클라이언트 PC, 프리미엄 AI 노트북 및 모바일 워크스테이션용 차세대 착탈식 메모리 모듈**입니다. 기존 PC용 SODIMM 대비 **보드 면적을 64% 절감**하고 **전력 효율을 61% 대폭 개선**하면서도 128-bit 단일 모듈 듀얼 채널 구성을 제공합니다.

---

## 🛠️ Section 1. LPCAMM2 모듈 PCB 물리 토폴로지 다이어그램

아래 다이어그램은 **JEDEC 표준 LPCAMM2 규격**에 따른 모듈 기판 상의 **LPDDR5X/6 칩셋**, LP PMIC, SPD Hub 및 **LGA 압착 그리드(Compression Connector)** 구조도입니다.

<div class="rdimm-board-container">
<div class="board-title">🟩 JEDEC LPCAMM2 PCB 물리 토폴로지 (Board Topology)</div>
<div class="board-subtitle">※ 클라이언트 PC / 노트북 메인보드 밀착형 128-bit 듀얼 채널 LPCAMM2 레이아웃</div>

<svg viewBox="0 0 1000 420" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #0f172a; border: 2px solid #38bdf8;">

<!-- Substrate Base -->
<rect x="150" y="30" width="700" height="340" rx="16" fill="#1e293b" stroke="#38bdf8" stroke-width="2.5"/>

<!-- Top Mounting Screw Holes -->
<circle cx="200" cy="70" r="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
<circle cx="800" cy="70" r="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>

<!-- Center LGA Compression Connector Grid (Bottom Land Contact Pads) -->
<rect x="350" y="240" width="300" height="100" rx="8" fill="#0369a1" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 4"/>
<text x="500" y="295" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">JEDEC Compression Connector (Pin-less Contact Grid)</text>

<!-- 1. LPDDR5X BGA Chips Array (4 Packages for 128-bit Dual Channel) -->
<g fill="#0c4a6e" stroke="#38bdf8" stroke-width="2">
<rect x="220" y="110" width="110" height="110" rx="6"/>
<rect x="360" y="110" width="110" height="110" rx="6"/>
<rect x="530" y="110" width="110" height="110" rx="6"/>
<rect x="670" y="110" width="110" height="110" rx="6"/>
</g>

<text x="275" y="170" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="415" y="170" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="585" y="170" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="725" y="170" fill="#bae6fd" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>

<!-- 2. Low-Power PMIC (Center Top) -->
<g>
<rect x="445" y="50" width="110" height="45" rx="5" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
<text x="500" y="78" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">LP PMIC</text>
</g>

<!-- 3. SPD Hub -->
<g>
<rect x="300" y="50" width="85" height="40" rx="4" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
<text x="342" y="75" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">SPD Hub</text>
</g>

</svg>

<div class="legend-chip-bar">
<div>🔵 <strong>LPCAMM2 PCB:</strong> JEDEC 표준 PC/노트북용 차세대 모듈</div>
<div>💠 <strong>LPDDR5X / LPDDR6:</strong> 8.5 ~ 9.6 GT/s 초고속 저전력 메모리</div>
<div>🟡 <strong>LP PMIC:</strong> 온보드 저전력 전력 관리 IC</div>
<div>🟧 <strong>Compression Connector:</strong> 나사 체결 압착식 소켓 커넥터</div>
</div>
</div>

---

## ⚡ Section 2. LPCAMM2 핵심 장점 및 PC 시장 패러다임 변화

<div class="comp-card-grid">

  <div class="comp-card comp-card-lpcamm">
    <div class="comp-header">
      <span class="badge badge-lpcamm">SODIMM 대체</span>
      <span>1. PC 시장의 혁신적 폼팩터</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>단일 모듈로 128-bit 듀얼채널:</strong> 기존 SODIMM은 2개를 장착해야 128-bit 듀얼 채널이 구성되었으나, LPCAMM2는 **단 1개의 모듈만으로 128-bit 듀얼 채널을 완성**합니다.<br/>
      • <strong>탈부착 가능:</strong> 기존 LPDDR이 메인보드에 온보드 수동 납땜되어 용량 업그레이드가 불가능했던 한계를 완전히 극복했습니다.
    </p>
  </div>

  <div class="comp-card comp-card-jedec">
    <div class="comp-header">
      <span class="badge badge-jedec">전력 & 공간 절감</span>
      <span>2. 전력 61% 절감 & 두께 감소</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • 기존 SODIMM 대비 **기판 면적 64% 절감**, **대기 전력 및 동작 전력 61% 절감**으로 AI 노트북의 배터리 사용 시간을 크게 늘려줍니다.
    </p>
  </div>

</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**
