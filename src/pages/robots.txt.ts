
import type { APIRoute } from 'astro';

const robotsTxt = `
User-agent: Googlebot
Disallow:
Allow: /


User-agent: Yandex
Disallow:
Allow: /


User-agent: archive.org_bot
Disallow:
Allow: /


User-agent: *
Disallow: /

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};