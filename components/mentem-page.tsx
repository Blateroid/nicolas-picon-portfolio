import Image from 'next/image';
import Link from 'next/link';
import { DiscoveryBlock } from '@/components/discovery-block';
import { MediaCarousel } from '@/components/media-carousel';
import { Disclosure } from '@/components/portfolio';
import { mentem as story } from '@/lib/mentem';

export function MentemPage() {
  const structured = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: story.title,
    description: story.summary, genre: story.category,
    author: { '@type': 'Person', name: 'Nicolas Picon' },
  };
  return <article className="page-shell experience-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\u003c') }}/>
    <Link className="text-link" href="/projects">← All projects</Link>
    <header className="case-heading">
      <div className="company-logo experience-page-logo"><Image src="/logos/mentem.png" alt="Mentem.Lab logo" width={96} height={64} className="logo-image"/></div>
      <p className="eyebrow">{story.category}</p>
      <h1><span aria-hidden="true">{story.symbol} </span>{story.title}</h1>
      <p className="experience-role-detail">{story.summary}</p>
      <p className="entry-location">{story.role} · {story.dates} · {story.location}</p>
      <p className="case-intro">{story.hook}</p>
      <p>{story.introduction}</p>
      <a className="text-link" href={story.linkedin}>Mentem.Lab on LinkedIn ↗</a>
    </header>
    {story.sections.map(section => <section className="experience-page-section" key={section.title}>
      <h2>{section.title}</h2>{section.paragraphs.map(text => <p key={text}>{text}</p>)}
    </section>)}
    <section className="experience-page-section"><h2>{story.workflow.title}</h2>
      <ol className="profile-highlights">{story.workflow.steps.map(step => <li key={step.title}><strong>{step.title}.</strong> {step.description}</li>)}</ol>
    </section>
    <section className="experience-page-section" id="ai-ignite-pitch"><h2>{story.pitch.title}</h2>
      <p>{story.pitch.description}</p>
      <MediaCarousel label="Mentem.Lab AI Ignite 2025 pitch" items={story.pitch.slides} slides/>
      <p><a className="text-link" href={story.pitch.pdf}>Open the full AI Ignite deck (PDF) ↗</a></p>
    </section>
    <section className="experience-page-section">
      <Disclosure title="A closer look at customer discovery">
        <DiscoveryBlock id="mentem-discovery" heading="The workflow behind the pivot" discovery={story.discovery}/>
      </Disclosure>
    </section>
    <section className="experience-page-section"><h2>Taking the idea into competitions</h2>
      <MediaCarousel label="Mentem.Lab competition photos" items={story.photos}/>
    </section>
    <section className="experience-page-section"><h2>{story.closing.title}</h2>
      {story.closing.paragraphs.map(text => <p key={text}>{text}</p>)}
    </section>
    <div className="case-bottom"><Link className="text-link" href="/projects">← All projects</Link><Link className="text-link" href="/education/foster-mba">My Foster MBA →</Link></div>
  </article>;
}
