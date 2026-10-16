import type { Metadata } from 'next';
import { ProjectSummaryCards } from '@/components/project-summaries';
import { ProjectCard, StickerBuddyCard } from '@/components/portfolio';
import { publicProjects } from '@/lib/projects';
import { FocusFilter } from '@/components/focus-filter';
export const metadata: Metadata = { title: 'All projects' };
export default function Projects() { return <div className="page-shell"><FocusFilter/><header className="page-heading"><p className="eyebrow">THE COLLECTION</p><h1>Different questions.<br/><span className="serif">One curious mind.</span></h1><p>Course projects, products I built for myself, and early concepts. Each one shows the problem, what I did, and what I learned.</p></header><h2 className="sr-only">Available projects</h2><div className="project-grid">{publicProjects.map((p,i) => <ProjectCard key={p.id} project={p} index={i}/>)}<StickerBuddyCard/></div><ProjectSummaryCards collection/><p className="focus-empty">No projects in this focus yet. <a className="text-link" href="/projects">See all projects</a></p></div>; }
