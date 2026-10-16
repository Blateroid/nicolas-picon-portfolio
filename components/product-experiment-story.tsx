import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@/components/portfolio';
import { TechStack } from '@/components/tech-stack';
import { DiscoveryBlock } from '@/components/discovery-block';
import type { ProductExperiment } from '@/lib/product-experiments';

export function ProductExperimentStory({ project }: { project: ProductExperiment }) {
  const projectImage = project.image && <Image src={project.image.src} alt={project.image.alt} width={project.image.width ?? 1265} height={project.image.height ?? 710} sizes="(max-width: 900px) 90vw, 820px" priority/>;
  return <article className="page-shell experience-page product-experiment-page">
    <Link href="/projects" className="text-link">← All projects</Link>
    <header className="case-heading">
      <p className="eyebrow">{project.stage}</p>
      {project.mascot && <Image className="project-mascot" src={project.mascot.src} alt={project.mascot.alt} width={128} height={128} priority/>}
      <h1>{project.title}<br/><span className="serif">{project.hook}</span></h1>
      <p className="case-intro">{project.introduction}</p>
      <TechStack tools={project.techStack} label={project.toolsLabel}/>
    </header>
    {project.image && <figure className="product-experiment-image">
      {project.image.fullSize ? <a href={project.image.src} target="_blank" rel="noopener noreferrer" aria-label="Open organization chart at full size (opens in a new tab)">{projectImage}</a> : projectImage}
      <figcaption>{project.image.caption}</figcaption>
    </figure>}
    {project.appUrl && project.linkLabel && <div className="product-experiment-link">
      <a href={project.appUrl} target="_blank" rel="noopener noreferrer" className="button">{project.linkLabel} <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      {project.linkNote && <p>{project.linkNote}</p>}
    </div>}
    {project.discovery && <DiscoveryBlock id="discovery" heading="Who I talked to" discovery={project.discovery}/>}
    {project.sections.map(section => <section className="experience-page-section" id={section.id} key={section.title}>
      <h2>{section.symbol && <><span aria-hidden="true">{section.symbol}</span>{' '}</>}{section.title}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
    </section>)}
    {project.skill && <section className="experience-page-section"><h2>The skill</h2><p>{project.skill.description}</p><a className="text-link" href={project.skill.href} download="SKILL.md">Download the public skill (Markdown) ↓</a><Disclosure title={project.skill.title}><pre className="skill-source">{project.skill.content}</pre></Disclosure></section>}
    <div className="case-bottom"><Link href="/projects" className="text-link">← Explore more projects</Link></div>
  </article>;
}
