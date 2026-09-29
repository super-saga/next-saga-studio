# Saga Studio Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a production-ready static landing page for Saga Studio (IT consultant / software house) with dark design system, gradient brand, scroll animations, and a contact form.

**Architecture:** Astro 4 static site with Tailwind CSS v4 (CSS-first config via `@theme`), Motion One for `inView` scroll reveals, and inline SVG icons. All sections are isolated `.astro` components composed in `index.astro`. Client JS is minimal — one module script for animations, one inline script for nav hamburger.

**Tech Stack:** Astro 4 · Tailwind CSS v4 (`@tailwindcss/vite`) · Motion One (`motion`) · `@fontsource/inter` · Inline SVG icons

**Spec:** `docs/superpowers/specs/2026-09-29-saga-studio-landing-design.md`

## Global Constraints

- Output mode: `static` (no SSR)
- Dark-only theme — no light mode toggle
- Colors: `--bg-base #080D0B` · `--bg-surface #101510` · `--bg-raised #182019` · `--border #1E2A21` · `--brand-teal #2ABFB3` · `--brand-lime #CAEF6F` · `--text-primary #EFF5F0` · `--text-muted #7A9484`
- Brand gradient: `linear-gradient(135deg, #2ABFB3 0%, #CAEF6F 100%)`
- Font: Inter (400/600/700/800) via `@fontsource/inter`
- Language: `lang="id"`, copy in Indonesian as spec'd per section
- Form: static HTML, `action="#"` placeholder — no backend wired
- Logo assets sourced from `/Users/dedekurniawan/Documents/works/saga-studio/` — copy to `public/`
- All animated elements carry `data-animate` attribute; stagger via `data-animate-delay="0.1"` etc.
- Max content width: `1200px` centred with `mx-auto px-6`

## Review Focus

- **Mobile nav overflow** — hamburger menu must open/close without body scroll or layout shift; test at 375px viewport
- **Gradient text on Safari** — `-webkit-text-fill-color: transparent` must be present alongside `background-clip: text`
- **Motion One on low-end devices** — elements start at `opacity: 0` via CSS so they're invisible until JS runs; ensure non-JS fallback sets `opacity: 1` via `<noscript>` or CSS `:where([data-animate]) { opacity: 1 }` in a `@media (scripting: none)` block
- **Form submit with empty required fields** — HTML5 `required` attributes must prevent submission and show native validation UI
- **Long Indonesian copy overflow** — section headings use `clamp()` font sizes; verify no horizontal overflow at 375px

---

## File Map

```
landing/
├── public/
│   ├── logo.png                  # mark only (gradient S) — copied from saga-studio/
│   ├── logo-text.png             # horizontal, transparent bg — copied
│   ├── logo-text-bg-black.png    # OG image — copied
│   └── favicon.svg               # created in Task 1
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # HTML shell, meta, font import, global CSS
│   ├── components/
│   │   ├── Nav.astro             # sticky nav, hamburger
│   │   ├── Hero.astro            # hero section
│   │   ├── ValueProps.astro      # 3-stat strip
│   │   ├── Services.astro        # section wrapper + grid
│   │   ├── ServiceCard.astro     # single service card
│   │   ├── Process.astro         # 3-step process
│   │   ├── WhySaga.astro         # 4 differentiator rows
│   │   ├── Contact.astro         # form section
│   │   └── Footer.astro          # footer
│   ├── pages/
│   │   └── index.astro           # composes all sections
│   └── styles/
│       └── global.css            # @theme tokens, base resets, utilities
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

### Task 1: Scaffold Project + Install Dependencies

**Files:**
- Create: `astro.config.mjs`
- Create: `package.json` (via npm init)
- Create: `tsconfig.json`
- Create: `public/favicon.svg`
- Copy: logo assets from `../../` into `public/`

**Interfaces:**
- Produces: runnable `astro dev` with empty home page

- [ ] **Step 1: Init Astro project**

```bash
cd /Users/dedekurniawan/Documents/works/saga-studio/landing
npm create astro@latest . -- --template minimal --no-git --install --typescript strict
```

When prompted: "Where should we create your new project?" answer `.` (current dir). Accept all defaults.

- [ ] **Step 2: Install Tailwind v4 + animation + font dependencies**

```bash
npm install tailwindcss @tailwindcss/vite
npm install motion
npm install @fontsource/inter
```

- [ ] **Step 3: Update astro.config.mjs to use Tailwind v4 vite plugin**

Replace the generated `astro.config.mjs` with:

```js
// astro.config.mjs
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
})
```

- [ ] **Step 4: Copy logo assets into public/**

```bash
cp /Users/dedekurniawan/Documents/works/saga-studio/logo.png public/logo.png
cp /Users/dedekurniawan/Documents/works/saga-studio/logo-text.png public/logo-text.png
cp /Users/dedekurniawan/Documents/works/saga-studio/logo-text-bg-black.png public/logo-text-bg-black.png
```

- [ ] **Step 5: Create favicon**

Create `public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2ABFB3"/>
      <stop offset="100%" stop-color="#CAEF6F"/>
    </linearGradient>
  </defs>
  <rect width="32" height="32" rx="8" fill="url(#g)"/>
</svg>
```

- [ ] **Step 6: Verify project starts**

```bash
npm run dev
```

Open `http://localhost:4321` — expect blank page with no console errors.

- [ ] **Step 7: Commit**

```bash
git init
git add .
git commit -m "feat: scaffold Astro 4 project with Tailwind v4 and Motion One"
```

---

### Task 2: Global Styles + Layout Shell

**Files:**
- Create: `src/styles/global.css`
- Create: `src/layouts/Layout.astro`
- Modify: `src/pages/index.astro` (add Layout wrapper)

**Interfaces:**
- Produces: `Layout` component accepting `title?: string`, `description?: string` props
- Produces: CSS utilities `.gradient-text`, `.gradient-border-pill`, `.gradient-btn`, `.dot-grid`, `.glass-card`

- [ ] **Step 1: Create global.css with design tokens and utilities**

Create `src/styles/global.css`:

```css
@import "tailwindcss";
@import "@fontsource/inter/latin-400.css";
@import "@fontsource/inter/latin-600.css";
@import "@fontsource/inter/latin-700.css";
@import "@fontsource/inter/latin-800.css";

@theme {
  --color-bg-base:     #080D0B;
  --color-bg-surface:  #101510;
  --color-bg-raised:   #182019;
  --color-border:      #1E2A21;
  --color-brand-teal:  #2ABFB3;
  --color-brand-lime:  #CAEF6F;
  --color-text-primary: #EFF5F0;
  --color-text-muted:  #7A9484;

  --font-family-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --radius-2xl: 1rem;
  --radius-full: 9999px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background-color: var(--color-bg-base);
  color: var(--color-text-primary);
  font-family: var(--font-family-sans);
  -webkit-font-smoothing: antialiased;
}

/* Non-JS fallback: keep animated elements visible */
@media (scripting: none) {
  [data-animate] { opacity: 1 !important; transform: none !important; }
}

/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #2ABFB3 0%, #CAEF6F 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Primary CTA button — gradient fill */
.gradient-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-weight: 700;
  font-size: 0.9375rem;
  background: linear-gradient(135deg, #2ABFB3 0%, #CAEF6F 100%);
  color: #080D0B;
  transition: opacity 0.2s, box-shadow 0.2s;
  text-decoration: none;
  white-space: nowrap;
}
.gradient-btn:hover {
  opacity: 0.9;
  box-shadow: 0 0 32px color-mix(in srgb, #2ABFB3 40%, transparent);
}

/* Ghost CTA button */
.ghost-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.9375rem;
  color: var(--color-text-muted);
  border: 1px solid var(--color-border);
  transition: color 0.2s, border-color 0.2s;
  text-decoration: none;
}
.ghost-btn:hover { color: var(--color-brand-teal); border-color: var(--color-brand-teal); }

/* Gradient border pill (nav CTA) */
.gradient-border-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  color: var(--color-brand-teal);
  background: var(--color-bg-base);
  text-decoration: none;
  transition: background 0.2s;
  z-index: 0;
}
.gradient-border-pill::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 9999px;
  padding: 1px;
  background: linear-gradient(135deg, #2ABFB3, #CAEF6F);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
.gradient-border-pill:hover { background: var(--color-bg-raised); }

/* Glassmorphism card */
.glass-card {
  background: color-mix(in srgb, var(--color-bg-surface) 80%, transparent);
  backdrop-filter: blur(8px);
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  transition: border-color 0.25s, box-shadow 0.25s;
}
.glass-card:hover {
  border-color: color-mix(in srgb, var(--color-brand-teal) 40%, transparent);
  box-shadow: 0 0 32px color-mix(in srgb, var(--color-brand-teal) 12%, transparent);
}

/* Dot grid background */
.dot-grid {
  background-image: radial-gradient(circle, #2ABFB3 1px, transparent 1px);
  background-size: 32px 32px;
  opacity: 0.05;
}

/* Section wrapper */
.section-wrapper {
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: 1.5rem;
}

/* Section heading */
.section-heading {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.15;
  color: var(--color-text-primary);
}

/* Eyebrow badge */
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.875rem;
  border-radius: 9999px;
  border: 1px solid color-mix(in srgb, var(--color-brand-teal) 30%, transparent);
  background: color-mix(in srgb, var(--color-brand-teal) 8%, transparent);
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-brand-teal);
}
```

- [ ] **Step 2: Create Layout.astro**

Create `src/layouts/Layout.astro`:

```astro
---
interface Props {
  title?: string
  description?: string
}
const {
  title = 'Saga Studio — IT Consultant & Software House Indonesia',
  description = 'Saga Studio membantu bisnis Anda delivery lebih cepat dengan AI-driven development. Custom software, migrasi sistem, konsultasi IT, dan otomasi AI.'
} = Astro.props
---
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content="/logo-text-bg-black.png" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="id_ID" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <slot />
  </body>
</html>

<style is:global>
  @import '../styles/global.css';
</style>
```

- [ ] **Step 3: Update index.astro to use Layout**

Replace `src/pages/index.astro` content with:

```astro
---
import Layout from '../layouts/Layout.astro'
---
<Layout>
  <main>
    <p style="color: white; padding: 2rem;">Hello Saga Studio</p>
  </main>
</Layout>
```

- [ ] **Step 4: Verify fonts and tokens load**

```bash
npm run dev
```

Open `http://localhost:4321`. Expect: dark background (`#080D0B`), white "Hello Saga Studio" text in Inter font. Open DevTools → Computed → verify `font-family` is Inter.

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css src/layouts/Layout.astro src/pages/index.astro
git commit -m "feat: add global design tokens, CSS utilities, and Layout shell"
```

---

### Task 3: Nav Component

**Files:**
- Create: `src/components/Nav.astro`
- Modify: `src/pages/index.astro`

**Interfaces:**
- Consumes: global CSS utilities `.gradient-border-pill`
- Produces: `<Nav />` with no props

- [ ] **Step 1: Create Nav.astro**

Create `src/components/Nav.astro`:

```astro
---
---
<header id="site-nav" class="fixed top-0 inset-x-0 z-50 transition-all duration-300">
  <div class="section-wrapper flex items-center justify-between h-16">

    <!-- Logo -->
    <a href="#" aria-label="Saga Studio home">
      <img src="/logo-text.png" alt="Saga Studio" height="32" class="h-8 w-auto" />
    </a>

    <!-- Desktop nav links -->
    <nav class="hidden md:flex items-center gap-8" aria-label="Navigasi utama">
      <a href="#services" class="text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Layanan</a>
      <a href="#process"  class="text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Proses</a>
      <a href="#about"    class="text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Tentang</a>
      <a href="#contact"  class="text-sm font-medium text-text-muted hover:text-text-primary transition-colors">Kontak</a>
    </nav>

    <!-- Desktop CTA -->
    <div class="hidden md:flex items-center gap-4">
      <a href="#contact" class="gradient-border-pill">Konsultasi Gratis</a>
    </div>

    <!-- Mobile hamburger -->
    <button
      id="nav-toggle"
      class="md:hidden flex flex-col gap-1.5 p-2 rounded-md"
      aria-label="Buka menu"
      aria-expanded="false"
      aria-controls="mobile-menu"
    >
      <span class="hamburger-bar block w-6 h-0.5 bg-text-primary transition-all duration-300"></span>
      <span class="hamburger-bar block w-6 h-0.5 bg-text-primary transition-all duration-300"></span>
      <span class="hamburger-bar block w-6 h-0.5 bg-text-primary transition-all duration-300"></span>
    </button>
  </div>
</header>

<!-- Mobile menu overlay -->
<div
  id="mobile-menu"
  class="fixed inset-0 z-40 bg-bg-base flex flex-col items-center justify-center gap-8 opacity-0 pointer-events-none transition-opacity duration-300"
  aria-hidden="true"
>
  <a href="#services" class="mobile-nav-link text-2xl font-semibold">Layanan</a>
  <a href="#process"  class="mobile-nav-link text-2xl font-semibold">Proses</a>
  <a href="#about"    class="mobile-nav-link text-2xl font-semibold">Tentang</a>
  <a href="#contact"  class="mobile-nav-link text-2xl font-semibold">Kontak</a>
  <a href="#contact"  class="gradient-btn mt-4">Konsultasi Gratis</a>
</div>

<style>
  /* Scrolled state — added by JS */
  #site-nav.scrolled {
    background: color-mix(in srgb, #101510 85%, transparent);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid #1E2A21;
  }

  .mobile-nav-link {
    color: var(--color-text-primary);
    text-decoration: none;
    transition: color 0.2s;
  }
  .mobile-nav-link:hover { color: var(--color-brand-teal); }

  /* Open state */
  #mobile-menu.open {
    opacity: 1;
    pointer-events: auto;
  }
</style>

<script>
  // Sticky nav border on scroll
  const nav = document.getElementById('site-nav')!
  const observer = new IntersectionObserver(
    ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
    { threshold: 0 }
  )
  const sentinel = document.createElement('div')
  sentinel.style.cssText = 'position:absolute;top:80px;height:1px;width:1px;pointer-events:none'
  document.body.prepend(sentinel)
  observer.observe(sentinel)

  // Hamburger toggle
  const toggle = document.getElementById('nav-toggle')!
  const menu   = document.getElementById('mobile-menu')!

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open')
    toggle.setAttribute('aria-expanded', String(isOpen))
    menu.setAttribute('aria-hidden', String(!isOpen))
    document.body.style.overflow = isOpen ? 'hidden' : ''
  })

  // Close mobile menu on link click
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open')
      toggle.setAttribute('aria-expanded', 'false')
      menu.setAttribute('aria-hidden', 'true')
      document.body.style.overflow = ''
    })
  })
</script>
```

- [ ] **Step 2: Add Nav to index.astro**

```astro
---
import Layout from '../layouts/Layout.astro'
import Nav from '../components/Nav.astro'
---
<Layout>
  <Nav />
  <main>
    <div style="height: 200vh; padding-top: 5rem; color: white; padding-left: 2rem;">Scroll to test nav</div>
  </main>
</Layout>
```

- [ ] **Step 3: Verify nav behaviour**

```bash
npm run dev
```

Check: nav is transparent at top, gets frosted glass border after scrolling. At 375px viewport: hamburger appears, clicking opens full-screen overlay, clicking a link closes it without body scroll.

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.astro src/pages/index.astro
git commit -m "feat: add sticky nav with mobile hamburger menu"
```

---

### Task 4: Hero Section

**Files:**
- Create: `src/components/Hero.astro`

**Interfaces:**
- Consumes: `.gradient-text`, `.gradient-btn`, `.ghost-btn`, `.eyebrow`, `.section-wrapper`
- Produces: `<Hero />` with no props

- [ ] **Step 1: Create Hero.astro**

Create `src/components/Hero.astro`:

```astro
---
---
<section class="relative min-h-screen flex items-center overflow-hidden">

  <!-- Dot grid background -->
  <div class="dot-grid absolute inset-0 pointer-events-none" aria-hidden="true"></div>

  <!-- Glow blob -->
  <div
    class="absolute pointer-events-none"
    style="
      top: 50%; left: 50%;
      transform: translate(-40%, -50%);
      width: 700px; height: 700px;
      border-radius: 50%;
      background: radial-gradient(circle, #2ABFB3 0%, #CAEF6F 60%, transparent 100%);
      filter: blur(120px);
      opacity: 0.08;
    "
    aria-hidden="true"
  ></div>

  <div class="section-wrapper relative z-10 pt-32 pb-24 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">

      <!-- Left: copy -->
      <div class="flex flex-col gap-6">
        <div data-animate>
          <span class="eyebrow">
            <span aria-hidden="true">◆</span>
            AI-Driven IT Consultant
          </span>
        </div>

        <h1
          data-animate
          data-animate-delay="0.1"
          style="font-size: clamp(2.75rem, 6vw, 4.5rem); font-weight: 800; line-height: 1.1; color: var(--color-text-primary);"
        >
          Kami Membangun Sistem yang<br />
          <span class="gradient-text">Tumbuh Bersama Bisnis</span>
        </h1>

        <p
          data-animate
          data-animate-delay="0.2"
          style="font-size: 1.125rem; line-height: 1.75; color: var(--color-text-muted); max-width: 52ch;"
        >
          Delivery production-grade lebih cepat 20% dengan AI-driven workflow.
          Response dalam 24 jam. Tanpa ketergantungan vendor eksklusif.
        </p>

        <div data-animate data-animate-delay="0.3" class="flex flex-wrap gap-4 items-center">
          <a href="#contact" class="gradient-btn">Mulai Konsultasi</a>
          <a href="#services" class="ghost-btn">
            Lihat Layanan
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>

      <!-- Right: floating card -->
      <div
        data-animate
        data-animate-delay="0.25"
        class="hidden lg:flex justify-center items-center"
      >
        <div class="glass-card p-6 w-full max-w-sm" style="font-family: 'JetBrains Mono', monospace; font-size: 0.8rem;">
          <div class="flex items-center gap-2 mb-4">
            <span style="width:10px;height:10px;border-radius:50%;background:#ff5f57;display:inline-block;"></span>
            <span style="width:10px;height:10px;border-radius:50%;background:#febc2e;display:inline-block;"></span>
            <span style="width:10px;height:10px;border-radius:50%;background:#28c840;display:inline-block;"></span>
            <span style="margin-left:auto;color:var(--color-text-muted);font-size:0.7rem;">saga-studio/deploy.yml</span>
          </div>
          <div style="color:var(--color-text-muted);line-height:1.9;">
            <div><span style="color:#2ABFB3;">✓</span> AI review passed</div>
            <div><span style="color:#2ABFB3;">✓</span> Tests: 142/142</div>
            <div><span style="color:#2ABFB3;">✓</span> Human QA approved</div>
            <div><span style="color:#CAEF6F;">→</span> Deploying to production…</div>
            <div style="margin-top:0.75rem;color:var(--color-text-primary);font-weight:600;">
              🚀 Deployed in 3m 24s
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

- [ ] **Step 2: Add Hero to index.astro**

```astro
---
import Layout from '../layouts/Layout.astro'
import Nav from '../components/Nav.astro'
import Hero from '../components/Hero.astro'
---
<Layout>
  <Nav />
  <main>
    <Hero />
  </main>
</Layout>
```

- [ ] **Step 3: Verify hero renders**

```bash
npm run dev
```

Check: full-viewport hero with dark background, teal glow blob, gradient headline text, two CTA buttons. On mobile (375px): floating card hidden, copy centered, buttons stack. Verify `-webkit-text-fill-color: transparent` is applied on gradient text (Chrome + Safari DevTools).

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.astro src/pages/index.astro
git commit -m "feat: add hero section with gradient headline and floating card"
```

---

### Task 5: Value Props Strip

**Files:**
- Create: `src/components/ValueProps.astro`

**Interfaces:**
- Consumes: `.section-wrapper`, `.gradient-text`
- Produces: `<ValueProps />` with no props

- [ ] **Step 1: Create ValueProps.astro**

Create `src/components/ValueProps.astro`:

```astro
---
const stats = [
  {
    value: '24 Jam',
    label: 'Respons terjamin dalam satu hari kerja',
  },
  {
    value: '20% Lebih Cepat',
    label: 'Delivery dipercepat dengan AI-driven workflow',
  },
  {
    value: 'Production-Grade',
    label: 'Review manusia wajib di setiap tahap sprint',
  },
]
---
<div style="background: var(--color-bg-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);">
  <div class="section-wrapper py-12">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
      {stats.map((stat, i) => (
        <div
          data-animate
          data-animate-delay={String(i * 0.1)}
          class={`flex flex-col items-center text-center px-8 py-6 ${i < stats.length - 1 ? 'md:border-r border-border' : ''}`}
          style="border-color: var(--color-border);"
        >
          <span
            class="gradient-text"
            style="font-size: clamp(1.75rem, 3vw, 2.25rem); font-weight: 800; line-height: 1.2;"
          >
            {stat.value}
          </span>
          <span style="margin-top: 0.5rem; font-size: 0.9375rem; color: var(--color-text-muted); line-height: 1.5;">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
```

- [ ] **Step 2: Add to index.astro**

Add `<ValueProps />` after `<Hero />`:

```astro
---
import Layout from '../layouts/Layout.astro'
import Nav from '../components/Nav.astro'
import Hero from '../components/Hero.astro'
import ValueProps from '../components/ValueProps.astro'
---
<Layout>
  <Nav />
  <main>
    <Hero />
    <ValueProps />
  </main>
</Layout>
```

- [ ] **Step 3: Verify**

Check: 3-column strip on desktop, single column on mobile. Gradient stat values, muted labels, vertical separator borders on desktop.

- [ ] **Step 4: Commit**

```bash
git add src/components/ValueProps.astro src/pages/index.astro
git commit -m "feat: add value props strip with 3 stats"
```

---

### Task 6: Services Grid

**Files:**
- Create: `src/components/ServiceCard.astro`
- Create: `src/components/Services.astro`

**Interfaces:**
- Consumes: `.glass-card`, `.gradient-text`, `.eyebrow`, `.section-wrapper`
- Produces: `<Services />` with no props; `<ServiceCard title icon description />` (internal use only)

- [ ] **Step 1: Create ServiceCard.astro**

Create `src/components/ServiceCard.astro`:

```astro
---
interface Props {
  title: string
  description: string
  icon: string   // raw SVG string
  delay?: string
}
const { title, description, icon, delay = '0' } = Astro.props
---
<article
  class="glass-card p-6 flex flex-col gap-4"
  data-animate
  data-animate-delay={delay}
>
  <!-- Icon circle -->
  <div
    style="
      width: 44px; height: 44px;
      border-radius: 10px;
      background: linear-gradient(135deg, color-mix(in srgb, #2ABFB3 15%, transparent), color-mix(in srgb, #CAEF6F 15%, transparent));
      display: flex; align-items: center; justify-content: center;
    "
    aria-hidden="true"
    set:html={icon}
  />

  <h3 style="font-size: 1.0625rem; font-weight: 700; color: var(--color-text-primary);">{title}</h3>
  <p style="font-size: 0.9375rem; line-height: 1.6; color: var(--color-text-muted); flex: 1;">{description}</p>

  <a href="#contact" style="font-size: 0.875rem; font-weight: 600; color: var(--color-brand-teal); text-decoration: none; display: flex; align-items: center; gap: 0.25rem; transition: gap 0.2s;" class="service-link">
    Pelajari lebih lanjut
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  </a>
</article>

<style>
  .service-link:hover { gap: 0.5rem; }
</style>
```

- [ ] **Step 2: Create Services.astro**

Create `src/components/Services.astro`:

```astro
---
import ServiceCard from './ServiceCard.astro'

const services = [
  {
    title: 'Custom Software Development',
    description: 'Ganti spreadsheet dan tools terfragmentasi dengan sistem terintegrasi yang dirancang khusus untuk alur kerja bisnis Anda.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ABFB3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  },
  {
    title: 'Migration Service',
    description: 'Transisi sistem yang aman, terdokumentasi, dan terencana untuk meminimalkan risiko downtime selama perpindahan platform.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ABFB3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>`,
  },
  {
    title: 'Consulting Service',
    description: 'Selaraskan prioritas, ruang lingkup, dan ekspektasi sebelum investasi besar — agar tidak ada kejutan di tengah proyek.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CAEF6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>`,
  },
  {
    title: 'AI Automation Service',
    description: 'Otomasi operasi berulang dan tingkatkan kecepatan tim dengan alur kerja AI — engineer tetap pemegang keputusan.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CAEF6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>`,
  },
  {
    title: 'Quality Improvement',
    description: 'Kurangi bug dan perkuat maintainability kode yang sudah ada — tanpa menghentikan pengembangan fitur baru.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2ABFB3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  },
  {
    title: 'SEO & GEO Optimize',
    description: 'Tingkatkan visibilitas pencarian organik dan relevansi lokal agar bisnis Anda lebih mudah ditemukan oleh calon klien.',
    icon: `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#CAEF6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>`,
  },
]
---
<section id="services" style="padding-top: 6rem; padding-bottom: 6rem;">
  <div class="section-wrapper">

    <!-- Heading -->
    <div class="text-center mb-12" data-animate>
      <span class="eyebrow mb-4">Layanan Kami</span>
      <h2 class="section-heading mt-4">
        Solusi Lengkap untuk<br /><span class="gradient-text">Kebutuhan Digital Anda</span>
      </h2>
      <p style="margin-top: 1rem; color: var(--color-text-muted); max-width: 52ch; margin-inline: auto; font-size: 1rem; line-height: 1.7;">
        Dari custom development hingga konsultasi strategis — kami hadir di setiap fase perjalanan digital bisnis Anda.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, i) => (
        <ServiceCard
          title={service.title}
          description={service.description}
          icon={service.icon}
          delay={String(i * 0.08)}
        />
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 3: Add to index.astro**

```astro
---
import Layout from '../layouts/Layout.astro'
import Nav from '../components/Nav.astro'
import Hero from '../components/Hero.astro'
import ValueProps from '../components/ValueProps.astro'
import Services from '../components/Services.astro'
---
<Layout>
  <Nav />
  <main>
    <Hero />
    <ValueProps />
    <Services />
  </main>
</Layout>
```

- [ ] **Step 4: Verify**

Check: 3-column grid on desktop, 2-col on md, 1-col on mobile. Each card has icon circle, title, description, teal arrow link. Hover shows teal glow border.

- [ ] **Step 5: Commit**

```bash
git add src/components/ServiceCard.astro src/components/Services.astro src/pages/index.astro
git commit -m "feat: add 6-card services grid with glassmorphism cards"
```

---

### Task 7: Process Section

**Files:**
- Create: `src/components/Process.astro`

**Interfaces:**
- Consumes: `.gradient-text`, `.eyebrow`, `.section-wrapper`
- Produces: `<Process />` with no props

- [ ] **Step 1: Create Process.astro**

Create `src/components/Process.astro`:

```astro
---
const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Kami pelajari kebutuhan bisnis, tantangan teknis, dan tujuan jangka panjang Anda secara mendalam.',
  },
  {
    number: '02',
    title: 'Scope & Estimasi',
    description: 'Kami definisikan ruang lingkup, timeline, dan estimasi biaya secara transparan — tanpa kejutan tersembunyi.',
  },
  {
    number: '03',
    title: 'Build · Migrate · Improve',
    description: 'Eksekusi dengan standar production-grade: AI membantu kecepatan, engineer menjaga kualitas di setiap sprint.',
  },
]
---
<section
  id="process"
  style="padding-top: 6rem; padding-bottom: 6rem; background: var(--color-bg-surface); border-top: 1px solid var(--color-border); border-bottom: 1px solid var(--color-border);"
>
  <div class="section-wrapper">

    <div class="text-center mb-16" data-animate>
      <span class="eyebrow mb-4">Cara Kerja Kami</span>
      <h2 class="section-heading mt-4">
        Proses yang <span class="gradient-text">Transparan & Terukur</span>
      </h2>
    </div>

    <!-- Steps -->
    <div class="relative grid grid-cols-1 md:grid-cols-3 gap-8">

      <!-- Connector line (desktop only) -->
      <div
        class="hidden md:block absolute top-8 left-[calc(16.666%+1rem)] right-[calc(16.666%+1rem)]"
        style="height: 1px; background: linear-gradient(90deg, #2ABFB3, #CAEF6F); opacity: 0.3;"
        aria-hidden="true"
      ></div>

      {steps.map((step, i) => (
        <div
          class="flex flex-col items-center text-center gap-4"
          data-animate
          data-animate-delay={String(i * 0.15)}
        >
          <!-- Number circle -->
          <div
            style="
              width: 4rem; height: 4rem;
              border-radius: 50%;
              background: linear-gradient(135deg, #2ABFB3, #CAEF6F);
              display: flex; align-items: center; justify-content: center;
              flex-shrink: 0;
              position: relative; z-index: 1;
            "
          >
            <span style="font-size: 1.125rem; font-weight: 800; color: #080D0B;">{step.number}</span>
          </div>

          <h3 style="font-size: 1.125rem; font-weight: 700; color: var(--color-text-primary);">{step.title}</h3>
          <p style="font-size: 0.9375rem; line-height: 1.65; color: var(--color-text-muted); max-width: 28ch; margin-inline: auto;">{step.description}</p>
        </div>
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 2: Add to index.astro**

Add `import Process` and `<Process />` after `<Services />`.

- [ ] **Step 3: Verify**

Check: 3 steps in a row on desktop with gradient horizontal line connecting them. On mobile: vertical stack, connector line hidden. Gradient numbered circles visible.

- [ ] **Step 4: Commit**

```bash
git add src/components/Process.astro src/pages/index.astro
git commit -m "feat: add 3-step process section with gradient connector"
```

---

### Task 8: Why Saga Studio

**Files:**
- Create: `src/components/WhySaga.astro`

**Interfaces:**
- Consumes: `.gradient-text`, `.eyebrow`, `.glass-card`, `.section-wrapper`
- Produces: `<WhySaga />` with no props

- [ ] **Step 1: Create WhySaga.astro**

Create `src/components/WhySaga.astro`:

```astro
---
const differentiators = [
  {
    title: 'AI + Mandatory Human Review',
    description: 'AI mengoptimalkan fase repetitif seperti boilerplate, test generation, dan refactoring — namun engineer tetap pemegang keputusan. Setiap PR wajib melewati code review manusia sebelum merge.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ABFB3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a5 5 0 1 0 5 5"/><path d="M12 22v-6"/><path d="M9 7H3"/><circle cx="17" cy="7" r="3"/><path d="m15 9 2 2 4-4"/></svg>`,
  },
  {
    title: 'Tanpa Testimonial Fiktif',
    description: 'Transparansi penuh dari awal. Kami tidak memuat testimoni generik atau klaim tanpa bukti. Hasil nyata dari proyek nyata — dan Anda boleh tanya langsung.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CAEF6F" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
  },
  {
    title: 'Tanpa Lock-in Cloud Eksklusif',
    description: 'Arsitektur yang kami rancang bebas vendor. Anda tidak terikat pada satu cloud provider — migrasi atau scaling ke platform lain tetap mungkin tanpa biaya tersembunyi.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2ABFB3" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>`,
  },
  {
    title: 'Dukungan Bilingual EN/ID',
    description: 'Tim kami berkomunikasi secara profesional dalam Bahasa Indonesia maupun English — tidak ada hambatan bahasa untuk tim Anda yang internasional.',
    icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CAEF6F" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8l6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>`,
  },
]
---
<section id="about" style="padding-top: 6rem; padding-bottom: 6rem;">
  <div class="section-wrapper">

    <div class="text-center mb-16" data-animate>
      <span class="eyebrow mb-4">Mengapa Saga Studio</span>
      <h2 class="section-heading mt-4">
        Lebih dari Sekadar<br /><span class="gradient-text">Vendor IT</span>
      </h2>
      <p style="margin-top: 1rem; color: var(--color-text-muted); font-size: 1rem; line-height: 1.7; max-width: 52ch; margin-inline: auto;">
        Kami adalah mitra teknis jangka panjang yang berinvestasi pada kesuksesan bisnis Anda.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      {differentiators.map((item, i) => (
        <div
          class="glass-card p-8 flex gap-5"
          data-animate
          data-animate-delay={String(i * 0.1)}
        >
          <!-- Icon -->
          <div
            style="
              flex-shrink: 0;
              width: 52px; height: 52px;
              border-radius: 12px;
              background: color-mix(in srgb, var(--color-bg-raised) 80%, transparent);
              border: 1px solid var(--color-border);
              display: flex; align-items: center; justify-content: center;
            "
            aria-hidden="true"
            set:html={item.icon}
          />

          <div>
            <h3 style="font-size: 1.0625rem; font-weight: 700; color: var(--color-text-primary); margin-bottom: 0.5rem;">
              {item.title}
            </h3>
            <p style="font-size: 0.9375rem; line-height: 1.65; color: var(--color-text-muted);">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>
```

- [ ] **Step 2: Add to index.astro**

Add `import WhySaga` and `<WhySaga />` after `<Process />`.

- [ ] **Step 3: Verify**

Check: 2×2 grid on desktop, 1-col on mobile. Each card has icon box + title + description. Teal/lime icons alternate.

- [ ] **Step 4: Commit**

```bash
git add src/components/WhySaga.astro src/pages/index.astro
git commit -m "feat: add why saga studio differentiators section"
```

---

### Task 9: Contact Form

**Files:**
- Create: `src/components/Contact.astro`

**Interfaces:**
- Consumes: `.gradient-btn`, `.glass-card`, `.section-wrapper`, `.eyebrow`
- Produces: `<Contact />` with no props

- [ ] **Step 1: Create Contact.astro**

Create `src/components/Contact.astro`:

```astro
---
const services = [
  'Custom Software Development',
  'Migration Service',
  'Consulting Service',
  'AI Automation Service',
  'Quality Improvement',
  'SEO & GEO Optimize',
  'Lainnya',
]
---
<section
  id="contact"
  style="padding-top: 6rem; padding-bottom: 6rem; background: var(--color-bg-surface); border-top: 1px solid var(--color-border);"
>
  <div class="section-wrapper">
    <div class="max-w-2xl mx-auto">

      <div class="text-center mb-10" data-animate>
        <span class="eyebrow mb-4">Mulai Sekarang</span>
        <h2 class="section-heading mt-4">
          Mulai dengan <span class="gradient-text">Konsultasi Gratis</span>
        </h2>
        <p style="margin-top: 1rem; color: var(--color-text-muted); font-size: 1rem; line-height: 1.7;">
          Ceritakan kebutuhan Anda. Kami akan respons dalam 24 jam.
        </p>
      </div>

      <div class="glass-card p-8 md:p-10" data-animate data-animate-delay="0.15">
        <form action="#" method="POST" novalidate>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

            <!-- Name -->
            <div class="flex flex-col gap-1.5">
              <label for="name" class="form-label">Nama Lengkap *</label>
              <input id="name" name="name" type="text" required placeholder="Budi Santoso" class="form-input" />
            </div>

            <!-- Email -->
            <div class="flex flex-col gap-1.5">
              <label for="email" class="form-label">Email *</label>
              <input id="email" name="email" type="email" required placeholder="budi@perusahaan.com" class="form-input" />
            </div>

            <!-- Phone -->
            <div class="flex flex-col gap-1.5">
              <label for="phone" class="form-label">Nomor WhatsApp</label>
              <input id="phone" name="phone" type="tel" placeholder="+62 812 3456 7890" class="form-input" />
            </div>

            <!-- Service -->
            <div class="flex flex-col gap-1.5">
              <label for="service" class="form-label">Layanan yang Dibutuhkan *</label>
              <select id="service" name="service" required class="form-input" style="cursor: pointer;">
                <option value="" disabled selected>Pilih layanan…</option>
                {services.map(s => <option value={s}>{s}</option>)}
              </select>
            </div>

            <!-- Message -->
            <div class="flex flex-col gap-1.5 md:col-span-2">
              <label for="message" class="form-label">Ceritakan Kebutuhan Anda *</label>
              <textarea id="message" name="message" required rows="4" placeholder="Jelaskan singkat tantangan atau proyek yang ingin Anda diskusikan…" class="form-input" style="resize: vertical; min-height: 120px;"></textarea>
            </div>

          </div>

          <div class="mt-6 flex flex-col gap-3">
            <button type="submit" class="gradient-btn w-full justify-center" style="font-size: 1rem;">
              Kirim Pesan
            </button>
            <p style="text-align: center; font-size: 0.8125rem; color: var(--color-text-muted);">
              🔒 Data Anda dienkripsi dan tidak dibagikan ke pihak ketiga
            </p>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>

<style>
  .form-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-primary);
  }

  .form-input {
    width: 100%;
    padding: 0.625rem 0.875rem;
    border-radius: 0.5rem;
    background: var(--color-bg-raised);
    border: 1px solid var(--color-border);
    color: var(--color-text-primary);
    font-size: 0.9375rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
  }

  .form-input::placeholder { color: var(--color-text-muted); }

  .form-input:focus {
    border-color: var(--color-brand-teal);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-brand-teal) 15%, transparent);
  }

  select.form-input option {
    background: var(--color-bg-surface);
    color: var(--color-text-primary);
  }
</style>
```

- [ ] **Step 2: Add to index.astro**

Add `import Contact` and `<Contact />` after `<WhySaga />`.

- [ ] **Step 3: Verify form validation**

```bash
npm run dev
```

Click "Kirim Pesan" with empty fields — browser shows native validation popups on required fields. Fill all required fields and submit — page navigates to `#` (expected for static placeholder). Verify focus ring appears (teal glow) when tabbing through inputs.

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.astro src/pages/index.astro
git commit -m "feat: add contact form with validation and glassmorphism card"
```

---

### Task 10: Footer

**Files:**
- Create: `src/components/Footer.astro`

**Interfaces:**
- Consumes: `.section-wrapper`, `.gradient-text`
- Produces: `<Footer />` with no props

- [ ] **Step 1: Create Footer.astro**

Create `src/components/Footer.astro`:

```astro
---
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Layanan', href: '#services' },
  { label: 'Proses', href: '#process' },
  { label: 'Tentang', href: '#about' },
  { label: 'Kontak', href: '#contact' },
]
---
<footer style="border-top: 1px solid var(--color-border); padding-top: 4rem; padding-bottom: 2rem;">
  <div class="section-wrapper">

    <div class="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10" style="border-bottom: 1px solid var(--color-border);">

      <!-- Col 1: Brand -->
      <div class="flex flex-col gap-4">
        <img src="/logo-text.png" alt="Saga Studio" height="28" class="h-7 w-auto" style="max-width: 160px;" />
        <p style="font-size: 0.875rem; line-height: 1.65; color: var(--color-text-muted); max-width: 28ch;">
          IT Consultant &amp; Software House yang membantu bisnis Indonesia tumbuh melalui teknologi.
        </p>
      </div>

      <!-- Col 2: Nav -->
      <div>
        <p style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 1rem;">
          Navigasi
        </p>
        <nav class="flex flex-col gap-2" aria-label="Footer navigasi">
          {navLinks.map(link => (
            <a
              href={link.href}
              style="font-size: 0.9375rem; color: var(--color-text-muted); text-decoration: none; transition: color 0.2s;"
              class="footer-link"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <!-- Col 3: Contact -->
      <div>
        <p style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--color-text-muted); margin-bottom: 1rem;">
          Kontak
        </p>
        <div class="flex flex-col gap-2">
          <a
            href="mailto:hello@studio.saga.co.id"
            style="font-size: 0.9375rem; color: var(--color-text-muted); text-decoration: none; transition: color 0.2s;"
            class="footer-link"
          >
            hello@studio.saga.co.id
          </a>
          <a
            href="https://wa.me/628xxx"
            style="font-size: 0.9375rem; color: var(--color-text-muted); text-decoration: none; transition: color 0.2s;"
            class="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
          <span style="font-size: 0.9375rem; color: var(--color-text-muted);">Indonesia 🇮🇩</span>
        </div>
      </div>

    </div>

    <!-- Bottom bar -->
    <div class="flex flex-col md:flex-row items-center justify-between gap-3 pt-6">
      <p style="font-size: 0.8125rem; color: var(--color-text-muted);">
        © {currentYear} Saga Tekno Studio. All rights reserved.
      </p>
      <a
        href="https://studio.saga.co.id"
        style="font-size: 0.8125rem; color: var(--color-text-muted); text-decoration: none; transition: color 0.2s;"
        class="footer-link"
      >
        studio.saga.co.id
      </a>
    </div>

  </div>
</footer>

<style>
  .footer-link:hover { color: var(--color-brand-teal) !important; }
</style>
```

- [ ] **Step 2: Add to index.astro**

Add `import Footer` and `<Footer />` after `<Contact />`, outside `<main>`:

```astro
<Layout>
  <Nav />
  <main>
    <Hero />
    <ValueProps />
    <Services />
    <Process />
    <WhySaga />
    <Contact />
  </main>
  <Footer />
</Layout>
```

- [ ] **Step 3: Verify**

Check: 3-column footer on desktop, stacked on mobile. Footer links hover turns teal. Year is current.

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.astro src/pages/index.astro
git commit -m "feat: add 3-column footer with nav links and contact info"
```

---

### Task 11: Motion One Scroll Animations

**Files:**
- Modify: `src/layouts/Layout.astro` (add `<script>` tag for animations)

**Interfaces:**
- Consumes: all elements with `data-animate` and optional `data-animate-delay` attributes
- Produces: smooth `opacity: 0 → 1, y: 24 → 0` reveal on scroll entry

- [ ] **Step 1: Add animation script to Layout.astro**

Add this `<script>` tag at the bottom of `Layout.astro` (inside `<body>`, after `<slot />`):

```astro
<script>
  import { animate, inView } from 'motion'

  // Start all animated elements at invisible
  document.querySelectorAll<HTMLElement>('[data-animate]').forEach(el => {
    el.style.opacity = '0'
  })

  // Reveal on scroll entry
  inView('[data-animate]', ({ target }) => {
    const el = target as HTMLElement
    const delay = parseFloat(el.dataset.animateDelay ?? '0')
    animate(
      el,
      { opacity: [0, 1], y: [24, 0] },
      { duration: 0.5, delay, easing: [0.25, 0.1, 0.25, 1] }
    )
  }, { amount: 0.15 })
</script>
```

- [ ] **Step 2: Verify animations**

```bash
npm run dev
```

Open browser, scroll down the page slowly. Each section's cards and headings should fade up sequentially as they enter the viewport. Service cards stagger (delay 0, 80ms, 160ms…). Disable JS in DevTools → elements should appear normally (CSS fallback from Task 2 `@media (scripting: none)`).

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add Motion One inView scroll animations with stagger"
```

---

### Task 12: Build Check + Polish

**Files:**
- Modify: `src/components/Footer.astro` (wire real WhatsApp number)
- Verify: `astro build` clean output

**Interfaces:**
- Produces: production-ready static site in `dist/`

- [ ] **Step 1: Run TypeScript check**

```bash
npx astro check
```

Expect: 0 errors. Fix any type errors before continuing.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expect: successful build, no warnings about unresolved imports or missing assets.

- [ ] **Step 3: Preview production build**

```bash
npm run preview
```

Open `http://localhost:4321`. Verify:
- All sections render correctly in production mode
- Logo images load (not 404)
- Smooth scroll anchor links work
- No console errors

- [ ] **Step 4: Mobile check at 375px**

Open DevTools → device toolbar → iPhone SE (375px). Verify:
- Nav hamburger opens without body scroll
- Hero copy readable, no overflow
- Services stack to 1 column
- Form inputs are full-width and usable
- Footer stacks correctly

- [ ] **Step 5: Safari gradient text check**

Open in Safari (or Safari Technology Preview). Inspect hero H1 — confirm gradient text renders (not invisible). If `-webkit-text-fill-color` is missing from the computed styles, add it explicitly to `.gradient-text` in `global.css`.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: production build verified, Saga Studio landing page complete"
```

---

## Summary

12 tasks, ~60 steps. Each task ends with a working commit. The full page is composed bottom-up: tokens → layout → sections → animations → build check. No backend, no CMS — all static. Form `action="#"` is a placeholder to be replaced with Formspree or Netlify Forms endpoint at deploy time.
