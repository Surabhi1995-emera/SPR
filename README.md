# SPR India — Website

An interactive marketing site for SPR India, built around the brand's existing
burgundy/navy/gold/cream palette with a custom "Masterplan" interaction system:
a compass-style cursor with an ink-line trail, a self-drawing blueprint hero,
a horizontal-scroll legacy timeline, magnetic project cards, and curtain-wipe
page transitions.

## Stack

React + TypeScript + Vite, Tailwind CSS v4, Framer Motion, GSAP (ScrollTrigger),
React Router, Lenis (smooth scroll).

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build locally
```

## Content & imagery

- Copy and project data live in `src/data/` (`projects.ts`, `events.ts`,
  `siteContent.ts`) — edit these rather than hunting through components.
  A few projects and all events carry placeholder copy/RERA numbers flagged
  "available on request"; replace with real details before launch.
- All imagery is currently placeholder art (`src/components/ui/PlaceholderArt.tsx`)
  — blueprint-style skyline illustrations in the brand palette, sized as real
  image slots (`data-image-slot` attribute). Swap in real photography by
  replacing the `PlaceholderArt` usage in a given component with an `<img>`/
  background image of the same aspect ratio; no layout changes needed.

## Structure

```
src/
  components/
    layout/     Header, Footer, page transitions, page hero banner
    cursor/     Custom cursor system
    sections/   Reusable homepage/marketing sections
    projects/   Project card
    ui/         Buttons, reveal-on-scroll, stat counters, placeholder art
  data/         Site copy, project list, events
  pages/        Route-level pages
  lib/          GSAP + Lenis setup
```
