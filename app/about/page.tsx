import type { Metadata } from 'next';
import { AboutContent, Avatar } from '@/components/portfolio';
import { contactEmail } from '@/lib/profile';
export const metadata: Metadata = { title: 'About' };
export default function About() { return <section className="page-shell about-page"><div><p className="eyebrow">A LITTLE ABOUT ME</p><h1>Hi, I’m Nicolas.<br/><span className="serif">Glad you’re here.</span></h1><AboutContent full/><a className="button" href="https://www.linkedin.com/in/npicon">Let’s connect on LinkedIn <span aria-hidden="true">↗</span></a><p>Or email me at <a className="text-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p></div><Avatar/></section>; }
