import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { experience } from '@/lib/profile';
import { theratStory } from '@/lib/therat';
import { TheraTStory } from '@/components/therat-story';
import { DiscoveryBlock } from '@/components/discovery-block';
import { Disclosure } from '@/components/portfolio';
import { TechStack } from '@/components/tech-stack';
import { MediaCarousel } from '@/components/media-carousel';
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return experience.map(item => ({ slug: item.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const item = experience.find(item => item.slug === slug);
  return { title: item ? `${item.company} · Experience` : 'Experience not found', description: item?.summary };
}
export default async function ExperiencePage({ params }: Props) {
  const { slug } = await params; const item = experience.find(item => item.slug === slug);
  if (!item) notFound();
  const structured = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: `${item.company} — ${item.role}`, description: item.summary, author: { '@type': 'Person', name: 'Nicolas Picon' }, about: { '@type': 'Organization', name: item.company } };
  return <article className="page-shell experience-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}/>
    <Link className="text-link" href="/#experience">← All experience</Link>
    <header className="case-heading"><div className={`company-logo experience-page-logo ${item.logo === 'runic.svg' ? 'runic-logo' : ''}`}><Image src={`/logos/${item.logo}`} alt={`${item.company} logo`} width={96} height={64} className="logo-image" unoptimized={item.logo.endsWith('.svg')}/></div><p className="eyebrow">EXPERIENCE</p><h1>{item.company}</h1><p className="experience-page-role">{item.role}</p><p className="entry-location">{item.dates} · {item.location}</p>{slug !== 'therat' && 'impact' in item && item.impact && <p className="experience-impact"><span className="discovery-number">{item.impact.value}</span> <span>{item.impact.label}</span></p>}{'engagement' in item && <p className="engagement-note">{item.engagement}</p>}<p className="case-intro">{slug === 'therat' ? theratStory.hook : item.summary}</p>{'tools' in item && item.tools && <TechStack tools={item.tools} label="Built with"/>}{slug === 'therat' && <p>{theratStory.introduction}</p>}</header>
    {(() => { const sections = 'sections' in item && item.sections ? item.sections : []; const discovery = slug !== 'therat' && 'discovery' in item && item.discovery ? <DiscoveryBlock heading="Who I talked to" discovery={item.discovery}/> : null; const story = sections.map(section => <section className="experience-page-section" id={'id' in section ? section.id : undefined} key={section.title}><h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}{'image' in section && section.image && <figure className="challenge-preview"><Image src={section.image.src} alt={section.image.alt} width={section.image.width} height={section.image.height} sizes="(max-width: 640px) 100vw, 820px"/><figcaption>{section.image.caption}</figcaption></figure>}</section>); return <>{story.slice(0, 1)}{discovery}{story.slice(1)}</>; })()}
    {'detailGroups' in item && item.detailGroups?.map(group => <section className="experience-page-section" key={group.heading}><h2>{group.heading}</h2>{group.items.map(detail => <Disclosure key={detail.title} title={detail.title}>{'paragraphs' in detail && detail.paragraphs?.map(text => <p key={text}>{text}</p>)}{'items' in detail && detail.items && <ul className="profile-highlights">{detail.items.map(text => <li key={text}>{text}</li>)}</ul>}</Disclosure>)}</section>)}
    {slug !== 'therat' && <section className="experience-page-section"><h2>My contribution</h2><ul className="profile-highlights">{item.highlights.map(text => <li key={text}>{text}</li>)}</ul></section>}
    {slug !== 'therat' && 'photos' in item && item.photos && <section className="experience-page-section"><h2>Along the way</h2><MediaCarousel label={`${item.company} photos`} items={item.photos}/></section>}
    {slug === 'therat' && <TheraTStory/>}
    {slug === 'empire-bio-diagnostics' && <p className="experience-sample-link">Writing sample: <Link className="text-link" href="/samples/empire-activation-a83f9d2c">ATP Complete 2 activation guide →</Link></p>}
    <div className="case-bottom"><Link className="text-link" href="/#experience">← Back to experience</Link><Link className="text-link" href="/projects">Explore projects →</Link></div>
  </article>;
}
