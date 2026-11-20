# Creatify

> Premium design, without limits.

**Creatify** is a polished marketing website for a design-subscription service: a ready-to-go elite design team for startups, delivered as a simple monthly subscription. Built as a static Next.js app with a minimal black-and-white aesthetic, scroll-driven animation, and a fully responsive layout.

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Pages](#pages)
- [Customization](#customization)
- [Deployment](#deployment)
- [Notes](#notes)
- [Author & Contact](#author--contact)

---

## Overview

The site presents the full offer of a modern design partner: services, case studies, team, gallery, pricing plans, client testimonials, differentiators, FAQs, and contact. It is entirely static — no backend or database is required — so it can be deployed to any static/Node hosting in minutes.

**Services showcased:** UI/UX & web design, branding & identity, Webflow development, mobile design, illustration, and web apps.

## Features

- **Responsive, component-based landing page** built with React and Tailwind CSS
- **Scroll animations** with GSAP and ScrollTrigger (reveals, counters, animated pricing)
- **Smooth scrolling** with Lenis, integrated with the sticky navigation
- **Auto-scrolling marquees** for client logos and testimonials (pause on hover)
- **Interactive pricing toggle** with animated monthly/yearly prices (20% yearly discount)
- **Accessible FAQ accordion** with `aria-expanded` state
- **Sticky navigation** that inverts on scroll, plus a mobile menu
- **Dedicated legal pages** (Privacy Policy, Terms of Service) and a custom 404 page
- **SEO metadata** per page via Next.js `Head`
- **Local optimized images** organized by purpose (`avatars`, `cases`, `gallery`, `team`)

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | Next.js 14 (Pages Router) |
| UI | React 18, Tailwind CSS 3, PostCSS, Autoprefixer |
| Animation | GSAP + ScrollTrigger, Lenis |
| Carousels | Swiper |
| Icons | Lucide React, Iconify |
| Language | JavaScript (JSX) |

## Getting Started

### Prerequisites

- Node.js 18.17 or newer
- npm (or any compatible package manager)

### Installation

```bash
git clone https://github.com/akajdid-mostafa/creatify.git
cd creatify
npm install
```

### Run locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm run start
```

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js ESLint (first run may ask you to choose an ESLint config) |

## Project Structure

```text
creatify/
├── public/
│   ├── favicon.ico
│   └── images/
│       ├── avatars/     # testimonial avatars
│       ├── cases/       # case study covers
│       ├── gallery/     # gallery images
│       └── team/        # team photos
├── src/
│   ├── components/
│   │   ├── 404/         # 404 hero + suggestions
│   │   ├── home/        # Hero, Services, About, CaseStudy, Team,
│   │   │                # Gallery, Pricing, Testimonials, WhyUs, Faqs, Contact
│   │   ├── privacy/     # privacy policy content
│   │   ├── terms/       # terms of service content
│   │   └── shared/      # Navbar, Footer, SmoothScroll
│   ├── layouts/
│   │   └── MainLayout.jsx
│   ├── pages/
│   │   ├── index.jsx
│   │   ├── privacy-policy.jsx
│   │   ├── terms-of-service.jsx
│   │   └── 404.jsx
│   └── styles/
│       └── globals.css  # Tailwind layers and custom keyframes
├── jsconfig.json        # "@/" path alias for src/
├── tailwind.config.js
└── package.json
```

## Pages

| Route | Description |
| --- | --- |
| `/` | Main landing page with all sections |
| `/privacy-policy` | Privacy policy |
| `/terms-of-service` | Terms of service |
| `404` | Custom not-found page |

## Customization

Most content lives in small data arrays at the top of each component, so it is easy to update without touching markup:

- **Services** — `src/components/home/Services.jsx`
- **Case studies** — `src/components/home/CaseStudy.jsx`
- **Pricing plans and prices** — `src/components/home/Pricing.jsx`
- **Testimonials** — `src/components/home/Testimonials.jsx`
- **FAQs** — `src/components/home/Faqs.jsx`
- **Legal copy** — `src/components/privacy/ContentPrivacy.jsx`, `src/components/terms/ContentTerms.jsx`
- **Brand name and metadata** — page titles/meta in `src/pages/`, plus `Navbar.jsx`, `Footer.jsx`, `package.json`, and `package-lock.json`
- **Images** — replace files in `public/images/` keeping the same filenames, or update the referenced paths

Colors, spacing breakpoints, and animations are defined in `tailwind.config.js` and `src/styles/globals.css`.

## Deployment

The project is ready for Vercel:

```bash
npm run build
```

Import the repository in Vercel and keep the defaults (Next.js preset, build command `next build`, output `.next`). Any host supporting Node.js can also run `npm run build && npm run start`.

## Notes

- This is a front-end marketing site: contact details (including `hello@creatify.com`) and the "Subscribe Now" buttons are placeholders.
- Forms are presentational and do not send data; connect them to your preferred form/backend service before going live.
- No license file is included yet — add one if you plan to open-source the code.

---

## Author & Contact

Built and maintained by **Mostafa Akajdid**.

- GitHub: [@akajdid-mostafa](https://github.com/akajdid-mostafa)
- Email: mostafaakajdid6@gmail.com

For questions, feedback, collaborations, or any further information, feel free to reach out.
