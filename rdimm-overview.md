---
title: RDIMM Overview
description: Rambus DDR5 Server DIMM Chipset 아키텍처 기반 DDR5 Registered DIMM(RDIMM) PCB 물리 구성도, 핵심 반도체 소자(RCD, PMIC, SPD Hub, TS) 및 신호/전력 시스템 분석
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
.comp-card-pmic { border-left-color: #f59e0b; }
.comp-card-spd { border-left-color: #10b981; }
.comp-card-dram { border-left-color: #3b82f6; }
.comp-card-ts { border-left-color: #a855f7; }

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
.badge-pmic { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }
.badge-spd { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }
.badge-dram { background-color: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid #3b82f6; }
.badge-ts { background-color: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid #a855f7; }

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

# 🖥️ Registered DIMM (RDIMM) 구조 및 소자 구성 분석

**RDIMM (Registered Dual In-line Memory Module)** 은 글로벌 반도체 데이터센터 인프라의 핵심 메인 메모리 표준입니다. Rambus, 삼성전자, SK하이닉스 등의 차세대 서버 칩셋 아키텍처에 따르면, DDR5 RDIMM은 단순 DRAM 칩 나열을 넘어 **RCD(Registering Clock Driver)**, **PMIC(전력 관리 IC)**, **SPD Hub**, **온도 센서(TS)** 및 독립된 듀얼 32-bit 서브채널(Sub-channel A/B) 구조를 정밀하게 탑재하고 있습니다.

---

## 🛠️ Section 1. Rambus 레퍼런스 기반 DDR5 RDIMM PCB 물리 구성도

아래 다이어그램은 **Rambus DDR5 Server DIMM Chipset** 아키텍처 규격을 기반으로 작성된 **JEDEC 표준 DDR5 RDIMM (288-pin)** 기판(PCB)의 수평 반도체 물리 실물 레이아웃입니다.

<div class="rdimm-board-container">
<div class="board-title">🟩 DDR5 Server RDIMM PCB 물리 토폴로지 (Board Topology)</div>
<div class="board-subtitle">※ 듀얼 서브채널 (Sub-Channel A/B) 및 주요 칩셋 (RCD, PMIC, SPD Hub, TS0, TS1) 배치</div>

<svg viewBox="0 0 1000 440" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #042f2e; border: 2px solid #0d9488;">
<!-- Outer PCB Substrate Base -->
<rect x="20" y="20" width="960" height="320" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>

<!-- Sub-channel Area Background Boundaries -->
<!-- Sub-Channel A (Left) -->
<rect x="40" y="35" width="420" height="290" rx="8" fill="rgba(14, 116, 144, 0.12)" stroke="rgba(14, 116, 144, 0.4)" stroke-dasharray="4 4"/>
<text x="55" y="55" fill="#38bdf8" font-size="12" font-weight="bold">🔹 Sub-Channel A</text>

<!-- Sub-Channel B (Right) -->
<rect x="540" y="35" width="420" height="290" rx="8" fill="rgba(14, 116, 144, 0.12)" stroke="rgba(14, 116, 144, 0.4)" stroke-dasharray="4 4"/>
<text x="555" y="55" fill="#38bdf8" font-size="12" font-weight="bold">🔹 Sub-Channel B</text>

<!-- Gold Finger Edge Connector (Bottom 288-pin) -->
<g fill="#d97706" stroke="#b45309" stroke-width="1">
<rect x="50" y="350" width="420" height="40" rx="3" fill="#f59e0b"/>
<rect x="530" y="350" width="420" height="40" rx="3" fill="#f59e0b"/>
<!-- Key Notch (Center) -->
<rect x="475" y="350" width="50" height="25" fill="#0b1329" stroke="none"/>
</g>
<text x="500" y="415" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">288-Pin Gold Finger</text>

<!-- 1. RCD (Center Registering Clock Driver) -->
<g>
<rect x="430" y="185" width="140" height="80" rx="8" fill="#991b1b" stroke="#ef4444" stroke-width="3"/>
<text x="500" y="232" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">RCD</text>
</g>

<!-- Signal Bus Traces (RCD to DRAM & Gold Finger) -->
<path d="M 500 350 L 500 265" stroke="#ef4444" stroke-width="3" stroke-dasharray="3 3"/>
<path d="M 430 225 L 375 225" stroke="#ef4444" stroke-width="2"/>
<path d="M 570 225 L 625 225" stroke="#ef4444" stroke-width="2"/>

<!-- 2. PMIC (Power Management IC - Top Center) -->
<g>
<rect x="440" y="45" width="120" height="65" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="2.5"/>
<text x="500" y="84" fill="#ffffff" font-size="17" font-weight="bold" text-anchor="middle">PMIC</text>
</g>
<!-- Power Inductors & Capacitors Bank around PMIC -->
<rect x="422" y="70" width="12" height="25" rx="2" fill="#451a03" stroke="#d97706"/>
<text x="428" y="86" fill="#fde68a" font-size="8" text-anchor="middle">L1</text>
<rect x="566" y="70" width="12" height="25" rx="2" fill="#451a03" stroke="#d97706"/>
<text x="572" y="86" fill="#fde68a" font-size="8" text-anchor="middle">L2</text>

<!-- 3. SPD Hub (Top Left of PMIC) -->
<g>
<rect x="300" y="55" width="95" height="50" rx="5" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
<text x="347" y="86" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">SPD Hub</text>
</g>

<!-- 4. Sideband Thermal Sensors TS0 (Far Left) & TS1 (Far Right) -->
<g>
<rect x="50" y="60" width="50" height="40" rx="4" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<text x="75" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">TS0</text>
</g>
<g>
<rect x="900" y="60" width="50" height="40" rx="4" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<text x="925" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">TS1</text>
</g>

<!-- 5. Sub-channel A DRAM IC Array (4 Data DRAM + 1 Sideband ECC DRAM) -->
<g fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5">
<rect x="60" y="160" width="60" height="130" rx="4"/>
<rect x="130" y="160" width="60" height="130" rx="4"/>
<rect x="200" y="160" width="60" height="130" rx="4"/>
<rect x="270" y="160" width="60" height="130" rx="4"/>
<rect x="340" y="160" width="60" height="130" rx="4" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
</g>

<text x="90" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="160" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="230" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="300" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="370" y="230" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">ECC IC</text>

<!-- 6. Sub-channel B DRAM IC Array (1 Sideband ECC DRAM + 4 Data DRAM) -->
<g fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5">
<rect x="600" y="160" width="60" height="130" rx="4" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
<rect x="670" y="160" width="60" height="130" rx="4"/>
<rect x="740" y="160" width="60" height="130" rx="4"/>
<rect x="810" y="160" width="60" height="130" rx="4"/>
<rect x="880" y="160" width="60" height="130" rx="4"/>
</g>

<text x="630" y="230" fill="#c7d2fe" font-size="11" font-weight="bold" text-anchor="middle">ECC IC</text>
<text x="700" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="770" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="840" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="910" y="230" fill="#93c5fd" font-size="11" font-weight="bold" text-anchor="middle">DRAM</text>

<!-- MLCC Decoupling Capacitor Array lines -->
<g fill="#94a3b8">
<rect x="80" y="300" width="20" height="6" rx="1"/>
<rect x="150" y="300" width="20" height="6" rx="1"/>
<rect x="220" y="300" width="20" height="6" rx="1"/>
<rect x="290" y="300" width="20" height="6" rx="1"/>
<rect x="360" y="300" width="20" height="6" rx="1"/>
<rect x="620" y="300" width="20" height="6" rx="1"/>
<rect x="690" y="300" width="20" height="6" rx="1"/>
<rect x="760" y="300" width="20" height="6" rx="1"/>
<rect x="830" y="300" width="20" height="6" rx="1"/>
<rect x="900" y="300" width="20" height="6" rx="1"/>
</g>
</svg>

<div class="legend-chip-bar">
<div>🔴 <strong>RCD</strong></div>
<div>🟡 <strong>PMIC</strong></div>
<div>🟢 <strong>SPD Hub</strong></div>
<div>🟣 <strong>TS0 / TS1</strong></div>
<div>🔵 <strong>DRAM & ECC IC</strong></div>
<div>🟧 <strong>288-Pin Gold Finger</strong></div>
</div>
</div>

---

## ⚡ Section 2. Rambus DDR5 DIMM 칩셋 및 RDIMM 소자별 세부 분석

Rambus의 DDR5 Server DIMM Chipset 솔루션을 바탕으로 한 DDR5 RDIMM의 주요 반도체 소자별 핵심 역할 및 작동 메커니즘입니다.

<div class="comp-card-grid">

  <!-- 1. RCD -->
  <div class="comp-card comp-card-rcd">
    <div class="comp-header">
      <span class="badge badge-rcd">Rambus RCD50x0</span>
      <span>1. RCD (Registering Clock Driver)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>핵심 역할:</strong> CPU 메모리 컨트롤러에서 전달되는 **커맨드/주소(C/A), 제어 및 클록(CK) 신호를 수신하여 버퍼링 및 재타이밍(Re-clocking)** 한 뒤, 듀얼 서브채널(Sub-channel A/B) DRAM IC들로 정밀하게 재생성하여 공급합니다.<br/>
      • <strong>DDR5 기술 혁신:</strong> DDR4 대비 구동 클록 속도가 4.8 GT/s ~ 8.0+ GT/s로 급상승함에 따라 발생할 수 있는 신호 왜곡 및 지터(Jitter)를 획기적으로 개선하며, 서버의 채널당 DIMM 탑재 밀도를 대폭 높여줍니다.
    </p>
  </div>

  <!-- 2. PMIC -->
  <div class="comp-card comp-card-pmic">
    <div class="comp-header">
      <span class="badge badge-pmic">Rambus PMIC50x0</span>
      <span>2. PMIC (Power Management IC)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>핵심 역할:</strong> 메인보드로부터 직접 공급받는 **12V VIN 입력 전원을 모듈 온보드 상에서 레귤레이션**하여 DRAM 코어용 **VDD (1.1V)**, I/O 버스용 **VDDQ (1.1V)**, 및 펌핑 전압 **VPP (1.8V)** 를 직접 생성합니다.<br/>
      • <strong>도입 이유:</strong> 기존 메인보드에 의존하던 전력 공급 방식(VRM)을 메모리 모듈 내부로 완전히 이관(DIMM-on-PMIC)함으로써 전압 트랜전트 억제, 전력 공급 손실(IR Drop) 최소화 및 모듈별 정밀 전력 텔레메트리가 가능해졌습니다.
    </p>
  </div>

  <!-- 3. SPD Hub -->
  <div class="comp-card comp-card-spd">
    <div class="comp-header">
      <span class="badge badge-spd">Rambus SPD5118</span>
      <span>3. SPD Hub (Serial Presence Detect Hub)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>핵심 역할:</strong> 메모리 모듈의 속도, 타이밍 프로필(CL-tRCD-tRP), 모듈 용량, 제조사 시리얼 데이터를 보유한 **JEDEC 규격 EEPROM**과 **내장 온도 센서 및 I3C 고속 통신 버스 컨트롤러**가 통합된 칩셋입니다.<br/>
      • <strong>I3C 버스 혁신:</strong> 기존 DDR4의 I2C/SMBus 대비 최대 12.5MHz의 10배 이상 빠른 **I3C(Improved Inter-Integrated Circuit) 통신**을 채택하여 서버 시스템 매니지먼트 폰과의 실시간 텔레메트리 데이터 교환을 전담합니다.
    </p>
  </div>

  <!-- 4. Thermal Sensors TS0 & TS1 -->
  <div class="comp-card comp-card-ts">
    <div class="comp-header">
      <span class="badge badge-ts">Rambus TS5111</span>
      <span>4. Sideband Thermal Sensors (TS0 / TS1)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>핵심 역할:</strong> DDR5 RDIMM 기판의 **최좌측(TS0)과 최우측(TS1) 양 끝단에 독립 배치되는 고정밀 온보드 온도 센서**입니다.<br/>
      • <strong>온도 뷰 모니터링:</strong> 서버 랙 내부의 공기 흐름 방향에 따라 메모리 모듈 양 끝의 국소적 온도 차이(Thermal Gradient)를 실시간 감지하여, 서버 섀시 수랭/공랭 팬 속도를 정밀 제어하고 열 쓰로틀링(Throttling)을 방지합니다.
    </p>
  </div>

  <!-- 5. Dual Sub-channel DRAM & Sideband ECC -->
  <div class="comp-card comp-card-dram">
    <div class="comp-header">
      <span class="badge badge-dram">SDRAM Core Array</span>
      <span>5. Dual Sub-channel DRAM & Sideband ECC</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>독립 듀얼 서브채널 구조:</strong> DDR5는 64-bit 단일 채널 대신 **32-bit 독립 서브채널 A와 서브채널 B** 2개로 분할되어 메모리 액세스 효율과 데이터 트랜잭션 병렬성을 2배로 향상시킵니다.<br/>
      • <strong>Sideband ECC:</strong> 각 32-bit 서브채널마다 8-bit의 독립 전용 ECC DRAM 다이가 결합되어(총 40-bit per sub-channel), 실리콘 내부 오류(On-die ECC) 외에 전송 버스 오류까지 완벽히 검출/수정(Sideband ECC)합니다.
    </p>
  </div>

  <!-- 6. 288-pin Connector & Passives -->
  <div class="comp-card" style="border-left-color: #94a3b8;">
    <div class="comp-header">
      <span class="badge" style="background-color: rgba(148, 163, 184, 0.2); color: #cbd5e1; border: 1px solid #94a3b8;">인터페이스 & 수동소자</span>
      <span>6. 288-Pin 골드핑거 & MLCC 수동소자</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>288-Pin 골드핑거:</strong> 중앙 Key Notch를 기준으로 분할되어, CPU 데이터 버스, C/A 버스, 12V 전원 및 I3C 제어 신호를 수신.<br/>
      • <strong>MLCC & 디커플링 콘덴서:</strong> PMIC 주변 인덕터(L1, L2)와 각 DRAM IC 하단에 고밀도 세라믹 콘덴서를 배치하여 전압 리플(Ripple) 및 고주파 스위칭 노이즈 억제.
    </p>
  </div>

</div>

<div class="insight-box">
  <div class="insight-box-title">💡 Rambus 기술 자료 기준: DDR4 RDIMM vs DDR5 RDIMM 비교</div>
  <div class="insight-box-text">
    • <strong>전력 아키텍처:</strong> DDR4는 1.2V 전력을 서버 메인보드 VRM에서 공급받았으나, DDR5 RDIMM은 메인보드가 12V를 공급하고 **모듈 내부의 PMIC가 1.1V로 개별 제어**합니다.<br/>
    • <strong>채널 아키텍처:</strong> DDR4는 64-bit 단일 채널이었으나, DDR5는 **32-bit 듀얼 서브채널(Sub-A / Sub-B) 구조**를 적용하여 버스트 길이(Burst Length)가 8에서 16으로 확장되고 메모리 연산 효율이 대폭 상승했습니다.<br/>
    • <strong>버퍼링 및 관리:</strong> Rambus RCD를 통해 C/A 신호가 버퍼링되며, 차세대 **I3C 버스 기반 SPD Hub와 듀얼 TS 센서(TS0/TS1)** 로 실시간 초고속 모듈 상태 관리(Telemetry)가 수행됩니다.
  </div>
</div>

---

## 📐 Section 3. RDIMM 구성 방식 (Configuration) & DRAM Die별 모듈 용량 매트릭스

### 1. DIMM Configuration 표기법 핵심 요소
서버용 RDIMM 규격 표기 시 사용되는 **`nR x m`** 형태의 구성 요소 개념입니다.

* **Rank (`nR`)**: CPU 메모리 컨트롤러가 한 번에 독점 액세스하는 **64-bit 데이터 버스 단위의 독립된 DRAM 칩 그룹** (Single Rank: `1R`, Dual Rank: `2R`, Quad Rank: `4R` 등).
* **Bit-width (`x4`, `x8`)**: DRAM 칩 단일 개당 데이터 입출력(DQ) 핀 수.
  * **`x4` (4-bit)**: 64-bit 1개 Rank 구성 시 데이터 DRAM **16개** 필요. (서버 시장에서 고용량 및 고급 ECC 기능 지원의 표준)
  * **`x8` (8-bit)**: 64-bit 1개 Rank 구성 시 데이터 DRAM **8개** 필요. (비용 효율성 중심 모듈)
* **3DS (Three-Dimensional Stacking)**: TSV(구리 관통 전극) 기술로 DRAM Die를 수직 적층(2H, 4H 등)하여 Rank 수와 용량을 극대화한 초고용량 기술.

---

### 2. DRAM Die (16Gb / 24Gb / 32Gb) vs DIMM Configuration 용량 매트릭스

DRAM 칩 1개의 용량(Die Density)과 모듈 구성(Configuration)에 따른 **DDR5 RDIMM 모듈 총 용량(Module Density)** 매트릭스 표입니다. *(단, Sideband ECC 칩 포함)*

| 모듈 구성 (Configuration) | Rank 수 | 칩 비트폭 | 데이터 칩 개수 | 16Gb (2GB) Die | 24Gb (3GB) Die (Non-Binary) | 32Gb (4GB) Die | 주요 적용 분야 & 특징 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :--- |
| **1Rx8** | 1 Rank | x8 | 8개 | **16 GB** | **24 GB** | **32 GB** | 엔트리급 서버, 보급형 서버 인프라 |
| **1Rx4** | 1 Rank | x4 | 16개 | **32 GB** | **48 GB** | **64 GB** | 중소형 서버 표준 단면/양면 구성 |
| **2Rx8** | 2 Ranks | x8 | 16개 | **32 GB** | **48 GB** | **64 GB** | x8 기반 고용량 구성 (가성비) |
| **2Rx4** | 2 Ranks | x4 | 32개 | **64 GB** | **96 GB** | **128 GB** | **주력 고성능 데이터센터 서버 RDIMM 표준** |
| **2Rx4 (3DS 2H)** *(4R)* | 4 Ranks | x4 (2H 적층) | 64개 (3DS) | **128 GB** | **192 GB** | **256 GB** | AI 학습/추론 서버 & 초고용량 클라우드 |
| **2Rx4 (3DS 4H)** *(8R)* | 8 Ranks | x4 (4H 적층) | 128개 (3DS) | **256 GB** | **384 GB** | **512 GB** | 하이엔드 AI 서버 & 인메모리 DB 전용 |

> **💡 용량 계산 공식 (Module Capacity Calculation)**  
> $$\text{Module Density (GB)} = \frac{\text{Rank 수} \times (64 / \text{Bit-width}) \times \text{Die Density (Gb)}}{8}$$  
> *예시: 24Gb Die 기반 2Rx4 구성 = $2 \times (64 / 4) \times 24 / 8 = 2 \times 16 \times 3 = \mathbf{96\text{ GB}}$*

<div class="insight-box">
  <div class="insight-box-title">💡 Configuration 선택 및 Market Insight</div>
  <div class="insight-box-text">
    • <strong>24Gb Non-Binary DRAM의 부상:</strong> 기존 16Gb/32Gb 등 2의 거듭제곱 규격 외에 <strong>24Gb Die</strong>가 등장하면서 24GB, 48GB, 96GB, 192GB, 384GB와 같은 유연한 중간 용량 규격이 활성화되어 데이터센터 비용 대비 효율(TCO)이 대폭 개선되었습니다.<br/>
    • <strong>x4 vs x8 선택 기준:</strong> x4 DRAM 구성은 더 많은 칩을 사용하여 <strong>SDDC(Single Device Data Correction)</strong> 등 강화된 ECC 기능과 높은 랭크 용량을 제공하므로 미션 크리티컬 서버 및 AI 인프라에 선호됩니다.
  </div>
</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**

