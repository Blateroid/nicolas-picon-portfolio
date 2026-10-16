import { stickerBuddy } from './sticker-buddy';
import { productExperiments } from './product-experiments';
// Short project descriptions; detailed stories are linked where available.
const experiment = (slug: string) => {
  const found = productExperiments.find(project => project.slug === slug);
  if (!found) throw new Error(`Missing product experiment: ${slug}`);
  const { symbol, title, summary, stage, mascot } = found;
  return { slug, symbol, title, summary, stage, mascot };
};
// Order is display order. featuredLarge renders as a big card; homepage picks the three compact cards on the homepage; placeholder items (no story yet) sit last.
export const projectSummaries = [
  { slug: stickerBuddy.slug, symbol: '⚽', title: stickerBuddy.title, summary: stickerBuddy.summary, featuredLarge: true },
  { ...experiment('your-career-ally'), homepage: true },
  { slug: 'gtm-ai-lead-discovery', symbol: '🔎', title: 'GTM AI lead discovery engine', summary: 'A weekly pipeline that finds, scores, and enriches leads, then emails Runic’s founder the top 20.', href: '/experience/runic-ai#lead-discovery', attribution: 'Built at Runic.AI', homepage: true },
  { ...experiment('grokbot-agent-organization'), homepage: true },
  experiment('ai-trading-bot'),
  experiment('trackline'),
  experiment('ai-influencer-muse'),
  { slug: 'blue-ember', symbol: '🔥', title: 'Blue Ember · Animated mascot', summary: 'A custom blue flame companion, refined through AI-assisted character design and animation.' },
  { slug: 'ai-co-chef', symbol: '🍳', title: 'AI Co-Chef', summary: 'An AI companion for cooking.', placeholder: true },
  { slug: 'gym-buddy', symbol: '🏋️', title: 'Gym buddy app', summary: 'An app centered on finding a gym buddy.', placeholder: true },
];
