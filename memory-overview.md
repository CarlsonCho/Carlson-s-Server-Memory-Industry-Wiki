---
title: Memory Overview (DRAM & NAND)
description: 글로벌 메모리(DRAM, NAND) 시장 점유율, 성장 추이 및 주요 업체별 미세공정 기술 로드맵
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
  border: 1px solid #334155;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);
}
.chart-title {
  font-size: 1.15rem;
  font-weight: 700;
  color: #f8fafc !important;
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
  color: #e2e8f0 !important;
  font-weight: 600;
}
.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}
.insight-box {
  background-color: rgba(56, 189, 248, 0.1);
  border-left: 4px solid #38bdf8;
  padding: 16px;
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
.tech-card-badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.75rem;
  font-weight: bold;
  margin-right: 6px;
}
.badge-samsung { background-color: rgba(20, 110, 245, 0.2); color: #60a5fa; border: 1px solid #3b82f6; }
.badge-hynix { background-color: rgba(239, 68, 68, 0.2); color: #f87171; border: 1px solid #ef4444; }
.badge-micron { background-color: rgba(168, 85, 247, 0.2); color: #c084fc; border: 1px solid #a855f7; }
</style>

# 💾 글로벌 메모리 반도체 산업 개요 (Memory Overview)

AI 서버 및 데이터센터 인프라 확장에 따라 초고속 **DRAM(HBM/DDR5)** 및 대용량 **NAND Flash(eSSD)** 메모리의 중요성이 극대화되고 있습니다. 본 페이지에서는 글로벌 메모리 시장의 **점유율, 시장 규모 전망, 기업별 미세공정 및 적층 로드맵**을 상세히 분석합니다.

---

👇 **아래 버튼을 클릭하시면 각 반도체별 상세 분석 페이지로 이동합니다.**

<div style="display: flex; gap: 16px; margin: 24px 0 32px 0; justify-content: center; flex-wrap: wrap;">
  <a href="/dram-overview" style="padding: 12px 24px; background-color: #3b82f6; color: white; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(59, 130, 246, 0.4);" class="custom-btn">
    🧠 DRAM Overview (HBM & 미세공정) 바로가기 ↗
  </a>
  <a href="/nand-overview" style="padding: 12px 24px; background-color: #10b981; color: white; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-flex; align-items: center; gap: 8px; box-shadow: 0 4px 14px rgba(16, 185, 129, 0.4);" class="custom-btn">
    💾 NAND Overview (3D 적층 & eSSD) 바로가기 ↗
  </a>
</div>

## 🥧 Section 1. 글로벌 DRAM & NAND 시장 점유율 (Market Share)

메모리 반도체 시장은 DRAM 3사 과점 체제와 NAND 5사 경쟁 구도로 재편되어 있으며, AI 전용 고대역폭 메모리(HBM) 주도권에 따라 수익구조가 급변하고 있습니다.

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin: 30px 0;">

  <!-- DRAM Market Share Chart -->
  <div class="overview-section-container" style="margin: 0;">
    <h4 class="chart-title">📊 DRAM 글로벌 시장 점유율 (2025~2026E)</h4>
    <div class="pie-chart-wrapper">
      <svg width="180" height="180" viewBox="0 0 100 100" class="pie-chart-svg">
        <!-- Samsung 41% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#3b82f6" stroke-width="50" stroke-dasharray="64.4 157.08" stroke-dashoffset="0" />
        <!-- SK Hynix 34% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#ef4444" stroke-width="50" stroke-dasharray="53.4 157.08" stroke-dashoffset="-64.4" />
        <!-- Micron 21% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#a855f7" stroke-width="50" stroke-dasharray="33.0 157.08" stroke-dashoffset="-117.8" />
        <!-- Others 4% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#64748b" stroke-width="50" stroke-dasharray="6.28 157.08" stroke-dashoffset="-150.8" />
      </svg>
      <div class="legend-row">
        <div class="legend-item"><span class="dot" style="background-color: #3b82f6;"></span> 삼성전자 (41%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #ef4444;"></span> SK하이닉스 (34%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #a855f7;"></span> 마이크론 (21%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #64748b;"></span> 기타/CXMT (4%)</div>
      </div>
    </div>
  </div>

  <!-- NAND Market Share Chart -->
  <div class="overview-section-container" style="margin: 0;">
    <h4 class="chart-title">💾 NAND Flash 글로벌 시장 점유율 (2025~2026E)</h4>
    <div class="pie-chart-wrapper">
      <svg width="180" height="180" viewBox="0 0 100 100" class="pie-chart-svg">
        <!-- Samsung 32% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#3b82f6" stroke-width="50" stroke-dasharray="50.2 157.08" stroke-dashoffset="0" />
        <!-- SK Hynix + Solidigm 20% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#ef4444" stroke-width="50" stroke-dasharray="31.4 157.08" stroke-dashoffset="-50.2" />
        <!-- Kioxia 19% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#10b981" stroke-width="50" stroke-dasharray="29.8 157.08" stroke-dashoffset="-81.6" />
        <!-- Micron 12% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#a855f7" stroke-width="50" stroke-dasharray="18.8 157.08" stroke-dashoffset="-111.4" />
        <!-- WDC 11% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#f59e0b" stroke-width="50" stroke-dasharray="17.2 157.08" stroke-dashoffset="-130.2" />
        <!-- YMTC/Others 6% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#64748b" stroke-width="50" stroke-dasharray="9.68 157.08" stroke-dashoffset="-147.4" />
      </svg>
      <div class="legend-row">
        <div class="legend-item"><span class="dot" style="background-color: #3b82f6;"></span> 삼성전자 (32%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #ef4444;"></span> SK하이닉스/솔리다임 (20%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #10b981;"></span> 키옥시아 (19%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #a855f7;"></span> 마이크론 (12%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #f59e0b;"></span> WDC (11%)</div>
      </div>
    </div>
  </div>

</div>

<div class="insight-box">
  <div class="insight-box-title">💡 HBM & eSSD 시장 주도권 Insight</div>
  <div class="insight-box-text">
    • <strong>DRAM:</strong> 단순 생산량에서는 삼성전자가 1위를 유지하고 있으나, NVIDIA GPU용 <strong>HBM3e 및 HBM4</strong> 시장에서는 <strong>SK하이닉스가 50% 이상의 독보적 점유율</strong>로 매출 성장 및 영업이익률을 선도하고 있습니다.<br/>
    • <strong>NAND:</strong> 초고용량 <strong>eSSD (Enterprise SSD, 64TB/128TB+)</strong> 수혜로 SK하이닉스 자회사인 솔리다임(Solidigm)의 QLC 기반 대용량 SSD 매출이 고속 상승 중입니다.
  </div>
</div>

---

## 📈 Section 2. DRAM 및 NAND 시장 규모 및 성장률 (Market Size & CAGR)

AI 서버 한 대당 탑재되는 메모리 용량이 기존 서버 대비 **DRAM은 8배(HBM 포함), NAND는 3배 이상 증가**하면서 메모리 시장 규모가 가파르게 상승하고 있습니다.

### 1. DRAM & NAND 글로벌 시장 규모 추이 ($B)

| 구분 | 2023 | 2024 | 2025 (E) | 2026 (E) | 2027 (E) | 2028 (E) | 2030 (E) | CAGR (23-30) |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **DRAM 시장 ($B)** | $52B | $90B | $125B | $160B | $195B | $230B | **$310B** | **+29.1%** |
| **NAND 시장 ($B)** | $38B | $68B | $85B | $105B | $125B | $148B | **$200B** | **+26.8%** |
| **합계 ($B)** | **$90B** | **$158B** | **$210B** | **$265B** | **$320B** | **$378B** | **$510B** | **+28.1%** |

---

## 🗺️ Section 3. 주요 업체별 Tech Node & Product 로드맵

### 1. DRAM 선단 공정 (1a/1b/1c/1d) 및 HBM 로드맵

| 제조사 | 1a nm | 1b nm | 1c nm | 1d nm / 3D DRAM | HBM3e (8/12단) | HBM4 (12/16단) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| <span class="tech-card-badge badge-samsung">삼성전자</span> | 14nm EUV (2021) | 12nm급 (2023) | 11nm급 (2024~2025) | Sub-10nm VCT (2027E) | 36GB 12H (Shinebolt) | 48GB 16H (Custom Base Die) |
| <span class="tech-card-badge badge-hynix">SK하이닉스</span> | 14nm EUV (2021) | 12nm급 (2023) | 11nm급 (2025 양산) | 3D Stack DRAM (2027E) | **36GB 12H (MR-MUF 공정)** | **2026E 양산 (TSMC 3nm 본딩)** |
| <span class="tech-card-badge badge-micron">마이크론</span> | 1α (EUV 미적용) | 1β (EUV 미적용) | 1γ (EUV 최초 적용) | 1δ nm | 36GB 12H 탑재 | 2026E 개발 목표 |

---

### 2. NAND Flash 적층(Layer) 기술 로드맵

| 제조사 | 200단 세대 | 300단 세대 | 400단 이상 세대 | 대표 브랜드 및 핵심 기술 |
| :--- | :--- | :--- | :--- | :--- |
| <span class="tech-card-badge badge-samsung">삼성전자</span> | V-NAND V8 (236L) | **V-NAND V9 (290L, 2024)** | V-NAND V10 (400L+, 2026E) | COP (Cell Over Peri) / BVH 공정 |
| <span class="tech-card-badge badge-hynix">SK하이닉스 / 솔리다임</span> | 238L 4D NAND | **321L 4D NAND (2025 양산)** | 400L+ (2027E) | PUC (Peri Under Cell) / QLC 64TB+ eSSD |
| <span class="tech-card-badge badge-micron">마이크론</span> | 232L G7 | 276L G8 / 300L+ G9 | 400L+ | CuA (CMOS under Array) |
| <span class="tech-card-badge badge-hynix" style="color:#10b981; border-color:#10b981;">키옥시아 / WDC</span> | BiCS6 (162L) | BiCS8 (218L, CBA) | BiCS9 / BiCS10 (300L~400L+) | CBA (CMOS Directly Bonded to Array) |

---

## ⚡ Section 4. 차세대 메모리 주요 혁신 이슈

### 1. HBM4의 구조적 대전환 (Custom Base Die)
- **2048-bit 대역폭 확대:** HBM3e까지 유지되던 1024-bit 물리 버스 폭이 **HBM4부터 2048-bit로 2배 확장**됩니다.
- **파운드리 로직 공정 도입:** 기존 메모리 공정 기반 베이스 다이(Base Die) 대신 **TSMC 3nm / 삼성 4nm 파운드리 공정**으로 제작된 커스텀 로직 다이가 결합됩니다.

### 2. 3D DRAM (Vertical Channel Transistor)
- DRAM 미세화가 10nm 한계에 직면함에 따라 평면 커패시터/트랜지스터를 **수직(Vertical) 구조로 세우는 3D DRAM 기술** 개발이 진행되고 있습니다. (2027~2028년 본격 도입 개시)

---

👈 **[AI Server Overview](/ai-server-overview) 또는 [General Server Overview](/general-server-overview)로 돌아가기**
