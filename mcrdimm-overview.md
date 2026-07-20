---
title: MCRDIMM Overview
description: 차세대 초고속 MCRDIMM / MRDIMM 서버 메모리 모듈의 기판 구조, MUX 데이터 버퍼(DB) 칩셋 및 12.8 GT/s 동작 원리 분석
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
.comp-card-rcd { border-left-color: #ef4444; }
.comp-card-db { border-left-color: #ec4899; }
.comp-card-pmic { border-left-color: #f59e0b; }
.comp-card-spd { border-left-color: #10b981; }
.comp-card-dram { border-left-color: #3b82f6; }

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
.badge-rcd { background-color: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }
.badge-db { background-color: rgba(236, 72, 153, 0.2); color: #f472b6; border: 1px solid #ec4899; }
.badge-pmic { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }
.badge-spd { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }
.badge-dram { background-color: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid #3b82f6; }

.insight-box {
  background-color: rgba(236, 72, 153, 0.1);
  border-left: 4px solid #ec4899;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
}
.insight-box-title {
  font-weight: bold;
  color: #ec4899;
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

# 🚀 MCRDIMM / MRDIMM Overview (차세대 2배속 서버 메모리)

**MCRDIMM (Multiplexer Combined Ranks DIMM)** 및 **MRDIMM (Multi-Ranked DIMM)** 은 AI 및 HPC(고성능 컴퓨팅) 서버의 대역폭 병목을 극복하기 위해 설계된 차세대 초고속 모듈입니다. 모듈 온보드에 **MCR MUX 데이터 버퍼(DB)** 칩을 탑재하여 2개의 랭크(Rank)를 동시 병렬 액세스함으로써, 대역폭을 기존 RDIMM 대비 **2배(8.8 GT/s ~ 12.8 GT/s, 최대 128 GB/s)** 로 끌어올립니다.

---

## 🛠️ Section 1. MCRDIMM PCB 물리 토폴로지 다이어그램

아래 다이어그램은 **MCRDIMM / MRDIMM** 기판 상의 MUX 데이터 버퍼(DB0~DB9) 칩셋 및 듀얼 랭크 DRAM 배치를 표현한 물리 구조도입니다.

<div class="rdimm-board-container">
<div class="board-title">🟩 MCRDIMM / MRDIMM PCB 물리 토폴로지 (Board Topology)</div>
<div class="board-subtitle">※ 2개 랭크(Rank 0/1) 동시 액세스를 위한 10개 MUX 데이터 버퍼(DB) + MCR RCD 배치</div>

<svg viewBox="0 0 1000 440" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #2d0617; border: 2px solid #be185d;">
<rect x="20" y="20" width="960" height="320" rx="12" fill="#4c0519" stroke="#f43f5e" stroke-width="2.5"/>

<!-- Sub-Channel A Boundary -->
<rect x="40" y="35" width="420" height="290" rx="8" fill="rgba(244, 63, 94, 0.08)" stroke="rgba(244, 63, 94, 0.3)" stroke-dasharray="4 4"/>
<text x="55" y="55" fill="#f472b6" font-size="12" font-weight="bold">🔹 Sub-Channel A (Rank 0 + Rank 1 MUX)</text>

<!-- Sub-Channel B Boundary -->
<rect x="540" y="35" width="420" height="290" rx="8" fill="rgba(244, 63, 94, 0.08)" stroke="rgba(244, 63, 94, 0.3)" stroke-dasharray="4 4"/>
<text x="555" y="55" fill="#f472b6" font-size="12" font-weight="bold">🔹 Sub-Channel B (Rank 0 + Rank 1 MUX)</text>

<!-- Gold Finger Edge Connector -->
<g fill="#d97706" stroke="#b45309" stroke-width="1">
<rect x="50" y="350" width="420" height="40" rx="3" fill="#f59e0b"/>
<rect x="530" y="350" width="420" height="40" rx="3" fill="#f59e0b"/>
<rect x="475" y="350" width="50" height="25" fill="#0b1329" stroke="none"/>
</g>
<text x="500" y="415" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">288-Pin MCR High-Speed Gold Finger (8.8 ~ 12.8 GT/s)</text>

<!-- 1. MCR RCD Chip -->
<g>
<rect x="430" y="185" width="140" height="80" rx="8" fill="#991b1b" stroke="#ef4444" stroke-width="3"/>
<text x="500" y="232" fill="#ffffff" font-size="18" font-weight="bold" text-anchor="middle">MCR RCD</text>
</g>

<!-- 2. PMIC -->
<g>
<rect x="440" y="45" width="120" height="65" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="2.5"/>
<text x="500" y="84" fill="#ffffff" font-size="17" font-weight="bold" text-anchor="middle">PMIC</text>
</g>

<!-- 3. SPD Hub -->
<g>
<rect x="300" y="55" width="95" height="50" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
<text x="347" y="86" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">SPD Hub</text>
</g>

<!-- 4. Thermal Sensors TS0 / TS1 -->
<g>
<rect x="50" y="60" width="50" height="40" rx="4" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<text x="75" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">TS0</text>
</g>
<g>
<rect x="900" y="60" width="50" height="40" rx="4" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<text x="925" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">TS1</text>
</g>

<!-- 5. MUX Data Buffers (DB Array - Pink chips near Gold Finger) -->
<g fill="#831843" stroke="#f472b6" stroke-width="2">
<rect x="65" y="280" width="50" height="30" rx="3"/>
<rect x="135" y="280" width="50" height="30" rx="3"/>
<rect x="205" y="280" width="50" height="30" rx="3"/>
<rect x="275" y="280" width="50" height="30" rx="3"/>
<rect x="345" y="280" width="50" height="30" rx="3"/>

<rect x="605" y="280" width="50" height="30" rx="3"/>
<rect x="675" y="280" width="50" height="30" rx="3"/>
<rect x="745" y="280" width="50" height="30" rx="3"/>
<rect x="815" y="280" width="50" height="30" rx="3"/>
<rect x="885" y="280" width="50" height="30" rx="3"/>
</g>

<text x="90" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB0</text>
<text x="160" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB1</text>
<text x="230" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB2</text>
<text x="300" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB3</text>
<text x="370" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB4</text>
<text x="630" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB5</text>
<text x="700" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB6</text>
<text x="770" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB7</text>
<text x="840" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB8</text>
<text x="910" y="300" fill="#fbcfe8" font-size="10" font-weight="bold" text-anchor="middle">DB9</text>

<!-- 6. Dual-Rank DRAM IC Array (Rank 0 + Rank 1 Staked) -->
<g fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5">
<rect x="60" y="130" width="60" height="130" rx="4"/>
<rect x="130" y="130" width="60" height="130" rx="4"/>
<rect x="200" y="130" width="60" height="130" rx="4"/>
<rect x="270" y="130" width="60" height="130" rx="4"/>
<rect x="340" y="130" width="60" height="130" rx="4" fill="#1e1b4b" stroke="#818cf8"/>

<rect x="600" y="130" width="60" height="130" rx="4" fill="#1e1b4b" stroke="#818cf8"/>
<rect x="670" y="130" width="60" height="130" rx="4"/>
<rect x="740" y="130" width="60" height="130" rx="4"/>
<rect x="810" y="130" width="60" height="130" rx="4"/>
<rect x="880" y="130" width="60" height="130" rx="4"/>
</g>

<text x="90" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="160" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="230" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="300" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="370" y="195" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">ECC IC</text>

<text x="630" y="195" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">ECC IC</text>
<text x="700" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="770" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="840" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="910" y="195" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
</svg>

<div class="legend-chip-bar">
<div>🔴 <strong>MCR RCD</strong></div>
<div>🌸 <strong>MUX DB (Data Buffer DB0~9)</strong></div>
<div>🟡 <strong>PMIC</strong></div>
<div>🟢 <strong>SPD Hub</strong></div>
<div>🟣 <strong>TS0 / TS1</strong></div>
<div>🔵 <strong>Dual-Rank DRAM & ECC IC</strong></div>
</div>
</div>

---

## ⚡ Section 2. MCRDIMM 소자별 역할 및 2배속 대역폭 동작 원리

<div class="comp-card-grid">

  <div class="comp-card comp-card-db">
    <div class="comp-header">
      <span class="badge badge-db">MCR 핵심 기술</span>
      <span>1. MUX Data Buffer (DB0 ~ DB9)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>핵심 역할:</strong> 2개 랭크(Rank 0 및 Rank 1)의 DRAM 데이터를 **동시에 수신하여 믹싱/다중화(Multiplexing)** 한 후 CPU memory controller로 2배 속도로 전달합니다.<br/>
      • <strong>대역폭 2배의 원리:</strong> 각 랭크가 4.4 GT/s 또는 6.4 GT/s로 각각 전송하는 데이터를 DB 칩이 인터리빙 병합하여 **8.8 GT/s ~ 12.8 GT/s** 초고속 신호로 변환합니다.
    </p>
  </div>

  <div class="comp-card comp-card-rcd">
    <div class="comp-header">
      <span class="badge badge-rcd">제어 칩셋</span>
      <span>2. MCR RCD (Registering Clock Driver)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>핵심 역할:</strong> CPU로부터 고속 커맨드/주소 신호를 수신하여 2개 랭크의 DRAM 및 10개 MUX DB 칩의 동기화 멀티플렉싱 타이밍을 정밀 제어합니다.
    </p>
  </div>

  <div class="comp-card comp-card-pmic">
    <div class="comp-header">
      <span class="badge badge-pmic">전력 관리</span>
      <span>3. PMIC / SPD Hub / TS0, TS1</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • 12V ➔ 1.1V 온보드 전력 변환 및 초고속 연산 시 발생하는 발열을 모니터링하여 인텔 Xeon / AMD EPYC AI 서버 플랫폼과 유기적으로 동기화됩니다.
    </p>
  </div>

</div>

<div class="insight-box">
  <div class="insight-box-title">💡 RDIMM vs MCRDIMM 비교 Insight</div>
  <div class="insight-box-text">
    • 표준 <strong>RDIMM</strong>은 한번에 1개 랭크만 데이터 버스를 점유(4.8~8.0 GT/s)하지만, <strong>MCRDIMM / MRDIMM</strong>은 10개의 MUX DB 칩이 2개 랭크의 데이터를 동시에 퍼올려 처리하므로 동일 소켓 구조에서 <strong>전송 속도가 8.8 ~ 12.8 GT/s로 2배 극대화</strong>됩니다.
  </div>
</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**
