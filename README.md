# landing-zenda

Pixel-perfect rebuild of the [zenda.cash](https://zenda.cash) marketing landing —
originally a Framer site — reimplemented with modern, self-hosted-friendly web tech.

Zenda is Uruguay's crypto card / buy-sell-invest platform. This repo is the public
marketing page only; the authenticated app lives at `app.zenda.cash`.

## Stack

- **Next.js 16** (App Router, Turbopack) — statically prerendered
- **Tailwind CSS 4** (CSS-first `@theme` tokens)
- **TypeScript**
- **Fonts:** Sora (display) + Inter (body) via `next/font` (self-hosted, no runtime requests)
- **Assets:** all images/icons localized in `public/img/` — zero external dependencies

## Getting started

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Scripts

| Command       | Description                          |
| ------------- | ------------------------------------ |
| `pnpm dev`    | Dev server (Turbopack)               |
| `pnpm build`  | Production build (static prerender)  |
| `pnpm start`  | Serve the production build           |
| `pnpm lint`   | ESLint                               |

## Project structure

```
app/                 App Router entry (layout, page, globals.css, icon)
components/           One component per landing section
  Hero.tsx           Hero + allies strip
  Features.tsx       "Comprá, vendé o invertí" cards
  InternationalCard.tsx + WaitlistForm.tsx
  UsdtBenefits.tsx   USDT benefits band
  Faq.tsx            FAQ accordion
  Footer.tsx
lib/constants.ts     Shared constants (app URL)
public/img/          Localized assets
```

## Notes

- The waitlist form uses a placeholder submit (success state only). Point it at a
  real endpoint when a backend is available.
- The design system (colors, type scale) is defined as Tailwind theme tokens in
  `app/globals.css`.

## Deploy

Any Node/static host works. For self-hosted Docker (e.g. Dokploy), build with the
standalone output and serve `pnpm start`, or export static assets. See the
[Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).
