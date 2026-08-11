# Nishita Gupta — Portfolio

A single-page portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.

- Fonts (Inter, Inter Tight, IBM Plex Mono) are self-hosted via `@fontsource`, so the build has no
  runtime dependency on Google Fonts.
- The bento grid's expand/collapse is done with Framer Motion `layoutId` shared-layout animation;
  see `components/BentoGrid.tsx`.
- `prefers-reduced-motion` is respected globally in `app/globals.css`.
