---
title: SOCAMM Overview
description: 차세대 서버 전용 SOCAMM (System-on-Chip Attached Memory Module) 아키텍처, LPDDR5X/6 기반 저전력 고밀도 AI 서버 메모리 분석
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
.comp-card-socamm { border-left-color: #a855f7; }
.comp-card-ras { border-left-color: #ef4444; }

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
.badge-socamm { background-color: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid #a855f7; }
.badge-ras { background-color: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }

.insight-box {
  background-color: rgba(168, 85, 247, 0.1);
  border-left: 4px solid #a855f7;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
}
.insight-box-title {
  font-weight: bold;
  color: #a855f7;
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

# 🖥️ SOCAMM Overview (서버 전용 System-on-Chip Attached Memory Module)

**SOCAMM (System-on-Chip Attached Memory Module)** 은 엔터프라이즈 데이터센터 및 초고밀도 AI 엣지 서버(ARM Server SoC, Cloud Compute Node)를 위해 삼성전자 및 SK하이닉스가 제안한 **서버 전용 저전력 착탈식 모듈**입니다. PC/노트북용 LPCAMM2와 달리 **서버급 신뢰성(RAS - Reliability, Availability, Serviceability)**, **Sideband ECC**, **서버 PMIC 및 텔레메트리 센서**가 내장되어 초고속 LPDDR5X/6 메모리를 서버 소켓에 직접 확장합니다.

---

## 🛠️ Section 1. 서버 전용 SOCAMM 모듈 PCB 물리 토폴로지 다이어그램

아래 다이어그램은 **서버 SoC(ARM/x86)** 에 직접 밀착 장착되는 **서버용 SOCAMM 모듈**의 물리 토폴로지 구성도입니다.

<div class="rdimm-board-container">
<div class="board-title">🟩 Server SOCAMM PCB 물리 토폴로지 (Board Topology)</div>
<div class="board-subtitle">※ Server SoC 밀착 결합 + LPDDR5X/6 다이 아레이 + Server PMIC & Sideband ECC</div>

<svg viewBox="0 0 1000 420" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #180d2b; border: 2px solid #a855f7;">

<!-- Substrate Base -->
<rect x="120" y="30" width="760" height="340" rx="16" fill="#2e1065" stroke="#c084fc" stroke-width="2.5"/>

<!-- Mounting Holes (Server Socket Fasteners) -->
<circle cx="170" cy="70" r="14" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
<circle cx="830" cy="70" r="14" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>

<!-- High-Density Server Socket Pin Contact Area -->
<rect x="300" y="250" width="400" height="90" rx="8" fill="#4c1d95" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4 4"/>
<text x="500" y="302" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">High-Density Server SoC Socket Interface Pins</text>

<!-- 1. Multi-Channel LPDDR5X / LPDDR6 Memory Array -->
<g fill="#1e1b4b" stroke="#818cf8" stroke-width="2">
<rect x="200" y="110" width="105" height="110" rx="6"/>
<rect x="325" y="110" width="105" height="110" rx="6"/>
<rect x="450" y="110" width="105" height="110" rx="6"/>
<rect x="575" y="110" width="105" height="110" rx="6"/>
<rect x="700" y="110" width="105" height="110" rx="6" fill="#312e81" stroke="#a5b4fc"/>
</g>

<text x="252" y="170" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">LPDDR</text>
<text x="377" y="170" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">LPDDR</text>
<text x="502" y="170" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">LPDDR</text>
<text x="627" y="170" fill="#c7d2fe" font-size="12" font-weight="bold" text-anchor="middle">LPDDR</text>
<text x="752" y="165" fill="#e0e7ff" font-size="11" font-weight="bold" text-anchor="middle">Server ECC</text>

<!-- 2. Server PMIC & Sideband Sensors -->
<g>
<rect x="440" y="50" width="120" height="45" rx="5" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
<text x="500" y="77" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Server PMIC</text>
</g>

<g>
<rect x="270" y="50" width="80" height="40" rx="4" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
<text x="310" y="75" fill="#e9d5ff" font-size="10" font-weight="bold" text-anchor="middle">TS0</text>
<rect x="650" y="50" width="80" height="40" rx="4" fill="#581c87" stroke="#c084fc" stroke-width="1.5"/>
<text x="690" y="75" fill="#e9d5ff" font-size="10" font-weight="bold" text-anchor="middle">TS1</text>
</g>

</svg>

<div class="legend-chip-bar">
<div>🟣 <strong>SOCAMM PCB:</strong> 서버 전용 저전력 고밀도 소켓 착탈식 모듈</div>
<div>🔵 <strong>Server LPDDR5X/6 & Sideband ECC:</strong> 8.5 ~ 10.7 GT/s 데이터 및 오류 수정</div>
<div>🟡 <strong>Server PMIC:</strong> 서버 랙 전용 전력 정밀 제어</div>
<div>🟣 <strong>TS0/TS1:</strong> 서버 과열 방지 양 끝단 온도 감지 센서</div>
</div>
</div>

---

## ⚡ Section 2. SOCAMM vs LPCAMM2 차이점 및 서버 핵심 소자 분석

<div class="comp-card-grid">

  <div class="comp-card comp-card-socamm">
    <div class="comp-header">
      <span class="badge badge-socamm">서버 전용 혁신</span>
      <span>1. SOCAMM (Server/Enterprise Target)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>타겟 시스템:</strong> 인텔/AMD/ARM 기반 클라우드 AI 서버, 엣지 컴퓨팅 노드, 데이터센터 인프라.<br/>
      • <strong>서버용 기능 (RAS):</strong> 실시간 시스템 텔레메트리, Sideband ECC, 듀얼 온도 센서(TS0/TS1) 및 서버 섀시 고밀도 패키징 전용 고신뢰성 핀 구조 적용.
    </p>
  </div>

  <div class="comp-card comp-card-ras">
    <div class="comp-header">
      <span class="badge badge-ras">저전력 서버 대세</span>
      <span>2. 초저전력 & 고밀도 확장성</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • RDIMM 대비 **소모 전력을 50% 이상 절감**하면서도 8.5 ~ 10.7 GT/s 초고속 대역폭을 제공하여 AI 서버의 TCO(총소유비용)를 획기적으로 개선합니다.
    </p>
  </div>

</div>

<div class="insight-box">
  <div class="insight-box-title">💡 SOCAMM vs LPCAMM2 명확 구분</div>
  <div class="insight-box-text">
    • <strong>LPCAMM2:</strong> JEDEC 규격의 <strong>클라이언트 PC 및 노트북용 표준 탈부착 모듈</strong> (SODIMM 대체 목적).<br/>
    • <strong>SOCAMM:</strong> 삼성전자 및 SK하이닉스가 주도하는 <strong>엔터프라이즈 AI 서버 및 클라우드 소켓 전용 LPDDR 모듈</strong> (서버급 RAS 및 데이터센터 고밀도 환경 지원).
  </div>
</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**
