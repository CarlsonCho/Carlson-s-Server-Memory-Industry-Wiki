---
title: GDDR Overview
description: 초고속 그래픽 DRAM (GDDR6X / GDDR7) 아키텍처, PAM3 3단 신호 변조 기술 및 GPU VRAM 패키징 분석
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
.comp-card-gddr { border-left-color: #10b981; }
.comp-card-pam3 { border-left-color: #f59e0b; }

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
.badge-gddr { background-color: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; }
.badge-pam3 { background-color: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; }

.insight-box {
  background-color: rgba(16, 185, 129, 0.1);
  border-left: 4px solid #10b981;
  padding: 18px;
  border-radius: 0 8px 8px 0;
  margin: 24px 0;
}
.insight-box-title {
  font-weight: bold;
  color: #10b981;
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

# 🎮 GDDR Overview (Graphics DRAM & PAM3 신호 기술)

**GDDR (Graphics Double Data Rate)** 은 그래픽 카드(NVIDIA GeForce RTX, Workstation GPU), AI 추론 전용 카드 및 게임 콘솔에 탑재되는 대표적인 초고속 독립형 SDRAM입니다. 최신 **GDDR7** 기술은 기존 NRZ(2레벨) 전송 방식 대신 **PAM3 (Pulse Amplitude Modulation 3-level)** 3단계 전압 변조 인코딩을 도입하여, 핀당 **28.0 ~ 32.0 GT/s** 및 단일 GPU 시스템당 **1.5 TB/s 대역폭**을 달성합니다.

---

## 🛠️ Section 1. GPU 보드 및 GDDR7 VRAM 배치 토폴로지 다이어그램

아래 다이어그램은 **GPU 코어**를 중심으로 방사형 점대점(Point-to-Point) 32-bit 인터페이스로 둘러싸인 **GDDR7 VRAM 칩셋 물리 배치도**입니다.

<div class="rdimm-board-container">
<div class="board-title">🟩 GPU 보드 상의 GDDR7 VRAM 실물 배치 토폴로지 (Board Topology)</div>
<div class="board-subtitle">※ Central GPU Core + 256-bit/384-bit 포인트 투 포인트 GDDR7 BGA 패키지 배치</div>

<svg viewBox="0 0 1000 440" width="100%" height="auto" style="border-radius: 10px; overflow: hidden; background: #064e3b; border: 2px solid #10b981;">

<!-- PCB Base -->
<rect x="20" y="20" width="960" height="400" rx="12" fill="#047857" stroke="#34d399" stroke-width="2.5"/>

<!-- Central GPU Core Package -->
<g>
<rect x="350" y="120" width="300" height="200" rx="12" fill="#1e293b" stroke="#76b900" stroke-width="3.5"/>
<text x="500" y="215" fill="#76b900" font-size="22" font-weight="bold" text-anchor="middle">GPU Core</text>
<text x="500" y="240" fill="#94a3b8" font-size="12" text-anchor="middle">(NVIDIA RTX 50 / Workstation GPU)</text>
</g>

<!-- Surrounding GDDR7 VRAM Chips (Point-to-Point Interface) -->
<!-- Left Side GDDR7 Chips -->
<g fill="#065f46" stroke="#10b981" stroke-width="2">
<rect x="180" y="100" width="110" height="65" rx="5"/>
<rect x="180" y="185" width="110" height="65" rx="5"/>
<rect x="180" y="270" width="110" height="65" rx="5"/>
</g>

<text x="235" y="138" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="235" y="223" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="235" y="308" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>

<!-- Right Side GDDR7 Chips -->
<g fill="#065f46" stroke="#10b981" stroke-width="2">
<rect x="710" y="100" width="110" height="65" rx="5"/>
<rect x="710" y="185" width="110" height="65" rx="5"/>
<rect x="710" y="270" width="110" height="65" rx="5"/>
</g>

<text x="765" y="138" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="765" y="223" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="765" y="308" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>

<!-- Top & Bottom GDDR7 Chips -->
<g fill="#065f46" stroke="#10b981" stroke-width="2">
<rect x="360" y="35" width="120" height="60" rx="5"/>
<rect x="520" y="35" width="120" height="60" rx="5"/>
<rect x="360" y="345" width="120" height="60" rx="5"/>
<rect x="520" y="345" width="120" height="60" rx="5"/>
</g>

<text x="420" y="70" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="580" y="70" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="420" y="380" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>
<text x="580" y="380" fill="#a7f3d0" font-size="12" font-weight="bold" text-anchor="middle">GDDR7</text>

<!-- Trace Lines -->
<g stroke="#f59e0b" stroke-width="1.5">
<path d="M 290 132 L 350 160"/>
<path d="M 290 217 L 350 220"/>
<path d="M 290 302 L 350 280"/>
<path d="M 710 132 L 650 160"/>
<path d="M 710 217 L 650 220"/>
<path d="M 710 302 L 650 280"/>
</g>

</svg>

<div class="legend-chip-bar">
<div>🟢 <strong>GPU Core:</strong> 메인 그래픽 연산 프로세서</div>
<div>🟩 <strong>GDDR7 BGA:</strong> 핀당 28~32 GT/s 32-bit 그래픽 DRAM</div>
<div>🟡 <strong>High-Speed Bus:</strong> PAM3 인코딩 포인트 투 포인트 PCB 패턴</div>
</div>
</div>

---

## ⚡ Section 2. GDDR7 핵심 기술 혁신: PAM3 신호 변조 방식

<div class="comp-card-grid">

  <div class="comp-card comp-card-pam3">
    <div class="comp-header">
      <span class="badge badge-pam3">GDDR7 차세대 신호 기술</span>
      <span>1. PAM3 (3-Level Pulse Amplitude Modulation)</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • <strong>3단계 전압 레벨 (-1, 0, +1):</strong> 2사이클 동안 3비트 데이터(3 bits in 2 cycles)를 전송하는 신호 변조 기술입니다.<br/>
      • <strong>전송 효율 50% 향상:</strong> 기존 NRZ (0과 1) 방식 대비 동일한 높은 주파수 고조파 환경에서 동작 주파수 부담을 늘리지 않고 전송 속도를 32.0 GT/s 이상으로 극대화합니다.
    </p>
  </div>

  <div class="comp-card comp-card-gddr">
    <div class="comp-header">
      <span class="badge badge-gddr">독립 채널 및 발열 제어</span>
      <span>2. 4개독립 채널 & 온동 최적화</span>
    </div>
    <p style="font-size: 0.9rem; color: #cbd5e1; line-height: 1.6;">
      • 32-bit 인터페이스가 4개의 독립된 8-bit 서브채널로 분할되어 읽기/쓰기 동시 처리 효율이 대폭 향상되었습니다.
    </p>
  </div>

</div>

---

👈 **[DRAM Overview로 돌아가기](/dram-overview)**
