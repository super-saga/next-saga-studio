import type { Locale } from "@/data/site-types";

export type ServiceSlug =
  | "custom-software-development"
  | "migration-service"
  | "consulting-service"
  | "ai-automation-service"
  | "improvement-quality-service"
  | "seo-geo-optimize-service";

type FAQ = {
  question: string;
  answer: string;
};

type LocalizedServiceDetail = {
  locale: Locale;
  slug: ServiceSlug;
  value: string;
  title: string;
  shortTitle: string;
  seoTitle: string;
  seoDescription: string;
  heroTitle: string;
  heroDescription: string;
  heroHighlights: string[];
  problem: string;
  outcome: string;
  overviewTitle: string;
  overview: string;
  painPoints: string[];
  deliverables: string[];
  suitableFor: string[];
  presentationPoints: string[];
  faqs: FAQ[];
  relatedSlugs: ServiceSlug[];
  geoNote: string;
};

type ServiceBundle = {
  slug: ServiceSlug;
  id: LocalizedServiceDetail;
  en: LocalizedServiceDetail;
};

const serviceBundles: ServiceBundle[] = [
  {
    slug: "custom-software-development",
    id: {
      locale: "id",
      slug: "custom-software-development",
      value: "Custom Software Development",
      title: "Custom Software Development",
      shortTitle: "Custom Software",
      seoTitle: "Jasa Custom Software Development Indonesia",
      seoDescription:
        "Layanan custom software development untuk SME dan enterprise di Indonesia yang butuh sistem production-grade, lebih rapi, dan siap berkembang.",
      heroTitle: "Bangun software yang mengikuti proses bisnis Anda, bukan sebaliknya.",
      heroDescription:
        "Kami merancang aplikasi internal, dashboard operasional, dan portal customer yang menyesuaikan alur kerja tim Anda sehingga bisnis tidak dipaksa mengikuti tool generik.",
      heroHighlights: ["Scope jelas sejak awal", "Production-grade architecture", "Cocok untuk SME dan enterprise"],
      problem: "Banyak bisnis bertahan dengan spreadsheet, tools terpisah, atau software generik yang akhirnya memperlambat operasional.",
      outcome: "Sistem lebih rapi, kontrol lebih tinggi, dan delivery fitur lebih mudah mengikuti kebutuhan bisnis berikutnya.",
      overviewTitle: "Ringkasan layanan",
      overview:
        "Halaman ini dirancang agar bisa dipakai sebagai materi presentasi saat konsultasi: menjelaskan masalah bisnis, solusi yang kami bangun, dan bentuk hasil kerja yang akan diterima klien.",
      painPoints: [
        "Proses internal masih manual atau tersebar di banyak tool.",
        "Dashboard dan laporan tidak real-time untuk pengambilan keputusan.",
        "Sistem yang ada sulit berkembang saat tim atau cabang bertambah.",
      ],
      deliverables: [
        "Discovery kebutuhan bisnis dan scope prioritas.",
        "Desain arsitektur aplikasi yang ringan dan mudah dikembangkan.",
        "Pengembangan fitur inti, QA, dan handoff dokumentasi.",
        "Rencana iterasi lanjutan setelah peluncuran awal.",
      ],
      suitableFor: [
        "Bisnis yang butuh portal customer, dashboard operasional, atau sistem internal baru.",
        "Tim yang ingin mengganti proses manual tanpa membeli software enterprise yang berlebihan.",
        "Perusahaan yang butuh fondasi produk digital yang bisa tumbuh bertahap.",
      ],
      presentationPoints: [
        "Mulai dari bottleneck bisnis terlebih dahulu, bukan daftar fitur yang panjang.",
        "Tunjukkan bagaimana sistem baru merapikan alur approval, pelaporan, dan kontrol data.",
        "Tekankan bahwa roadmap bisa dimulai dari MVP lalu dikembangkan bertahap sesuai prioritas bisnis.",
      ],
      faqs: [
        {
          question: "Apakah layanan ini cocok untuk proyek kecil?",
          answer:
            "Ya. Kami bisa memulai dari scope kecil yang berdampak tinggi, lalu mengembangkannya setelah workflow inti terbukti berjalan.",
        },
        {
          question: "Apakah harus langsung membangun semua fitur?",
          answer:
            "Tidak. Kami biasanya menyarankan prioritas fitur inti terlebih dahulu agar bisnis mendapat hasil lebih cepat dan risiko lebih rendah.",
        },
        {
          question: "Apakah sistemnya bisa terhubung ke tools yang sudah ada?",
          answer:
            "Bisa. Integrasi dengan sistem lain dapat direncanakan sejak tahap discovery agar data tidak terpisah.",
        },
      ],
      relatedSlugs: ["migration-service", "improvement-quality-service"],
      geoNote:
        "Relevan untuk bisnis di Jakarta, Bandung, Surabaya, Bali, dan tim remote di seluruh Indonesia yang membutuhkan sistem yang lebih terstruktur.",
    },
    en: {
      locale: "en",
      slug: "custom-software-development",
      value: "Custom Software Development",
      title: "Custom Software Development",
      shortTitle: "Custom Software",
      seoTitle: "Custom Software Development Services in Indonesia",
      seoDescription:
        "Custom software development for Indonesian SMEs and enterprises that need production-grade systems aligned with real business workflows.",
      heroTitle: "Build software around your business process, not the other way around.",
      heroDescription:
        "We design internal platforms, operational dashboards, and customer portals that fit how your team already works instead of forcing the business into generic tools.",
      heroHighlights: ["Clear scope from the start", "Production-grade architecture", "Fit for SMEs and enterprises"],
      problem: "Many businesses outgrow spreadsheets and disconnected tools long before they have a system that truly supports operations.",
      outcome: "Cleaner operations, stronger control, and a software foundation that can grow with the business.",
      overviewTitle: "Service overview",
      overview:
        "This page is structured to work both as an SEO asset and as a consultation walkthrough that explains the business problem, the proposed solution, and the expected deliverables.",
      painPoints: [
        "Internal workflows are still manual or spread across many tools.",
        "Reports and dashboards are not timely enough for confident decisions.",
        "The current setup becomes harder to manage as teams or branches grow.",
      ],
      deliverables: [
        "Business discovery and priority-based scoping.",
        "A lean application architecture designed for maintainability.",
        "Core feature development, QA, and handoff documentation.",
        "A practical post-launch iteration plan.",
      ],
      suitableFor: [
        "Businesses needing customer portals, operations dashboards, or new internal systems.",
        "Teams replacing manual work without overbuying large enterprise software.",
        "Companies that need a digital foundation they can expand in stages.",
      ],
      presentationPoints: [
        "Start with the operational bottleneck, not an oversized feature list.",
        "Show how the new system improves approvals, reporting, and data control.",
        "Position delivery as a phased roadmap, starting with the highest-impact scope.",
      ],
      faqs: [
        {
          question: "Is this suitable for smaller projects?",
          answer:
            "Yes. We can start with a smaller, high-impact scope and expand after the core workflow proves its value.",
        },
        {
          question: "Do we need to build everything at once?",
          answer:
            "No. We typically recommend shipping the core workflow first to reduce risk and deliver value faster.",
        },
        {
          question: "Can the system connect to our existing tools?",
          answer:
            "Yes. Integration can be planned from discovery so data and workflows stay connected.",
        },
      ],
      relatedSlugs: ["migration-service", "improvement-quality-service"],
      geoNote:
        "Relevant for companies in Jakarta, Bandung, Surabaya, Bali, and remote teams across Indonesia that need more structured systems.",
    },
  },
  {
    slug: "migration-service",
    id: {
      locale: "id",
      slug: "migration-service",
      value: "Migration Service",
      title: "Migration Service",
      shortTitle: "Migration",
      seoTitle: "Jasa Migration Service Sistem dan Data Indonesia",
      seoDescription:
        "Layanan migration service untuk memindahkan sistem, data, dan workflow bisnis tanpa mengganggu operasional inti perusahaan di Indonesia.",
      heroTitle: "Migrasi sistem tanpa membuat operasional harian ikut berantakan.",
      heroDescription:
        "Kami membantu perpindahan data, modul, dan alur kerja dari sistem lama ke platform yang lebih rapi dengan validasi bertahap dan rollback plan yang jelas.",
      heroHighlights: ["Validasi data bertahap", "Rollback plan", "Minim gangguan operasional"],
      problem: "Migrasi sering tertunda karena risiko kehilangan data, downtime, dan ketidakjelasan tahap perpindahan.",
      outcome: "Perpindahan menjadi lebih aman, terdokumentasi, dan bisa dijelaskan dengan jelas ke tim internal maupun stakeholder.",
      overviewTitle: "Ringkasan layanan",
      overview:
        "Untuk sesi konsultasi, halaman ini membantu menjelaskan bahwa migrasi bukan hanya pindah data, tetapi juga menjaga kontinuitas bisnis dan kepercayaan stakeholder.",
      painPoints: [
        "Data lama tidak rapi dan sulit dipetakan ke sistem baru.",
        "Ada kekhawatiran downtime akan mengganggu tim operasional atau pelanggan.",
        "Tim internal butuh kepastian alur cut-over dan fallback jika terjadi masalah.",
      ],
      deliverables: [
        "Audit data dan sistem lama beserta risiko perpindahannya.",
        "Strategy mapping untuk data, user role, dan integrasi.",
        "Runbook migrasi, validasi hasil, dan fallback plan.",
        "Dukungan stabilisasi setelah perpindahan.",
      ],
      suitableFor: [
        "Perusahaan yang pindah dari software lama ke sistem baru.",
        "Tim yang perlu konsolidasi data dari beberapa tools ke satu workflow.",
        "Bisnis yang ingin modernisasi tanpa menghentikan operasional inti.",
      ],
      presentationPoints: [
        "Tekankan bahwa migrasi sukses dinilai dari kelancaran bisnis, bukan hanya data berhasil dipindah.",
        "Gunakan runbook dan rollback plan sebagai poin kepercayaan saat menjelaskan risiko.",
        "Jelaskan tahapan validasi agar klien merasa perpindahan bisa dikontrol, bukan spekulatif.",
      ],
      faqs: [
        {
          question: "Apakah migrasi harus dilakukan sekaligus?",
          answer:
            "Tidak selalu. Banyak kasus lebih aman dilakukan bertahap agar validasi dan penyesuaian bisa berjalan tanpa tekanan besar.",
        },
        {
          question: "Bagaimana kalau data lama tidak konsisten?",
          answer:
            "Kami mulai dengan audit dan mapping sehingga masalah kualitas data terlihat sebelum perpindahan dilakukan.",
        },
        {
          question: "Apakah ada dukungan setelah migrasi?",
          answer:
            "Ada. Fase stabilisasi penting untuk memastikan user bisa beradaptasi dan isu cepat ditangani.",
        },
      ],
      relatedSlugs: ["custom-software-development", "consulting-service"],
      geoNote:
        "Cocok untuk perusahaan Indonesia yang sedang modernisasi sistem di kantor pusat maupun multi-cabang.",
    },
    en: {
      locale: "en",
      slug: "migration-service",
      value: "Migration Service",
      title: "Migration Service",
      shortTitle: "Migration",
      seoTitle: "System and Data Migration Services in Indonesia",
      seoDescription:
        "Migration services for Indonesian businesses moving systems, workflows, and data with lower operational risk and clearer transition planning.",
      heroTitle: "Migrate systems without throwing daily operations into chaos.",
      heroDescription:
        "We help teams move data, modules, and workflows from legacy systems into cleaner platforms through staged validation and a defined rollback plan.",
      heroHighlights: ["Staged validation", "Rollback planning", "Lower operational disruption"],
      problem: "Migration projects often stall because of data risk, downtime concerns, and unclear transition stages.",
      outcome: "The move becomes safer, easier to explain, and more manageable for internal teams and stakeholders.",
      overviewTitle: "Service overview",
      overview:
        "For live consultations, this page helps frame migration as business continuity work, not just a technical data transfer exercise.",
      painPoints: [
        "Legacy data is messy and difficult to map into the new system.",
        "Operational teams worry that downtime will disrupt service or revenue.",
        "Stakeholders need a clear cut-over plan and fallback path.",
      ],
      deliverables: [
        "An audit of the legacy system, data shape, and migration risks.",
        "A mapping strategy for data, roles, and integrations.",
        "Migration runbooks, validation steps, and fallback planning.",
        "Post-migration stabilization support.",
      ],
      suitableFor: [
        "Companies moving from legacy software to a cleaner setup.",
        "Teams consolidating data from several tools into one workflow.",
        "Businesses modernizing without shutting down core operations.",
      ],
      presentationPoints: [
        "Define success as business continuity, not only successful data transfer.",
        "Use the runbook and rollback plan to reduce perceived risk in the sales conversation.",
        "Walk clients through validation stages so the transition feels controlled, not speculative.",
      ],
      faqs: [
        {
          question: "Does migration have to happen all at once?",
          answer:
            "Not always. A phased approach is often safer because it gives the team room to validate and adapt at each step.",
        },
        {
          question: "What if our legacy data is inconsistent?",
          answer:
            "We start with audit and mapping so quality issues are visible before the transfer begins.",
        },
        {
          question: "Do you support the team after migration?",
          answer:
            "Yes. Stabilization after launch is an important part of making the new workflow stick.",
        },
      ],
      relatedSlugs: ["custom-software-development", "consulting-service"],
      geoNote:
        "Suitable for Indonesian companies modernizing systems across headquarters, branch operations, or distributed teams.",
    },
  },
  {
    slug: "consulting-service",
    id: {
      locale: "id",
      slug: "consulting-service",
      value: "Consulting Service",
      title: "Consulting Service",
      shortTitle: "Consulting",
      seoTitle: "IT Consulting Service untuk Bisnis Indonesia",
      seoDescription:
        "IT consulting service untuk membantu bisnis Indonesia menentukan prioritas software, scope teknis, dan roadmap implementasi yang lebih realistis.",
      heroTitle: "Ambil keputusan teknologi dengan scope dan risiko yang lebih jelas.",
      heroDescription:
        "Kami membantu menyusun arah teknis sebelum bisnis mengeluarkan biaya implementasi yang lebih besar, sehingga proyek dimulai dengan prioritas yang realistis.",
      heroHighlights: ["Roadmap realistis", "Scope lebih terukur", "Keputusan teknis lebih jelas"],
      problem: "Banyak proyek digital bermasalah bukan karena teknologinya salah, tetapi karena prioritas, scope, dan ekspektasi awal tidak sinkron.",
      outcome: "Stakeholder mendapat arah yang lebih jelas sebelum masuk ke biaya build, migrasi, atau automasi yang lebih besar.",
      overviewTitle: "Ringkasan layanan",
      overview:
        "Halaman ini cocok digunakan saat sesi discovery karena isinya membantu memandu percakapan dari masalah bisnis menuju keputusan teknis yang lebih matang.",
      painPoints: [
        "Bisnis belum yakin harus mulai dari fitur, sistem, atau integrasi mana.",
        "Tim butuh second opinion sebelum meneruskan proyek yang kompleks.",
        "Scope terlalu luas sehingga estimasi waktu dan biaya tidak stabil.",
      ],
      deliverables: [
        "Workshop discovery dan audit proses bisnis saat ini.",
        "Prioritas kebutuhan teknis beserta trade-off utamanya.",
        "Roadmap implementasi dan estimasi tahap awal.",
        "Rekomendasi build, migrate, improve, atau automate.",
      ],
      suitableFor: [
        "Perusahaan yang sedang menimbang proyek software baru.",
        "Tim internal yang ingin menurunkan risiko sebelum eksekusi.",
        "Stakeholder yang butuh bahasa bisnis dan teknis yang nyambung.",
      ],
      presentationPoints: [
        "Gunakan sesi ini untuk merapikan masalah bisnis menjadi keputusan teknis yang bisa dijalankan.",
        "Tunjukkan trade-off agar stakeholder merasa mendapat transparansi, bukan sekadar pitch.",
        "Posisikan consulting sebagai langkah penghemat risiko, bukan tambahan biaya yang tidak perlu.",
      ],
      faqs: [
        {
          question: "Apakah consulting harus lanjut ke implementation dengan Saga?",
          answer:
            "Tidak. Output konsultasi tetap berguna sebagai dasar keputusan meskipun eksekusi dilakukan internal atau oleh partner lain.",
        },
        {
          question: "Apakah konsultasi hanya untuk proyek besar?",
          answer:
            "Tidak. Consulting juga bermanfaat untuk proyek menengah yang butuh prioritas lebih tajam dan keputusan lebih cepat.",
        },
        {
          question: "Apa hasil konkret dari sesi consulting?",
          answer:
            "Biasanya berupa prioritas masalah, arahan solusi, risk note, dan saran langkah implementasi berikutnya.",
        },
      ],
      relatedSlugs: ["custom-software-development", "ai-automation-service"],
      geoNote:
        "Relevan untuk pemilik bisnis dan tim operasional di seluruh Indonesia yang butuh kejelasan sebelum mengeksekusi proyek digital.",
    },
    en: {
      locale: "en",
      slug: "consulting-service",
      value: "Consulting Service",
      title: "Consulting Service",
      shortTitle: "Consulting",
      seoTitle: "IT Consulting Services for Businesses in Indonesia",
      seoDescription:
        "IT consulting to help Indonesian businesses define software priorities, technical scope, and realistic implementation roadmaps before larger delivery work begins.",
      heroTitle: "Make technology decisions with clearer scope, risk, and next steps.",
      heroDescription:
        "We help teams shape technical direction before they commit to larger build budgets, so delivery starts from realistic priorities instead of vague ambitions.",
      heroHighlights: ["Realistic roadmap", "Better scoped decisions", "Clearer technical direction"],
      problem: "Digital projects often struggle not because of the wrong technology, but because priorities, scope, and expectations were never aligned early on.",
      outcome: "Stakeholders get a clearer path before committing to larger build, migration, or automation work.",
      overviewTitle: "Service overview",
      overview:
        "This page is useful in discovery meetings because it guides the conversation from business friction into concrete technical decisions.",
      painPoints: [
        "The business is unsure which system, feature, or integration to prioritize first.",
        "The team needs a second opinion before moving forward with a complex initiative.",
        "The scope is too broad, making time and budget hard to trust.",
      ],
      deliverables: [
        "Discovery workshops and a review of current workflows.",
        "Priority mapping with clear technical trade-offs.",
        "An initial implementation roadmap and estimation direction.",
        "Recommendations on whether to build, migrate, improve, or automate.",
      ],
      suitableFor: [
        "Companies evaluating a new software initiative.",
        "Internal teams trying to reduce risk before execution.",
        "Stakeholders who need business and technical language to connect.",
      ],
      presentationPoints: [
        "Use consulting to turn messy business concerns into actionable technical direction.",
        "Show trade-offs clearly so stakeholders feel transparency, not just a sales push.",
        "Position consulting as risk reduction and decision support, not unnecessary overhead.",
      ],
      faqs: [
        {
          question: "Does consulting have to continue into implementation with Saga?",
          answer:
            "No. The output remains useful even if execution is handled internally or by another partner.",
        },
        {
          question: "Is consulting only for large projects?",
          answer:
            "No. It can be just as valuable for mid-sized initiatives that need sharper priorities and faster decisions.",
        },
        {
          question: "What concrete output comes from consulting?",
          answer:
            "Usually a prioritized problem list, solution direction, risk notes, and practical next-step recommendations.",
        },
      ],
      relatedSlugs: ["custom-software-development", "ai-automation-service"],
      geoNote:
        "Useful for founders, directors, and operations teams across Indonesia who need clarity before executing a digital initiative.",
    },
  },
  {
    slug: "ai-automation-service",
    id: {
      locale: "id",
      slug: "ai-automation-service",
      value: "AI Automation Service",
      title: "AI Automation Service",
      shortTitle: "AI Automation",
      seoTitle: "AI Automation Service untuk Operasional Bisnis Indonesia",
      seoDescription:
        "AI automation service untuk membantu bisnis Indonesia mengurangi pekerjaan manual, mempercepat response, dan membuat workflow lebih efisien.",
      heroTitle: "Otomatisasi kerja berulang tanpa membuat operasional jadi rumit.",
      heroDescription:
        "Kami membangun workflow automation yang relevan untuk sales, support, reporting, dan proses internal lain agar tim bisa fokus pada keputusan yang lebih bernilai.",
      heroHighlights: ["Workflow praktis", "20% faster delivery", "Tetap human-reviewed"],
      problem: "Banyak aktivitas operasional masih manual, memakan waktu, dan sulit diskalakan saat volume pekerjaan naik.",
      outcome: "Tim bergerak lebih cepat, respons lebih konsisten, dan beban kerja berulang berkurang tanpa menambah infrastruktur berat.",
      overviewTitle: "Ringkasan layanan",
      overview:
        "Halaman ini menempatkan AI automation secara realistis: bukan gimmick, tetapi alat untuk merapikan proses berulang dengan kontrol dan validasi yang jelas.",
      painPoints: [
        "Tim menghabiskan terlalu banyak waktu untuk input, rangkuman, atau follow-up manual.",
        "Response operasional tidak konsisten karena tergantung kapasitas tim saat itu.",
        "Automasi sebelumnya terlalu rumit atau tidak benar-benar terpakai oleh user.",
      ],
      deliverables: [
        "Audit workflow untuk memilih automasi yang paling berdampak.",
        "Desain automation flow beserta titik validasi manusianya.",
        "Integrasi dengan tools atau sistem yang sudah digunakan tim.",
        "Monitoring dan penyempurnaan workflow setelah implementasi.",
      ],
      suitableFor: [
        "Tim sales, support, operations, atau back office yang terbebani pekerjaan berulang.",
        "Perusahaan yang ingin automasi praktis tanpa proyek AI yang terlalu besar.",
        "Bisnis yang butuh peningkatan efisiensi tetapi tetap ingin kontrol manusia di titik kritis.",
      ],
      presentationPoints: [
        "Fokuskan penjelasan pada pekerjaan manual yang benar-benar menyita waktu tim.",
        "Jelaskan titik mana yang diotomatisasi dan titik mana yang tetap perlu validasi manusia.",
        "Tekankan bahwa AI dipakai untuk akselerasi workflow, bukan menggantikan kendali bisnis.",
      ],
      faqs: [
        {
          question: "Apakah semua proses cocok diotomatisasi?",
          answer:
            "Tidak. Kami biasanya memilih proses yang paling berulang, paling aman, dan paling jelas dampaknya lebih dulu.",
        },
        {
          question: "Apakah AI akan menggantikan tim?",
          answer:
            "Tujuannya bukan menggantikan tim, melainkan mengurangi beban kerja berulang agar tim fokus pada keputusan yang lebih penting.",
        },
        {
          question: "Apakah workflow automation bisa diawasi?",
          answer:
            "Bisa. Kami tetap mendesain titik kontrol, logging, dan validasi agar automasi bisa dipantau.",
        },
      ],
      relatedSlugs: ["consulting-service", "improvement-quality-service"],
      geoNote:
        "Cocok untuk bisnis Indonesia yang ingin efisiensi operasional tanpa ketergantungan pada infrastruktur cloud yang berat.",
    },
    en: {
      locale: "en",
      slug: "ai-automation-service",
      value: "AI Automation Service",
      title: "AI Automation Service",
      shortTitle: "AI Automation",
      seoTitle: "AI Automation Services for Business Operations in Indonesia",
      seoDescription:
        "AI automation services for Indonesian businesses that want to reduce repetitive manual work, improve response consistency, and speed up internal workflows.",
      heroTitle: "Automate repetitive work without making operations harder to manage.",
      heroDescription:
        "We build practical automation workflows for sales, support, reporting, and internal operations so teams can spend more time on higher-value decisions.",
      heroHighlights: ["Practical workflow design", "20% faster delivery", "Still human-reviewed"],
      problem: "Too many operational tasks remain manual, time-consuming, and hard to scale as volume increases.",
      outcome: "Teams move faster, response quality becomes more consistent, and repetitive workload drops without heavy infrastructure.",
      overviewTitle: "Service overview",
      overview:
        "This page positions AI automation realistically: not as a gimmick, but as a controlled way to improve repetitive workflows with clear validation.",
      painPoints: [
        "Teams lose time to repetitive input, summaries, or manual follow-up.",
        "Operational response quality varies depending on team capacity that day.",
        "Previous automation attempts felt too complex or failed to stick with users.",
      ],
      deliverables: [
        "A workflow audit to identify the highest-impact automation target.",
        "Automation design with clear human review checkpoints.",
        "Integration with the tools or systems the team already uses.",
        "Post-launch monitoring and refinement of the automation flow.",
      ],
      suitableFor: [
        "Sales, support, operations, or back-office teams burdened by repetitive work.",
        "Companies that want practical automation without a massive AI program.",
        "Businesses that need efficiency gains while keeping human control at critical steps.",
      ],
      presentationPoints: [
        "Anchor the discussion in real manual tasks that currently drain team time.",
        "Explain which steps become automated and which ones remain human-reviewed.",
        "Present AI as workflow acceleration, not a replacement for business control.",
      ],
      faqs: [
        {
          question: "Can every process be automated?",
          answer:
            "No. We usually start with workflows that are repetitive, lower risk, and easiest to measure for impact.",
        },
        {
          question: "Will AI replace the team?",
          answer:
            "The goal is not replacement. It is to reduce repetitive workload so the team can focus on more valuable decisions.",
        },
        {
          question: "Can the automation be monitored?",
          answer:
            "Yes. We design control points, logging, and validation so the workflow stays observable.",
        },
      ],
      relatedSlugs: ["consulting-service", "improvement-quality-service"],
      geoNote:
        "Well suited to Indonesian businesses looking for operational efficiency without relying on heavy cloud-first infrastructure.",
    },
  },
  {
    slug: "improvement-quality-service",
    id: {
      locale: "id",
      slug: "improvement-quality-service",
      value: "Improvement Quality Service",
      title: "Improvement Quality Service",
      shortTitle: "Quality Improvement",
      seoTitle: "Improvement Quality Service untuk Produk Software",
      seoDescription:
        "Improvement quality service untuk memperbaiki kualitas software, stabilitas rilis, testing flow, dan maintainability produk digital di Indonesia.",
      heroTitle: "Naikkan kualitas software tanpa harus membangun ulang dari nol.",
      heroDescription:
        "Kami membantu tim merapikan kualitas rilis, mengurangi bug berulang, dan memperkuat fondasi engineering agar produk yang sudah berjalan bisa lebih stabil.",
      heroHighlights: ["Audit kualitas", "Release lebih stabil", "Fokus maintainability"],
      problem: "Produk yang sudah live sering tertahan oleh bug berulang, testing yang lemah, dan kode yang makin sulit dirawat.",
      outcome: "Tim bisa merilis dengan percaya diri lebih tinggi dan mengurangi biaya tersembunyi dari perbaikan berulang.",
      overviewTitle: "Ringkasan layanan",
      overview:
        "Halaman ini berguna untuk percakapan dengan klien yang sudah punya sistem berjalan tetapi mulai merasakan biaya kualitas yang terus meningkat.",
      painPoints: [
        "Bug berulang mengganggu operasional dan menurunkan kepercayaan user.",
        "Testing masih manual atau tidak konsisten antar release.",
        "Codebase makin sulit dipahami sehingga perubahan kecil jadi lambat.",
      ],
      deliverables: [
        "Audit kualitas kode, QA flow, dan titik risiko rilis.",
        "Prioritas quick wins dan perbaikan bertahap yang realistis.",
        "Perbaikan struktur, testing, dan quality gate inti.",
        "Saran engineering workflow yang lebih rapi ke depan.",
      ],
      suitableFor: [
        "Produk yang sudah live tetapi kualitas rilis belum stabil.",
        "Tim yang sering terjebak firefighting dan bug fixing berulang.",
        "Perusahaan yang ingin menyiapkan codebase sebelum scale-up fitur baru.",
      ],
      presentationPoints: [
        "Bantu klien melihat biaya kualitas yang tersembunyi, bukan hanya jumlah bug.",
        "Tekankan perbaikan bertahap agar perubahan terasa aman dan realistis.",
        "Jelaskan bagaimana quality improvement mendukung delivery berikutnya, bukan hanya membereskan masa lalu.",
      ],
      faqs: [
        {
          question: "Apakah harus rewrite total?",
          answer:
            "Tidak. Banyak kasus cukup ditangani lewat audit, prioritas quick wins, dan peningkatan bertahap pada area paling berisiko.",
        },
        {
          question: "Apakah layanan ini hanya untuk testing?",
          answer:
            "Tidak. Fokusnya lebih luas: code quality, QA flow, release confidence, dan maintainability.",
        },
        {
          question: "Bisakah berjalan sambil produk tetap live?",
          answer:
            "Bisa. Justru pendekatan bertahap biasanya dipilih agar perbaikan tidak mengganggu operasional yang sudah berjalan.",
        },
      ],
      relatedSlugs: ["custom-software-development", "ai-automation-service"],
      geoNote:
        "Relevan untuk product team dan software owner di Indonesia yang ingin menstabilkan produk sebelum ekspansi fitur atau pengguna.",
    },
    en: {
      locale: "en",
      slug: "improvement-quality-service",
      value: "Improvement Quality Service",
      title: "Improvement Quality Service",
      shortTitle: "Quality Improvement",
      seoTitle: "Software Quality Improvement Services in Indonesia",
      seoDescription:
        "Quality improvement services for software teams that need better release stability, stronger testing flow, and healthier product maintainability.",
      heroTitle: "Improve software quality without rebuilding everything from scratch.",
      heroDescription:
        "We help teams reduce recurring bugs, strengthen release quality, and improve engineering foundations so live products become more stable and easier to maintain.",
      heroHighlights: ["Quality audit", "More stable releases", "Maintainability focus"],
      problem: "Live products often slow down because of recurring bugs, weak testing habits, and code that gets harder to change over time.",
      outcome: "Teams release with stronger confidence and reduce the hidden cost of repeated fixes.",
      overviewTitle: "Service overview",
      overview:
        "This page works well when speaking to clients who already have a live system but are starting to feel the cost of poor quality.",
      painPoints: [
        "Recurring bugs interrupt operations and erode user trust.",
        "Testing is still manual or inconsistent across releases.",
        "The codebase is difficult to understand, so even small changes move slowly.",
      ],
      deliverables: [
        "A review of code quality, QA flow, and release risks.",
        "Priority-based quick wins and staged improvement recommendations.",
        "Improvements to structure, testing, and core quality gates.",
        "Suggestions for a cleaner engineering workflow going forward.",
      ],
      suitableFor: [
        "Products that are already live but do not release confidently.",
        "Teams stuck in firefighting and repeated bug fixes.",
        "Companies preparing a codebase before a larger product scale-up.",
      ],
      presentationPoints: [
        "Help clients see the hidden business cost of quality issues, not just the bug count.",
        "Emphasize staged improvements so the work feels safe and realistic.",
        "Show how quality improvement supports future delivery, not just cleanup of the past.",
      ],
      faqs: [
        {
          question: "Do we need a full rewrite?",
          answer:
            "Not usually. Many cases are better handled through audit, targeted quick wins, and staged improvements in the highest-risk areas.",
        },
        {
          question: "Is this only about testing?",
          answer:
            "No. The focus is broader: code quality, QA flow, release confidence, and maintainability.",
        },
        {
          question: "Can this happen while the product stays live?",
          answer:
            "Yes. A staged approach is often best because it improves quality without disrupting ongoing operations.",
        },
      ],
      relatedSlugs: ["custom-software-development", "ai-automation-service"],
      geoNote:
        "Relevant for product teams and software owners across Indonesia who want to stabilize a product before scaling features or users.",
    },
  },
  {
    slug: "seo-geo-optimize-service",
    id: {
      locale: "id",
      slug: "seo-geo-optimize-service",
      value: "SEO & GEO Optimize Service",
      title: "SEO & GEO Optimize Service",
      shortTitle: "SEO & GEO",
      seoTitle: "SEO & GEO Optimize Service untuk Website Bisnis Indonesia",
      seoDescription:
        "SEO & GEO optimize service untuk membantu bisnis Indonesia meningkatkan visibilitas organik, relevansi lokal, dan performa landing page yang lebih siap konversi.",
      heroTitle: "Bangun halaman yang lebih mudah ditemukan dan lebih mudah mengubah traffic jadi inquiry.",
      heroDescription:
        "Kami mengoptimalkan struktur landing page, keyword intent, dan geo relevance agar bisnis lebih terlihat di pencarian sekaligus lebih siap dipakai tim saat sesi konsultasi.",
      heroHighlights: ["Landing page siap presentasi", "Local intent yang lebih jelas", "Fokus konversi inquiry"],
      problem: "Banyak website bisnis tampil rapi tetapi lemah di struktur SEO, intent lokal, dan materi yang benar-benar membantu tim sales menjelaskan layanan.",
      outcome: "Halaman menjadi lebih berguna untuk pencarian organik, relevansi lokal, dan percakapan konversi selama sesi konsultasi.",
      overviewTitle: "Ringkasan layanan",
      overview:
        "Layanan ini cocok untuk bisnis yang ingin setiap halaman layanan berfungsi ganda: sebagai aset SEO/GEO dan sebagai materi presentasi yang membantu tim menjual dengan lebih percaya diri.",
      painPoints: [
        "Halaman layanan terlalu tipis sehingga sulit bersaing di pencarian organik.",
        "Konten belum menjawab intent lokal atau pertanyaan decision maker.",
        "Tim sales butuh materi yang lebih terstruktur saat menjelaskan layanan ke calon klien.",
      ],
      deliverables: [
        "Audit struktur konten, keyword intent, dan on-page SEO.",
        "Perbaikan copy layanan agar lebih jelas untuk search dan conversion.",
        "Rancangan internal linking, FAQ, schema, dan local relevance.",
        "Saran optimasi teknis agar halaman tetap cepat dan ringan.",
      ],
      suitableFor: [
        "Bisnis jasa yang ingin meningkatkan kualitas landing page layanan.",
        "Perusahaan yang ingin setiap halaman layanan dipakai juga oleh tim sales atau konsultasi.",
        "Website yang butuh penguatan local search intent di Indonesia.",
      ],
      presentationPoints: [
        "Jelaskan bahwa halaman layanan bukan hanya untuk Google, tetapi juga untuk membantu manusia membuat keputusan lebih cepat.",
        "Tunjukkan hubungan langsung antara struktur konten, intent pencarian, dan kualitas inquiry yang masuk.",
        "Tekankan bahwa optimasi dilakukan tanpa menambah ketergantungan pada stack yang berat.",
      ],
      faqs: [
        {
          question: "Apakah layanan ini hanya menulis ulang copy?",
          answer:
            "Tidak. Fokusnya mencakup struktur halaman, search intent, local relevance, schema, FAQ, dan kesiapan halaman untuk conversion.",
        },
        {
          question: "Apakah cocok untuk website sederhana?",
          answer:
            "Ya. Justru website sederhana sering mendapat dampak besar dari struktur konten dan landing page yang lebih tepat.",
        },
        {
          question: "Apakah hasilnya langsung instan?",
          answer:
            "SEO dan GEO biasanya butuh waktu, tetapi perbaikan struktur halaman bisa langsung membantu kualitas presentasi dan inquiry.",
        },
      ],
      relatedSlugs: ["consulting-service", "custom-software-development"],
      geoNote:
        "Sangat relevan untuk bisnis yang menargetkan pencarian lokal Indonesia, termasuk kota besar dan area layanan nasional.",
    },
    en: {
      locale: "en",
      slug: "seo-geo-optimize-service",
      value: "SEO & GEO Optimize Service",
      title: "SEO & GEO Optimize Service",
      shortTitle: "SEO & GEO",
      seoTitle: "SEO and GEO Optimization Services for Business Websites in Indonesia",
      seoDescription:
        "SEO and GEO optimization services to improve organic visibility, local relevance, and conversion-ready landing pages for Indonesian businesses.",
      heroTitle: "Build pages that are easier to find and easier to turn into qualified inquiries.",
      heroDescription:
        "We optimize landing page structure, search intent, and geographic relevance so service pages work better for organic search and for live sales conversations.",
      heroHighlights: ["Presentation-ready pages", "Clearer local intent", "Inquiry-focused structure"],
      problem: "Many business websites look polished but stay weak in SEO structure, local intent, and content that actually helps the sales team explain the offer.",
      outcome: "Pages become more useful for organic search, local relevance, and higher-quality consultation conversations.",
      overviewTitle: "Service overview",
      overview:
        "This service fits businesses that want each service page to do double duty: support SEO/GEO and help the team present the offer with confidence.",
      painPoints: [
        "Service pages are too thin to compete well in organic search.",
        "The content does not answer local intent or decision-maker concerns clearly enough.",
        "The sales team needs more structured material when explaining the service to leads.",
      ],
      deliverables: [
        "An audit of content structure, keyword intent, and on-page SEO.",
        "Service page copy improvements for clearer search and conversion performance.",
        "Internal linking, FAQ, schema, and local relevance planning.",
        "Technical recommendations to keep the page fast and lightweight.",
      ],
      suitableFor: [
        "Service businesses improving the quality of their landing pages.",
        "Teams that want service pages to help both marketing and consultation calls.",
        "Websites needing stronger local search relevance in Indonesia.",
      ],
      presentationPoints: [
        "Explain that service pages should support humans making decisions, not only search engines.",
        "Show the direct link between page structure, search intent, and inquiry quality.",
        "Emphasize optimization without introducing heavy infrastructure or bloated tooling.",
      ],
      faqs: [
        {
          question: "Is this only about rewriting copy?",
          answer:
            "No. It covers structure, search intent, local relevance, schema, FAQ, and conversion readiness.",
        },
        {
          question: "Does it work for simpler websites too?",
          answer:
            "Yes. Simpler sites often gain a lot from stronger page structure and more purposeful service content.",
        },
        {
          question: "Are results immediate?",
          answer:
            "SEO and GEO usually take time, but better page structure can immediately improve how the team presents the service and captures leads.",
        },
      ],
      relatedSlugs: ["consulting-service", "custom-software-development"],
      geoNote:
        "Especially relevant for companies targeting local search across Indonesia, including large cities and nationwide service areas.",
    },
  },
];

export function getAllServiceSlugs() {
  return serviceBundles.map((service) => service.slug);
}

export function getServiceDetail(locale: Locale, slug: ServiceSlug) {
  return serviceBundles.find((service) => service.slug === slug)?.[locale] ?? null;
}

export function getServiceSummaries(locale: Locale) {
  return serviceBundles.map((service) => {
    const detail = service[locale];
    return {
      slug: detail.slug,
      value: detail.value,
      title: detail.title,
      problem: detail.problem,
      outcome: detail.outcome,
    };
  });
}

export function getRelatedServices(locale: Locale, slugs: ServiceSlug[]) {
  return slugs
    .map((slug) => getServiceDetail(locale, slug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));
}
