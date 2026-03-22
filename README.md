# Fast Track Gold — Website

Premium Next.js 15 website for **Comercializadora Fast Track Gold S.A.S.** — Colombia's premier precious minerals exporter.

Built following the [CLAUDE.md Billion Dollar Website System](./CLAUDE.md).

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Blog | next-mdx-remote v6 + gray-matter |
| SEO | Next.js Metadata API + JSON-LD |
| Analytics | Google Tag Manager |

## 🎨 Design System

- **Font Pairing:** Cormorant Garamond (display) + DM Sans (body)
- **Brand Colors:** Gold `#C9A84C` + Emerald `#2E7D52`
- **Theme:** Dark luxury — deep black backgrounds with gold accents
- **Mode:** Dark/Light toggle with no flash

---

## 📁 Project Structure

```
fasttrack-gold/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (GTM, fonts, metadata)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # CSS variables + base styles
│   ├── sitemap.ts          # Dynamic sitemap
│   ├── robots.ts           # Robots.txt
│   ├── not-found.tsx       # Custom 404
│   ├── error.tsx           # Error boundary
│   ├── loading.tsx         # Loading state
│   ├── about/page.tsx      # About page
│   ├── services/page.tsx   # Services page
│   ├── products/
│   │   ├── oro/page.tsx    # Gold product page
│   │   └── esmeralda/      # Emerald product page
│   ├── contact/page.tsx    # Contact form
│   └── blog/               # Blog listing + [slug] posts
├── components/
│   ├── layout/             # Navbar, Footer, MobileMenu
│   ├── sections/           # Hero, Stats, About, Services, etc.
│   ├── blog/               # BlogCard, TOC, ReadingProgress
│   └── ui/                 # Button, Input, Badge, etc.
├── content/blog/           # MDX blog posts
├── constants/index.ts      # Site config, nav, services, FAQs
├── hooks/                  # useScrollY, useMediaQuery
├── lib/                    # utils, mdx, metadata, structured-data
├── types/index.ts          # Shared TypeScript types
└── middleware.ts           # Legacy URL redirects
```

---

## ⚡ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/fasttrack-gold.git
cd fasttrack-gold

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your GTM ID and site URL

# 4. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Environment Variables

```bash
# .env.local
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SITE_URL=https://fasttrackgold.co
```

---

## 📝 Adding Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
excerpt: "A brief description of the post (150–160 chars)"
date: "2024-07-01"
author: "Fast Track Gold Team"
category: "Compliance"
tags: ["gold", "compliance", "Colombia"]
coverImage: "https://images.unsplash.com/photo-XXXXX?auto=format&fit=crop&w=1200&q=80"
readingTime: "5 min read"
---

Your MDX content here...
```

The blog automatically picks up new posts — no configuration needed.

---

## 🏗️ Build & Deploy

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

The `vercel.json` is already configured. Just connect your GitHub repo to Vercel for automatic deployments on every push.

### Deploy Checklist

- [ ] Update `NEXT_PUBLIC_SITE_URL` in `.env.local` (and Vercel environment variables)
- [ ] Update `NEXT_PUBLIC_GTM_ID` with real GTM container ID
- [ ] Add OG images to `public/og/` (1200×630px recommended)
- [ ] Add favicon to `public/icons/favicon.ico`
- [ ] Update `SITE_CONFIG.email` and `SITE_CONFIG.phone` in `constants/index.ts`
- [ ] Update social links in `constants/index.ts`

---

## 🔍 SEO Features

- ✅ Metadata API on every page (title, description, OG, Twitter)
- ✅ JSON-LD structured data (Organization, Article, FAQ, Breadcrumb)
- ✅ Dynamic sitemap at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Canonical URLs on every page
- ✅ Open Graph images
- ✅ Breadcrumb navigation with schema

---

## ♿ Accessibility

- ✅ Skip navigation link
- ✅ ARIA labels on all icon buttons
- ✅ Focus-visible styles on all interactive elements
- ✅ Semantic HTML throughout
- ✅ Alt text on all images
- ✅ Minimum 44×44px touch targets

---

## 📦 Key Dependencies

```json
{
  "next": "^15.2.4",
  "react": "^19.0.0",
  "framer-motion": "^12.6.3",
  "lucide-react": "^0.487.0",
  "next-mdx-remote": "^6.0.0",
  "gray-matter": "^4.0.3",
  "clsx": "^2.1.1",
  "tailwind-merge": "^3.2.0"
}
```

> **Note:** `next-mdx-remote` v6+ is required. v5 has a known security vulnerability (CVE-2026-0969).

---

## 🌐 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with all sections |
| `/about` | Company, mission, vision, compliance, values |
| `/services` | Service cards + export process |
| `/products/oro` | Gold product page |
| `/products/esmeralda` | Emerald product page |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog posts with TOC |
| `/contact` | Contact form |

### Legacy URL Redirects (from original WordPress site)

All original Spanish-language URLs from `fasttrackgold.co` are automatically redirected via `middleware.ts`:

| Old URL | New URL |
|---------|---------|
| `/descripcion-quienes-somos` | `/about` |
| `/mision-descripcion` | `/about#mission` |
| `/vision-descripcion` | `/about#vision` |
| `/cumplimiento-descripcion` | `/about#compliance` |
| `/servicios-descripcion` | `/services` |
| `/oro` | `/products/oro` |
| `/diamante` | `/products/esmeralda` |
| `/contacto` | `/contact` |

---

## 🎛️ Customization

### Update Site Information
Edit `constants/index.ts` — this is the single source of truth for all site config, nav links, services, testimonials, stats, and FAQs.

### Change Brand Colors
Edit the CSS variables in `app/globals.css`:
```css
--color-primary: #C9A84C;  /* Gold */
--color-accent:  #2E7D52;  /* Emerald */
```

### Change Fonts
Update the Google Fonts import in `app/globals.css` and the `--font-display` / `--font-body` variables.

---

## 📄 License

© 2024 Comercializadora Fast Track Gold S.A.S. All rights reserved.
