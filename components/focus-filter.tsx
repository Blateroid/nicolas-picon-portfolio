'use client';
import { useEffect, useState } from 'react';
import { focusOptions, type Focus } from '@/lib/focus';

export function FocusFilter() {
  const [focus, setFocus] = useState<Focus | null>(null);
  const apply = (next: Focus | null, syncUrl: boolean) => {
    setFocus(next);
    if (next) document.documentElement.dataset.focus = next; else delete document.documentElement.dataset.focus;
    if (!syncUrl) return;
    const url = new URL(window.location.href);
    if (next) url.searchParams.set('focus', next); else url.searchParams.delete('focus');
    window.history.replaceState(window.history.state, '', `${url.pathname}${url.search}${url.hash}`);
  };
  useEffect(() => {
    const id = new URLSearchParams(window.location.search).get('focus');
    const match = focusOptions.find(option => option.id === id);
    if (match) apply(match.id, false);
    return () => { delete document.documentElement.dataset.focus; };
  }, []);
  const active = focusOptions.find(option => option.id === focus);
  return <div className="focus-filter-wrap">
    <div className="focus-filter" role="group" aria-label="Filter work by focus">
      <span className="focus-label">View:</span>
      <button type="button" className="focus-chip" aria-pressed={focus === null} onClick={() => apply(null, true)}>All</button>
      {focusOptions.map(option => <button type="button" className="focus-chip" key={option.id} aria-pressed={focus === option.id} onClick={() => apply(option.id, true)}>{option.label}</button>)}
    </div>
    <p className="sr-only" role="status">{active ? `Showing ${active.label} work.` : 'Showing all work.'}</p>
  </div>;
}
