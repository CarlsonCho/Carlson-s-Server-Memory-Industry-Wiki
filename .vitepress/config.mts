import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// withMermaid로 전체 설정을 감싸주어야 브라우저에서 차트가 그려집니다.
export default withMermaid(
  defineConfig({
    title: "Carlson Wiki",
    description: "Carlson's AI server industry summary",
    base: '/Carlson-s-Server-Memory-Industry-Wiki/',
    appearance: 'dark', // 기본 배경색을 다크모드로 설정 (사용자 토글 가능)

    themeConfig: {
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Memory Overview', link: '/memory-overview' }
      ],

      sidebar: [
        {
          text: '⚡ AI Server',
          items: [
            { text: 'AI Server Overview', link: '/ai-server-overview' },
            { text: 'NVIDIA AI Roadmap', link: '/nvidia-roadmap' },
            { text: 'AMD Instinct Roadmap', link: '/amd-roadmap' },
            { text: 'Google TPU Roadmap', link: '/google-roadmap' },
            { text: 'AWS Accelerator Roadmap', link: '/aws-roadmap' }
          ]
        },
        {
          text: '⚙️ General Server',
          items: [
            { text: 'General Server Overview', link: '/general-server-overview' },
            { text: 'Intel CPU/Gaudi Roadmap', link: '/intel-roadmap' },
            { text: 'AMD EPYC CPU Roadmap', link: '/amd-cpu-roadmap' },
            { text: 'Ampere ARM CPU Roadmap', link: '/ampere-roadmap' }
          ]
        },
        {
          text: '💾 Memory Industry',
          items: [
            { text: 'Memory Overview', link: '/memory-overview' },
            { text: 'DRAM Overview', link: '/dram-overview' },
            { text: 'RDIMM Overview', link: '/rdimm-overview' },
            { text: 'MCRDIMM Overview', link: '/mcrdimm-overview' },
            { text: 'HBM Overview', link: '/hbm-overview' },
            { text: 'GDDR Overview', link: '/gddr-overview' },
            { text: 'SOCAMM2 Overview', link: '/socamm2-overview' },
            { text: 'LPCAMM2 Overview', link: '/lpcamm-overview' },
            { text: 'CXL Overview', link: '/cxl-overview' },
            { text: 'NAND Overview', link: '/nand-overview' }
          ]
        }
      ],

      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
      ]
    }
  })
)