

<style>
.overview-section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 30px 0;
  text-align: center;
  background-color: #ffffff !important;
  padding: 24px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}
.chart-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #1e293b !important;
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
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
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
  color: #334155 !important;
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

## 🥧 Section 1. 글로벌 AI 가속기 시장 점유율 (Market Share)

AI 서버의 핵심 원가와 성능을 좌우하는 AI 연산 칩(GPU/NPU 등 가속기) 시장의 주요 플레이어 점유율입니다. 

<div class="overview-section-container">
  <h4 class="chart-title">2026 글로벌 AI 가속기(GPU/NPU) 시장 점유율 (추정치)</h4>
  <div class="pie-chart-wrapper">
    <svg width="200" height="200" viewBox="0 0 100 100" class="pie-chart-svg">
      <circle cx="50" cy="50" r="25" fill="none" stroke="#76b900" stroke-width="50" stroke-dasharray="133.52 157.08" stroke-dashoffset="0" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#ED1C24" stroke-width="50" stroke-dasharray="15.71 157.08" stroke-dashoffset="-133.52" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#4285F4" stroke-width="50" stroke-dasharray="4.71 157.08" stroke-dashoffset="-149.23" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="#FF9900" stroke-width="50" stroke-dasharray="3.14 157.08" stroke-dashoffset="-153.94" />
    </svg>
    <div class="legend-row">
      <div class="legend-item"><span class="dot" style="background-color: #76b900; box-shadow: 0 0 8px rgba(118, 185, 0, 0.6);"></span> NVIDIA (85%)</div>
      <div class="legend-item"><span class="dot" style="background-color: #ED1C24; box-shadow: 0 0 8px rgba(237, 28, 36, 0.6);"></span> AMD (10%)</div>
      <div class="legend-item"><span class="dot" style="background-color: #4285F4; box-shadow: 0 0 8px rgba(66, 133, 244, 0.6);"></span> Google (3%)</div>
      <div class="legend-item"><span class="dot" style="background-color: #FF9900; box-shadow: 0 0 8px rgba(255, 153, 0, 0.6);"></span> AWS & 기타 (2%)</div>
    </div>
  </div>
</div>

👇 **아래 기업 버튼을 클릭하시면 [Step 3. 주요 기업별 로드맵] 페이지로 이동하여 상세 전략을 확인할 수 있습니다.**

<div style="display: flex; gap: 12px; margin: 20px 0; justify-content: center; flex-wrap: wrap;">
  <a href="/nvidia-roadmap" style="padding: 10px 20px; background-color: #76b900; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">NVIDIA 로드맵</a>
  <a href="/amd-roadmap" style="padding: 10px 20px; background-color: #ED1C24; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">AMD 로드맵</a>
  <a href="/google-roadmap" style="padding: 10px 20px; background-color: #4285F4; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">Google (TPU)</a>
  <a href="/aws-roadmap" style="padding: 10px 20px; background-color: #FF9900; color: white; border-radius: 6px; text-decoration: none; font-weight: bold; cursor: pointer; text-align: center;" class="custom-btn">AWS (Trainium)</a>
</div>


---

## 📈 Section 2. AI 서버 시장 규모 및 성장률 (Market Size)

글로벌 AI 서버 출하량 및 가치 성장 추이입니다. (막대에 마우스를 올리면 상세 수치가 표시됩니다.)

<div style="display: flex; align-items: flex-end; justify-content: space-between; height: 300px; border-bottom: 2px solid #555; padding-bottom: 10px; margin: 40px 0;">
  <!-- 2023 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$45B</div>
    <div style="width: 25px; height: 7.5%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2023년 시장 규모: $45B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2023</div>
  </div>
  <!-- 2024 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$98B</div>
    <div style="width: 25px; height: 16.3%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2024년 시장 규모: $98B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2024</div>
  </div>
  <!-- 2025 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$150B</div>
    <div style="width: 25px; height: 25%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2025년 시장 규모: $150B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2025</div>
  </div>
  <!-- 2026 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$210B</div>
    <div style="width: 25px; height: 35%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2026년 시장 규모: $210B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2026</div>
  </div>
  <!-- 2027 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$280B</div>
    <div style="width: 25px; height: 46.6%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2027년(E) 시장 규모: $280B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2027(E)</div>
  </div>
  <!-- 2028 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$360B</div>
    <div style="width: 25px; height: 60%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2028년(E) 시장 규모: $360B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2028(E)</div>
  </div>
  <!-- 2029 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$450B</div>
    <div style="width: 25px; height: 75%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2029년(E) 시장 규모: $450B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2029(E)</div>
  </div>
  <!-- 2030 -->
  <div style="display: flex; flex-direction: column; align-items: center; justify-content: flex-end; width: 100%; height: 100%;">
    <div style="font-size: 0.8rem; font-weight: bold; margin-bottom: 8px;">$550B</div>
    <div style="width: 25px; height: 91.6%; background-color: #76b900; border-radius: 4px 4px 0 0; cursor: pointer;" title="2030년(E) 시장 규모: $550B"></div>
    <div style="font-size: 0.85rem; margin-top: 12px; color: #888;">2030(E)</div>
  </div>
</div>

> **Insight:** 2023년 초거대 LLM의 등장 이후 생성형 AI 시장이 개화하면서 AI 서버 시장은 매년 급격히 팽창하고 있습니다. 특히 2026년 현재는 학습뿐만 아니라 실시간 서빙을 위한 '추론(Inference)' 수요가 시장을 강력하게 견인 중이며, 2030년까지 지속적인 고도성장이 전망됩니다.
---


## 🧠 Section 3. AI 서버 하드웨어 아키텍처 (Hardware Structure)

단일 AI 서버 랙(Rack) 내부에 구성되는 핵심 하드웨어 컴포넌트 구조입니다. **메모리 계층(Memory)** 노드 및 아래 버튼을 클릭하시면 상세 [Memory Overview](/memory-overview) 페이지로 이동합니다.

```mermaid
flowchart TD
    classDef rootStyle fill:#1e293b,stroke:#38bdf8,stroke-width:2px,color:#fff,font-weight:bold;
    classDef memoryStyle fill:#0284c7,stroke:#38bdf8,stroke-width:2px,color:#fff,font-weight:bold,cursor:pointer;
    classDef nodeStyle fill:#0f172a,stroke:#334155,color:#e2e8f0;

    Root(("AI 서버<br/>핵심 구조")):::rootStyle
    
    Compute["💻 연산 장치 (Compute)"]:::nodeStyle
    Memory["💾 메모리 계층 (Memory Overview ↗)"]:::memoryStyle
    Interconnect["⚡ 초고속 상호연결 (Interconnect)"]:::nodeStyle
    Infra["❄️ 전력 및 냉각 (Infrastructure)"]:::nodeStyle

    Root --> Compute
    Root --> Memory
    Root --> Interconnect
    Root --> Infra

    Compute --> GPU["GPU / NPU (병렬 연산 코어)"]
    Compute --> CPU["Host CPU (데이터 제어 및 할당)"]

    Memory --> HBM["HBM (고대역폭 메모리) ↗"]:::memoryStyle
    Memory --> DDR5["DDR5 (시스템 메인 메모리) ↗"]:::memoryStyle

    Interconnect --> NVLink["NVLink / NVSwitch (GPU 병목 해소)"]
    Interconnect --> PCIe["PCIe Gen5 / Gen6 (시스템 버스)"]
    Interconnect --> IB["InfiniBand / Ultra Ethernet"]

    Infra --> Liquid["수랭식 시스템 (Liquid Cooling)"]
    Infra --> PSU["고효율 파워 서플라이"]

    click Memory "/memory-overview" "Memory Overview 페이지로 이동"
    click HBM "/memory-overview" "Memory Overview 페이지로 이동"
    click DDR5 "/memory-overview" "Memory Overview 페이지로 이동"
```

<div style="display: flex; justify-content: center; margin: 20px 0;">
  <a href="/memory-overview" style="padding: 12px 24px; background-color: #0284c7; color: white; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(2, 132, 199, 0.4);" class="custom-btn">
    💾 Memory Overview (DRAM/NAND 시장 및 기술 로드맵) 분석 이동 ↗
  </a>
</div>