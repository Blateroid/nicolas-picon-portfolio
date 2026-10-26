import { aiSpark } from '@/lib/ai-events';
// Volunteer role, event, and timing confirmed by Nicolas.
export const volunteering = [
  { slug: 'nucleate', url: '/volunteering/nucleate', organization: 'Nucleate', role: 'Volunteer leadership', dates: '', symbol: '', logo: '/logos/nucleate.png', summary: 'Leadership volunteering with Nucleate.' },
  { slug: 'uw-community-leadership', url: '/education/foster-mba#leadership', organization: 'UW community leadership', role: 'Student club leadership', dates: '2025–2026', symbol: '🎓', summary: 'Co-led Foster’s Global Business Association and LatinX club, served in technology and entrepreneurship leadership roles, and organized a class trip to Colombia.' },
  { slug: 'fifa', url: '/volunteering/fifa', organization: 'FIFA World Cup 2026', role: 'Ceremonies Volunteer', dates: 'June 2026', symbol: '⚽', summary: 'Participated in on-pitch ceremonies with the flags at the 2026 FIFA World Cup.' },
  { slug: 'ai-spark', url: aiSpark.url, organization: aiSpark.title, role: 'Committee Member · Hackathon Lead', dates: aiSpark.date, symbol: '✨', summary: aiSpark.summary },
];
const slugs = volunteering.map(item => item.slug);
if (new Set(slugs).size !== slugs.length || slugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) throw new Error('Invalid or duplicate volunteering slug');
