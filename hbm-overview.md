---
title: HBM Overview
description: 차세대 HBM3e / HBM4 (고대역폭 메모리) 패키징 구조, 2.5D/3D TSV 적층, Custom Base Die 및 2048-bit 버스 아키텍처 분석
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
.comp-card-hbm { border-left-color: #3b82f6; }
.comp-card-base { border-left-color: #ef4444; }
.comp-card-tsv { border-left-color: #f59e0b; }
.comp-card-cowos { border-left-color: #10b981; }

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
.badge-hbm { background-color: rgba(59, 130, 246, 0.2); color: #60a5fa; border: 1px solid #3b82f6; }
.badge-base { background-color: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }
.badge-tsv { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }
.badge-cowos { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }

.insight-box {
  background-color: rgba(59, 130, 246, 0.1);
  border-left: 4px solid #3b82f6;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
}
.insight-box-title {
  font-weight: bold;
  color: #3b82f6;
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

# ⚡ HBM Overview (High Bandwidth Memory 초고대역폭 메모리)

**HBM (High Bandwidth Memory)** 은 실리콘 관통 전극(**TSV**) 기술을 이용하여 DRAM 다이(Die)를 수직으로 8단, 12단, 16단으로 적층한 후 GPU/NPU와 2.5D 실리콘 인터포저(CoWoS) 상에서 통합하는 AI 전용 초고속 메모리입니다. 차세대 **HBM4**부터는 파운드리 **Custom Logic Base Die** 및 **2048-bit** 인터페이스를 적용하여 대역폭이 **2.0 TB/s 이상**으로 대폭 확장됩니다.

---

## 🛠️ Section 1. 2.5D CoWoS 및 3D HBM4 패키지 구조 다이어그램

아래 다이어그램은 **GPU SoC**와 **HBM4 3D Stack (Base Logic Die + 12H DRAM Stack)** 이 2.5D 실리콘 인터포저 상에 통합 배치된 물리 패키징 횡단면 구조입니다.

<div class="rdimm-board-container">
<div class="board-title">🟦 HBM4 3D 적층 & 2.5D CoWoS 시스템 패키징 구조 (Cross-Section Topology)</div>
<div class="board-subtitle">※ 파운드리 Custom Logic Base Die + 12단 TSV DRAM 수직 적층 + 실리콘 인터포저 버스</div>

<svg viewBox="0 0 1000 460" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #0f172a; border: 2px solid #3b82f6;">

<!-- Package Substrate Base -->
<rect x="30" y="380" width="940" height="40" rx="4" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
<text x="500" y="405" fill="#94a3b8" font-size="13" font-weight="bold" text-anchor="middle">Package Substrate (BGA Ball Contact to System Mainboard)</text>

<!-- 2.5D Silicon Interposer -->
<rect x="60" y="310" width="880" height="45" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
<text x="500" y="337" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">2.5D Silicon Interposer (Ultra-Dense Sub-Micron Interconnect Traces)</text>

<!-- Microbumps Array -->
<g fill="#fbbf24">
<circle cx="150" cy="365" r="4"/> <circle cx="200" cy="365" r="4"/> <circle cx="250" cy="365" r="4"/>
<circle cx="350" cy="365" r="4"/> <circle cx="400" cy="365" r="4"/> <circle cx="450" cy="365" r="4"/>
<circle cx="550" cy="365" r="4"/> <circle cx="600" cy="365" r="4"/> <circle cx="650" cy="365" r="4"/>
<circle cx="750" cy="365" r="4"/> <circle cx="800" cy="365" r="4"/> <circle cx="850" cy="365" r="4"/>
</g>

<!-- Left GPU / NPU SoC Chip -->
<g>
<rect x="80" y="120" width="360" height="170" rx="8" fill="#1e3a8a" stroke="#60a5fa" stroke-width="3"/>
<text x="260" y="195" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">GPU / NPU SoC Die</text>
<text x="260" y="220" fill="#93c5fd" font-size="12" text-anchor="middle">(NVIDIA Blackwell / Rubin, AMD Instinct)</text>
</g>

<!-- Right HBM4 3D Stack Package -->
<g>
<!-- HBM Custom Logic Base Die (Foundry 3nm/4nm) -->
<rect x="520" y="240" width="400" height="50" rx="6" fill="#991b1b" stroke="#ef4444" stroke-width="3"/>
<text x="720" y="270" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">Custom Logic Base Die (Foundry TSMC 3nm/삼성 4nm)</text>

<!-- 12H Vertical DRAM Stack Layers -->
<rect x="540" y="195" width="360" height="35" rx="3" fill="#0f4c81" stroke="#38bdf8" stroke-width="1.5"/>
<text x="720" y="217" fill="#e0f2fe" font-size="11" font-weight="bold" text-anchor="middle">DRAM Core Die 12 (Top Layer)</text>

<rect x="540" y="155" width="360" height="35" rx="3" fill="#0f4c81" stroke="#38bdf8" stroke-width="1.5"/>
<text x="720" y="177" fill="#e0f2fe" font-size="11" font-weight="bold" text-anchor="middle">DRAM Core Die 2 ~ 11 Stack (TSV Vias Connected)</text>

<rect x="540" y="115" width="360" height="35" rx="3" fill="#0f4c81" stroke="#38bdf8" stroke-width="1.5"/>
<text x="720" y="137" fill="#e0f2fe" font-size="11" font-weight="bold" text-anchor="middle">DRAM Core Die 1 (Bottom Layer)</text>

<!-- TSV Copper Vias (Vertical Vias) -->
<g stroke="#f59e0b" stroke-width="2" stroke-dasharray="3 3">
<line x1="600" y1="115" x2="600" y2="240"/>
<line x1="680" y1="115" x2="680" y2="240"/>
<line x1="760" y1="115" x2="760" y2="240"/>
<line x1="840" y1="115" x2="840" y2="240"/>
</g>
</g>

<!-- 2048-bit Ultra Wide Bus Lines between GPU and HBM -->
<g stroke="#ef4444" stroke-width="3">
<path d="M 440 270 L 520 270"/>
<text x="480" y="260" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">2048-bit Bus</text>
</g>

</svg>

<div class="legend-chip-bar">
<div>🔵 <strong>GPU / NPU SoC:</strong> 병렬 연산 코어</div>
<div>🔴 <strong>Custom Logic Base Die:</strong> HBM4 파운드리 베이스 다이</div>
<div>🔷 <strong>DRAM Core Stack:</strong> 12H/16H TSV 적층 다이</div>
<div>🟡 <strong>TSV Vias & Microbumps:</strong> 수직/수평 물리 인터커넥트</div>
<div>💠 <strong>2.5D Interposer:</strong> 2048-bit 초고대역폭 통신 버스</div>
</div>
</div>

---

## ⚡ Section 2. HBM 핵심 소자 및 차세대 HBM4 혁신 포인트

<div class="comp-card-grid">

  <div class="comp-card comp-card-base">
    <div class="comp-header">
      <span class="badge badge-base">HBM4 대혁신</span>
      <span>1. Custom Logic Base Die (파운드리 베이스 다이)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>파운드리 선단 공정 도입:</strong> HBM3e까지는 메모리 공정 기반 베이스 다이를 사용했으나, HBM4부터는 **TSMC 3nm / 삼성 4nm 파운드리 공정**으로 제작된 커스텀 로직 다이를 채택합니다.<br/>
      • <strong>GPU 맞춤형 연산 유닛 탑재:</strong> 베이스 다이 내부에 DFT 테스트 회로 및 맞춤형 IP를 직접 집적하여 신호 지터 억제 및 전력 효율을 극대화합니다.
    </p>
  </div>

  <div class="comp-card comp-card-hbm">
    <div class="comp-header">
      <span class="badge badge-hbm">대역폭 2배 확장</span>
      <span>2. 2048-bit 버스 폭 & TSV 적층</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>2048-bit 물리 버스:</strong> HBM3e의 1024-bit 버스 대비 **물리적 신호 핀 수가 2배로 확장**되어 동일 핀 속도에서도 대역폭이 2.0 TB/s 이상으로 늘어납니다.<br/>
      • <strong>MR-MUF & 하이브리드 본딩:</strong> 12단/16단 극미세 칩 간격을 실리콘 관통 전극(TSV)과 에폭시 액상 수지로 메우거나 칩 간 직접 금속 본딩(Hybrid Bonding)으로 연결합니다.
    </p>
  </div>

</div>

<div class="insight-box">
  <div class="insight-box-title">💡 GDDR vs HBM 비교 Insight</div>
  <div class="insight-box-text">
    • <strong>GDDR7:</strong> 32-bit 전용 신호선을 통해 핀당 32 GT/s 이상의 초고속 핀 속도로 작동하지만 대역폭 한계가 존재합니다.<br/>
    • <strong>HBM4:</strong> 핀당 속도는 8~10 GT/s 수준이나, 수천 개의 TSV를 통해 **2048-bit의 압도적인 물리 버스폭**을 형성하여 단일 팩 당 2.0 TB/s 이상의 초고대역폭을 구현합니다.
  </div>
</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**
