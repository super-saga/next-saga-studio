export interface PortfolioProject {
  slug: string
  name: string
  tag: string
  tagline: string
  desc: string
  image: string
  url?: string
  challenge: string
  solution: string
  features: string[]
  stack: string[]
  metrics?: string
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'sahabat-warga',
    name: 'Sahabat Warga',
    tag: 'Community Platform',
    tagline: 'Kelola Lingkungan Lebih Mudah & Transparan',
    desc: 'Digital platform connecting citizens with local community management — iuran, announcements, resident data, and civic engagement in one app.',
    image: '/projects/sahabat-warga.png',
    url: 'https://saga.co.id',
    challenge: 'Residential administrators across Indonesia were managing community fees, resident databases, and announcements through spreadsheets and informal WhatsApp groups. Manual processes created financial opacity, delayed communication, and made it impossible to scale community management across multiple clusters without proportionally increasing headcount.',
    solution: 'We built an all-in-one community management platform that digitizes the full administrative workflow — from automated fee billing to real-time financial reporting to resident communications. The system integrates with QRIS, virtual accounts, and e-wallets, and uses WhatsApp-based notifications so administrators can reach residents on channels they already use. Hosted on Google Cloud and AWS with AES-256 encryption and Komdigi registration.',
    features: [
      'Digital fee collection with automated, transparent billing',
      'Real-time financial reporting with full audit trail',
      'Resident database management — digital, secure, searchable',
      'Community communication portal for announcements and broadcasts',
      'Payment integration via QRIS, Virtual Accounts, and e-wallets',
      'WhatsApp-based automated notification system',
      'AES-256 data encryption with SSL/TLS connection security',
    ],
    stack: ['Go', 'React Native', 'PostgreSQL', 'Google Cloud', 'AWS', 'QRIS Integration'],
    metrics: '4.9-star rating · 100+ active communities · 1,242+ residents · 24+ clusters across 3 cities',
  },
  {
    slug: 'vela',
    name: 'Vela',
    tag: 'Investment Intelligence',
    tagline: "Indonesia's Investment Intelligence Platform",
    desc: "Indonesia's investment intelligence platform — connecting institutional investors with bankable projects across sectors and regions nationwide.",
    image: '/projects/vela.png',
    url: 'https://getvela.id',
    challenge: "Indonesia has one of Southeast Asia's largest untapped investment landscapes, yet institutional capital remained disconnected from bankable projects due to fragmented discovery, inconsistent due diligence quality, and no standardized readiness framework. Project owners lacked visibility into what made their opportunities investor-grade, while investors lacked efficient tools to evaluate the national pipeline.",
    solution: 'We designed and built a dual-sided investment marketplace with AI at its core. Project owners submit through a structured assessment framework that scores their opportunity across financial, technical, legal, and ESG dimensions — surfacing gaps and generating investor-ready materials. Investors access a gated pipeline with AI-powered due diligence agents and protected data rooms. Official technology partner of BKPM (Indonesia\'s Investment Coordinating Board).',
    features: [
      'Bankability Scoring — automated readiness assessment across financial, technical, legal, and ESG dimensions',
      'AI Deck Generation — transforms project data into investor-ready presentations in minutes',
      'Gated Data Rooms — protected environments for confidential document review',
      'AI-Powered Due Diligence — conversational agents supporting investor screening and project evaluation',
      'Readiness Assessment Framework — structured guidance to identify and close investment preparation gaps',
      'Regional Pipeline Curation — projects filtered by sector, location, and risk profile across 5 Indonesian regions',
      'Multiple Submission Pathways — standard, simplified, fast-track, and alternative funding options',
    ],
    stack: ['Go', 'Next.js', 'PostgreSQL', 'AWS', 'AI/LLM', 'Vector Database'],
    metrics: 'BKPM official technology partner · 8 investment sectors · 5 major regions · Backed by AWS & UK Development Fund',
  },
  {
    slug: 'finitylab',
    name: 'Finity Horizon',
    tag: 'Social Listening & AI',
    tagline: 'AI-Powered Insights Platform for Faster Decisions',
    desc: 'AI-powered data intelligence platform for faster business decisions — social listening, internal data, and research in one unified view.',
    image: '/projects/finitylab.png',
    url: 'https://finitylab.ai',
    challenge: 'Enterprise brands in Southeast Asia were operating blind — monitoring brand presence, competitor share of voice, and consumer sentiment across seven social platforms with manual reporting cycles that took days. Crisis detection was reactive. Research pipelines were fragmented between external social data, internal survey tools, and manual analysis workflows.',
    solution: 'We built Finity Horizon, an AI-driven market intelligence platform that aggregates social media, news, and internal research into unified analytical dashboards. The platform monitors 7 digital channels in real time with AI-powered sentiment and emotion classification, detects crises automatically, and integrates survey data and synthetic respondent testing into the same intelligence layer — giving enterprise teams a single source of truth for market decisions.',
    features: [
      'Real-time social listening across 7 channels — Threads, News, X, Instagram, TikTok, Facebook, YouTube',
      'Share of voice analysis vs. competitors across all channels',
      'AI-powered sentiment and emotion classification',
      'Crisis alert and issue detection system',
      'Visual recognition via field photography analysis',
      'Survey data integration into AI dashboards',
      'Synthetic respondent testing functionality',
      'Multi-industry coverage — FMCG, Finance, Retail, Government, Healthcare, Automotive',
    ],
    stack: ['Python', 'Go', 'React', 'PostgreSQL', 'AI Classification Models', 'Vector Search'],
    metrics: 'Active across 8+ industries · Enterprise-grade multi-channel intelligence',
  },
  {
    slug: 'bilpay',
    name: 'Bilpay',
    tag: 'Fintech Platform',
    tagline: 'Solusi pembayaran digital untuk kamu',
    desc: 'Digital payment platform consolidating money transfers, bill payments, and wallet top-ups into a single mobile experience — built for speed and simplicity.',
    image: '/projects/bilpay.png',
    url: 'https://bilpay.co.id',
    challenge: 'Indonesian users were juggling multiple apps and bank channels to handle transfers, utility payments, mobile credit top-ups, and installment payments — each with separate authentication, different UX patterns, and fragmented transaction histories. PT Tuas Mas Mandiri needed a single mobile platform that could consolidate all payment types with instant processing and a minimal friction experience.',
    solution: 'We built the Bilpay mobile application as a unified digital wallet with multi-channel infrastructure. The platform supports cross-bank transfers, utility and bill payments, mobile credit purchases, and multiple funding methods including bank transfers and minimarket partnerships. Real-time transaction processing and secure wallet management give users full financial visibility in a single interface.',
    features: [
      'Instant peer-to-peer and cross-bank money transfers',
      'Consolidated bill payment — utilities, internet, mobile credit, and installments',
      'Multiple top-up methods — bank transfer, minimarket partners, affiliated merchants',
      'Immediate fund crediting upon deposit completion',
      'Full wallet management with balance control and transaction history',
      'Secure transaction processing with real-time confirmation',
      'Partnerships across insurance, retail, transportation, and e-commerce sectors',
    ],
    stack: ['React Native', 'Go', 'PostgreSQL', 'Payment Gateway Integration', 'QRIS'],
    metrics: 'Multi-sector partnerships · Instant transaction processing',
  },
]

export function getProject(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(p => p.slug === slug)
}
