# everything — React + Vite Landing Page

A personal AI life companion landing page built with React and Vite.

## Stack

- **React 18** — UI components
- **Vite 5** — dev server & build tool
- **CSS Modules** — scoped component styles

## Quick start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Nav.jsx / Nav.module.css         — Fixed nav with scroll effect
    Hero.jsx / Hero.module.css       — Hero with animated entrance
    PathCard.jsx / PathCard.module.css — Interactive daily path card
    Marquee.jsx / Marquee.module.css  — Scrolling life-areas ticker
    How.jsx / How.module.css         — Accordion how-it-works
    Areas.jsx / Areas.module.css     — Hover-reveal life area cards
    Testimonial.jsx / Testimonial.module.css — Switchable quotes + stats
    Pricing.jsx / Pricing.module.css — Monthly/annual toggle pricing
    Footer.jsx / Footer.module.css   — Footer
  hooks/
    useInView.js — IntersectionObserver scroll reveal hook
  App.jsx
  main.jsx
  index.css    — CSS variables & global resets
```

## Interactive features

- **PathCard** — click "Mark complete" to progress through your day
- **How** — click any step to expand the detail panel
- **Areas** — hover cards reveal stats and deeper descriptions
- **Testimonial** — dot navigation switches between user quotes
- **Pricing** — monthly/annual toggle with savings calculation
- **Nav** — background appears on scroll
