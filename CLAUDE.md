```
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.
```

## Project Overview

This is a fully functional, responsive landing page for **Saga Tekno Studio** - a software company specializing in AI solutions, IoT integrations, CRM services, and custom software development. The design is inspired by dualbyte.io with modern UI/UX, SEO optimization, and lead generation capabilities.

## Project Stack

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **React Hook Form** for form handling
- **Google Analytics** for tracking
- **Vercel Analytics** (optional)

## Development Setup

### Commonly Used Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Run type checking
npm run type-check
```

## Project Structure

```
/
├── app/                     # Next.js App Router
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page (main landing page)
│   ├── globals.css          # Global styles with Tailwind directives
│   └── (api)/               # API routes
│       └── contact/
│           └── route.ts     # Contact form submission API
├── components/              # Reusable React components
│   ├── sections/            # Page sections
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features section
│   │   ├── Services.tsx     # Services section
│   │   ├── Products.tsx     # Products section (Sahabat Warga)
│   │   ├── Portfolio.tsx    # Portfolio showcase
│   │   ├── Testimonials.tsx # Client testimonials
│   │   └── Contact.tsx      # Contact/lead generation form
│   ├── ui/                  # UI components
│   │   ├── Button.tsx       # Custom button
│   │   ├── Input.tsx        # Custom input
│   │   └── Card.tsx         # Custom card
│   └── layout/              # Layout components
│       ├── Navbar.tsx       # Navigation bar
│       └── Footer.tsx       # Footer
├── lib/                     # Utility functions
│   └── utils.ts             # Helper functions
├── public/                  # Static assets (images, fonts)
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript config
├── tailwind.config.ts       # Tailwind config
└── next.config.js           # Next.js config
```

## Core Features Implemented

1. **Responsive Design**: Mobile-first, fully responsive across all devices
2. **SEO Optimized**: Meta tags, Open Graph tags, structured data
3. **Lead Generation**: Contact form with API endpoint
4. **Analytics**: Google Analytics integration
5. **Social Media Integration**: Links to social platforms
6. **Product Showcase**: "Sahabat Warga" app feature
7. **Services**: AI solutions, IoT integrations, CRM services
8. **Animations**: Smooth scroll animations with Framer Motion
9. **Contact Form**: Full validation with React Hook Form
10. **Navigation**: Sticky header with mobile menu

## Architecture Guidelines

1. **Component Structure**: All components follow the Next.js App Router pattern
2. **Styling**: Use Tailwind CSS utility classes for consistency
3. **Animations**: Use Framer Motion for all animations
4. **Data Fetching**: API routes for form submissions
5. **SEO**: Metadata defined in layout.tsx and page.tsx
6. **Performance**: Image optimization with Next.js Image component
7. **Accessibility**: Semantic HTML and ARIA labels
