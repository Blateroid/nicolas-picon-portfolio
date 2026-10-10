'use client';
import Image from 'next/image';
import { useRef, useState } from 'react';
type Media = { src: string; alt: string; caption: string };
export function MediaCarousel({ label, items, slides = false, itemLabel = slides ? 'slide' : 'photo' }: { label: string; items: Media[]; slides?: boolean; itemLabel?: 'slide' | 'photo' | 'page' }) {
  const track = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  if (!items.length) return null;
  function move(step: number) {
    const next = Math.max(0, Math.min(items.length - 1, index + step));
    track.current?.scrollTo({ left: next * track.current.clientWidth, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <div className={`media-carousel ${slides ? 'slide-carousel' : ''}`} role="region" aria-label={label}>
    <div className="carousel-track" ref={track} tabIndex={0} aria-label={`${label}: scroll horizontally to browse`} onScroll={() => { const el = track.current; if (el) setIndex(Math.round(el.scrollLeft / el.clientWidth)); }}>
      {items.map((item, i) => <figure className="carousel-item" key={item.src}><Image src={item.src} alt={item.alt} width={1600} height={1200} sizes="(max-width: 640px) 100vw, 824px" priority={i === 0}/><figcaption>{item.caption}</figcaption></figure>)}
    </div>
    <div className="carousel-controls"><button onClick={() => move(-1)} disabled={index === 0} aria-label={`Previous ${itemLabel} in ${label}`}>← Previous</button><span aria-live="polite">{index + 1} / {items.length}</span><button onClick={() => move(1)} disabled={index === items.length - 1} aria-label={`Next ${itemLabel} in ${label}`}>Next →</button></div>
  </div>;
}
