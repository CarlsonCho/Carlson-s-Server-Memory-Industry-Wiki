---
title: DRAM Overview
description: 글로벌 DRAM 반도체 시장 점유율, 제품군 분류(DIMM, HBM, LPDDR, CXL), 미세공정(1a~1d nm) 및 아키텍처 로드맵
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
.prod-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin: 20px 0;
}
.prod-card {
  background-color: #0f172a;
  border: 1px solid #334155;
  border-radius: 10px;
  padding: 18px;
}
.prod-title {
  font-weight: bold;
  font-size: 1.05rem;
  color: #38bdf8;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>

# 🧠 DRAM Overview (글로벌 DRAM 제품군 및 기술 분석)

AI 가속기(GPU/NPU) 및 고성능 서버의 초고속 데이터 처리를 담당하는 **DRAM(Dynamic Random Access Memory)** 산업 분석 페이지입니다. 시장 점유율, DRAM 기반 제품군 분류(DIMM, HBM, LPDDR, CXL), 미세공정(1a~1d nm) 및 3D DRAM 로드맵을 다룹니다.

---

## 🥧 Section 1. DRAM 글로벌 시장 점유율 (Market Share)

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin: 30px 0;">

  <!-- Overall DRAM Share -->
  <div class="overview-section-container" style="margin: 0;">
    <h4 class="chart-title">📊 전체 DRAM 글로벌 시장 점유율 (2025E)</h4>
    <div class="pie-chart-wrapper">
      <svg width="180" height="180" viewBox="0 0 100 100" class="pie-chart-svg">
        <circle cx="50" cy="50" r="25" fill="none" stroke="#3b82f6" stroke-width="50" stroke-dasharray="64.4 157.08" stroke-dashoffset="0" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#ef4444" stroke-width="50" stroke-dasharray="53.4 157.08" stroke-dashoffset="-64.4" />
        <circle cx="50" cy="50" r="25" fill="none" stroke="#a855f7" stroke-width="50" stroke-dasharray="33.0 157.08" stroke-dashoffset="-117.8" />
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

  <!-- HBM Specific Share -->
  <div class="overview-section-container" style="margin: 0;">
    <h4 class="chart-title">⚡ AI 전용 HBM(고대역폭 메모리) 점유율 (2025E)</h4>
    <div class="pie-chart-wrapper">
      <svg width="180" height="180" viewBox="0 0 100 100" class="pie-chart-svg">
        <!-- SK Hynix 53% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#ef4444" stroke-width="50" stroke-dasharray="83.2 157.08" stroke-dashoffset="0" />
        <!-- Samsung 38% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#3b82f6" stroke-width="50" stroke-dasharray="59.7 157.08" stroke-dashoffset="-83.2" />
        <!-- Micron 9% -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#a855f7" stroke-width="50" stroke-dasharray="14.1 157.08" stroke-dashoffset="-142.9" />
      </svg>
      <div class="legend-row">
        <div class="legend-item"><span class="dot" style="background-color: #ef4444;"></span> SK하이닉스 (53%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #3b82f6;"></span> 삼성전자 (38%)</div>
        <div class="legend-item"><span class="dot" style="background-color: #a855f7;"></span> 마이크론 (9%)</div>
      </div>
    </div>
  </div>

</div>

---

## 📦 Section 2. DRAM 기반 주요 제품군 및 폼팩터 (DRAM Product Portfolio)

DRAM 다이(Die)는 적용 시스템의 전력, 대역폭, 폼팩터 제약에 따라 다양한 모듈 및 패키지 형태로 제작됩니다. 글로벌 DRAM 3사(삼성전자, SK하이닉스, 마이크론)의 주요 대표 제품군 분류는 다음과 같습니다.

<div class="prod-grid">

  <div class="prod-card">
    <div class="prod-title">🖥️ 1. 서버 및 PC 모듈 (DIMM)</div>
    <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">
      메인보드 소켓에 장착하는 표준 메모리 모듈.
    </p>
    <ul style="font-size: 0.83rem; color: #94a3b8; padding-left: 18px; margin: 8px 0 0 0;">
      <li><a href="/rdimm-overview" style="color: #38bdf8; font-weight: bold;">RDIMM ↗:</a> 서버/데이터센터용 ECC 및 RCD 칩 탑재 모듈 (DDR5 32GB~256GB)</li>
      <li><a href="/mcrdimm-overview" style="color: #f472b6; font-weight: bold;">MCRDIMM / MRDIMM ↗:</a> 2개 랭크 동시 MUX 처리로 대역폭 2배 향상 (8.8 ~ 12.8 GT/s)</li>
      <li><strong>UDIMM / SODIMM:</strong> PC, 미니 PC용 표준 폼팩터</li>
    </ul>
  </div>

  <div class="prod-card">
    <div class="prod-title">⚡ 2. AI & 초고속 그래픽 (HBM / GDDR)</div>
    <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">
      GPU 및 AI 가속기 전용 초고대역폭 메모리.
    </p>
    <ul style="font-size: 0.83rem; color: #94a3b8; padding-left: 18px; margin: 8px 0 0 0;">
      <li><a href="/hbm-overview" style="color: #60a5fa; font-weight: bold;">HBM (High Bandwidth Memory) ↗:</a> TSV 8~16단 적층 & 2048-bit 버스 (HBM3e / HBM4)</li>
      <li><a href="/gddr-overview" style="color: #34d399; font-weight: bold;">GDDR6X / GDDR7 ↗:</a> PAM3 3단 신호로 GPU VRAM 초고속 동작 (28 ~ 32 GT/s+)</li>
    </ul>
  </div>

  <div class="prod-card">
    <div class="prod-title">📱 3. 저전력 모듈 (SOCAMM & LPCAMM2)</div>
    <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">
      저전력 AI 서버 및 PC/노트북용 착탈식 LPDDR 모듈.
    </p>
    <ul style="font-size: 0.83rem; color: #94a3b8; padding-left: 18px; margin: 8px 0 0 0;">
      <li><a href="/socamm-overview" style="color: #c084fc; font-weight: bold;">SOCAMM ↗:</a> 서버 전용 저전력 착탈식 모듈 (서버급 RAS, Sideband ECC, 클라우드 AI 서버)</li>
      <li><a href="/lpcamm-overview" style="color: #38bdf8; font-weight: bold;">LPCAMM2 ↗:</a> JEDEC 표준 PC/노트북용 차세대 모듈 (공간 64% 절감, SODIMM 대체)</li>
    </ul>
  </div>

  <div class="prod-card">
    <div class="prod-title">🔌 4. 차세대 확장 메모리 (CXL / CMM-D)</div>
    <p style="font-size: 0.88rem; color: #cbd5e1; line-height: 1.5;">
      PCIe 버스 기반 메인 메모리 용량 확장 솔루션.
    </p>
    <ul style="font-size: 0.83rem; color: #94a3b8; padding-left: 18px; margin: 8px 0 0 0;">
      <li><a href="/cxl-overview" style="color: #fbbf24; font-weight: bold;">CXL Memory Expander (CMM-D) ↗:</a> PCIe 5.0/6.0 슬롯 연결 TB/PB 급 확장</li>
      <li><strong>CXL 2.0 / 3.0:</strong> 서버 간 DRAM 메모리 풀링(Pooling) 공유 기술</li>
    </ul>
  </div>

</div>

### 📋 주요 DRAM 제품군별 전송 속도(GT/s) 및 대역폭 비교

| 제품군 (Product Category) | 주 인터페이스 및 표준 | 핀 전송 속도 (Transfer Rate) | 전송 대역폭 (Bandwidth) | 주요 적용 분야 (Target Application) | 글로벌 3사 대표 브랜드 / 제품 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [<strong style="color: #38bdf8;">Server RDIMM ↗</strong>](/rdimm-overview) | DDR5 (JEDEC) | **4.8 ~ 8.0 GT/s** | ~64 GB/s (채널당) | 엔터프라이즈 데이터센터, 범용 CPU 서버 | <span class="tech-card-badge badge-samsung">삼성</span> 32Gb DDR5 RDIMM<br/><span class="tech-card-badge badge-hynix">SK하이닉스</span> 96GB/128GB DDR5 |
| [<strong style="color: #f472b6;">Next-Gen MCRDIMM ↗</strong>](/mcrdimm-overview) | DDR5 MCR/MR | **8.8 ~ 12.8 GT/s** | **~128 GB/s (2배)** | 차세대 AI/HPC 인텔 Xeon, AMD EPYC | <span class="tech-card-badge badge-hynix">SK하이닉스</span> MCRDIMM (8.8 GT/s)<br/><span class="tech-card-badge badge-samsung">삼성</span> MRDIMM |
| [<strong style="color: #60a5fa;">HBM (High Bandwidth Memory) ↗</strong>](/hbm-overview) | TSV / 2.5D CoWoS | **8.0 ~ 10.0+ GT/s** *(HBM4)* | **1.2 ~ 2.0+ TB/s** | NVIDIA Blackwell/Rubin, AMD Instinct GPU | <span class="tech-card-badge badge-hynix">SK하이닉스</span> HBM3e 12H / HBM4<br/><span class="tech-card-badge badge-samsung">삼성</span> Shinebolt HBM3e |
| [<strong style="color: #34d399;">GDDR (Graphics DRAM) ↗</strong>](/gddr-overview) | GDDR6X / GDDR7 | **28.0 ~ 32.0 GT/s** | 1.0 ~ 1.5 TB/s | 워크스테이션 GPU, AI 추론 가속기, 게이밍 | <span class="tech-card-badge badge-samsung">삼성</span> 32.0 GT/s GDDR7<br/><span class="tech-card-badge badge-micron">마이크론</span> GDDR6X |
| [<strong style="color: #c084fc;">Server SOCAMM ↗</strong>](/socamm-overview) | LPDDR5X / LPDDR6 | **8.5 ~ 10.7 GT/s** | ~77 GB/s | 초저전력 클라우드 AI 서버, 엣지 컴퓨팅 | <span class="tech-card-badge badge-samsung">삼성</span> Server SOCAMM<br/><span class="tech-card-badge badge-hynix">SK하이닉스</span> SOCAMM |
| [<strong style="color: #38bdf8;">Client LPCAMM2 ↗</strong>](/lpcamm-overview) | LPDDR5X (JEDEC) | **7.5 ~ 9.6 GT/s** | ~77 GB/s | 온디바이스 AI PC, 프리미엄 AI 랩톱 | <span class="tech-card-badge badge-samsung">삼성</span> LPCAMM2<br/><span class="tech-card-badge badge-micron">마이크론</span> LPCAMM2 |
| [<strong style="color: #fbbf24;">CXL Memory (CMM-D) ↗</strong>](/cxl-overview) | CXL 2.0 / 3.0 (PCIe 5.0) | **4.8 ~ 6.4 GT/s** | ~64 GB/s | 대규모 인기억(In-Memory) DB, AI 서버 확장 | <span class="tech-card-badge badge-samsung">삼성</span> CMM-D (CXL DRAM)<br/><span class="tech-card-badge badge-hynix">SK하이닉스</span> CXL 2.0 96GB |

---

## 🗺️ Section 3. DRAM 미세공정 (1a ~ 1d nm) 및 3D DRAM 로드맵

DRAM 미세화는 10nm 초반(1b, 1c)에 진입하면서 노광 한계 및 커패시터 종횡비(Aspect Ratio) 물리적 한계에 부딪히고 있습니다. 이를 극복하기 위한 EUV 다중 패터닝 및 3D DRAM 구조 로드맵입니다.

| 세대명 | 미세선폭 추정 | EUV 레이어 도입 | 양산 시기 | 핵심 기술 특징 및 혁신 포인트 |
| :--- | :--- | :--- | :--- | :--- |
| **1a nm (4세대)** | ~14nm급 | 1~5개 레이어 | 2021년~ | EUV 리소그래피 최초 적용. 웨이퍼당 칩 수율 증대 |
| **1b nm (5세대)** | ~12nm급 | 4~6개 레이어 (마이크론 제외) | 2023년~ | High-k 신소재 적용, HBM3e 기본 베이스 칩으로 활용 |
| **1c nm (6세대)** | ~11nm급 | 6~8개 레이어 확산 | 2024~2025년 | 미세 패턴 한계 극복, 2025-2026년 주력 서버 DDR5/HBM4 탑재 |
| **1d nm (7세대)** | ~10nm급 | High-NA EUV 검토 | 2026~2027년 | 평면 DRAM 패키징의 수평적 미세화 최후 세대 |
| **3D DRAM** | Sub-10nm | 3D Stack / VCT | 2027~2028년(E) | Vertical Channel Transistor 수직 셀 적층 구조 도입 |

---

## 🚀 Section 4. HBM (High Bandwidth Memory) 발전 세대 스펙 비교

HBM은 TSV(Through-Silicon Via, 실리콘 관통 가아) 기술로 DRAM 다이를 수직 적층하여 대역폭 병목을 극복한 AI 전용 메모리입니다.

| 구 분 | HBM2e | HBM3 | HBM3e | **HBM4 (차세대)** |
| :--- | :--- | :--- | :--- | :--- |
| **주요 적용 GPU** | A100 | H100 / MI300X | H200 / B200 / MI325X | **Rubin (R100) / GR200** |
| **핀 전송 속도 (Pin Speed)** | 3.2 ~ 3.6 GT/s | 5.6 ~ 6.4 GT/s | **8.0 ~ 9.6 GT/s** | **8.0 ~ 10.0+ GT/s** |
| **최대 대역폭 (Bandwidth)** | 460 GB/s | 819 GB/s | 1.2 TB/s ~ 1.6 TB/s | **2.0 TB/s 이상** |
| **버스 폭 (Bus Width)**| 1024-bit | 1024-bit | 1024-bit | **2048-bit (2배 확장)** |
| **최대 적층 수** | 8단 (8H) | 12단 (12H) | 12단 / 16단 (12H/16H) | **12단 / 16단** |
| **베이스 다이 공정** | DRAM 공정 | DRAM 공정 | DRAM 개량 공정 | **파운드리 로직 (TSMC 3nm / 삼성 4nm)** |

---

👈 **[Memory Overview로 돌아가기](/memory-overview)**
