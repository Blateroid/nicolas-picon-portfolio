import Image from 'next/image';
import { MediaCarousel } from '@/components/media-carousel';
import { gbaStory as story } from '@/lib/gba';
import styles from './gba-story.module.css';

function EventClips({ items, label }: { items: typeof story.videos.diwali; label: string }) {
  return <details className={`disclosure ${styles.clips}`}>
    <summary>Watch {label} clips <span className="toggle" aria-hidden="true"/></summary>
    <div className="detail-body">{items.map(item => <figure className={styles.video} key={item.src}>
      <h3>{item.title}</h3>
      <video controls playsInline preload="none" poster={item.poster} aria-label={item.title}>
        <source src={item.src} type="video/mp4"/>
        <a href={item.src}>Open {item.title.toLowerCase()} video</a>
      </video>
      <figcaption>{item.description}</figcaption>
    </figure>)}</div>
  </details>;
}

export function GbaStory() {
  return <>
    <section className="experience-page-section">
      <Image className={styles.logo} src="/leadership/gba/logo.webp" alt="Global Business Association" width={160} height={160}/>
      <h2>{story.hook}</h2>
      <p>{story.introduction}</p>
      <dl className={styles.highlights}>{story.highlights.map(item => <div key={item.label}><dt>{item.value}</dt><dd>{item.label}</dd></div>)}</dl>
    </section>
    {story.sections.map(section => <section className="experience-page-section" key={section.id} id={section.id}>
      <h2>{section.title}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {section.id === 'diwali' && <MediaCarousel label="Diwali celebration" items={story.photos.diwali}/>}
      {section.id === 'diwali' && <EventClips items={story.videos.diwali} label="Diwali"/>}
      {section.id === 'lunar-new-year' && <MediaCarousel label="Chinese New Year celebration" items={story.photos.lunar}/>}
      {section.id === 'latin-carnival' && <MediaCarousel label="Latin Carnival celebration" items={story.photos.latin}/>}
      {section.id === 'latin-carnival' && <EventClips items={story.videos.latin} label="Latin Carnival"/>}
    </section>)}
    <section className="experience-page-section" aria-labelledby="gba-artifacts-heading">
      <h2 id="gba-artifacts-heading">Promoting the club and its events</h2>
      <MediaCarousel label="GBA event promotions" items={story.artifacts} itemLabel="page"/>
    </section>
  </>;
}
