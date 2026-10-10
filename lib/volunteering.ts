import { aiSpark } from '@/lib/ai-events';
// Volunteer role, event, and timing confirmed by Nicolas.
export const volunteering = [
  { slug: 'fifa', url: '/volunteering/fifa', organization: 'FIFA World Cup 2026', role: 'Ceremonies Volunteer', dates: 'June 2026', symbol: '⚽', summary: 'Participated in on-pitch ceremonies with the flags at the 2026 FIFA World Cup.' },
  { slug: 'ai-spark', url: aiSpark.url, organization: aiSpark.title, role: 'Committee Member · Hackathon Lead', dates: aiSpark.date, symbol: '✨', summary: aiSpark.summary },
];
const slugs = volunteering.map(item => item.slug);
if (new Set(slugs).size !== slugs.length || slugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) throw new Error('Invalid or duplicate volunteering slug');
