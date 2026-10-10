import type { Discovery } from '@/lib/discovery';

export function DiscoveryBlock({ discovery, id, eyebrow, heading }: { discovery: Discovery; id?: string; eyebrow?: string; heading: string }) {
  const { stat, statLabel, who, method, extraStats, persona, quotes, findings, outcome, heardLabel, changedLabel } = discovery;
  const headingId = `${id ?? 'discovery'}-heading`;
  return <section className="discovery-block experience-page-section" id={id} aria-labelledby={headingId}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 id={headingId}>{heading}</h2>
    {(stat || extraStats?.length) && <div className="discovery-stats">{stat && <p className="discovery-stat"><span className="discovery-number">{stat}</span> <span>{statLabel}</span></p>}{extraStats?.map(item => <p className="discovery-stat" key={item.label}><span className="discovery-number">{item.stat}</span> <span>{item.label}</span></p>)}</div>}
    <p>{who}</p>{method && <p>{method}</p>}
    {persona && <aside className="discovery-persona"><p className="small-label">PERSONA</p><h3>{persona.name}</h3><blockquote>“{persona.quote}”</blockquote><ul>{persona.traits.map(trait => <li key={trait}>{trait}</li>)}</ul><p className="discovery-note">{persona.note}</p></aside>}
    {!!quotes?.length && <div className="discovery-quotes">{quotes.map(quote => <figure key={quote.text}><blockquote>“{quote.text}”</blockquote><figcaption>{quote.source}</figcaption></figure>)}</div>}
    {findings.length > 0 && <ol className="discovery-findings">{findings.map(item => <li key={item.heard}><div><p className="small-label">{heardLabel ?? 'WHAT WE HEARD'}</p><p>{item.heard}</p></div><div><p className="small-label">{changedLabel ?? 'WHAT WE CHANGED'}</p><p>{item.changed}</p></div></li>)}</ol>}
    {outcome && <p className="discovery-outcome">{outcome}</p>}
  </section>;
}
