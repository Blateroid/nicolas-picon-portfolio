# Nicolas Picon · Portfolio

Personal portfolio site built with Next.js (App Router), TypeScript, and Tailwind CSS. Content lives in typed data files, so the pages, `/portfolio.json`, and `/llms.txt` stay in sync.

## Run locally

Requires Node.js 20.9 or newer.

```sh
npm ci
npm run dev        # http://127.0.0.1:3000
npm run typecheck
npm run build      # production build (Webpack)
```

## Where to edit

- `lib/projects.ts`: HeyLily project page content.
- `lib/profile.ts`: experience, education, interests, contact email.
- `lib/therat.ts`, `lib/ai-events.ts`, `lib/sticker-buddy.ts`, `lib/product-experiments.ts`, `lib/mba.ts`, `lib/leadership.ts`, `lib/volunteering.ts`: story content for each page.
- `app/`: routes. `components/`: shared UI. `public/`: images and documents.
- `PORTFOLIO_BRIEF.md`: goal, audience, positioning, and writing rules.

## Deploy

The site deploys on Vercel from the `main` branch. Every push to `main` publishes a new version; other branches get preview URLs. Set `NEXT_PUBLIC_SITE_URL` in Vercel once a custom domain is added, so canonical URLs and the sitemap use it.
