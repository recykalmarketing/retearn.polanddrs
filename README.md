# Retearn Poland — Small Retail Lead-Generation Landing Page

A production-oriented bilingual Next.js landing page focused only on small Polish retailers.

## What is included

- Polish default route: `/pl`
- English route: `/en`
- Persistent PL/EN language switch
- Responsive navigation and dropdowns
- Smooth anchor scrolling
- Framer Motion reveal animations with reduced-motion support
- Lucide icon system
- Verified product claims only:
  - Up to 200 containers internal capacity
  - 360° QR scanner
  - Touchscreen guidance
  - Connected monitoring
- Lead form API route
- Optional Cal.com / Calendly embed
- Image placeholders for the CGI assets
- Actual supplied Retearn logo and RVM product image

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open:

- http://localhost:3000/pl
- http://localhost:3000/en

## Production build

```bash
npm run build
npm run start
```

## Render deployment

- Build command: `npm install && npm run build`
- Start command: `npm run start`
- Node version: 20+
- Add environment variables if required:
  - `NEXT_PUBLIC_CAL_LINK`
  - `LEAD_WEBHOOK_URL`

## Replace image placeholders

Place final CGI assets in `public/images/` and update the corresponding paths in `components/LandingPage.tsx`.

Current placeholder files:

- `hero-store-placeholder.svg`
- `qr-scanner-placeholder.svg`
- `dashboard-placeholder.svg`
- `retailer-story-placeholder.svg`

## CRM / email integration

Edit `app/api/leads/route.ts` or set `LEAD_WEBHOOK_URL`.

The demo API validates the required fields and returns a success response. Connect a secure CRM, email service or database before launch.

## Important compliance notes

Do not add claims for:

- Poland certification
- Specific refund methods
- Processing speed
- Exact machine dimensions
- Daily return limit
- Container recognition beyond the confirmed 360° QR scanner

unless approved technical and compliance documents are supplied.
