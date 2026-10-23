import Image from 'next/image';
import Link from 'next/link';
import { AngelInvestingStory } from '@/components/angel-investing-story';
import { angelInvesting as story } from '@/lib/angel-investing';

export function AngelInvestingPage() {
  const structured = {
    '@context': 'https://schema.org', '@type': 'CreativeWork', name: story.title,
    description: story.summary, genre: story.category,
    author: { '@type': 'Person', name: 'Nicolas Picon' },
    about: { '@type': 'Organization', name: story.company },
  };
  return <article className="page-shell experience-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, '\\u003c') }}/>
    <Link className="text-link" href="/projects">← All projects</Link>
    <header className="case-heading">
      <div className="company-logo experience-page-logo"><Image src="/logos/uw.png" alt="University of Washington logo" width={96} height={64} className="logo-image"/></div>
      <p className="eyebrow">{story.category}</p>
      <p className="experience-page-company">{story.company}</p>
      <h1>{story.title}</h1>
      <p className="experience-role-detail">{story.role}</p>
      <p className="entry-location">{story.dates} · {story.location}</p>
      <p className="case-intro">{story.hook}</p>
    </header>
    <AngelInvestingStory/>
    <div className="case-bottom"><Link className="text-link" href="/projects">← All projects</Link><Link className="text-link" href="/education/foster-mba">My Foster MBA →</Link></div>
  </article>;
}
