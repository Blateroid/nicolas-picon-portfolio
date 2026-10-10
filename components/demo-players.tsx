'use client';
import { useState } from 'react';
type Demo = { title: string; description: string; embed: string; url: string };
// Loads one prototype at a time so an auto-playing demo never competes with another.
export function DemoPlayers({ demos, project }: { demos: Demo[]; project: string }) {
  const [active, setActive] = useState<number | null>(null);
  if (!demos.length) return null;
  return <div className="pitch-demo-grid">{demos.map((demo, i) => <figure key={demo.embed}>
    {active === i
      ? <iframe src={demo.embed} title={`${project} ${demo.title.toLowerCase()} prototype`} allowFullScreen className="demo-frame"/>
      : <div className="demo-frame demo-poster"><p className="demo-poster-title">{demo.title}</p><button type="button" className="button" onClick={() => setActive(i)}>Start demo <span aria-hidden="true">▶</span></button><a className="text-link" href={demo.url} target="_blank" rel="noopener noreferrer">Open in Figma <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>}
    <figcaption><strong>{demo.title}.</strong> {demo.description}</figcaption>
  </figure>)}</div>;
}
