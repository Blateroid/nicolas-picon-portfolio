import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { mbaExperience as mba } from '@/lib/mba';
export const metadata: Metadata = { title: mba.title, description: mba.summary };
function WorkLinks({ items }: { items: { title: string; description: string; url: string }[] }) {
  if (!items.length) return null;
  return <div className="participant-ideas">{items.map(item => <article key={item.url}><h3><Link href={item.url}>{item.title}</Link></h3><p>{item.description}</p><Link className="text-link" href={item.url}>Explore the work →</Link></article>)}</div>;
}
export default function FosterMBA() {
  const structured = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: mba.title, description: mba.summary, author: { '@type': 'Person', name: 'Nicolas Picon' }, about: { '@type': 'EducationalOrganization', name: mba.school } };
  return <article className="page-shell experience-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}/>
    <Link className="text-link" href="/#education">← Education</Link>
    <header className="case-heading"><div className="company-logo experience-page-logo"><Image src="/logos/uw.png" alt="University of Washington logo" width={96} height={64}/></div><p className="eyebrow">EDUCATION · UW FOSTER</p><h1>{mba.title}</h1><p className="experience-page-role">{mba.degree}</p><p className="entry-location">{mba.focus} · Graduated {mba.graduation}</p><p className="case-intro">{mba.summary}</p></header>
    <nav className="profile-nav" aria-label="MBA experience sections"><a href="#investing">Investing & VCIC ↓</a><a href="#coursework">Coursework ↓</a><a href="#projects">Projects ↓</a><a href="#leadership">Leadership ↓</a><a href="#community">Community ↓</a></nav>
    <section className="experience-page-section" id="investing"><h2>Venture investing & competitions</h2><article><h3>{mba.vcic.title}</h3><p className="entry-location">{mba.vcic.participation}</p><p>{mba.vcic.description}</p><p>{mba.vcic.context}</p><p>{mba.vcic.contribution}</p><p className="entry-location">{mba.vcic.updateNote}</p><a className="text-link" href={mba.vcic.source}>About Foster’s VCIC competition ↗</a></article><WorkLinks items={mba.investing}/></section>
    <section className="experience-page-section" id="coursework"><h2>Coursework & applied learning</h2><p>My focus was product management and marketing.</p><div className="participant-ideas">{mba.coursework.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
    <section className="experience-page-section" id="projects"><h2>Product projects & commercialization</h2><p>I built a product and evaluated a research venture. Both meant working across business and technical teams.</p><WorkLinks items={[...mba.projects, ...mba.commercialization]}/></section>
    <section className="experience-page-section" id="leadership"><h2>Student leadership</h2><p>During my second year, I held four club roles across Foster’s business, affinity, technology, and entrepreneurship clubs. I also organized a class trip to Colombia.</p><div className="leadership-grid">{mba.leadership.map(item => <Link className="leadership-card" key={item.url} href={item.url}><div><p className="leadership-role">{item.role}</p><h3>{item.title}</h3><p className="entry-location">{item.term}</p><p className="leadership-summary">{item.description}</p><span className="text-link">Explore the role →</span></div></Link>)}</div></section>
    <section className="experience-page-section" id="community"><h2>Community involvement</h2><WorkLinks items={mba.community}/></section>
    <div className="case-bottom"><Link className="text-link" href="/#education">← Back to education</Link><Link className="text-link" href="/projects">Explore projects →</Link></div>
  </article>;
}
