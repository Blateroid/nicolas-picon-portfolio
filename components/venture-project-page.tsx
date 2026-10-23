import Image from 'next/image';
import Link from 'next/link';
import { MediaCarousel } from '@/components/media-carousel';
import type { VentureProject } from '@/lib/venture-projects';

export function VentureProjectPage({ project }: { project: VentureProject }) {
  const linkedText = (text: string) => {
    const mentor = project.mentor;
    if (!mentor) return text;
    return text.split(mentor.name).flatMap((part, index) => index === 0 ? [part] : [<a className="text-link" href={mentor.href} key={index}>{mentor.name}</a>, part]);
  };
  const structured = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: project.title,
    description: project.summary, genre: project.category,
    author: { '@type': 'Person', name: 'Nicolas Picon' },
  };
  return <article className="page-shell experience-page venture-project-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\u003c') }}/>
    <Link href="/projects" className="text-link">← All projects</Link>
    <header className="case-heading">
      <p className="eyebrow">{project.category}</p>
      <div className="venture-project-title">
        <h1>{project.artwork ? <Image className="venture-project-icon" src={project.artwork.src} alt="" width={48} height={48} sizes="48px"/> : <span aria-hidden="true">{project.symbol} </span>}{project.title}</h1>
      </div>
      <p className="entry-location">{project.role} · {project.dates}</p>
      <p className="venture-project-summary">{project.hook}</p>
      {project.recognition && <p className="venture-project-recognition">{project.recognition}</p>}
    </header>
    {project.mockup && <figure className="venture-project-mockup">
      <a href={project.mockup.src} aria-label={`View ${project.title} prototype mockups at full size`}>
        <Image src={project.mockup.src} alt={project.mockup.alt} width={project.mockup.width} height={project.mockup.height} sizes="(max-width: 640px) 100vw, 824px" preload/>
      </a>
      <figcaption>{project.mockup.caption}</figcaption>
    </figure>}
    <p className="venture-project-introduction">{linkedText(project.introduction)}</p>
    {project.contextLinks && <div className="venture-project-context-links">{project.contextLinks.map(link => <a className="text-link" href={link.href} key={link.href}>{link.label}</a>)}</div>}
    {project.sections.map(section => <section className="experience-page-section" key={section.title}>
      <h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{linkedText(text)}</p>)}
    </section>)}
    {project.onePager && <section className="experience-page-section" id="one-pager">
      <h2>ShiftSpark at a glance</h2>
      <figure className="challenge-preview"><a href={project.onePager.pdf} aria-label="Open the ShiftSpark one-pager PDF">
        <Image src={project.onePager.src} alt={project.onePager.alt} width={project.onePager.width} height={project.onePager.height} sizes="(max-width: 640px) 100vw, 820px"/>
      </a><figcaption>{project.onePager.caption}</figcaption></figure>
      <p><a className="text-link" href={project.onePager.pdf}>Open the one-pager (PDF) ↗</a></p>
    </section>}
    <section className="experience-page-section" id="pitch-deck">
      <h2>{project.pitch.title}</h2><p>{project.pitch.description}</p>
      <MediaCarousel label={`${project.title} pitch deck`} items={project.pitch.slides} slides/>
      <p><a className="text-link" href={project.pitch.pdf}>Open the {project.title} deck (PDF) ↗</a></p>
    </section>
    <div className="case-bottom"><Link href="/projects" className="text-link">← All projects</Link><Link href="/education/foster-mba" className="text-link">My Foster MBA →</Link></div>
  </article>;
}
