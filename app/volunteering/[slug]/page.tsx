import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
import { volunteering } from '@/lib/volunteering';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return volunteering.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = volunteering.find(item => item.slug === slug);
  return { title: item ? `${item.organization} · Volunteering` : 'Volunteering not found', description: item?.summary };
}
export default async function VolunteeringPage({ params }: Props) {
  const { slug } = await params;
  const item = volunteering.find(item => item.slug === slug);
  if (!item) notFound();
  if (item.url !== `/volunteering/${slug}`) redirect(item.url);
  const structured = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${item.organization} — ${item.role}`, description: item.summary, author: { '@type': 'Person', name: 'Nicolas Picon' }, about: { '@type': 'Organization', name: item.organization } };
  return <article className="page-shell experience-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}/>
    <Link className="text-link" href="/#volunteering">← All volunteering</Link>
    <header className="case-heading"><span className="placeholder-symbol" aria-hidden="true">{item.symbol}</span><p className="eyebrow">VOLUNTEERING</p><h1>{item.organization}</h1><p className="experience-page-role">{item.role}</p><p className="entry-location">{item.dates}</p><p className="case-intro">{item.summary}</p></header>
    <section className="placeholder-note"><h2>More from this role</h2><p>More about the event and my volunteer contribution is coming soon.</p></section>
    <div className="case-bottom"><Link className="text-link" href="/#volunteering">← Back to volunteering</Link><Link className="text-link" href="/#experience">Explore experience →</Link></div>
  </article>;
}
