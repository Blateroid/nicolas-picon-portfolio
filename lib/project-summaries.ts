import { stickerBuddy } from './sticker-buddy';
import { productExperiments } from './product-experiments';
// Short project descriptions; detailed stories are linked where available.
export const projectSummaries = [
  { slug: 'blue-ember', symbol: '🔥', title: 'Blue Ember · Animated mascot', summary: 'A custom blue flame companion, refined through AI-assisted character design and animation.', collectionOnly: true },
  ...productExperiments.map(({ slug, symbol, title, summary, stage }) => ({ slug, symbol, title, summary, stage, collectionOnly: slug === 'trackline' })),
  { slug: 'ai-influencer-muse', symbol: '✨', title: 'AI influencer · Muse', summary: 'An AI-generated influencer and Instagram account run with Muse.' },
  { slug: 'gtm-ai-lead-discovery', symbol: '🔎', title: 'GTM AI lead discovery engine', summary: 'AI-assisted lead discovery for go-to-market outreach.' },
  { slug: 'ai-co-chef', symbol: '🍳', title: 'AI Co-Chef', summary: 'An AI companion for cooking.' },
  { slug: 'gym-buddy', symbol: '🏋️', title: 'Gym buddy app', summary: 'An app centered on finding a gym buddy.' },
  { slug: stickerBuddy.slug, symbol: '⚽', title: stickerBuddy.title, summary: stickerBuddy.summary },
  { slug: 'resume-tailor', symbol: '📄', title: 'Resume tailor app', summary: 'An app for tailoring a resume to a job opportunity.' },
];
