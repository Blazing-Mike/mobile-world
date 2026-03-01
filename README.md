# Mobile World Timaru

Landing page for **Mobile World Timaru** — a mobile phone repair, sales, and accessories shop. Built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:4321`.

## Project Structure

```
src/
├── components/
│   ├── Header.astro     # Top nav, mobile hamburger menu & toggle script
│   └── Hero.astro       # Hero section, CTAs, trust badges & brand carousel
├── layouts/
│   └── BaseLayout.astro # HTML shell, meta tags, global styles
├── pages/
│   └── index.astro      # Home page (composes Header + Hero)
└── styles/
    └── global.css       # Design tokens, animations & component styles
```

## Tech Stack

- **Astro** — static site framework
- **Tailwind CSS** — utility-first styling
