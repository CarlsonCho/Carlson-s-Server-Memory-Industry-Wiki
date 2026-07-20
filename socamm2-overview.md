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

## 🛠️ Section 1. Rambus SOCAMM2 실물 기반 PCB 물리 토폴로지 다이어그램

아래 다이어그램은 **Rambus 공식 실물 칩셋 배치(SOCAMM2 Topology)**를 바탕으로 정밀 재구성한 **SOCAMM2 모듈 물리 토폴로지**입니다. 롱 스트립 바(Long Strip Bar) 형태의 모듈 기판 위 3개의 메커니컬 결합 홀(Screw Holes), 좌/우측 **3A Voltage Regulator**, 중앙 **12A Voltage Regulator** 및 우측 **SPD Hub** 칩셋 배치를 완벽 시각화합니다.

<div class="socamm2-board-container">
<div class="board-title">🟩 SOCAMM2 Topology (Showing Rambus Server Chipset ICs)</div>
<div class="board-subtitle">※ Low-Profile Strip Bar PCB + Rambus 12A / 3A VRs + SPD Hub + 3-Point Mechanical Fasteners</div>

<svg viewBox="0 0 1000 360" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #090d16; border: 2px solid #38bdf8;">

<!-- Top Callout Lines & Labels -->
<!-- Left 3A VR Callout -->
<line x1="125" y1="50" x2="125" y2="100" stroke="#f59e0b" stroke-width="2"/>
<circle cx="125" cy="100" r="4" fill="#f59e0b"/>
<text x="125" y="38" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">3A Voltage Regulator</text>

<!-- Right 3A VR Callout -->
<line x1="885" y1="50" x2="885" y2="100" stroke="#f59e0b" stroke-width="2"/>
<circle cx="885" cy="100" r="4" fill="#f59e0b"/>
<text x="885" y="38" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">3A Voltage Regulator</text>


<!-- Main Module PCB (Long Strip Form Factor) -->
<rect x="40" y="110" width="920" height="110" rx="8" fill="#141923" stroke="#38bdf8" stroke-width="2.5"/>

<!-- 3 Fastener Holes -->
<!-- Hole 1: Left Bottom -->
<circle cx="95" cy="180" r="16" fill="#090d16" stroke="#e2e8f0" stroke-width="3.5"/>
<circle cx="95" cy="180" r="11" fill="none" stroke="#fbbf24" stroke-width="1.5"/>

<!-- Hole 2: Center Top -->
<circle cx="500" cy="145" r="16" fill="#090d16" stroke="#e2e8f0" stroke-width="3.5"/>
<circle cx="500" cy="145" r="11" fill="none" stroke="#fbbf24" stroke-width="1.5"/>

<!-- Hole 3: Right Bottom -->
<circle cx="905" cy="180" r="16" fill="#090d16" stroke="#e2e8f0" stroke-width="3.5"/>
<circle cx="905" cy="180" r="11" fill="none" stroke="#fbbf24" stroke-width="1.5"/>

<!-- 4 LPDDR5X DRAM Package Sections -->
<rect x="150" y="120" width="150" height="90" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="225" y="170" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X DRAM</text>

<rect x="320" y="120" width="150" height="90" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="395" y="170" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X DRAM</text>

<rect x="530" y="120" width="150" height="90" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="605" y="170" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X DRAM</text>

<rect x="700" y="120" width="150" height="90" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="775" y="170" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">LPDDR5X DRAM</text>


<!-- Chipsets Placement -->
<!-- 1. Left 3A VR (Left of Hole 1) -->
<rect x="55" y="125" width="28" height="35" rx="3" fill="#b45309" stroke="#fbbf24" stroke-width="1.5"/>
<text x="69" y="146" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">3A VR</text>

<!-- 2. Center 12A VR (Below Hole 2) -->
<rect x="475" y="172" width="50" height="42" rx="4" fill="#b45309" stroke="#fbbf24" stroke-width="2"/>
<text x="500" y="192" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Rambus</text>
<text x="500" y="205" fill="#fef08a" font-size="9" font-weight="bold" text-anchor="middle">12A VR</text>

<!-- 3. Right 3A VR (Right Top) -->
<rect x="917" y="125" width="28" height="35" rx="3" fill="#b45309" stroke="#fbbf24" stroke-width="1.5"/>
<text x="931" y="146" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">3A VR</text>

<!-- 4. SPD Hub (Right of Hole 3 / Bottom Right) -->
<rect x="860" y="170" width="30" height="35" rx="3" fill="#6b21a8" stroke="#c084fc" stroke-width="1.5"/>
<text x="875" y="191" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">SPD</text>


<!-- Bottom Callout Lines & Labels -->
<!-- Center 12A VR Callout -->
<line x1="500" y1="214" x2="500" y2="280" stroke="#f59e0b" stroke-width="2"/>
<circle cx="500" cy="214" r="4" fill="#f59e0b"/>
<text x="500" y="302" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">12A Voltage Regulator</text>

<!-- Right SPD Hub Callout -->
<line x1="875" y1="205" x2="875" y2="280" stroke="#c084fc" stroke-width="2"/>
<circle cx="875" cy="205" r="4" fill="#c084fc"/>
<text x="875" y="302" fill="#e9d5ff" font-size="16" font-weight="bold" text-anchor="middle">SPD Hub</text>

<!-- Subtitle Note -->
<text x="500" y="342" fill="#94a3b8" font-size="13" font-style="italic" text-anchor="middle">SOCAMM2 Showing Rambus Server Chipset ICs Architecture</text>

</svg>

<div class="legend-chip-bar">
<div>⬛ <strong>Low-Profile Strip Bar PCB:</strong> 3개의 구멍(Screw Fastener Holes)이 타공된 서버 전용 얇은 모듈 기판</div>
<div>🟧 <strong>Rambus 12A & 3A Voltage Regulators:</strong> 중앙 12A VR 및 양 끝단 3A VR을 통한 정밀 전력 공급</div>
<div>🟪 <strong>SPD Hub:</strong> 엔터프라이즈 모듈 식별 및 텔레메트리 모니터링 허브</div>
<div>🟦 <strong>LPDDR5X DRAM Array:</strong> 칩셋 구역 사이에 배열된 초고속 9.6 Gb/s 저전력 메모리 다이</div>
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
      • **12A Voltage Regulator** 및 양 끝단 **3A Voltage Regulators** 가 통합되어 Sub-1V 저전압 노이즈를 근본적으로 차단합니다.<br/>
      • **SPD Hub** 를 통해 엔터프라이즈 레벨의 텔레메트리, 모듈 식별, 원격 구성 및 온도 모니터링을 지원합니다.
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
| **전력 제어** | On-DIMM PMIC (1.1V) | On-Module PMIC (Sub-1V) | **Rambus 12A & 3A Voltage Regulators** |
| **냉각 적합성** | 공랭 중심 (높은 폼팩터) | 공랭 / 박형 폼팩터 | **수랭(Liquid Cooling) 최적화 저프로파일** |
| **교체 가능 여부**| O (슬롯 탈부착) | O (소켓 압축 결합) | **O (서버 소켓 압축 결합, TCO 절감)** |

---

<div class="insight-box">
  <div class="insight-box-title">💡 Rambus 기술 총평 (Key Takeaway)</div>
  <div class="insight-box-text">
    SOCAMM2는 LPDDR5X 메모리의 압도적인 전력 효율성을 서버 및 AI 가속기 인프라로 이식하기 위한 <strong>JEDEC의 핵심 차세대 메모리 폼팩터</strong>입니다. Rambus SOCAMM2 칩셋(12A/3A VRs, SPD Hub)은 9.6 Gb/s의 초고속 데이터 레이트와 서버급 전력/텔레메트리 안정성을 완벽히 조화시켜, AI 데이터센터의 전력 제약과 thermal 타깃을 극복하는 게임 체인저로 떠오르고 있습니다.
  </div>
</div>

---

🏠 **[Memory Overview로 돌아가기](/memory-overview)**
