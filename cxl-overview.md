---
title: CXL Overview
description: 차세대 메모리 확장 CXL (Compute Express Link / CMM-D) 아키텍처, CXL 컨트롤러 ASIC 및 PCIe 버스 기반 E3.S 모듈 분석
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
.comp-card-cxl { border-left-color: #f59e0b; }
.comp-card-asic { border-left-color: #ef4444; }

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
.badge-cxl { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }
.badge-asic { background-color: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }

.insight-box {
  background-color: rgba(245, 158, 11, 0.1);
  border-left: 4px solid #f59e0b;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
}
.insight-box-title {
  font-weight: bold;
  color: #f59e0b;
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

# 🔌 CXL Overview (Compute Express Link 메모리 확장 솔루션)

**CXL (Compute Express Link)** 은 서버 CPU 메인 메모리 슬롯(RDIMM) 채널의 물리적 한계를 극복하기 위해 **PCIe 5.0 / 6.0 버스 아키텍처**를 활용하여 데이터센터 메모리 용량을 TB/PB 급으로 수평 확장하는 차세대 개방형 상호연결 인터페이스 규격입니다. 삼성전자 **CMM-D (CXL Memory Module DRAM)** 및 SK하이닉스 **CXL 2.0 / 3.0** 솔루션은 캐시 일관성(Cache Coherency) 및 메모리 풀링(Memory Pooling)을 제공합니다.

---

## 🛠️ Section 1. CXL 메모리 모듈 (CMM-D / E3.S 폼팩터) PCB 물리 구성도

아래 다이어그램은 EDSFF E3.S 및 PCIe 폼팩터 기반 **CXL 메모리 모듈** 상의 **CXL Controller ASIC**, DRAM IC 아레이 및 PCIe Gen5/Gen6 핀 물리 배치도입니다.

<div class="rdimm-board-container">
<div class="board-title">🟩 CXL 메모리 모듈 (CMM-D / E3.S) PCB 물리 토폴로지 (Board Topology)</div>
<div class="board-subtitle">※ CXL Controller ASIC (CXL.mem 캐시 일관성 변환) + DDR5 DRAM IC + PCIe Gen5 Connector</div>

<svg viewBox="0 0 1000 420" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #1c1917; border: 2px solid #f59e0b;">

<!-- Outer Substrate Base -->
<rect x="20" y="20" width="960" height="320" rx="12" fill="#292524" stroke="#d97706" stroke-width="2.5"/>

<!-- Left Edge Connector (PCIe Gen5 x8/x16 or EDSFF E3.S Connector) -->
<g fill="#d97706" stroke="#b45309">
<rect x="40" y="80" width="35" height="200" rx="3" fill="#f59e0b"/>
</g>
<text x="57" y="305" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">PCIe Gen5 x8</text>

<!-- 1. Central CXL Controller ASIC Chip -->
<g>
<rect x="150" y="100" width="180" height="160" rx="10" fill="#991b1b" stroke="#ef4444" stroke-width="3.5"/>
<text x="240" y="170" fill="#ffffff" font-size="18" font-weight="bold" text-anchor="middle">CXL Controller</text>
<text x="240" y="195" fill="#fca5a5" font-size="12" text-anchor="middle">ASIC (CXL.mem)</text>
<text x="240" y="215" fill="#fecaca" font-size="9" text-anchor="middle">Cache Coherency Engine</text>
</g>

<!-- Bus Trace (PCIe to CXL Controller) -->
<path d="M 75 180 L 150 180" stroke="#f59e0b" stroke-width="4" stroke-dasharray="3 3"/>

<!-- 2. High-Density DDR5 DRAM IC Array (8 Chips) -->
<g fill="#1e3a8a" stroke="#60a5fa" stroke-width="1.5">
<rect x="380" y="50" width="120" height="110" rx="5"/>
<rect x="520" y="50" width="120" height="110" rx="5"/>
<rect x="660" y="50" width="120" height="110" rx="5"/>
<rect x="800" y="50" width="120" height="110" rx="5"/>

<rect x="380" y="180" width="120" height="110" rx="5"/>
<rect x="520" y="180" width="120" height="110" rx="5"/>
<rect x="660" y="180" width="120" height="110" rx="5"/>
<rect x="800" y="180" width="120" height="110" rx="5"/>
</g>

<text x="440" y="110" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="580" y="110" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="720" y="110" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="860" y="110" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>

<text x="440" y="240" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="580" y="240" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="720" y="240" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>
<text x="860" y="240" fill="#93c5fd" font-size="12" font-weight="bold" text-anchor="middle">DRAM</text>

<!-- 3. PMIC / Management IC -->
<g>
<rect x="250" y="275" width="80" height="45" rx="4" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
<text x="290" y="302" fill="#fde68a" font-size="11" font-weight="bold" text-anchor="middle">PMIC</text>
</g>

</svg>

<div class="legend-chip-bar">
<div>🔴 <strong>CXL Controller ASIC:</strong> CXL.mem 프로토콜 ➔ DRAM 인터페이스 변환</div>
<div>🟡 <strong>PCIe Gen5 x8/x16:</strong> 64 GB/s 초고속 PCIe 인터커넥트</div>
<div>🔵 <strong>DDR5 DRAM IC:</strong> 대용량 확장 메모리 셀</div>
<div>🟧 <strong>E3.S / EDSFF 폼팩터:</strong> 서버 전면 핫스왑 지원 스토리지 타입 모듈</div>
</div>
</div>

---

## ⚡ Section 2. CXL 2.0 / 3.0 주요 특징 및 메모리 풀링

<div class="comp-card-grid">

  <div class="comp-card comp-card-asic">
    <div class="comp-header">
      <span class="badge badge-asic">프로토콜 핵심</span>
      <span>1. CXL Controller ASIC (CXL.mem)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>CXL.mem 프로토콜:</strong> CPU 캐시 메모리와 CXL 모듈 간의 캐시 일관성(Cache Coherency)을 유지하면서 **초저지연(Low Latency)으로 DRAM에 읽기/쓰기를 수행**하도록 변환합니다.
    </p>
  </div>

  <div class="comp-card comp-card-cxl">
    <div class="comp-header">
      <span class="badge badge-cxl">CXL 2.0 / 3.0 혁신</span>
      <span>2. 메모리 풀링 (Memory Pooling)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>동적 메모리 할당:</strong> 서버 랙 내 여러 CPU가 CXL 스위치를 통해 거대한 **DRAM 메모리 풀(Memory Pool)** 을 공유하고, 필요에 따라 TB급 메모리를 동적으로 할당받아 활용합니다.
    </p>
  </div>

</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**
