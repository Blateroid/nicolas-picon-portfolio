'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';

const animations = [
  { label: 'Idle', row: 0, frames: 6 },
  { label: 'Greeting', row: 3, frames: 4 },
  { label: 'Jump', row: 4, frames: 5 },
  { label: 'Thinking', row: 7, frames: 6 },
] as const;

export function BlueEmberStory() {
  const [selected, setSelected] = useState(0);
  const [playing, setPlaying] = useState(false);
  const animation = animations[selected];
  const style = {
    '--sprite-row': `${-animation.row * 208}px`,
    '--sprite-end': `${-animation.frames * 192}px`,
    '--sprite-steps': animation.frames,
  } as CSSProperties;

  return <article className="page-shell experience-page">
    <Link href="/projects" className="text-link">← All projects</Link>
    <header className="case-heading">
      <p className="eyebrow">PERSONAL PROJECT · AI-ASSISTED DESIGN</p>
      <h1>Blue Ember<br/><span className="serif">A little character for the workspace.</span></h1>
      <p className="case-intro">I created a custom animated mascot for ChatGPT: a blue ninja flame with purple and orange accents, angular glasses, and a controller bandana.</p>
    </header>
    <section className="mascot-preview" aria-labelledby="mascot-preview-heading">
      <div className="mascot-stage">
        <span key={selected} className="mascot-sprite" style={style} data-playing={playing} role="img" aria-label={`Blue Ember, a blue flame wearing glasses and a navy bandana. ${animation.label} pose.`}/>
      </div>
      <div className="mascot-controls">
        <h2 id="mascot-preview-heading">Meet Blue Ember</h2>
        <p>Explore a few of the mascot’s expressions and movements.</p>
        <label htmlFor="mascot-animation">Expression</label>
        <select id="mascot-animation" value={selected} onChange={event => setSelected(Number(event.target.value))}>
          {animations.map((item, index) => <option key={item.label} value={index}>{item.label}</option>)}
        </select>
        <button type="button" aria-pressed={playing} onClick={() => setPlaying(!playing)}>{playing ? 'Pause animation' : 'Play animation'}</button>
        <p className="mascot-motion-note">Animation starts on request. With reduced motion enabled, the preview stays still.</p>
      </div>
    </section>
    <section className="experience-page-section"><h2>Designing the character</h2><p>I shaped Blue Ember through AI-assisted design, then refined the character for its small workspace display. The goal was for Blue Ember to read as the same character across expressions and animation states.</p></section>
    <section className="experience-page-section"><h2>Refining the details</h2><p>After seeing the first version in motion, I asked for cleaner shapes, less pixelation, and smoother movements. I wanted to keep the character’s identity and keep its size consistent between animations.</p></section>
    <div className="case-bottom"><Link href="/projects" className="text-link">← Explore more projects</Link></div>
  </article>;
}
