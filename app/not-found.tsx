import Link from 'next/link';
export default function NotFound() { return <section className="page-shell page-heading"><p className="eyebrow">404 / PAGE NOT FOUND</p><h1>This page isn’t<br/><span className="serif">in the collection.</span></h1><p>The link may be outdated. Browse the available projects below.</p><Link className="button" href="/projects">Browse all projects →</Link></section>; }
