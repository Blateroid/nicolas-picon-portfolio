import Image from 'next/image';
import Link from 'next/link';
import { MediaCarousel } from '@/components/media-carousel';
import { techStory, techArtifacts, sponsorPages, hackathonSubmissions } from '@/lib/ai-events';
export function TechStory() {
  return <>
    <section className="experience-page-section"><h2>Giving MBA students a way to build with AI</h2>{techStory.paragraphs.slice(0,3).map(text => <p key={text}>{text}</p>)}
      <MediaCarousel label="Husky Hackathon sponsorship proposal" items={sponsorPages} itemLabel="page"/>
      <div className="preview-downloads"><a className="text-link" href={techArtifacts[0].url} download>Download proposal · PDF ↓</a></div>
      {techStory.paragraphs.slice(3).map(text => <p key={text}>{text}</p>)}
      <figure className="challenge-preview"><a href={techArtifacts[1].url} aria-label="Open the MBA vibe-coding challenge brief"><Image src="/leadership/technology/vibesprint-onepager.png" alt="MBA vibe-coding challenge: build a tool you wish you had in your MBA, with idea starters and demo requirements." width={1200} height={1600} sizes="(max-width:640px) 100vw, 650px"/></a></figure>
      <div className="preview-downloads"><a className="text-link" href={techArtifacts[1].url} download>Download challenge · PDF ↓</a><a className="text-link" href={techArtifacts[2].url} download>Download session slides · PowerPoint ↓</a></div>
    </section>
    <section className="experience-page-section" id="submissions"><h2>What participants created</h2><p>Students built prototypes around the everyday problems they knew. Some were practical campus tools; others were more personal.</p><div className="participant-ideas">{hackathonSubmissions.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div></section>
    <section className="experience-page-section therat-insight"><h2>What I learned</h2><p>{techStory.lesson}</p></section>
    <aside className="experience-page-section event-link-card"><h2>Where this led</h2><p>{techStory.followOn}</p><Link className="text-link" href="/events/ai-spark">See my work at AI Spark →</Link></aside>
  </>;
}
