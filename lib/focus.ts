export type Focus = 'product' | 'healthcare' | 'investing';
export const focusOptions: { id: Focus; label: string }[] = [{ id: 'product', label: 'Product' }, { id: 'healthcare', label: 'Healthcare' }, { id: 'investing', label: 'Investing' }];
// Keyed by URL path. Items with no tags are general and appear in every view.
export const focusByPath: Record<string, Focus[]> = {
  '/projects/ditto': ['product'],
  '/projects/shiftspark': ['healthcare', 'product'],
  '/projects/grokbot-agent-organization': ['product'],
  '/projects/ai-trading-bot': ['product', 'investing'],
  '/projects/hey-lily': ['product', 'healthcare'],
  '/projects/world-cup-sticker-tracker': ['product'],
  '/projects/trackline': ['product', 'investing'],
  '/projects/your-career-ally': ['product'],
  '/projects/blue-ember': ['product'],
  '/projects/ai-influencer-muse': ['product'],
  '/projects/gtm-ai-lead-discovery': ['product'],
  '/projects/ai-co-chef': ['product'],
  '/projects/gym-buddy': ['product'],
  '/experience/therat': ['healthcare', 'product'],
  '/experience/runic-ai': ['product'],
  '/projects/angel-investing-practicum': ['investing'],
  '/experience/uber': ['product'],
  '/experience/voyager-capital': ['investing'],
  '/projects/mentem-lab': ['healthcare', 'product'],
  '/experience/empire-bio-diagnostics': ['healthcare', 'product'],
  '/leadership/technology': ['product'],
  '/leadership/entrepreneurship': ['investing'],
  '/leadership/colombia-trip': ['product'],
};
export function focusOf(path: string): Focus[] { return focusByPath[path] ?? []; }
// Value for the data-focus attribute, or undefined for general items.
export function focusAttr(path?: string): string | undefined { const tags = path ? focusOf(path) : []; return tags.length ? tags.join(' ') : undefined; }
