import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { MediaCarousel } from '@/components/media-carousel';
import { TechStack } from '@/components/tech-stack';
import { aiSpark, aiSparkPhotos } from '@/lib/ai-events';
export const metadata: Metadata = { title: 'AI Spark · Foster AI Day', description: aiSpark.summary };
export default function AISparkPage() {
  const structured = { '@context': 'https://schema.org', '@type': 'CreativeWork', name: aiSpark.title, description: aiSpark.summary, author: { '@type': 'Person', name: 'Nicolas Picon' }, about: { '@type': 'Event', name: aiSpark.title, startDate: aiSpark.isoDate, sponsor: aiSpark.sponsors.map(name => ({ '@type': 'Organization', name })), location: { '@type': 'Place', name: 'UW Foster · Founders Hall' } } };
  return <article className="page-shell experience-page ai-spark-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}/>
    <nav className="event-context-nav" aria-label="Related roles"><Link className="text-link" href="/leadership/technology">← Special AI Events</Link><Link className="text-link" href="/#volunteering">Volunteering →</Link></nav>
    <header className="case-heading"><p className="eyebrow">STUDENT LEADERSHIP · COMMUNITY</p><h1>{aiSpark.title}</h1><p className="experience-page-role">{aiSpark.role}</p><p className="entry-location">{aiSpark.date} · UW Foster</p><p className="case-intro">{aiSpark.summary}</p><a className="press-highlight" href="https://lnkd.in/p/egA9cGrf"><span aria-hidden="true">↗</span> UW Foster feature</a></header>
    <section className="experience-page-section"><h2>From the Tech Club to AI Spark</h2><p>{aiSpark.context}</p><Link className="text-link" href="/leadership/technology">Read the earlier hackathon story →</Link></section>
    <section className="experience-page-section"><h2>What the team delivered</h2><div className="event-outcomes">{aiSpark.outcomes.map(item => <article key={item.label}><p className="outcome-value">{item.value}</p><h3>{item.label}</h3><p>{item.detail}</p></article>)}</div></section>
    <section className="experience-page-section"><h2>My contribution</h2><div className="event-responsibilities">{aiSpark.contributions.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></section>
    <section className="experience-page-section"><h2>The hackathon flyer</h2><p>{aiSpark.flyer.description}</p><figure className="challenge-preview"><a href={aiSpark.flyer.src}><Image src={aiSpark.flyer.src} alt={aiSpark.flyer.alt} width={1840} height={2304} sizes="(max-width: 640px) 100vw, 650px"/></a><figcaption>{aiSpark.flyer.caption}</figcaption><a className="text-link" href={aiSpark.flyer.src} download>Download flyer ↓</a></figure></section>
    <section className="experience-page-section" id="gallery"><h2>Inside the event</h2><MediaCarousel label="AI Spark event photos" items={aiSparkPhotos}/></section>
    <section className="experience-page-section"><h2>The event website & coverage</h2><p>{aiSpark.websiteContribution}</p><TechStack tools={aiSpark.websiteTools} label="Website built with"/><ul className="sources event-sources">{aiSpark.sources.map(item => <li key={item.url}><a href={item.url}>{item.title} ↗</a></li>)}</ul></section>
    <section className="experience-page-section therat-insight"><p className="eyebrow">THE LESSON</p><h2>What made the hackathon work</h2><p>{aiSpark.lesson}</p></section>
    <div className="case-bottom"><Link className="text-link" href="/leadership/technology">← VP of Special AI Events</Link><Link className="text-link" href="/#volunteering">Back to volunteering →</Link></div>
  </article>;
}
