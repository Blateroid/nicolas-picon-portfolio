import { empireStory as story } from '@/lib/empire';
import { MediaCarousel } from '@/components/media-carousel';
import styles from './empire-story.module.css';

function EmpireGallery({ chapter }: { chapter: string }) {
  const gallery = story.galleries.find(item => item.chapter === chapter);
  if (!gallery?.photos.length) return null;
  return <div className={styles.gallery}><h3>{gallery.title}</h3><MediaCarousel label={`Empire: ${gallery.title}`} items={gallery.photos}/></div>;
}

export function EmpireStory() {
  return <>
    <section className="experience-page-section"><h2>From the lab to the roadmap</h2><p>{story.introduction}</p><p>{story.chronology}</p>
      <nav className={styles.journey} aria-label="My journey at Empire">{story.chapters.map((chapter, index) => <a href={`#${chapter.id}`} key={chapter.id}><span className={styles.number} aria-hidden="true">0{index + 1}</span><span>{chapter.label}</span><span aria-hidden="true">↓</span></a>)}</nav>
    </section>
    {story.chapters.map((chapter, index) => <section className={`experience-page-section ${styles.chapter}`} id={chapter.id} key={chapter.id}>
      <p className="eyebrow">0{index + 1} / {chapter.label}</p><h2>{chapter.title}</h2>
      <ul className={styles.roles}>{chapter.roles.map(role => <li key={role.title}><h3>{role.title}</h3><p>{role.dates}</p></li>)}</ul>
      {chapter.paragraphs.map(text => <p key={text}>{text}</p>)}
      <EmpireGallery chapter={chapter.id}/>
      {chapter.id === 'product' && <figure className={styles.video}>
        <h3>{story.video.title}</h3>
        <video controls playsInline preload="none" poster={story.video.poster} aria-label={story.video.title} aria-describedby="empire-video-description">
          <source src={story.video.src} type="video/mp4"/>
          <a href={story.video.src}>Open the product demonstration video</a>
        </video>
        <figcaption id="empire-video-description">{story.video.description}</figcaption>
      </figure>}
    </section>)}
    <section className="experience-page-section" aria-label="Empire team photos"><EmpireGallery chapter="team"/></section>
    <section className={`experience-page-section ${styles.closing}`}><h2>{story.closing.title}</h2><p>{story.closing.text}</p></section>
  </>;
}
