import Link from 'next/link';
import Image from 'next/image';
import { projectSummaries } from '@/lib/project-summaries';
import { focusAttr } from '@/lib/focus';

export function ProjectSummaryCards({ collection = false }: { collection?: boolean }) {
  return <div id="more-projects" className="compact-project-grid">{projectSummaries.filter(project => !('featuredLarge' in project) && (collection || ('homepage' in project && project.homepage))).map(project =>
    <Link href={'href' in project && project.href ? project.href : `/projects/${project.slug}`} className={`compact-project-card${'placeholder' in project ? ' is-placeholder' : ''}`} key={project.slug} data-focus={focusAttr(`/projects/${project.slug}`)}>
      <h3>{'mascot' in project && project.mascot ? <Image className="project-card-mascot" src={project.mascot.src} alt="" width={48} height={52}/> : project.slug === 'blue-ember' ? <span className="mascot-thumbnail" aria-hidden="true"/> : <span className="project-symbol" aria-hidden="true">{project.symbol}</span>}{project.title}</h3>{'attribution' in project && <span className="compact-project-stage">{project.attribution}</span>}{'stage' in project && <span className="compact-project-stage">{project.stage}</span>}<p>{project.summary}</p>
    </Link>
  )}</div>;
}
