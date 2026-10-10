import Image from 'next/image';
import { MediaCarousel } from '@/components/media-carousel';
import { DiscoveryBlock } from '@/components/discovery-block';
import { Disclosure } from '@/components/portfolio';
import { theratStory, theratPhotos, theratPitchSlides, type TheraTFigure, type TheraTDeliverable } from '@/lib/therat';
function PosterFigure({ figure }: { figure: TheraTFigure }) {
  return <figure className="challenge-preview"><a href={figure.src}><Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} sizes="(max-width: 640px) 100vw, 820px"/></a><figcaption>{figure.caption}</figcaption><a className="text-link" href={figure.pdf}>{figure.linkLabel}</a></figure>;
}
export function TheraTStory() {
  return <>
    <section className="experience-page-section"><h2>Team milestones & recognition</h2><p>We presented TheraT at pitch competitions and other events throughout 2026.</p><div className="recognition-grid">{theratStory.recognitions.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p>{'sources' in item && item.sources ? item.sources.map(source => <p key={source.url}><a className="text-link" href={source.url}>{source.label} ↗</a></p>) : 'url' in item && <a className="text-link" href={item.url}>Learn more ↗</a>}</article>)}</div><p className="certificate-link"><a className="text-link" href="/experience/therat/nucleate-certificate.pdf">View my Nucleate Activator certificate ↗</a></p></section>
    <section className="experience-page-section" id="gallery"><h2>Along the way</h2><MediaCarousel label="TheraT event photos" items={theratPhotos}/></section>
    <section className="experience-page-section"><h2>From research to venture development</h2><p>{theratStory.origin}</p><p>{theratStory.consulting}</p></section>
    <section className="experience-page-section" id="pitch"><h2>The full pitch</h2><p>{theratStory.pitch.description}</p><p><a className="text-link" href={theratStory.pitch.url}>Open the full pitch deck ↗</a> · <a className="text-link" href={theratStory.pitch.url} download>Download PDF ↓</a></p><MediaCarousel label="TheraT full pitch deck" items={theratPitchSlides} slides/></section>
    <DiscoveryBlock id="discovery" heading="Who I talked to" discovery={theratStory.discovery}/>
    <section className="experience-page-section" id="deliverables"><h2>Building the commercial case</h2>{theratStory.workIntroduction.map(text => <p key={text}>{text}</p>)}<PosterFigure figure={theratStory.featuredPoster}/><h3 style={{ marginTop: 40 }}>The work in detail</h3>{(theratStory.deliverables as TheraTDeliverable[]).map(item => <Disclosure key={item.title} title={item.title}><p>{item.description}</p><p>{item.method}</p>{item.finding && <p>{item.finding}</p>}{item.figure && <PosterFigure figure={item.figure}/>}</Disclosure>)}</section>
    <section className="experience-page-section therat-insight"><p className="eyebrow">THE LESSON</p><h2>Who benefits, who prescribes, who pays.</h2><p>{theratStory.insight}</p></section>
  </>;
}
