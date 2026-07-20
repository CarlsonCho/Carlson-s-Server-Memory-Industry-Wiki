# ⚙️ General Server Overview

일반 서버(범용 CPU 서버)는 전 세계 데이터센터와 클라우드 인프라의 근간을 이루는 전통적 컴퓨팅 시스템입니다. 이 페이지에서는 범용 서버의 핵심 시장 점유율, 시장 규모 및 하드웨어 아키텍처를 다룹니다.

---

<style>
.overview-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  text-align: center;
  background-color: #1e293b !important;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
.chart-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff !important;
  margin-top: 0 !important;
  margin-bottom: 24px !important;
  border: none !important;
  padding: 0 !important;
}
.pie-chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
}
.pie-chart-svg {
  transform: rotate(-90deg);
  border-radius: 50%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.pie-chart-svg:hover {
  transform: rotate(-90deg) scale(1.05);
}
.legend-row {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
  font-size: 0.85rem;
}
.legend-item {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #cbd5e1 !important;
  font-weight: 600;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.custom-btn {
  transition: transform 0.2s, filter 0.2s, box-shadow 0.2s;
}
.custom-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.15);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
</style>

## 🥧 Section 1. 글로벌 서버 CPU 시장 점유율 (Market Share)

일반 서버의 연산 성능과 호환성을 결정하는 서버용 CPU 시장의 주요 브랜드별 점유율입니다. (2026년 추정치 기준)

<div class="overview-section-container">
  <h4 class="chart-title">2026 글로벌 서버용 CPU 시장 점유율 (추정치)</h4>
  <div class="pie-chart-wrapper">
    <svg width="200" height="200" viewBox="0 0 100 100" class="pie-chart-svg">
      <!-- Intel: 65% -->
      <circle cx="50" cy="50" r="25" fill="none" stroke="#00c8ff" stroke-width="50" stroke-dasharray="102.1 157.08" stroke-dashoffset="0" />
      <!-- AMD: 30% -->
      <circle cx="50" cy="50" r="25" fill="none" stroke="#ED1C24" stroke-width="50" stroke-dasharray="47.12 157.08" stroke-dashoffset="-102.1" />
      <!-- ARM & Others: 5% -->
      <circle cx="50" cy="50" r="25" fill="none" stroke="#a855f7" stroke-width="50" stroke-dasharray="7.85 157.08" stroke-dashoffset="-149.22" />
    </svg>
    <div class="legend-row">
      <div class="legend-item"><span class="dot" style="background-color: #00c8ff; box-shadow: 0 0 8px rgba(0, 200, 255, 0.6);"></span> Intel (65%)</div>
      <div class="legend-item"><span class="dot" style="background-color: #ED1C24; box-shadow: 0 0 8px rgba(237, 28, 36, 0.6);"></span> AMD (30%)</div>
      <div class="legend-item"><span class="dot" style="background-color: #a855f7; box-shadow: 0 0 8px rgba(168, 85, 247, 0.6);"></span> ARM 계열 및 기타 (5%)</div>
    </div>
  </div>
</div>

👇 **아래 대표 기업 버튼을 클릭하시면 각 CPU/서버 플랫폼 제조사의 상세 로드맵 페이지로 이동합니다.**

<div style="display: flex; gap: 12px; margin: 20px 0; justify-content: center; flex-wrap: wrap;">
  <a href="/intel-roadmap" style="padding: 10px 20px; background-color: #00c8ff; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">Intel CPU 로드맵</a>
  <a href="/amd-cpu-roadmap" style="padding: 10px 20px; background-color: #ED1C24; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">AMD CPU 로드맵</a>
  <a href="/aws-roadmap" style="padding: 10px 20px; background-color: #FF9900; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">AWS Graviton 로드맵</a>
  <a href="/ampere-roadmap" style="padding: 10px 20px; background-color: #a855f7; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">Ampere ARM 로드맵</a>
</div>

---

## 📈 Section 2. 일반 서버 시장 규모 추이 (Market Size)

글로벌 일반 CPU 서버 시장의 투자 추이입니다. (단위: $B, 10억 달러)

<div style="display: flex; align-items: flex-end; justify-content: space-between; height: 300px; border-bottom: 2px solid #555; padding-bottom: 10px; margin: 40px 0;">
  <!-- 2023 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$110B</div>
    <div style="width: 25px; height: 55%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2023년 시장 규모: $110B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2023</div>
  </div>
  <!-- 2024 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$115B</div>
    <div style="width: 25px; height: 57.5%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2024년 시장 규모: $115B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2024</div>
  </div>
  <!-- 2025 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$120B</div>
    <div style="width: 25px; height: 60%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2025년 시장 규모: $120B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2025</div>
  </div>
  <!-- 2026 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$125B</div>
    <div style="width: 25px; height: 62.5%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2026년 시장 규모: $125B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2026</div>
  </div>
  <!-- 2027 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$132B</div>
    <div style="width: 25px; height: 66%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2027년(E) 시장 규모: $132B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2027(E)</div>
  </div>
  <!-- 2028 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$140B</div>
    <div style="width: 25px; height: 70%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2028년(E) 시장 규모: $140B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2028(E)</div>
  </div>
  <!-- 2029 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$150B</div>
    <div style="width: 25px; height: 75%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2029년(E) 시장 규모: $150B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2029(E)</div>
  </div>
  <!-- 2030 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px; color: #38bdf8;">$164B</div>
    <div style="width: 25px; height: 82%; background-color: #0284c7; border-radius: 4px 4px 0 0; cursor: pointer;" title="2030년(E) 시장 규모: $164B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2030(E)</div>
  </div>
</div>

> **Insight:** 범용 일반 CPU 서버 시장은 AI 서버와 달리 연간 3~5% 내외의 안정적인 성숙기 성장을 나타내고 있습니다. 기존 DB 쿼리 처리, 레거시 서비스 호스팅 및 가상화 서버 요구는 여전히 대다수를 차지하며 점진적으로 고효율 CPU 플랫폼으로 개량 중입니다.

---

## 🧠 Section 3. 일반 서버 하드웨어 아키텍처 (Hardware Structure)

단일 범용 CPU 서버의 핵심 하드웨어 아키텍처 구성 요소 구조입니다. **메모리 계층(Memory)** 노드 및 아래 버튼을 클릭하시면 상세 [Memory Overview](/memory-overview) 페이지로 이동합니다.

```mermaid
flowchart TD
    classDef rootStyle fill:#1e293b,stroke:#0284c7,stroke-width:2px,color:#fff,font-weight:bold;
    classDef memoryStyle fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#fff,font-weight:bold,cursor:pointer;
    classDef nodeStyle fill:#0f172a,stroke:#334155,color:#e2e8f0;

    Root(("범용 CPU 서버<br/>핵심 구조")):::rootStyle
    
    Compute["💻 연산 장치 (Compute)"]:::nodeStyle
    Memory["💾 메모리 계층 (Memory Overview ↗)"]:::memoryStyle
    IO["🌐 통신 및 스토리지 (I/O & Storage)"]:::nodeStyle
    Infra["🔌 전력 및 인프라 (Power & Chassis)"]:::nodeStyle

    Root --> Compute
    Root --> Memory
    Root --> IO
    Root --> Infra

    Compute --> CPU["Multi-Core CPU (직렬/다중 작업 연산)"]
    Compute --> Chipset["System Chipset (PCIe 호스트 제어)"]

    Memory --> DDR5["DDR5 RDIMM (주기억 장치) ↗"]:::memoryStyle
    Memory --> L3["L3 Cache (CPU 내부 캐시 메모리)"]

    IO --> SSD["NVMe SSD (초고속 스토리지) ↗"]:::memoryStyle
    IO --> PCIe["PCIe Gen5 / Gen6 (시스템 확장 버스)"]
    IO --> NIC["SmartNIC / Ethernet (네트워크 연결)"]

    Infra --> Air["공랭식 시스템 (Heat Sink & Fan)"]
    Infra --> PSU["Redundant PSU (전력 이중화)"]

    click Memory "/memory-overview" "Memory Overview 페이지로 이동"
    click DDR5 "/memory-overview" "Memory Overview 페이지로 이동"
    click SSD "/memory-overview" "Memory Overview 페이지로 이동"
```

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <a href="/memory-overview" style="padding: 12px 24px; background-color: #0284c7; color: white; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);" class="custom-btn">
    💾 Memory Overview (DRAM/NAND 시장 및 기술 로드맵) 분석 이동 ↗
  </a>
</div>
