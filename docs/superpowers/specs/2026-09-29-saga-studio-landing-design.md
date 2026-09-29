# Saga Studio Landing Page — Design Spec

**Date:** 2026-09-29  
**Status:** Approved  
**Path:** `/Users/dedekurniawan/Documents/works/saga-studio/landing/`

---

## 1. Project Overview

A marketing landing page for **Saga Studio** (Saga Tekno Studio), an Indonesian IT consultant and software house. The page is bilingual (Indonesian primary, English secondary) and targets SME and enterprise decision-makers looking for a trusted technical partner.

**Live reference for content:** https://studio.saga.co.id  
**Design references:** sprout.co.id (dark, bold, AI/tech studio) · flecto.io (clean modern SaaS)

---

## 2. Tech Stack

| Layer | Choice | Notes |
|-------|--------|-------|
| Framework | **Astro 4** | `output: 'static'`, zero-JS by default |
| Styling | **Tailwind CSS v4** | via `@tailwindcss/vite` Vite plugin |
| Animation | **Motion One** (`motion`) | `inView()` scroll reveals, no React needed |
| Icons | **Lucide** | Tree-shakeable, imported per component |
| Font | **Inter** via `@fontsource/inter` | weights 400, 600, 700, 800 |
| Deploy target | Static hosting (Vercel / Cloudflare Pages) | |

---

## 3. Design System

### 3.1 Color Tokens

Defined as CSS custom properties in `src/styles/global.css`:

```css
:root {
  --bg-base:    #080D0B;   /* page background */
  --bg-surface: #101510;   /* cards, nav */
  --bg-raised:  #182019;   /* hover surfaces */
  --border:     #1E2A21;   /* subtle borders */
  --brand-teal: #2ABFB3;   /* primary accent */
  --brand-lime: #CAEF6F;   /* secondary accent */
  --text-primary: #EFF5F0; /* headings, body */
  --text-muted:   #7A9484; /* secondary copy, labels */
}
```

Gradient utility (used for text, buttons, borders):
```
linear-gradient(135deg, #2ABFB3 0%, #CAEF6F 100%)
```

### 3.2 Typography

Font: **Inter** (Google/Fontsource). Loaded via `@fontsource/inter` in the global layout.

| Role | Size | Weight | Notes |
|------|------|--------|-------|
| Hero H1 | `clamp(3rem, 7vw, 5rem)` | 800 | gradient on key words |
| Section H2 | `clamp(2rem, 4vw, 3rem)` | 700 | |
| Subheading H3 | `1.25rem` | 600 | |
| Body | `1rem` / lh 1.7 | 400 | |
| Badge/label | `0.75rem` | 600 | uppercase, letter-spacing 0.08em |

### 3.3 Visual Effects

- **Background texture:** SVG dot-grid pattern at 5% opacity on `--bg-base`
- **Gradient text:** `background: var(--gradient); background-clip: text; -webkit-text-fill-color: transparent`
- **Glassmorphism cards:** `background: color-mix(in srgb, var(--bg-surface) 60%, transparent); backdrop-filter: blur(8px); border: 1px solid var(--border)`
- **Glow blobs:** `position: absolute` blurred radial circles in teal/lime at 8% opacity, `pointer-events: none`, behind section content
- **Card hover:** `box-shadow: 0 0 32px color-mix(in srgb, var(--brand-teal) 20%, transparent)` on hover

### 3.4 Motion

All animated elements use **Motion One `inView()`**:

```js
inView('[data-animate]', ({ target }) => {
  animate(target, { opacity: [0, 1], y: [24, 0] }, { duration: 0.5, easing: 'ease-out' })
})
```

Stagger on grids: `delay: index * 0.1` applied per card via `data-animate-delay`.

---

## 4. File Structure

```
landing/
├── public/
│   ├── logo.png              # mark only (gradient S)
│   ├── logo-text.png         # horizontal logo (dark bg)
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # html shell, font import, meta tags
│   ├── components/
│   │   ├── Nav.astro
│   │   ├── Hero.astro
│   │   ├── ValueProps.astro
│   │   ├── Services.astro
│   │   ├── ServiceCard.astro
│   │   ├── Process.astro
│   │   ├── WhySaga.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── pages/
│   │   └── index.astro       # composes all sections
│   ├── styles/
│   │   └── global.css        # CSS tokens, base resets, dot-grid
│   └── scripts/
│       └── animate.js        # Motion One inView setup
├── astro.config.mjs
├── tailwind.config.js        # (v4: minimal, tokens via CSS)
├── package.json
└── tsconfig.json
```

---

## 5. Section Specifications

### 5.1 Nav

- **Behavior:** Sticky top, `bg-surface/80 backdrop-blur-md`; adds `border-b border-[--border]` on scroll (IntersectionObserver on hero)
- **Left:** `logo-text.png` (white variant), height 32px
- **Center:** Anchor links — Services · Process · About · Contact — smooth scroll
- **Right:** "Konsultasi Gratis" — pill button, gradient border, teal text; fills gradient on hover
- **Mobile:** Hamburger icon (Lucide `Menu`), full-screen overlay menu

### 5.2 Hero

- **Layout:** Full viewport (`min-h-screen`), centered vertically and horizontally
- **Eyebrow:** Badge pill — `◆ AI-Driven IT Consultant` — gradient border, `--text-muted` background
- **H1:** `"Kami Membangun Sistem yang Tumbuh Bersama Bisnis Anda"` — last 3 words in gradient text
- **Sub-copy:** `"Delivery production-grade lebih cepat 20% dengan AI-driven workflow. Response dalam 24 jam. Tanpa ketergantungan vendor eksklusif."`
- **CTAs:**
  - Primary: `"Mulai Konsultasi"` — gradient fill, rounded-full, shadow glow
  - Secondary: `"Lihat Layanan →"` — ghost, text-muted, hover teal
- **Visual:** Right-aligned (desktop) floating card — dark glassmorphism card showing abstract code block / dashboard fragment; behind it a large teal+lime glow blob (blurred `radial-gradient`, `opacity-10`)
- **Glow blob:** `position: absolute`, `width: 600px height: 600px`, `blur: 120px`, centered behind content

### 5.3 Value Props Strip

- **Layout:** Full-width `bg-surface` band, 3 equal columns, `py-12`
- **Items:**
  1. `24 Jam` — "Respons terjamin dalam satu hari kerja"
  2. `20% Lebih Cepat` — "Delivery dipercepat dengan AI-driven workflow"  
  3. `Production-Grade` — "Review manusia wajib di setiap tahap"
- **Each item:** Large gradient number/stat, label below in `--text-muted`, separator border between columns

### 5.4 Services Grid

- **Anchor:** `id="services"`
- **Layout:** Section heading centered, then `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`
- **6 Cards (ServiceCard.astro):**
  1. Custom Software Development — replaces spreadsheets and fragmented tools
  2. Migration Service — secure, documented transitions, reduced downtime
  3. Consulting Service — aligns priorities and scope before major investments
  4. AI Automation — streamlines repetitive ops, improves team velocity
  5. Quality Improvement — reduces bugs, strengthens maintainability
  6. SEO & GEO Optimize — organic search visibility and local relevance
- **Card anatomy:** Gradient Lucide icon (top-left) · Title (H3) · 1-line description · subtle arrow link "Pelajari lebih lanjut →"
- **Card style:** Glassmorphism, `rounded-2xl`, gradient border on hover, teal glow shadow

### 5.5 Process

- **Anchor:** `id="process"`
- **Layout:** Centered heading, then horizontal 3-step row on desktop / vertical stack on mobile
- **Connecting element:** Dashed gradient line between steps (desktop only, CSS `border-t`)
- **Steps:**
  1. **Discovery** — "Kami pelajari kebutuhan bisnis dan tantangan teknis Anda"
  2. **Scope & Estimasi** — "Kami definisikan ruang lingkup, timeline, dan estimasi biaya secara transparan"
  3. **Build / Migrate / Improve** — "Eksekusi dengan standar production-grade dan review manusia di setiap sprint"
- **Step anatomy:** Numbered circle (gradient fill) · Title · Description

### 5.6 Why Saga Studio

- **Anchor:** `id="about"`
- **Layout:** 2-column alternating rows (text + visual graphic), 4 rows total
- **Differentiators:**
  1. AI + mandatory human code review — "AI mengoptimalkan fase repetitif, engineer tetap pemegang keputusan"
  2. No fictional testimonials — "Transparansi penuh; hasil nyata dari proyek nyata"
  3. No exclusive cloud lock-in — "Arsitektur bebas vendor; Anda punya kendali penuh"
  4. Bilingual support EN/ID — "Tim kami siap berkomunikasi dalam Bahasa Indonesia maupun English"
- **Visual graphic:** Abstract SVG illustration or gradient shape per row (not photos)

### 5.7 Contact / CTA

- **Anchor:** `id="contact"`
- **Layout:** Centered, max-w-2xl, dark card with gradient border
- **Heading:** `"Mulai dengan Konsultasi Gratis"`
- **Sub:** `"Ceritakan kebutuhan Anda. Kami akan respons dalam 24 jam."`
- **Form fields:** Name · Email · Phone · Service (select: 6 options) · Message (textarea)
- **Submit:** `"Kirim Pesan"` gradient button full-width
- **Below form:** `"🔒 Data Anda dienkripsi dan tidak dibagikan ke pihak ketiga"` in `--text-muted`
- **Form action:** Static form — POST to Formspree or Netlify Forms (to be configured at deploy time; placeholder `action="#"` in spec)

### 5.8 Footer

- **Layout:** 3-column grid, `border-t border-[--border]`, `py-16`
- **Col 1:** Logo mark + tagline `"IT Consultant & Software House"` + short one-liner
- **Col 2:** Navigation links (same as nav anchors)
- **Col 3:** Contact — email, WhatsApp link, location (Indonesia)
- **Bottom bar:** Copyright `© 2025 Saga Tekno Studio` · `studio.saga.co.id`

---

## 6. Responsive Breakpoints

| Breakpoint | Value | Key change |
|------------|-------|------------|
| `sm` | 640px | Stack hero CTA buttons |
| `md` | 768px | Services 2-col, process vertical→horizontal |
| `lg` | 1024px | Services 3-col, hero side-by-side layout |
| `xl` | 1280px | Max content width cap at 1200px |

---

## 7. SEO & Meta

- `<title>` Saga Studio — IT Consultant & Software House Indonesia
- `<meta name="description">` — "Saga Studio membantu bisnis Anda delivery lebih cepat dengan AI-driven development. Custom software, migrasi sistem, konsultasi IT, dan otomasi AI."
- Open Graph image: `logo-text-bg-black.png` (1200×630 crop)
- `lang="id"` on `<html>`

---

## 8. Out of Scope

- CMS / blog
- Authentication
- Pricing page
- Multi-language toggle (EN version is a future iteration)
- Backend form processing (form action to be wired at deploy)
