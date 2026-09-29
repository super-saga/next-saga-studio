export type Lang = 'en' | 'id'

export const translations = {
  en: {
    lang: 'en' as const,
    html: { lang: 'en', title: 'Saga Studio — AI & Product Engineering Studio', description: 'Saga Studio helps founders and operating teams build production-grade product, AI, and platform systems in Southeast Asia.' },

    nav: {
      links: [
        { label: 'Services',  href: '/en/#services' },
        { label: 'Portfolio', href: '/en/portfolio/' },
        { label: 'Blog',      href: '/en/blog/' },
        { label: 'Contact',   href: '/en/#contact'  },
      ],
      cta: 'Free Consultation',
      switchLabel: 'ID',
      switchHref: '/id/',
    },

    hero: {
      eyebrow: 'Technical Studio · Southeast Asia',
      h1: 'We build systems. We ship them. You own them.',
      intro: "Saga Studio is the technical partner founders and operators call when the build is too important to get wrong — products, AI systems, and platforms delivered in focused sprints and handed over completely.",
      cta1: 'Start a project',
      cta2: 'See our work',
      pillars: [
        { num: '01', title: 'Ship in weeks',      body: 'From discovery to production in focused sprints — not months of check-ins and revision cycles.',          accent: 'dark' },
        { num: '02', title: 'AI-accelerated',     body: 'AI speeds up every phase of the build. Human review holds quality before anything ships.',               accent: 'lime' },
        { num: '03', title: 'You own it fully',   body: 'Docs, training, handover. Your team runs the system. No dependency on us to keep the lights on.',        accent: 'neutral' },
      ],
    },

    valueProps: {
      stats: [
        { value: '3+',  label: 'Production systems shipped and running for real users in Southeast Asia' },
        { value: '24h', label: 'First response guarantee for every qualified project conversation' },
        { value: '0',   label: 'Lock-in at handover — your team runs everything independently from day one' },
      ],
    },

    services: {
      kicker: 'Capabilities',
      heading: 'The {capabilities} powering your next build.',
      copy: 'One studio for product, AI, and platform — designed to be owned by your team from day one.',
      groups: [
        { eyebrow: 'Studio Capabilities', title: 'Product teams for critical builds.',              desc: 'Web, mobile, and backend — end-to-end delivery with design included.',                          items: ['Product Strategy', 'Product Design', 'Web Development', 'Mobile Development', 'Backend Engineering'] },
        { eyebrow: 'AI Capabilities',     title: 'Applied AI that survives production.',           desc: 'Automation, document intelligence, conversational AI, and agentic systems.',                    items: ['Workflow Automation', 'Document Intelligence', 'Conversational AI', 'RAG & Knowledge Systems', 'Agentic Systems'] },
        { eyebrow: 'Ventures',            title: 'Co-building from zero to repeatable.',           desc: 'Technical cofounder services and venture co-builds for emerging market founders.',               items: ['Co-Build', 'Technical Cofounder', 'Wright Partners', 'Vertical AI Emerging Markets'] },
        { eyebrow: 'Method',              title: 'Transparent delivery, full ownership transfer.', desc: 'Discovery through handover — you keep the systems, your team runs them.',                      items: ['Discovery', 'Architecture', 'Sprint Build', 'Human QA', 'Team Handover'] },
      ],
    },

    portfolio: {
      kicker: 'Portfolio',
      heading: 'Systems we\'ve {shipped}.',
      subheading: 'Real products. Running in production. Used by real people.',
      viewLabel: 'View project',
      projects: [
        { slug: 'sahabat-warga', name: 'Sahabat Warga', tag: 'Community Platform',      desc: 'Digital platform connecting citizens with local community management — iuran, announcements, resident data, and civic engagement in one app.', image: '/projects/sahabat-warga.png' },
        { slug: 'vela',          name: 'Vela',          tag: 'Investment Intelligence',  desc: "Indonesia's investment intelligence platform — connecting institutional investors with bankable projects across sectors and regions nationwide.",    image: '/projects/vela.png' },
        { slug: 'finitylab',     name: 'Finitylab',     tag: 'Social Listening & AI',   desc: 'AI-powered data intelligence platform for faster business decisions — social listening, internal data, and research in one unified view.',           image: '/projects/finitylab.png' },
        { slug: 'bilpay',        name: 'Bilpay',        tag: 'Fintech Platform',         desc: 'Digital payment platform consolidating transfers, bill payments, and wallet top-ups into a single mobile experience — built for speed and simplicity.', image: '/projects/bilpay.png' },
      ],
    },

    testimonials: {
      kicker: 'Trusted by',
      heading: 'Teams that shipped with Saga',
      items: [
        { company: 'Vela',          logo: '/logos/vela.png',          name: 'Shinta',  role: 'CEO, Vela',          quote: 'Saga delivered our investment intelligence platform in 12 weeks — a build three other agencies quoted at 8+ months. The team genuinely understood what we were building.',                     avatar: 'S',  color: '#3b3fa0' },
        { company: 'Sahabat Warga', logo: '/logos/sahabat-warga.png', name: 'Dede',    role: 'CEO, Sahabat Warga', quote: 'We needed a technical partner who understood both product vision and operational realities of local community systems. Saga was the only team that got it right from week one.',          avatar: 'D',  color: '#0f9c6a' },
        { company: 'Finitylab',     logo: '/logos/finity.png',        name: 'Nazir',   role: 'CTO, Finitylab',     quote: 'The handover was the part I dreaded most with previous agencies. Saga documented everything, ran training sessions with our team, and we were running independently within two weeks.',   avatar: 'N',  color: '#7c3aed' },
        { company: 'Bilpay',        logo: '/logos/bilpay.png',        name: 'Bilpay',  role: 'Product Team, Bilpay', quote: 'Saga built our payment platform from scratch — wallets, transfers, and mobile UX — and handed over a codebase our team could own and extend from day one.',                             avatar: 'B',  color: '#e03131' },
      ],
    },

    faq: {
      kicker: 'FAQ',
      heading: 'Common questions',
      items: [
        { q: 'How quickly can you start a project?',          a: 'We respond to qualified project conversations within 24 hours. Discovery and kick-off typically begins within one to two weeks of first conversation, depending on scope.' },
        { q: 'Do you work with early-stage founders?',        a: 'Yes. We co-build with founders from zero — including serving as technical cofounder for teams that need product leadership, not just execution. Some of our best work started as a napkin idea.' },
        { q: 'What does ownership transfer actually mean?',   a: 'At the end of every engagement, we document the system architecture, run internal training sessions, and hand over all code, credentials, and runbooks. You never depend on us to keep the lights on.' },
        { q: 'Do you only work with Indonesian companies?',   a: 'No. We deliver in both Bahasa Indonesia and English and work with founders across Southeast Asia — Singapore, Malaysia, Australia. Our team is bilingual by default.' },
        { q: 'What size of project do you take on?',          a: "We're selective. We work best on projects where the technical complexity is real — platforms, AI systems, and multi-team integrations. Small one-off feature requests are generally not a fit." },
        { q: 'Can I see more of your portfolio?',             a: 'Yes — we share relevant case studies in our first conversation. Some client work is under NDA, but we discuss technical approaches and measurable outcomes in detail.' },
      ],
    },

    process: {
      kicker: 'Method',
      heading: 'How We Build',
      steps: [
        { num: '01', title: 'Frame',     body: 'Clarify the business bet, users, constraints, and success signal before writing code.' },
        { num: '02', title: 'Architect', body: 'Translate the bet into product surface, data model, delivery plan, and risk controls.' },
        { num: '03', title: 'Ship',      body: 'Build in tight loops with AI acceleration, human review, and measurable acceptance checks.' },
        { num: '04', title: 'Transfer',  body: 'Document, train, and hand over systems so your internal team can keep moving.' },
      ],
    },

    whySaga: {
      kicker: 'Why Saga Studio',
      heading: 'A technical partner, not a ticket factory.',
      items: [
        { title: 'We move fast because of AI — not at the expense of quality', body: 'AI accelerates every phase from discovery to QA. Human review catches what models miss. You get speed and correctness, not a choice between them.' },
        { title: 'You never depend on us after we leave',                       body: 'We document everything, train your team, and hand over complete runbooks. The morning after the engagement ends, your team runs the system — not us.' },
        { title: "We don't pitch what we can't deliver",                        body: 'No fictional case studies. No inflated timelines to justify the budget. Every claim is tied to a delivery practice your team can inspect and verify.' },
        { title: 'Your architecture stays portable forever',                    body: 'Cloud, data, and application choices are made to keep your options open. You own the stack. You can move it, extend it, or replace us entirely.' },
      ],
    },

    contact: {
      kicker: 'Engagement',
      heading: "Let's make it real",
      copy: 'Tell us what you are trying to build, automate, migrate, or rescue. We will respond with a concrete next step within one business day.',
      fields: { name: 'Name', email: 'Email', phone: 'WhatsApp', service: 'Need', message: 'Context' },
      placeholders: { name: 'Budi Santoso', email: 'budi@company.com', phone: '+62 812 3456 7890', message: 'What outcome do you need, what exists today, and what is blocking progress?' },
      servicePrompt: 'Choose one…',
      services: ['Studio build', 'AI system', 'Migration', 'Quality recovery', 'Product strategy', 'Other'],
      button: 'Send project brief',
      sending: 'Sending…',
      privacy: 'Your data stays private. No newsletter auto-opt-in, no third-party resale.',
      successTitle: 'Message sent!',
      successBody: "We'll be in touch within one business day. Rather not wait?",
      whatsappCta: 'Chat on WhatsApp →',
      whatsappNote: "or we'll follow up by email",
      whatsappMsg: "Hi Saga Studio! I just submitted a project inquiry on your website. I'd love to discuss my project.",
    },

    footer: {
      tagline: 'AI & Product Engineering Studio for teams building serious digital systems in Southeast Asia.',
      columns: [
        { title: 'Studio',     links: ['Strategy', 'Design', 'Engineering'] },
        { title: 'AI Systems', links: ['Automation', 'Document AI', 'Agents'] },
        { title: 'Method',     links: ['Discovery', 'Build', 'Transfer'] },
      ],
      contactTitle: 'Contact',
      copyright: 'Saga Tekno Studio. All rights reserved.',
      startProject: 'Start a project',
    },

    chat: {
      fabLabel: 'Chat with us',
      headerTitle: 'Saga Studio',
      headerStatus: 'We typically reply within 24 hours',
      intro: "Hi! Tell us what you're working on and we'll get back to you fast.",
      fields: { name: 'Name', email: 'Email', phone: 'WhatsApp (optional)', service: 'What do you need?', message: 'Brief message' },
      servicePrompt: 'Choose one…',
      services: ['Studio build', 'AI system', 'Migration', 'Quality recovery', 'Product strategy', 'Other'],
      placeholder: { message: 'Describe your project or challenge in a few sentences…' },
      button: 'Send message',
      sending: 'Sending…',
      successTitle: 'Message received!',
      successBody: "Thanks! Our team will reach you via email or WhatsApp within 24 hours. We'll start with a brief call to understand your project.",
      successCta: 'Close',
      whatsappCta: 'Chat on WhatsApp →',
      whatsappMsg: "Hi Saga Studio! I just sent a message through your website. I'd love to discuss my project.",
    },
  },

  id: {
    lang: 'id' as const,
    html: { lang: 'id', title: 'Saga Studio — Studio Rekayasa AI & Produk', description: 'Saga Studio membantu para founder dan tim operasional membangun sistem produk, AI, dan platform siap produksi di Asia Tenggara.' },

    nav: {
      links: [
        { label: 'Layanan',     href: '/id/#services' },
        { label: 'Portofolio',  href: '/id/portfolio/' },
        { label: 'Blog',        href: '/en/blog/' },
        { label: 'Kontak',      href: '/id/#contact'  },
      ],
      cta: 'Konsultasi Gratis',
      switchLabel: 'EN',
      switchHref: '/en/',
    },

    hero: {
      eyebrow: 'Technical Studio · Asia Tenggara',
      h1: 'Kami bangun sistemnya. Kami kirimkan. Anda yang memiliki.',
      intro: 'Saga Studio adalah mitra teknis yang dihubungi para founder dan operator ketika pembangunan terlalu penting untuk salah — produk, sistem AI, dan platform yang dikirim dalam sprint terfokus dan diserahterimakan sepenuhnya.',
      cta1: 'Mulai proyek',
      cta2: 'Lihat karya kami',
      pillars: [
        { num: '01', title: 'Kirim dalam minggu',    body: 'Dari discovery ke produksi dalam sprint terfokus — bukan bulan-bulan check-in dan siklus revisi.',             accent: 'dark' },
        { num: '02', title: 'Dipercepat AI',          body: 'AI mempercepat setiap fase pembangunan. Review manusia menjaga kualitas sebelum apapun dikirim.',              accent: 'lime' },
        { num: '03', title: 'Sepenuhnya milik Anda',  body: 'Dokumentasi, pelatihan, serah terima. Tim Anda menjalankan sistem. Tidak ada ketergantungan pada kami.',      accent: 'neutral' },
      ],
    },

    valueProps: {
      stats: [
        { value: '3+',    label: 'Sistem produksi yang sudah dikirim dan digunakan pengguna nyata di Asia Tenggara' },
        { value: '24 Jam', label: 'Garansi respons pertama untuk setiap percakapan proyek yang memenuhi syarat' },
        { value: '0',      label: 'Lock-in saat serah terima — tim Anda menjalankan segalanya secara mandiri dari hari pertama' },
      ],
    },

    services: {
      kicker: 'Kemampuan',
      heading: 'Kemampuan {terbaik} untuk sistem berikutnya.',
      copy: 'Satu studio untuk produk, AI, dan platform — dirancang untuk dimiliki tim Anda sejak hari pertama.',
      groups: [
        { eyebrow: 'Kemampuan Studio', title: 'Tim produk untuk pembangunan kritis.',              desc: 'Web, mobile, dan backend — pengiriman end-to-end termasuk desain.',                                    items: ['Strategi Produk', 'Desain Produk', 'Pengembangan Web', 'Pengembangan Mobile', 'Backend Engineering'] },
        { eyebrow: 'Kemampuan AI',     title: 'AI terapan yang bertahan di produksi.',            desc: 'Otomasi, kecerdasan dokumen, AI percakapan, dan sistem agentik.',                                     items: ['Otomasi Alur Kerja', 'Kecerdasan Dokumen', 'AI Percakapan', 'Sistem RAG & Pengetahuan', 'Sistem Agentic'] },
        { eyebrow: 'Ventures',         title: 'Co-building dari nol hingga gerak berulang.',      desc: 'Layanan technical cofounder dan co-build untuk founder pasar berkembang.',                            items: ['Co-Build', 'Technical Cofounder', 'Wright Partners', 'AI Vertikal Pasar Berkembang'] },
        { eyebrow: 'Metode',           title: 'Pengiriman transparan, transfer kepemilikan penuh.', desc: 'Discovery hingga serah terima — Anda menyimpan sistemnya, tim Anda menjalankannya.',               items: ['Discovery', 'Arsitektur', 'Sprint Build', 'QA Manusia', 'Serah Terima Tim'] },
      ],
    },

    portfolio: {
      kicker: 'Portofolio',
      heading: 'Sistem yang sudah kami {kirimkan}.',
      subheading: 'Produk nyata. Berjalan di produksi. Digunakan oleh orang nyata.',
      viewLabel: 'Lihat proyek',
      projects: [
        { slug: 'sahabat-warga', name: 'Sahabat Warga', tag: 'Platform Komunitas',    desc: 'Platform digital yang menghubungkan warga dengan manajemen komunitas lokal — iuran, pengumuman, data warga, dan keterlibatan civic dalam satu aplikasi.', image: '/projects/sahabat-warga.png' },
        { slug: 'vela',          name: 'Vela',          tag: 'Intelijen Investasi',   desc: 'Platform intelijen investasi Indonesia — menghubungkan investor institusional dengan proyek bankable di seluruh sektor dan wilayah nasional.',             image: '/projects/vela.png' },
        { slug: 'finitylab',     name: 'Finitylab',     tag: 'Social Listening & AI', desc: 'Platform intelijen data berbasis AI untuk keputusan bisnis lebih cepat — social listening, data internal, dan riset dalam satu tampilan terpadu.',         image: '/projects/finitylab.png' },
        { slug: 'bilpay',        name: 'Bilpay',        tag: 'Platform Fintech',      desc: 'Platform pembayaran digital yang menyatukan transfer, pembayaran tagihan, dan top-up dompet dalam satu pengalaman mobile — cepat dan sederhana.',           image: '/projects/bilpay.png' },
      ],
    },

    testimonials: {
      kicker: 'Dipercaya oleh',
      heading: 'Tim yang ship bersama Saga',
      items: [
        { company: 'Vela',          logo: '/logos/vela.png',          name: 'Shinta', role: 'CEO, Vela',          quote: 'Saga menyelesaikan platform investasi kami dalam 12 minggu — build yang dikutip 3 agensi lain butuh 8+ bulan. Tim ini benar-benar memahami apa yang kami bangun.',                              avatar: 'S', color: '#3b3fa0' },
        { company: 'Sahabat Warga', logo: '/logos/sahabat-warga.png', name: 'Dede',   role: 'CEO, Sahabat Warga', quote: 'Kami butuh mitra teknis yang memahami visi produk dan realitas operasional sistem komunitas lokal. Saga adalah satu-satunya tim yang tepat dari minggu pertama.',                     avatar: 'D', color: '#0f9c6a' },
        { company: 'Finitylab',     logo: '/logos/finity.png',        name: 'Nazir',  role: 'CTO, Finitylab',     quote: 'Serah terima adalah bagian yang paling saya khawatirkan dari agensi sebelumnya. Saga mendokumentasikan segalanya, menjalankan sesi pelatihan, dan tim kami mandiri dalam dua minggu.',   avatar: 'N', color: '#7c3aed' },
        { company: 'Bilpay',        logo: '/logos/bilpay.png',        name: 'Bilpay', role: 'Tim Produk, Bilpay',  quote: 'Saga membangun platform pembayaran kami dari nol — dompet, transfer, dan UX mobile — dan menyerahkan codebase yang bisa langsung dikelola dan dikembangkan tim kami sendiri.',           avatar: 'B', color: '#e03131' },
      ],
    },

    faq: {
      kicker: 'FAQ',
      heading: 'Pertanyaan umum',
      items: [
        { q: 'Seberapa cepat Anda bisa memulai proyek?',         a: 'Kami merespons percakapan proyek yang memenuhi syarat dalam 24 jam. Discovery dan kick-off biasanya dimulai dalam satu hingga dua minggu setelah percakapan pertama.' },
        { q: 'Apakah Anda bekerja dengan founder tahap awal?',   a: 'Ya. Kami co-build bersama founder dari nol — termasuk menjadi technical cofounder untuk tim yang membutuhkan kepemimpinan produk, bukan hanya eksekusi.' },
        { q: 'Apa maksud dari serah terima kepemilikan?',        a: 'Di akhir setiap engagement, kami mendokumentasikan arsitektur sistem, menjalankan sesi pelatihan internal, dan menyerahkan semua kode, kredensial, dan runbook. Anda tidak pernah bergantung pada kami.' },
        { q: 'Apakah Anda hanya bekerja dengan perusahaan Indonesia?', a: 'Tidak. Kami bekerja dalam Bahasa Indonesia dan Inggris dan bekerja dengan founder di seluruh Asia Tenggara — Singapura, Malaysia, Australia.' },
        { q: 'Berapa ukuran proyek yang Anda ambil?',            a: 'Kami selektif. Kami bekerja paling baik pada proyek dengan kompleksitas teknis yang nyata — platform, sistem AI, dan integrasi multi-tim. Permintaan fitur kecil umumnya tidak cocok.' },
        { q: 'Bisakah saya melihat lebih banyak portofolio?',    a: 'Ya — kami berbagi studi kasus yang relevan dalam percakapan pertama. Beberapa pekerjaan klien berada di bawah NDA, tetapi kami membahas pendekatan teknis dan hasil terukur secara detail.' },
      ],
    },

    process: {
      kicker: 'Metode',
      heading: 'Cara Kami Membangun',
      steps: [
        { num: '01', title: 'Identifikasi', body: 'Klarifikasi taruhan bisnis, pengguna, kendala, dan sinyal sukses sebelum menulis kode.' },
        { num: '02', title: 'Arsitektur',   body: 'Terjemahkan taruhan menjadi permukaan produk, model data, rencana pengiriman, dan kontrol risiko.' },
        { num: '03', title: 'Bangun',       body: 'Bangun dalam loop ketat dengan akselerasi AI, review manusia, dan pemeriksaan penerimaan terukur.' },
        { num: '04', title: 'Serahkan',     body: 'Dokumentasi, pelatihan, dan serah terima sistem agar tim internal Anda dapat terus bergerak.' },
      ],
    },

    whySaga: {
      kicker: 'Mengapa Saga Studio',
      heading: 'Mitra teknis, bukan pabrik tiket.',
      items: [
        { title: 'Kami bergerak cepat berkat AI — bukan mengorbankan kualitas',  body: 'AI mempercepat setiap fase dari discovery hingga QA. Review manusia menangkap apa yang dilewatkan model. Anda mendapatkan kecepatan dan ketepatan, bukan pilihan di antara keduanya.' },
        { title: 'Anda tidak pernah bergantung pada kami setelah kami pergi',     body: 'Kami mendokumentasikan segalanya, melatih tim Anda, dan menyerahkan runbook lengkap. Keesokan paginya setelah engagement berakhir, tim Anda yang menjalankan sistem — bukan kami.' },
        { title: 'Kami tidak menjual apa yang tidak bisa kami deliver',           body: 'Tidak ada studi kasus fiktif. Tidak ada timeline yang digelembungkan. Setiap klaim terikat pada praktik pengiriman yang bisa diinspeksi dan diverifikasi oleh tim Anda.' },
        { title: 'Arsitektur Anda tetap portabel selamanya',                      body: 'Pilihan cloud, data, dan aplikasi dibuat untuk menjaga opsi Anda tetap terbuka. Anda memiliki stack-nya. Anda bisa memindahkan, memperluas, atau mengganti kami sepenuhnya.' },
      ],
    },

    contact: {
      kicker: 'Mulai Proyek',
      heading: 'Wujudkan ide Anda',
      copy: 'Ceritakan apa yang ingin Anda bangun, otomasi, migrasikan, atau selamatkan. Kami akan merespons dengan langkah konkret dalam satu hari kerja.',
      fields: { name: 'Nama', email: 'Email', phone: 'WhatsApp', service: 'Kebutuhan', message: 'Konteks' },
      placeholders: { name: 'Budi Santoso', email: 'budi@perusahaan.com', phone: '+62 812 3456 7890', message: 'Hasil apa yang Anda butuhkan, apa yang sudah ada, dan apa yang menghambat kemajuan?' },
      servicePrompt: 'Pilih satu…',
      services: ['Bangun Studio', 'Sistem AI', 'Migrasi', 'Pemulihan Kualitas', 'Strategi Produk', 'Lainnya'],
      button: 'Kirim Ringkasan Proyek',
      sending: 'Mengirim…',
      privacy: 'Data Anda tetap privat. Tidak ada pendaftaran newsletter otomatis, tidak ada penjualan ke pihak ketiga.',
      successTitle: 'Pesan terkirim!',
      successBody: 'Kami akan menghubungi dalam satu hari kerja. Tidak ingin menunggu?',
      whatsappCta: 'Chat di WhatsApp →',
      whatsappNote: 'atau kami akan follow up via email',
      whatsappMsg: 'Halo Saga Studio! Saya baru saja mengirim pertanyaan proyek di website Anda. Saya ingin mendiskusikan proyek saya.',
    },

    footer: {
      tagline: 'Studio Rekayasa AI & Produk untuk tim yang membangun sistem digital serius di Asia Tenggara.',
      columns: [
        { title: 'Studio',     links: ['Strategi', 'Desain', 'Engineering'] },
        { title: 'AI Systems', links: ['Otomasi', 'Dokumen AI', 'Agen'] },
        { title: 'Metode',     links: ['Discovery', 'Bangun', 'Transfer'] },
      ],
      contactTitle: 'Kontak',
      copyright: 'Saga Tekno Studio. Hak cipta dilindungi.',
      startProject: 'Mulai proyek',
    },

    chat: {
      fabLabel: 'Chat dengan kami',
      headerTitle: 'Saga Studio',
      headerStatus: 'Kami biasanya membalas dalam 24 jam',
      intro: 'Halo! Ceritakan apa yang sedang Anda kerjakan dan kami akan segera menghubungi Anda.',
      fields: { name: 'Nama', email: 'Email', phone: 'WhatsApp (opsional)', service: 'Apa yang Anda butuhkan?', message: 'Pesan singkat' },
      servicePrompt: 'Pilih satu…',
      services: ['Bangun Studio', 'Sistem AI', 'Migrasi', 'Pemulihan Kualitas', 'Strategi Produk', 'Lainnya'],
      placeholder: { message: 'Ceritakan proyek atau tantangan Anda dalam beberapa kalimat…' },
      button: 'Kirim pesan',
      sending: 'Mengirim…',
      successTitle: 'Pesan diterima!',
      successBody: 'Terima kasih! Tim kami akan menghubungi Anda melalui email atau WhatsApp dalam 24 jam. Kami akan mulai dengan panggilan singkat untuk memahami proyek Anda.',
      successCta: 'Tutup',
      whatsappCta: 'Chat di WhatsApp →',
      whatsappMsg: 'Halo Saga Studio! Saya baru saja mengirim pesan melalui website Anda. Saya ingin mendiskusikan proyek saya.',
    },
  },
} as const

export type Translations = typeof translations['en']
