import type { Metadata } from 'next';
import styles from './guide.module.css';
export const metadata: Metadata = {
  title: 'Writing sample · ATP Complete 2 activation guide',
  description: 'An illustrated system activation guide created by Nicolas Picon at Empire Bio Diagnostics.',
  robots: { index: false, follow: false, noarchive: true, googleBot: { index: false, follow: false, noimageindex: true } },
};
const pdf = '/samples/empire-activation-a83f9d2c/ATP_Complete_2_System_Activation.pdf';
export default function ActivationGuide() {
 return <article className={styles.page}>
   <header className={styles.introduction}>
     <p className={styles.kicker}>WRITING SAMPLE <span>USER GUIDE · OCTOBER 2023</span></p>
     <h1>ATP Complete 2<br/><em>System activation guide</em></h1>
     <p className={styles.context}>I created this guide at Empire Bio Diagnostics to help hospital users complete a setup process that spans a website and a handheld device. It walks them through account access, generating an activation code, registering the handheld, and logging in. I like to keep instructions simple and pair actions with screenshots so users can see where to go and what to expect. Images are a core part of how I write guides: words can be interpreted differently, and a clear visual helps remove that ambiguity. I’m sharing the complete document below so you can see the instructions and images together.</p>
     <p className={styles.byline}><strong>Nicolas Picon</strong><span>Empire Bio Diagnostics</span></p>
   </header>
   <section className={styles.document} aria-labelledby="document-title">
     <div className={styles.toolbar}><div><h2 id="document-title">System activation guide</h2><p>PDF · 4 pages · Illustrated instructions</p></div><div className={styles.actions}><a href={pdf} target="_blank" rel="noopener noreferrer">Open PDF ↗</a><a href={pdf} download>Download PDF ↓</a></div></div>
     <iframe className={styles.viewer} src="/samples/empire-activation-a83f9d2c/viewer.html" title="ATP Complete 2 System Activation guide by Nicolas Picon" />
     <p className={styles.fallback}>If the document does not display in your browser, <a href={pdf} target="_blank" rel="noopener noreferrer">open the PDF directly</a>.</p>
   </section>
 </article>;
}
