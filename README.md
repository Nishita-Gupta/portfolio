# Nishita Gupta — Portfolio

A single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.
Content is sourced from `lib/data.ts` — edit that one file to update any text on the site.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Deploy

Push to GitHub, then import the repo on [vercel.com/new](https://vercel.com/new). No environment
variables are required. `npm run build` is verified to complete with zero TypeScript or ESLint errors.

## Structure

- `app/` — root layout, global styles, the single page
- `components/` — `Landing`, `BentoGrid` (the shared-layout expand/collapse interaction), `Footer`
- `components/cards/` — one file per bento card, each rendering a compact and an expanded view
- `lib/data.ts` — every piece of copy on the site, pulled from the resume
- `public/resume.pdf` — the file served by the Resume card's download button (swap in an updated version any time — keep the filename)

## Notes

- Fonts (Inter, Inter Tight, IBM Plex Mono) are self-hosted via `@fontsource`, so the build has no
  runtime dependency on Google Fonts.
- The bento grid's expand/collapse is done with Framer Motion `layoutId` shared-layout animation;
  see `components/BentoGrid.tsx`.
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
