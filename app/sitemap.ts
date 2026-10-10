import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { publicProjects } from '@/lib/projects';
import { projectSummaries } from '@/lib/project-summaries';
import { experience } from '@/lib/profile';
import { leadership } from '@/lib/leadership';
import { volunteering } from '@/lib/volunteering';
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    '/', '/about', '/projects', '/education/foster-mba', '/events/ai-spark',
    ...publicProjects.map(p => `/projects/${p.slug}`),
    ...projectSummaries.map(p => `/projects/${p.slug}`),
    ...experience.map(item => `/experience/${item.slug}`),
    ...leadership.map(item => `/leadership/${item.slug}`),
    ...volunteering.map(item => item.url).filter(url => url.startsWith('/volunteering/')),
  ];
  return [...new Set(paths)].map(path => ({ url: `${siteUrl}${path}` }));
}
