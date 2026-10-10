import type { Metadata } from 'next';
import { ProjectSummaryCards } from '@/components/project-summaries';
import { ProjectCard } from '@/components/portfolio';
import { publicProjects } from '@/lib/projects';
export const metadata: Metadata = { title: 'All projects' };
export default function Projects() { return <div className="page-shell"><header className="page-heading"><p className="eyebrow">THE COLLECTION</p><h1>Different questions.<br/><span className="serif">One curious mind.</span></h1><p>Course projects, products I built for myself, and early concepts. Each one shows the problem, what I did, and what I learned.</p></header><h2 className="sr-only">Available projects</h2>{publicProjects.length ? <div className="project-grid">{publicProjects.map((p,i) => <ProjectCard key={p.id} project={p} index={i}/>)}</div> : <p>Project summaries are being prepared. Please connect on LinkedIn to discuss my work.</p>}<ProjectSummaryCards collection/></div>; }
