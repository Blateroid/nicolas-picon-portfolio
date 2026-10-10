import Image from 'next/image';
import Link from 'next/link';
import { TechStack } from '@/components/tech-stack';
import { DiscoveryBlock } from '@/components/discovery-block';
import type { ProductExperiment } from '@/lib/product-experiments';

export function ProductExperimentStory({ project }: { project: ProductExperiment }) {
  return <article className="page-shell experience-page product-experiment-page">
    <Link href="/projects" className="text-link">← All projects</Link>
    <header className="case-heading">
      <p className="eyebrow">{project.stage}</p>
      <h1>{project.title}<br/><span className="serif">{project.hook}</span></h1>
      <p className="case-intro">{project.introduction}</p>
      <TechStack tools={project.techStack}/>
    </header>
    {project.image && <figure className="product-experiment-image">
      <Image src={project.image.src} alt={project.image.alt} width={1265} height={710} sizes="(max-width: 900px) 90vw, 820px" priority/>
      <figcaption>{project.image.caption}</figcaption>
    </figure>}
    <div className="product-experiment-link">
      <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="button">{project.linkLabel} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      {project.linkNote && <p>{project.linkNote}</p>}
    </div>
    {project.discovery && <DiscoveryBlock id="discovery" heading="Who I talked to" discovery={project.discovery}/>}
    {project.sections.map(section => <section className="experience-page-section" key={section.title}>
      <h2>{section.title}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </section>)}
    <div className="case-bottom"><Link href="/projects" className="text-link">← Explore more projects</Link></div>
  </article>;
}
