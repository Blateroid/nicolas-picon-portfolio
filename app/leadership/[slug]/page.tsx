import { TechStory } from '@/components/tech-story';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { leadership } from '@/lib/leadership';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return leadership.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = leadership.find(item => item.slug === slug);
  return { title: item ? `${item.organization} · Leadership` : 'Leadership not found', description: item?.summary };
}
export default async function LeadershipPage({ params }: Props) {
  const { slug } = await params;
  const item = leadership.find(item => item.slug === slug);
  if (!item) notFound();
  const structured = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${item.organization} — ${item.role}`, description: item.summary, author: { '@type': 'Person', name: 'Nicolas Picon' }, about: { '@type': 'CollegeOrUniversity', name: 'University of Washington · Foster School of Business' } };
  return <article className="page-shell experience-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}/>
    <Link className="text-link" href="/#leadership">← All leadership</Link>
    <header className="case-heading"><span className="placeholder-symbol" aria-hidden="true">{item.symbol}</span><p className="eyebrow">MBA LEADERSHIP</p><h1>{item.organization}</h1><p className="experience-page-role">{item.role}</p><p className="entry-location">UW Foster · {item.term}</p><p className="case-intro">{item.summary}</p></header>
    {slug === 'technology' ? <TechStory/> : <section className="placeholder-note"><h2>More from this role</h2><p>A fuller account of the initiatives, events, and contributions from this role is coming soon.</p></section>}
    <div className="case-bottom"><Link className="text-link" href="/#leadership">← Back to leadership</Link><Link className="text-link" href="/#experience">Explore experience →</Link></div>
  </article>;
}
