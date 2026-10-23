import Image from 'next/image';
import { Disclosure } from '@/components/portfolio';
import { angelInvesting as story } from '@/lib/angel-investing';
import styles from './angel-investing-story.module.css';

export function AngelInvestingStory() {
  return <>
    <dl className={styles.facts} aria-label="Practicum at a glance">
      <div><dt>2025–2026</dt><dd>Second-year MBA practicum</dd></div>
      <div><dt>~30</dt><dd>Companies reviewed in class</dd></div>
      <div><dt>2</dt><dd>Due diligence efforts led</dd></div>
      <div><dt>$25K</dt><dd>Potential university investment</dd></div>
    </dl>
    <section className="experience-page-section"><h2>A class fund with a real decision</h2>
      {story.structure.map(text => <p key={text}>{text}</p>)}
      <p>Our professor was <a className={styles.inlineLink} href={story.instructor.linkedin}>{story.instructor.name}</a>, {story.instructor.title.split(' at ')[0]} at <a className={styles.inlineLink} href={story.instructor.firm}>First Row Partners</a>.</p>
      <p>{story.learning}</p>
    </section>
    <section className="experience-page-section"><h2>From a pitch to an investment thesis</h2><p>{story.processIntro}</p>
      <ol className={styles.process}>{story.process.map(item => <li key={item.title}><h3>{item.title}</h3><p>{item.text}</p></li>)}</ol>
    </section>
    <section className="experience-page-section"><h2>The two companies I led diligence on</h2>
      {story.companies.map(company => <article className={styles.company} key={company.name}>
        <a className={styles.brandLink} href={company.url}><span className={`${styles.logo} ${company.dark ? styles.darkLogo : ''}`}><Image src={company.logo} alt={company.name === 'OneCourt' ? '' : `${company.name} logo`} width={company.width} height={company.height}/></span><h3>{company.name === 'OneCourt' ? <span className="sr-only">{company.name}</span> : company.name} <span aria-hidden="true">↗</span></h3></a>
        <p className={styles.description}>{company.description}</p>{company.paragraphs.map(text => <p key={text}>{text}</p>)}
      </article>)}
    </section>
    <section className="experience-page-section"><h2>Learning alongside angel investors</h2><p>{story.networksIntro}</p><ul className={styles.networks}>{story.networks.map(network => <li key={network.name}><a className={styles.brandLink} href={network.url}><span className={styles.logo}><Image src={network.logo} alt={`${network.name} logo`} width={network.width} height={network.height} unoptimized={network.logo.endsWith('.svg')}/></span><span>{network.name} <span aria-hidden="true">↗</span></span></a></li>)}</ul></section>
    <section className={`experience-page-section ${styles.outcome}`}><p className="eyebrow">THE DECISION</p><h2>We chose to preserve the capital.</h2>{story.outcome.map(text => <p key={text}>{text}</p>)}</section>
    <section className={`experience-page-section ${styles.sources}`} aria-label="Program sources">{story.sources.map(source => <p key={source.url}><a className="text-link" href={source.url}>{source.label} ↗</a></p>)}</section>
    <section className="experience-page-section"><h2>Learning through cases</h2><p>{story.casesIntro}</p>
      {story.cases.map(item => <Disclosure key={item.title} title={item.title}><p>{item.text}</p></Disclosure>)}
      <div className={styles.marketplace}><h3>{story.marketplace.title}</h3><p>{story.marketplace.description}</p>
        <Disclosure title="See my Rover marketplace analysis"><figure className={styles.preview}><a href={story.marketplace.url}><Image src={story.marketplace.preview} alt="Nicolas’s Rover marketplace diagrams: a happiness loop built on care quality and trust, and a growth loop built on promotion and referrals." width={story.marketplace.width} height={story.marketplace.height} sizes="(max-width: 640px) 100vw, 560px"/></a><figcaption>My marketplace loops exercise for the practicum.</figcaption></figure><a className="text-link" href={story.marketplace.url}>Read my two-page Rover analysis (PDF) ↗</a></Disclosure>
      </div>
    </section>
  </>;
}
