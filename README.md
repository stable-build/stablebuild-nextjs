# StableBuild Next.js Landing Page

Mobile-first Next.js rebuild of the original StableBuild landing page with a company-first narrative, GSAP-powered motion, SEO metadata, and modular section components.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- GSAP
- Three.js
- React Icons

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Run the production server locally:

```bash
npm run start
```

## Project structure

- `app/`: App Router pages, metadata routes, and global styles
- `components/`: Landing page sections and motion-aware UI pieces
- `data/`: Copy and content data used across the page
- `lib/`: Utilities and client hooks
- `public/`: Favicons and open graph assets
- `current-site/`: Original static landing page reference
- `gsap-kb/`: GSAP animation reference pack

## Notes

- The rotating globe is a client-only Three.js component optimized for progressive enhancement.
- GSAP animations respect `prefers-reduced-motion`.
- The page is designed to preserve the original visual DNA while shifting the narrative toward security-first, company-first execution proof.
