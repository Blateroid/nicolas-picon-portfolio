import Image from 'next/image';
import Link from 'next/link';
import { stickerBuddy } from '@/lib/sticker-buddy';
import { TechStack } from '@/components/tech-stack';
import { DiscoveryBlock } from '@/components/discovery-block';

export function StickerBuddyStory() {
  return <article className="page-shell experience-page sticker-buddy-page">
    <Link href="/projects" className="text-link">← All projects</Link>
    <header className="case-heading">
      <p className="eyebrow">PERSONAL PRODUCT · BUILT WITH LOVABLE</p>
      <h1>{stickerBuddy.title}<br/><span className="serif">{stickerBuddy.hook}</span></h1>
      <p className="case-intro">{stickerBuddy.introduction}</p>
      <TechStack tools={stickerBuddy.techStack}/>
    </header>
    <section className="sticker-buddy-preview" aria-labelledby="sticker-preview-heading">
      <figure>
        <Image src={stickerBuddy.image} alt={stickerBuddy.imageAlt} width={375} height={844} sizes="(max-width: 640px) 85vw, 330px" priority/>
        <figcaption>{stickerBuddy.imageCaption}</figcaption>
      </figure>
      <div>
        <p className="eyebrow">INSIDE THE APP</p>
        <h2 id="sticker-preview-heading">{stickerBuddy.previewHeading}</h2>
        <p>{stickerBuddy.previewDescription}</p>
        <a href={stickerBuddy.appUrl} target="_blank" rel="noopener noreferrer" className="button">Try Sticker Buddy <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
      </div>
    </section>
    <DiscoveryBlock id="discovery" heading="Who used it" discovery={stickerBuddy.discovery}/>
    {stickerBuddy.sections.map(section => <section key={section.title} className="experience-page-section">
      <h2>{section.title}</h2>
      {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
      {'images' in section && section.images?.map(image => <figure className="sticker-buddy-detail-image" key={image.src}>
        <Image src={image.src} alt={image.alt} width={375} height={844} sizes="(max-width: 640px) 85vw, 330px"/>
        <figcaption>{image.caption}</figcaption>
      </figure>)}
    </section>)}
    <div className="case-bottom"><Link href="/projects" className="text-link">← Explore more projects</Link></div>
  </article>;
}
