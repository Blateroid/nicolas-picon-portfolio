import Image from 'next/image';
import Link from 'next/link';
import { Disclosure } from '@/components/portfolio';
import { education, experience, interests } from '@/lib/profile';
import { theratStory } from '@/lib/therat';
import { leadership } from '@/lib/leadership';
import { volunteering } from '@/lib/volunteering';

export function ProfileSections() {
  return <>
    <section id="experience" className="section profile-section" aria-labelledby="experience-heading">
      <p className="eyebrow">FROM ENGINEERING TO PRODUCT & VENTURES</p><h2 id="experience-heading">Experience</h2>
      <div className="experience-list">{experience.map(item => { const discovery = item.slug === 'therat' ? theratStory.discovery : 'discovery' in item ? item.discovery : undefined; return <Link href={`/experience/${item.slug}`} className="experience-item" key={item.slug}>
        <div className={`company-logo ${item.logo === 'runic.svg' ? 'runic-logo' : ''}`}><Image src={`/logos/${item.logo}`} alt={`${item.company} logo`} width={96} height={64} className="logo-image" unoptimized={item.logo.endsWith('.svg')}/></div>
        <div className="experience-copy"><div className="experience-top"><div><h3>{item.company}</h3><p className="role-name">{item.role}</p></div><span className="entry-date">{item.dates}</span></div><p className="entry-location">{item.location}</p>{discovery?.stat && <p className="discovery-chip">{discovery.stat} {discovery.statLabel}</p>}{'impact' in item && item.impact && <p className="discovery-chip">{item.impact.value} {item.impact.label}</p>}<p className="experience-summary">{item.summary}</p><span className="text-link experience-cta">View experience <span aria-hidden="true">→</span></span></div>
      </Link>; })}</div>
    </section>
    {leadership.length > 0 && <section id="leadership" className="section profile-section" aria-labelledby="leadership-heading"><p className="eyebrow">UW FOSTER · MBA LEADERSHIP · 2025–2026</p><h2 id="leadership-heading">Leadership</h2><div className="leadership-grid">{leadership.map(item => <Link className="leadership-card" href={`/leadership/${item.slug}`} key={item.slug}><span className="leadership-symbol" aria-hidden="true">{item.symbol}</span><div><p className="leadership-role">{item.role}</p><h3>{item.organization}</h3><p className="leadership-summary">{item.summary}</p><span className="text-link">View leadership <span aria-hidden="true">→</span></span></div></Link>)}</div></section>}
    {volunteering.length > 0 && <section id="volunteering" className="section profile-section" aria-labelledby="volunteering-heading"><p className="eyebrow">COMMUNITY & SERVICE</p><h2 id="volunteering-heading">Volunteering</h2><div className="leadership-grid">{volunteering.map(item => <Link className="leadership-card" href={item.url} key={item.slug}><span className="leadership-symbol" aria-hidden="true">{item.symbol}</span><div><p className="leadership-role">{item.role} · {item.dates}</p><h3>{item.organization}</h3><p className="leadership-summary">{item.summary}</p><span className="text-link">View volunteering <span aria-hidden="true">→</span></span></div></Link>)}</div></section>}
    <section id="education" className="section profile-section" aria-labelledby="education-heading"><p className="eyebrow">BUSINESS & ENGINEERING</p><h2 id="education-heading">Education</h2><div className="education-grid">{education.map(item => <article className="education-item" key={item.school}><div className="company-logo education-logo"><Image src={`/logos/${item.logo}`} alt={`${item.school} logo`} width={96} height={64} className="logo-image" unoptimized={item.logo.endsWith('.svg')}/></div><p className="entry-date">{item.date}</p><h3>{item.school}</h3><p className="degree-name">{item.degree}</p><p className="education-focus">{item.focus}</p><Disclosure title={`More from ${item.school}`}><ul className="profile-highlights">{item.details.map(text => <li key={text}>{text}</li>)}</ul></Disclosure>{item.url && <Link className="text-link" href={item.url}>Explore my MBA experience →</Link>}</article>)}</div></section>
    <section id="interests" className="section profile-section interests-section" aria-labelledby="interests-heading"><p className="eyebrow">OUTSIDE THE WORK</p><h2 id="interests-heading">Interests</h2><ul className="interest-list">{interests.map(item => <li key={item}>{item}</li>)}</ul></section>
  </>;
}
