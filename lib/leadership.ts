import { techStory } from '@/lib/ai-events';
import { gbaStory } from '@/lib/gba';
// MBA leadership roles and 2025–2026 term confirmed by Nicolas.
export const leadership = [
  { slug: 'global-business-association', organization: 'Global Business Association (GBA)', role: 'Co-President', symbol: '🌐', term: '2025–2026 · Second year of MBA', summary: gbaStory.summary },
  { slug: 'foster-latinx', organization: 'Foster LatinX MBA affinity club', role: 'Co-President', symbol: '🤝', term: '2025–2026 · Second year of MBA', summary: 'Co-led Foster’s LatinX MBA affinity club.' },
  { slug: 'technology', organization: 'MBA Tech Club', role: 'VP of Special AI Events', symbol: '💻', term: '2025–2026 · Second year of MBA', summary: techStory.summary },
  { slug: 'entrepreneurship', organization: 'MBA Entrepreneurship & Venture Capital Club', role: 'VP of Entrepreneurship', symbol: '💡', term: '2025–2026 · Second year of MBA', summary: 'Served as VP of Entrepreneurship for Foster’s MBA Entrepreneurship & Venture Capital Club.' },
  { slug: 'colombia-trip', organization: 'Foster MBA trip to Colombia', role: 'Trip Organizer', symbol: '✈️', term: 'Foster MBA class trip', summary: 'Organized a trip to Colombia for my Foster MBA classmates. The trip was cancelled, but planning it took a lot of project management.' },
];
const slugs = leadership.map(item => item.slug);
if (new Set(slugs).size !== slugs.length || slugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) throw new Error('Invalid or duplicate leadership slug');
