---
layout: home
hero:
  name: "Carlson's Server Industry Wiki"
  tagline: "글로벌 서버 아키텍처 및 차세대 AI 가속기 기술 분석 위키"
  actions:
    - theme: brand
      text: "⚡ AI Server Overview"
      link: /ai-server-overview
    - theme: brand
      text: "⚙️ General Server Overview"
      link: /general-server-overview
    - theme: brand
      text: "💾 Memory Overview"
      link: /memory-overview
---

<div class="wiki-container">


<!-- =========================================
     서버 부문별 개요 진입 포털
     ========================================= -->
<div class="section-header">
<span>🧭 서버 인프라 부문별 개요 (Overview Portal)</span>
</div>
<div class="portal-grid" style="grid-template-columns: repeat(3, 1fr) !important;">
<a href="/ai-server-overview" class="portal-card" style="border-color: rgba(57, 255, 20, 0.2);">
<div class="portal-card-header">
<span class="portal-card-icon">⚡</span>
<span class="portal-card-title">AI Server Overview</span>
</div>
<p class="portal-card-description">
인공지능 학습 및 추론을 위한 가속기(GPU/NPU) 기반 서버 플랫폼. 가속기 시장 점유율, 2023-2030 시장 규모 분석, 대표 플레이어 로드맵 및 물리 아키텍처 정보 수록.
</p>
<div class="portal-card-footer" style="color: var(--color-ai-green);">
<span>AI 서버 개요 열기</span>
<span>→</span>
</div>
</a>

<a href="/general-server-overview" class="portal-card" style="border-color: rgba(57, 255, 20, 0.2);">
<div class="portal-card-header">
<span class="portal-card-icon">⚙️</span>
<span class="portal-card-title">General Server Overview</span>
</div>
<p class="portal-card-description">
기존 데이터센터 및 클라우드 연산을 위한 범용 CPU 기반 서버 플랫폼. CPU 프로세서 시장 점유율, 2023-2030 시장 규모 분석, 로드맵 및 하드웨어 구성 요소 수록.
</p>
<div class="portal-card-footer" style="color: var(--color-ai-green);">
<span>일반 서버 개요 열기</span>
<span>→</span>
</div>
</a>

<a href="/memory-overview" class="portal-card" style="border-color: rgba(56, 189, 248, 0.3);">
<div class="portal-card-header">
<span class="portal-card-icon">💾</span>
<span class="portal-card-title">Memory Overview</span>
</div>
<p class="portal-card-description">
글로벌 DRAM 및 NAND Flash 메모리 시장 점유율, 2023-2030 시장 규모 성장률(CAGR), 주요 제조사별(삼성, SK하이닉스, 마이크론 등) 선단 공정 및 HBM4 로드맵 수록.
</p>
<div class="portal-card-footer" style="color: #38bdf8;">
<span>메모리 개요 열기</span>
<span>→</span>
</div>
</a>
</div>

<!-- =========================================
     아키텍처 비교 및 시장 분석 테이블/차트
     ========================================= -->
<div class="section-header">
<span>📊 인프라 비교 및 글로벌 시장 추이</span>
</div>

<div class="wiki-grid">

<!-- Point 1. AI Server vs General Server 아키텍처 비교 -->
<div class="tech-card">
<div class="tech-card-title">
<span>📊 AI Server vs General Server 차이점</span>
</div>
<p style="font-size: 0.9rem; color: #cbd5e1; margin-top: -10px; margin-bottom: 16px; line-height: 1.5;">
일반 서버와 AI 서버는 아키텍처 관점에서 완전히 다른 병목 극복 구조와 연산 장치를 채택하고 있습니다. 아래 표는 두 플랫폼 간의 핵심적인 하드웨어 설계 차이점을 비교합니다.
</p>
<table>
<thead>
<tr>
<th style="text-align: left;">분류</th>
<th style="text-align: left;">일반 서버 (General Server)</th>
<th style="text-align: left;">AI 서버 (AI Server)</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>주연산 장치</strong></td>
<td><strong>CPU</strong> 중심 (Xeon, EPYC 등)</td>
<td><strong>GPU / NPU</strong> 중심 (Blackwell, Instinct 등)</td>
</tr>
<tr>
<td><strong>연산 방식</strong></td>
<td>고성능 연산 중심, <strong>직렬 처리</strong> (논리 제어)</td>
<td>수만 개 코어 활용, <strong>초대규모 병렬 처리</strong></td>
</tr>
<tr>
<td><strong>메모리</strong></td>
<td>범용 DDR5 RAM (고용량, 중대역폭)</td>
<td><strong>HBM (고대역폭 메모리)</strong> 필수 탑재</td>
</tr>
<tr>
<td><strong>상호 연결</strong></td>
<td>범용 PCIe 버스 아키텍처 (대역폭 제한)</td>
<td>초고속 상호 연결 전용 버스 (<strong>NVLink</strong> 등)</td>
</tr>
<tr>
<td><strong>전력 및 냉각</strong></td>
<td>서버당 500W ~ 1kW / **공랭** 위주</td>
<td>서버당 4kW ~ 10kW 이상 / **수랭** 필수</td>
</tr>
<tr>
<td><strong>대당 가격</strong></td>
<td>수백만 원 ~ 수천만 원 선</td>
<td>최소 3억 ~ 5억 원 이상 (인프라 랙 단위 수십억)</td>
</tr>
</tbody>
</table>
</div>

<!-- Point 2. 시장 규모 비교 차트 (Market Size) -->
<div class="tech-card">
<div class="tech-card-title">
<span>📈 글로벌 서버 시장 규모 추이 ($B)</span>
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
<div>$600B</div>
<div>$450B</div>
<div>$300B</div>
<div>$150B</div>
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
<div class="crossover-label-badge" style="position: absolute; bottom: calc(18.8% + 18px); left: 50%; transform: translateX(-50%); z-index: 5; margin: 0; white-space: nowrap;">Crossover</div>
<div class="bar-box">
<span class="label-val label-val-general">120</span>
<div class="bar-shape bar-shape-general" style="height: 15.0%;"></div>
</div>
<div class="bar-box">
<span class="label-val label-val-ai">150</span>
<div class="bar-shape bar-shape-ai" style="height: 18.8%;"></div>
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
<p style="font-size: 0.9rem; color: #cbd5e1; margin-top: 16px; margin-bottom: 16px; line-height: 1.5;">
2023년부터 2030년(E)까지의 글로벌 서버 시장 투자 추정치 비교입니다. <strong>2025년을 분기점으로 두 시장 규모가 교차(Crossover)</strong>하는 대전환의 흐름을 확인하실 수 있습니다.
</p>
<div class="insight-box">
<div class="insight-box-title">
<span>💡 Market Insight</span>
</div>
<p class="insight-box-text">
거대 언어 모델(LLM) 및 실시간 추론 연산 수요 증가에 따른 AI 인프라 투자 폭발로 인해 <strong>2025년을 기점으로 AI 서버 시장이 일반 서버 시장을 완전히 추월(Crossover)</strong>합니다. 2030년(E)에 이르러서는 AI 서버 시장이 약 $550B 규모에 육박하며 글로벌 데이터센터 인프라 투자의 절대적 축(약 77%)으로 완벽히 자리 잡을 것입니다.
</p>
</div>
</div>

</div> <!-- end of wiki-grid -->

</div>
