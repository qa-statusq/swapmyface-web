# SwapMyFace Website

Production-ready Next.js 16 website for the SwapMyFace AI face swap app. Built for SEO domination targeting the "face swap" keyword (77,601 reach) and 220+ related keywords across 6 languages.

## Quick Start

```bash
npm install
cp .env.example .env.local   # Add your GA4 ID and Search Console code
npm run dev                   # http://localhost:3000
```

## Production Build

```bash
npm run build    # 67+ static pages, 0 errors
npm start        # Production server
```

## Deploy to Vercel

```bash
npx vercel
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 Measurement ID (e.g., `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_GOOGLE_VERIFICATION` | Google Search Console verification code |

## Architecture

- **Framework:** Next.js 16 (App Router, TypeScript, Tailwind CSS v4)
- **Rendering:** SSG (Static Site Generation) for all pages, ISR for `/templates/trending`
- **SEO:** Dynamic sitemap, robots.txt, per-page metadata, 6 schema types
- **i18n:** 6 languages (en, hi, ar, ja, ko, vi) with hreflang tags
- **Analytics:** GA4 via @next/third-parties (non-blocking)

## Pages (67 total)

- **Homepage** `/` - Primary landing page
- **5 Keyword Pages** - `/face-swap`, `/ai-face-swap`, `/ai-face-changer`, `/face-swap-photo-editor`, `/free-face-swap`
- **7 Template Pages** - Hub + 5 categories + trending (ISR)
- **16 Festival Pages** - Dynamic `[slug]` with `generateStaticParams`
- **12 Blog Posts** - Dynamic `[slug]` with Article schema
- **4 Legal/Support** - Privacy, Terms, Responsible Use, Support (content preserved from original)
- **15 Localized Pages** - Hindi (5), Arabic (3), Japanese (3), Korean (2), Vietnamese (2)
- **Technical** - robots.txt, sitemap.xml (61 URLs), manifest, 404, OG image

## Configuration

- **Domain:** Update `SITE_URL` in `src/lib/constants.ts`
- **Play Store:** Update `PLAY_STORE_URL` in `src/lib/constants.ts` with actual package ID
- **Contact:** Update `CONTACT_EMAIL` in `src/lib/constants.ts` if needed

## Key Files

| Path | Purpose |
|------|---------|
| `src/lib/constants.ts` | Site config, URLs, nav links |
| `src/lib/keywords.ts` | All 221 keyword data from ASO doc |
| `src/data/festivals.ts` | 16 festival definitions |
| `src/data/blog.ts` | 12 blog post content |
| `src/data/faq.ts` | FAQ content per page |
| `src/data/translations/` | hi, ar, ja, ko, vi translations |
