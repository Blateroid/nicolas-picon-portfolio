// Public origin for canonical URLs, sitemap, and robots. NEXT_PUBLIC_SITE_URL wins (set it when a custom domain is added); Vercel supplies VERCEL_PROJECT_PRODUCTION_URL at build time.
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'http://127.0.0.1:3000');
