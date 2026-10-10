import Link from 'next/link';
import { projectSummaries } from '@/lib/project-summaries';

export function ProjectSummaryCards({ collection = false }: { collection?: boolean }) {
  return <div id="more-projects" className="compact-project-grid">{projectSummaries.filter(project => collection || !('collectionOnly' in project && project.collectionOnly)).map(project =>
    <Link href={`/projects/${project.slug}`} className="compact-project-card" key={project.slug}>
      <h3>{project.slug === 'blue-ember' ? <span className="mascot-thumbnail" aria-hidden="true"/> : <span className="project-symbol" aria-hidden="true">{project.symbol}</span>}{project.title}</h3>{'stage' in project && <span className="compact-project-stage">{project.stage}</span>}<p>{project.summary}</p>
    </Link>
  )}</div>;
}
