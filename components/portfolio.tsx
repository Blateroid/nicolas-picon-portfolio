import Link from 'next/link';
import Image from 'next/image';
import type { Project } from '@/lib/projects';
import { focusAttr } from '@/lib/focus';
import { stickerBuddy } from '@/lib/sticker-buddy';

export function Disclosure({ title, children }: { title: string; children: React.ReactNode }) {
  return <details className="disclosure"><summary>{title}<span aria-hidden="true" className="toggle" /></summary><div className="detail-body">{children}</div></details>;
}

export function Avatar() {
  return <figure className="avatar portrait"><Image src="/images/nicolas-picon-edited.png" alt="Nicolas Picon in a navy suit in front of a staircase." width={1024} height={1535} sizes="(max-width: 640px) 200px, 280px" priority /></figure>;
}

export function ProjectVisual({ project }: { project: Project }) {
  if (project.cover) return <div className="project-visual source-visual" aria-hidden="true"><Image src={project.cover} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="pitch-cover"/><span className="visual-note source-note">PITCH DECK · DESIGN MOCKUPS</span></div>;
  return <div className={`project-visual ${project.id === 'lily' ? 'lily' : 'therat'}`} aria-hidden="true">
    <span className="visual-note">CONCEPT DIAGRAM</span>
    {project.id === 'lily' ? <div className="lily-diagram"><div className="orbit"/><span className="node family">Family</span><span className="node self">Your choice</span><span className="node privacy">Privacy</span><span className="optional">Support, on your terms.</span></div> : <div className="therat-diagram"><span className="bead b1"/><span className="bead b2"/><span className="bead b3"/><div className="research-line">Research <span>→</span> Opportunity</div></div>}
  </div>;
}

export function ProjectCard({ project, index, showTakeaway = true }: { project: Project; index: number; showTakeaway?: boolean }) {
  return <article className={`project-card ${project.id === 'lily' ? 'heylily-theme' : ''}`} data-focus={focusAttr(`/projects/${project.slug}`)}><Link className="visual-link" href={`/projects/${project.slug}`} aria-label={`Explore ${project.title}`}><ProjectVisual project={project}/></Link><div className="card-body"><div className="eyebrow">0{index + 1} / {project.category}</div><h3><Link href={`/projects/${project.slug}`}>{project.title}<span aria-hidden="true"> ↗</span></Link></h3><p>{project.summary}</p>{project.discovery && <p className="discovery-chip">{project.discovery.stat} {project.discovery.statLabel}</p>}<p className="status">{project.status}</p>{showTakeaway && <div className="takeaway"><span className="small-label">KEY TAKEAWAY</span><p>{project.takeaway}</p></div>}<Disclosure title={`My contribution to ${project.title}`}><p>{project.role}.</p><p>{project.team}.</p></Disclosure><Link className="text-link" href={`/projects/${project.slug}`}>Explore project <span aria-hidden="true">→</span></Link></div></article>;
}

export function AboutContent({ full = false }: { full?: boolean }) {
  return <><p className="about-copy">I’m Nicolas Picon, a UW Foster MBA graduate with an engineering degree and a focus on product. I talk to users, write product requirements, and test whether a new idea can become a business.</p><Disclosure title="More about how I approach the work"><p>The decisions I find most interesting sit between what people need, what the technology can do, and what a business can sustain. I write my assumptions down early so the team can test them.</p><p>On team projects, I separate what I did from what the team did.</p></Disclosure>{full ? <Disclosure title="Outside work"><p>I play soccer and beach volleyball, competed in esports in college, and look after dogs through Rover. I also like travel, food, and board games.</p></Disclosure> : <Link className="text-link" href="/about">More about me <span aria-hidden="true">→</span></Link>}</>;
}

export function FeaturedCard({ href, title, eyebrow, summary, status, image, chip, focus, device }: { href: string; title: string; eyebrow: string; summary: string; status: string; image: string; chip?: string; focus?: string; device?: { width: number; height: number } }) {
  return <article className="project-card featured-card" data-focus={focus}><Link className="visual-link" href={href} aria-label={`Explore ${title}`}>{device ? <div className="project-visual featured-visual is-device" aria-hidden="true"><div className="device-peek"><Image src={image} alt="" width={device.width} height={device.height} sizes="220px"/></div></div> : <div className="project-visual featured-visual" aria-hidden="true"><Image src={image} alt="" fill sizes="(max-width: 640px) 100vw, 50vw" className="pitch-cover"/></div>}</Link><div className="card-body"><div className="eyebrow">{eyebrow}</div><h3><Link href={href}>{title}<span aria-hidden="true"> ↗</span></Link></h3><p>{summary}</p>{chip && <p className="discovery-chip">{chip}</p>}<p className="status">{status}</p><Link className="text-link" href={href}>Explore project <span aria-hidden="true">→</span></Link></div></article>;
}

export function StickerBuddyCard() {
  return <FeaturedCard href={`/projects/${stickerBuddy.slug}`} title={stickerBuddy.title} eyebrow="02 / Personal product" summary={stickerBuddy.summary} status="Built and shipped · Used by 28 collectors" image={stickerBuddy.image} chip={stickerBuddy.discovery.stat ? `${stickerBuddy.discovery.stat} ${stickerBuddy.discovery.statLabel}` : undefined} focus={focusAttr(`/projects/${stickerBuddy.slug}`)} device={{ width: 375, height: 812 }}/>;
}
