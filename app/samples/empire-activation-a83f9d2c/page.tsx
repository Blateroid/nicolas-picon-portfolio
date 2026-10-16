import type { Metadata } from 'next';
import styles from './guide.module.css';
export const metadata: Metadata = {
  title: 'Writing sample · ATP Complete 2 activation guide',
  description: 'An illustrated system activation guide created by Nicolas Picon at Empire Bio Diagnostics.',
  robots: { index: false, follow: false, noarchive: true, googleBot: { index: false, follow: false, noimageindex: true } },
};
const pdf = '/samples/empire-activation-a83f9d2c/ATP_Complete_2_Original_Guide.pdf';
export default function ActivationGuide() {
 return <article className={styles.page}>
   <header className={styles.introduction}>
     <p className={styles.kicker}>WRITING SAMPLE <span>USER GUIDE · OCTOBER 2023</span></p>
     <h1>ATP Complete 2<br/><em>System activation guide</em></h1>
     <p className={styles.context}>I created this activation guide at Empire Bio Diagnostics to help hospital teams set up the ATP Complete 2 system. Users begin on the website, generate an activation code, and then switch to the handheld to register the device and log in.</p>
     <p className={styles.context}>My approach is to keep instructions short and make the next action clear. I use annotated screenshots to show users where to click, what to enter, and which screen to expect next. Pairing words with visuals helps remove ambiguity, especially when a workflow moves between software and a physical device.</p>
     <p className={styles.byline}><strong>Nicolas Picon</strong><span>Empire Bio Diagnostics</span></p>
   </header>
   <section className={styles.document} aria-labelledby="document-title">
     <div className={styles.toolbar}><div><h2 id="document-title">System activation guide</h2><p>PDF · 4 pages · Illustrated instructions</p></div></div>
     <iframe className={styles.viewer} src="/samples/empire-activation-a83f9d2c/viewer.html" title="ATP Complete 2 System Activation guide by Nicolas Picon" />
     <p className={styles.fallback}>If the document does not display in your browser, <a href={pdf} target="_blank" rel="noopener noreferrer">open the PDF directly</a>.</p>
   </section>
 </article>;
}
