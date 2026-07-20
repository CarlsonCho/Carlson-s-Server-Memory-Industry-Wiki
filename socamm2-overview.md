---
title: SOCAMM2 Overview
description: Rambus SOCAMM2 칩셋 솔루션 기반 JEDEC 표준 LPDDR5X/6 AI 서버 전용 모듈 아키텍처 및 토폴로지 분석
---

<style>
.socamm2-board-container {
  background-color: #0b1329;
  border: 2px solid #1e293b;
  border-radius: 14px;
  padding: 24px;
  margin: 30px 0;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.45);
}
.board-title {
  text-align: center;
  font-size: 1.3rem;
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
.comp-card-attach { border-left-color: #38bdf8; }
.comp-card-power { border-left-color: #f59e0b; }
.comp-card-modularity { border-left-color: #10b981; }
.comp-card-chipset { border-left-color: #a855f7; }

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
.badge-blue { background-color: rgba(56, 189, 248, 0.2); color: #38bdf8; border: 1px solid #38bdf8; }
.badge-amber { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }
.badge-green { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }
.badge-purple { background-color: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid #a855f7; }

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

# 🖥️ SOCAMM2 Overview (JEDEC Standard LPDDR Server Module)

**SOCAMM2 (Small Outline Compression Attached Memory Module 2)** 는 고성능 AI 인프라 및 데이터센터 서버 플랫폼을 위해 제정된 **JEDEC 표준 저전력 착탈식 서버 메모리 모듈**입니다.

기존 LPDDR 메모리의 뛰어난 전력 효율성을 24/7 구동되는 서버 환경에 직접 구현하기 위해 **압축 결합(Compression Attach)** 인터페이스, **온모듈 전력 정밀 제어(On-Module Power & Telemetry)**, 그리고 **Rambus 차세대 SOCAMM2 칩셋 솔루션**이 결합되어 초고속 LPDDR5X (최대 9.6 Gb/s) 및 차세대 LPDDR6 서버 메모리 확장을 가능하게 합니다.

---

## 🛠️ Section 1. Rambus SOCAMM2 PCB 물리 토폴로지 다이어그램

아래 다이어그램은 **Rambus 블로그 공식 기술 자료**를 바탕으로 제작된 **SOCAMM2 모듈의 하드웨어 토폴로지 구성도**입니다. 프로세서 밀착 결합, 초단거리 신호 배선, Rambus 전원/텔레메트리 칩셋 및 수랭(Liquid Cooling) 적용 구조를 시각화합니다.

<div class="socamm2-board-container">
<div class="board-title">🟦 Rambus Enabled JEDEC SOCAMM2 PCB Topology</div>
<div class="board-subtitle">※ Low-Profile Substrate + Rambus PMIC/VR/Telemetry Chipset + Compression Attach Interface</div>

<svg viewBox="0 0 1000 480" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #070d1e; border: 2px solid #38bdf8;">

<!-- Liquid Cooling Cold Plate Outer Guide (Flush Mounting Indicator) -->
<rect x="50" y="15" width="900" height="450" rx="20" fill="none" stroke="#0ea5e9" stroke-width="1.5" stroke-dasharray="8 6"/>
<text x="500" y="36" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">❄️ Flush-Mounted Liquid Cooling Cold Plate Surface (Direct Thermal Contact)</text>

<!-- Main Substrate Board -->
<rect x="80" y="50" width="840" height="390" rx="14" fill="#0f172a" stroke="#0284c7" stroke-width="2.5"/>

<!-- Compression Mechanical Fasteners -->
<g fill="#1e293b" stroke="#38bdf8" stroke-width="2">
<circle cx="130" cy="95" r="15"/>
<circle cx="870" cy="95" r="15"/>
<circle cx="130" cy="395" r="15"/>
<circle cx="870" cy="395" r="15"/>
</g>
<text x="130" y="99" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">LOCK</text>
<text x="870" y="99" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">LOCK</text>
<text x="130" y="399" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">LOCK</text>
<text x="870" y="399" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">LOCK</text>

<!-- Compression Attach Backside Grid Pad (Socket Contact Interface) -->
<rect x="220" y="320" width="560" height="95" rx="10" fill="#1e1b4b" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="6 4"/>
<text x="500" y="362" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">Compression Attach Interface Grid (Backside Land Array)</text>
<text x="500" y="385" fill="#fef08a" font-size="11" text-anchor="middle">Direct Board-to-Board Socket Connection • Ultra-Short Signal Trace (&lt;9.6 Gb/s Loss Minimization)</text>

<!-- High-Speed Signal Traces (Connecting Chipset & DRAM to Compression Pad) -->
<path d="M 230 240 L 230 320 M 345 240 L 345 320 M 460 240 L 460 320 M 575 240 L 575 320 M 690 240 L 690 320" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="3 3"/>

<!-- 1. Multi-Channel LPDDR5X / LPDDR6 Memory Array -->
<g fill="#0369a1" stroke="#38bdf8" stroke-width="2">
<rect x="175" y="140" width="110" height="110" rx="8"/>
<rect x="290" y="140" width="110" height="110" rx="8"/>
<rect x="405" y="140" width="110" height="110" rx="8"/>
<rect x="520" y="140" width="110" height="110" rx="8"/>
<rect x="635" y="140" width="110" height="110" rx="8"/>
<rect x="750" y="140" width="75" height="110" rx="8" fill="#1e3a8a" stroke="#60a5fa"/>
</g>

<text x="230" y="200" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="345" y="200" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="460" y="200" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="575" y="200" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="690" y="200" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X</text>
<text x="787" y="190" fill="#dbeafe" font-size="11" font-weight="bold" text-anchor="middle">Sideband</text>
<text x="787" y="206" fill="#dbeafe" font-size="11" font-weight="bold" text-anchor="middle">ECC</text>

<!-- 2. Rambus SOCAMM2 Module Chipset (PMIC / VR / Telemetry / SPD) -->
<!-- On-Module PMIC & VR -->
<g>
<rect x="390" y="65" width="220" height="52" rx="6" fill="#78350f" stroke="#f59e0b" stroke-width="2.5"/>
<text x="500" y="90" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Rambus SOCAMM2 PMIC / VR</text>
<text x="500" y="106" fill="#fef3c7" font-size="10" text-anchor="middle">Sub-1V High-Precision Power Rail</text>
</g>

<!-- SPD Hub & Dual Temp Sensors -->
<g>
<rect x="210" y="70" width="130" height="42" rx="5" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<text x="275" y="91" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">SPD Hub & TS0</text>
<text x="275" y="104" fill="#f3e8ff" font-size="9" text-anchor="middle">Temp Sensor Left</text>

<rect x="660" y="70" width="130" height="42" rx="5" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
<text x="725" y="91" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Telemetry & TS1</text>
<text x="725" y="104" fill="#f3e8ff" font-size="9" text-anchor="middle">Temp Sensor Right</text>
</g>

</svg>

<div class="legend-chip-bar">
<div>🟦 <strong>Low-Profile Substrate:</strong> 수랭 콜드 플레이트 접촉에 최적화된 저높이 기판</div>
<div>🟨 <strong>Compression Attach Grid:</strong> 신호 경로 단축 및 9.6 Gb/s 마진 보장 압축 접촉 면</div>
<div>🟧 <strong>Rambus PMIC / VR:</strong> Sub-1V 미세 전압 변동을 차단하는 온모듈 국소 전력 공급 장치</div>
<div>🟪 <strong>SPD Hub / Telemetry / TS:</strong> 엔터프라이즈 서버 원격 상태 모니터링 및 실시간 듀얼 온도 감지 센서</div>
</div>
</div>

---

## 💡 Section 2. SOCAMM2 도입 배경 및 주요 해결 과제

Modern AI 서버 및 가속기 플랫폼은 24/7 연속 구동되는 환경에서 극심한 **전력 한계(Power Limits)** 와 **열 제약(Thermal Constraints)** 문제에 직면해 있습니다. 이를 극복하기 위해 모바일용 LPDDR 도입이 유력한 대안으로 부상했으나, 데이터센터 환경 적용에는 다음과 같은 기술적 과제가 존재했습니다.

1. **신호 무결성 (Signal Integrity) 이슈**:
   - LPDDR5X는 핀당 최대 **9.6 Gb/s**의 초고속 속도로 동작합니다.
   - 모바일 기기처럼 온보드(Soldered-down) 형태가 아닌 기존 슬롯형 서버 PCB 배선에 탑재할 경우, 배선 길이(Trace Length) 증가로 인해 신호 감쇄, 노이즈, 크로스토크(Crosstalk), 반사파(Inter-symbol Interference) 등의 심각한 신호 품질 저하가 발생합니다.
2. **전력 전달 정밀도 (Power Delivery)**:
   - LPDDR은 Sub-1V 레벨의 매우 낮은 전압으로 동작합니다. 메인보드 긴 배선을 거쳐 전력을 전달할 경우 전압 강화 및 변동폭을 감당하기 어렵습니다.
3. **서버 수리 및 확장성 (Serviceability & Modularity)**:
   - 메인보드 납땜(Soldered-down) 방식은 모듈 교체나 메모리 업그레이드가 불가능하여 데이터센터 운영 시 TCO(총소유비용) 부담이 매우 큽니다.

👉 **SOCAMM2는 이러한 문제점들을 완벽하게 해결하기 위해 탄생한 JEDEC 표준 폼팩터입니다.**

---

## ⚡ Section 3. SOCAMM2 핵심 아키텍처 특징 및 대혁신

<div class="comp-card-grid">

  <div class="comp-card comp-card-attach">
    <div class="comp-header">
      <span class="badge badge-blue">밀착 결합</span>
      <span>1. Compression Attach & 수랭(Liquid Cooling) 최적화</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • 모듈 후면 전체가 면 접촉되는 **압축 결합(Compression Attach)** 방식을 채택하여 배선 길이를 대폭 단축하고 9.6 Gb/s 신호 마진을 보장합니다.<br/>
      • 메인보드와 완전히 밀착되는 **플러시(Flush) 구조**로 설계되어 AI 서버 랙의 **수랭식 냉각 블록(Liquid Cooling Plate)** 장착에 최고의 효율을 발휘합니다.
    </p>
  </div>

  <div class="comp-card comp-card-power">
    <div class="comp-header">
      <span class="badge badge-amber">전력 최적화</span>
      <span>2. 국소화된 온모듈 전력 관리 (On-Module Power & Telemetry)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • 모듈 자체에 **Dedicated PMIC 및 전압 조절기(VR)** 가 내장되어 Sub-1V 저전압 노이즈를 근본적으로 차단합니다.<br/>
      • 엔터프라이즈 레벨의 텔레메트리, 모듈 식별, 원격 구성 및 온도 모니터링 기능(TS0/TS1)을 제공합니다.
    </p>
  </div>

  <div class="comp-card comp-card-modularity">
    <div class="comp-header">
      <span class="badge badge-green">유지보수성</span>
      <span>3. 모듈화 및 서비스 편의성 (Serviceability & Low TCO)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • 기존 온보드 LPDDR(Soldered-down)과 달리 **탈부착 및 교체가 가능한 모듈 방식**입니다.<br/>
      • 메인보드 교체 없이 메모리 용량 확장, 결함 모듈 교체가 가능하여 서버 다운타임을 최소화하고 TCO를 대폭 절감합니다.
    </p>
  </div>

  <div class="comp-card comp-card-chipset">
    <div class="comp-header">
      <span class="badge badge-purple">Rambus 솔루션</span>
      <span>4. Rambus SOCAMM2 Chipset</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • **LPDDR5X (최대 9.6 Gb/s)** 동작 속도를 완벽 지원하는 Rambus 칩셋 솔루션 적용.<br/>
      • JEDEC 표준 규격에 따라 초고속 전송 제어, 실시간 텔레메트리 및 정밀 전력 공급을 총괄하여 LPDDR의 서버 안착을 가속화합니다.
    </p>
  </div>

</div>

---

## 📊 Section 4. 메모리 폼팩터 핵심 기술 비교

| 구분 | 일반 RDIMM (DDR5) | LPCAMM2 (LPDDR5X) | **SOCAMM2 (LPDDR5X/6)** |
| :--- | :--- | :--- | :--- |
| **주 타깃** | 범용 엔터프라이즈 서버 | 클라이언트 PC & 프리미엄 노트북 | **AI 서버 인프라 & 데이터센터** |
| **결합 방식** | Vertical Socket (슬롯 삽입) | Compression Attach (면 결합) | **Compression Attach (수랭 밀착 결합)** |
| **전송 속도** | 4.8 ~ 8.0 Gb/s | 7.5 ~ 9.6 Gb/s | **9.6 Gb/s (LPDDR5X) ~ 12.8G+ (LPDDR6)** |
| **전력 제어** | On-DIMM PMIC (1.1V) | On-Module PMIC (Sub-1V) | **Server-Grade On-Module PMIC & Telemetry** |
| **냉각 적합성** | 공랭 중심 (높은 폼팩터) | 공랭 / 박형 폼팩터 | **수랭(Liquid Cooling) 최적화 저프로파일** |
| **교체 가능 여부**| O (슬롯 탈부착) | O (소켓 압축 결합) | **O (서버 소켓 압축 결합, TCO 절감)** |

---

<div class="insight-box">
  <div class="insight-box-title">💡 Rambus 기술 총평 (Key Takeaway)</div>
  <div class="insight-box-text">
    SOCAMM2는 LPDDR5X 메모리의 압도적인 전력 효율성을 서버 및 AI 가속기 인프라로 이식하기 위한 <strong>JEDEC의 핵심 차세대 메모리 폼팩터</strong>입니다. Rambus SOCAMM2 칩셋은 9.6 Gb/s의 초고속 데이터 레이트와 서버급 전력/텔레메트리 안정성을 완벽히 조화시켜, AI 데이터센터의 전력 제약과 thermal 타깃을 극복하는 게임 체인저로 떠오르고 있습니다.
  </div>
</div>

---

🏠 **[Memory Overview로 돌아가기](/memory-overview)**
