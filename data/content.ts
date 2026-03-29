import { getServiceSummaries } from "@/data/service-details";
import type { Locale } from "@/data/site-types";

export type { Locale } from "@/data/site-types";

type Service = {
  slug: string;
  value: string;
  title: string;
  problem: string;
  outcome: string;
};

type Copy = {
  locale: Locale;
  langLabel: string;
  metaTitle: string;
  metaDescription: string;
  nav: {
    services: string;
    ai: string;
    contact: string;
    call: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: string[];
  };
  serviceSection: {
    eyebrow: string;
    title: string;
    description: string;
  };
  services: Service[];
  process: {
    title: string;
    steps: string[];
  };
  ai: {
    eyebrow: string;
    title: string;
    description: string;
    example: string;
    bullets: string[];
  };
  leadForm: {
    title: string;
    description: string;
    name: string;
    email: string;
    phone: string;
    service: string;
    placeholder: string;
    submit: string;
    submitting: string;
    success: string;
    consent: string;
    errors: {
      generic: string;
    };
  };
  sidebar: {
    title: string;
    description: string;
    cta: string;
  };
  footer: {
    privacy: string;
    note: string;
  };
};

export const copyByLocale: Record<Locale, Copy> = {
  id: {
    locale: "id",
    langLabel: "Bahasa Indonesia",
    metaTitle: "Software House & IT Consulting Indonesia",
    metaDescription:
      "Saga Tekno Studio membantu bisnis Indonesia dengan custom software, migration, consulting, AI automation, quality improvement, dan SEO & GEO optimization.",
    nav: {
      services: "Layanan",
      ai: "AI Workflow",
      contact: "Konsultasi",
      call: "Konsultasi Gratis",
    },
    hero: {
      badge: "Untuk SME dan enterprise di Indonesia",
      title: "Software house yang bantu delivery lebih cepat tanpa menambah infrastruktur berat.",
      description:
        "Saga Tekno Studio merancang, migrasi, dan meningkatkan sistem bisnis dengan workflow development berbasis AI sehingga delivery production-grade bisa 20% lebih cepat.",
      primaryCta: "Konsultasi Gratis",
      secondaryCta: "Lihat Layanan",
      metrics: ["Respon <24 jam", "Production-grade delivery", "Bilingual: ID / EN"],
    },
    serviceSection: {
      eyebrow: "Layanan inti",
      title: "Fokus pada kebutuhan software yang paling sering menghambat pertumbuhan bisnis.",
      description:
        "Struktur halaman meniru ritme yang rapi dan padat seperti referensi, tetapi dipersempit untuk conversion: layanan jelas, form cepat, dan pembeda AI yang tidak berlebihan.",
    },
    services: getServiceSummaries("id"),
    process: {
      title: "Alur kerja ringkas",
      steps: ["Discovery kebutuhan bisnis", "Scope dan estimasi teknis", "Build, improve, atau migrate"],
    },
    ai: {
      eyebrow: "Keunggulan AI",
      title: "20% lebih cepat dengan AI-optimized workflow",
      description:
        "AI kami pakai untuk mempercepat tahapan yang berulang, sementara keputusan arsitektur, review, dan quality gate tetap ditangani engineer.",
      example:
        "Contoh: AI membantu menyiapkan scaffolding, draft test, dan dokumentasi sprint agar tim fokus pada validasi teknis dan kualitas rilis.",
      bullets: ["Human code review tetap wajib", "QA flow tidak dipangkas", "Dokumentasi handoff lebih cepat"],
    },
    leadForm: {
      title: "Jadwalkan konsultasi gratis",
      description: "Isi detail singkat dan tim kami akan merespons dalam 24 jam.",
      name: "Nama",
      email: "Email",
      phone: "Nomor WhatsApp / Telepon",
      service: "Kategori layanan",
      placeholder: "Pilih layanan",
      submit: "Kirim Permintaan",
      submitting: "Mengirim...",
      success: "Terima kasih. Tim Saga Tekno Studio akan menghubungi Anda dalam 24 jam.",
      consent:
        "Data dipakai hanya untuk follow-up konsultasi dan disimpan terenkripsi saat tersimpan.",
      errors: {
        generic: "Permintaan belum terkirim. Coba lagi beberapa saat.",
      },
    },
    sidebar: {
      title: "Butuh estimasi cepat?",
      description: "Isi form singkat ini untuk briefing awal proyek Anda.",
      cta: "Mulai Konsultasi",
    },
    footer: {
      privacy: "Mengikuti praktik perlindungan data yang selaras dengan UU PDP Indonesia.",
      note: "Tanpa testimonial fiktif, tanpa ketergantungan cloud eksklusif.",
    },
  },
  en: {
    locale: "en",
    langLabel: "English",
    metaTitle: "Software House & IT Consulting for Indonesia",
    metaDescription:
      "Saga Tekno Studio helps Indonesian SMEs and enterprises with custom software, migration, consulting, AI automation, quality improvement, and SEO & GEO optimization.",
    nav: {
      services: "Services",
      ai: "AI Workflow",
      contact: "Consultation",
      call: "Free Consultation",
    },
    hero: {
      badge: "Built for Indonesian SMEs and enterprises",
      title: "A software house that ships faster without heavy infrastructure.",
      description:
        "Saga Tekno Studio builds, migrates, and improves business systems with AI-optimized development workflows so production-grade delivery can move 20% faster.",
      primaryCta: "Free Consultation",
      secondaryCta: "View Services",
      metrics: ["Response in <24 hours", "Production-grade delivery", "Bilingual: ID / EN"],
    },
    serviceSection: {
      eyebrow: "Core services",
      title: "Focused on software needs that usually slow business growth.",
      description:
        "The structure follows the same clean rhythm as the reference site, but narrowed for conversion: clearer services, faster forms, and a realistic AI differentiator.",
    },
    services: getServiceSummaries("en"),
    process: {
      title: "Simple engagement flow",
      steps: ["Business discovery", "Technical scope and estimate", "Build, improve, or migrate"],
    },
    ai: {
      eyebrow: "AI advantage",
      title: "20% faster with an AI-optimized workflow",
      description:
        "We use AI to accelerate repetitive delivery tasks, while architecture, review, and quality gates remain engineer-led.",
      example:
        "Example: AI helps with scaffolding, test drafting, and sprint documentation so the team can focus on technical validation and release quality.",
      bullets: ["Human code review stays mandatory", "QA flow is preserved", "Handoff documentation is faster"],
    },
    leadForm: {
      title: "Book a free consultation",
      description: "Share a few details and our team will respond within 24 hours.",
      name: "Name",
      email: "Email",
      phone: "WhatsApp / Phone",
      service: "Service category",
      placeholder: "Select a service",
      submit: "Send Request",
      submitting: "Sending...",
      success: "Thank you. Saga Tekno Studio will contact you within 24 hours.",
      consent: "Your data is used only for consultation follow-up and stored encrypted at rest.",
      errors: {
        generic: "Your request could not be sent yet. Please try again shortly.",
      },
    },
    sidebar: {
      title: "Need a quick estimate?",
      description: "Use this short form for an initial project briefing.",
      cta: "Start Consultation",
    },
    footer: {
      privacy: "Aligned with Indonesia personal data protection practices.",
      note: "No fabricated testimonials and no cloud-exclusive dependencies.",
    },
  },
};

export const serviceOptions = getServiceSummaries("id").map((service) => service.value);
