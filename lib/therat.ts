import type { Discovery } from '@/lib/discovery';
export type TheraTFigure = { src: string; pdf: string; width: number; height: number; alt: string; caption: string; linkLabel: string };
export type TheraTDeliverable = { title: string; description: string; method: string; finding?: string; figure?: TheraTFigure };
export const theratStory = {
  hook: 'Could “bubble tea” change kidney care?',
  introduction: 'That was the idea that drew me to TheraT: a research-stage platform using tiny hydrogel beads to capture unwanted molecules in the gut. The bubble-tea analogy made the concept easy to picture. My job was to work out which patients it could serve, how it would fit into care, and what a viable business around it would look like.',
  origin: 'I joined Mari Winkler, TheraT’s principal investigator and a UW professor of civil and environmental engineering, through Nucleate with Paige DeOra, a recent bioengineering graduate and clinical coordinator at Rainier Clinical Research Center. During the Nucleate Activator PNW 2025 to 2026 cohort, I worked on customer discovery and the commercial strategy, and I worked with the team on the venture’s story.',
  consulting: 'The work grew from competition business plans and presentations into a deeper assessment of the market. In August 2026, I completed a paid consulting engagement with Mari’s lab, funded through the CoMotion Innovation Gap Fund award, to develop a market and reimbursement report, a market model, and a competitor tracker.',
  insight: 'In kidney care, the person who benefits, the person who prescribes, and the one who pays are rarely the same. A patient may want fewer pills, but a nephrologist needs evidence before prescribing, and a dialysis facility or insurer needs the economics to work. A product has to win all three. Now I ask who decides and who pays before I trust any market size.',
  workIntroduction: [
    'I built the commercial case in rounds. First, our team tested the idea with people who know biotech entrepreneurship and healthcare. We pitched TheraT at several competitions and created three posters for three of those presentations, and each one pushed hard on our assumptions.',
    'Then we went back to the drawing board with what we had learned and found subject matter experts to interview in the specific areas where we still had gaps. Everything came together in a market and reimbursement report, a financial model, and a competitive analysis to inform the decision on a spinout.',
  ],
  featuredPoster: { src: '/experience/therat/posters/dempsey-poster.png', pdf: '/experience/therat/posters/dempsey-poster.pdf', width: 2400, height: 2057, alt: 'TheraT poster for the Dempsey Startup Competition, covering the chronic kidney disease problem, the drinkable hydrogel-bead therapy, preclinical results in mouse models, go-to-market phases, the competitive landscape, the team, and advisors.', caption: 'Our poster for the Dempsey Startup Competition.', linkLabel: 'Open the full-size poster (PDF) ↗' },
  pitch: { url: '/experience/therat/full-pitch-deck.pdf', title: 'Full TheraT pitch deck', description: 'The complete 20-slide GAP Fund presentation. It covers the concept, research, market strategy, team, and proposed milestones. It reflects the team’s plan at the time of the application, so the research goals and projections are targets.' },
  recognitions: [
    { title: '$75,000 Innovation Gap Fund award', text: 'TheraT was in UW CoMotion’s Spring 2026 Innovation Gap Fund cohort. The Population Health Initiative co-funded the team award, and the team receives the funding as it meets its milestones.', sources: [{ label: 'CoMotion awardees · Spring 2026 cohort', url: 'https://comotion.uw.edu/funding-and-competitions/programs/comotion-innovation-gap-fund/awardees/' }, { label: 'Population Health funding announcement', url: 'https://www.washington.edu/populationhealth/2026/07/07/initiative-jointly-funds-spring-2026-innovation-gap-fund-project-with-comotion/' }], url: 'https://www.washington.edu/populationhealth/2026/07/07/initiative-jointly-funds-spring-2026-innovation-gap-fund-project-with-comotion/' },
    { title: '$10,000 HIC second-place prize', text: 'TheraT won the WRF Capital Second Place Prize at the 2026 Hollomon Health Innovation Challenge. I was on the team with Ming-Che Chung and Pei-Hsin Wang.', url: 'https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/entrepreneurship-competitions/uw-health-innovation-challenge/' },
    { title: 'Two Nucleate PNW awards', text: 'Our team won the People’s Choice Award and the Creative Destruction Lab Talent & Impact Award at the 2026 Demo Day, with Mari Winkler and Paige DeOra.' },
    { title: 'Dempsey Sweet 16', text: 'TheraT advanced to the Sweet 16 of the 2026 Dempsey Startup Competition.', url: 'https://uwbuerkcenter.medium.com/2026-dempsey-startup-competition-names-sweet-16-after-historic-investment-round-at-seattles-e21da13cddcd' },
    { title: 'Science & Technology Showcase', text: 'Our team received the Most Innovative Idea award at the UW showcase.' },
    { title: 'Life Science Northwest presentation', text: 'Our team presented a poster at the Life Science Northwest conference.' },
  ],
  discovery: {
    stat: '30+', statLabel: 'discovery interviews',
    who: 'I talked with patients, nephrologists, primary care physicians, renal dietitians, biotech and pharma executives, dialysis nurses, FDA regulatory employees, investors, and others.',
    method: 'I used those conversations to test the value proposition before relying on a market-size estimate. Later, I combined targeted interviews with published research to compare patients already on dialysis with those earlier in kidney care.',
    heardLabel: 'WHAT I FOUND', changedLabel: 'WHAT CHANGED',
    findings: [
      { heard: 'Pill burden came up again and again.', changed: 'Lower treatment burden became the center of the competitive argument. A different mechanism alone was not enough.' },
      { heard: 'Interest in a new format depended on physician confidence, supporting evidence, and affordability.', changed: 'We decided to pursue clinical trials to build the evidence and to pursue reimbursement, so TheraT could be accessible to patients and trusted by clinicians.' },
      { heard: 'Fluid restrictions make a full drinkable format hard for patients on dialysis.', changed: 'I recommended evaluating other ways to deliver the beads: spoon-fed or inside a capsule.' },
    ],
  } satisfies Discovery,
  deliverables: [
    { title: 'Two business plans', description: 'I created one business plan for the Hollomon Health Innovation Challenge and another for the Dempsey Startup Competition. Each laid out the patient problem, the platform concept, market entry, competition, intellectual property, financial assumptions, and the team’s development path.', method: 'For Hollomon, I explored a staged entry through wellness and nutraceutical (food-based health product) markets to support longer-term therapeutic development. For Dempsey, I developed a more focused first market in phosphate management for dialysis patients struggling with existing treatment. I built each argument around who would adopt the product, why they would switch, and what evidence and funding the next stage required.', finding: 'The two plans turned two different entry strategies into something I could examine. The later market work tested those assumptions further, especially delivery format, reimbursement, and whether a premium product was feasible.', figure: { src: '/experience/therat/posters/dempsey-one-pager.png', pdf: '/experience/therat/posters/dempsey-one-pager.pdf', width: 1545, height: 2000, alt: 'TheraT one-pager for the Dempsey Startup Competition with the problem, the bubble-tea therapy concept, the market opportunity, projected financials, and go-to-market phases.', caption: 'Our one-pager for the competitions. The financials are projections from that time.', linkLabel: 'Open the one-pager (PDF) ↗' } },
    { title: 'Market and reimbursement report', description: 'I wrote an assessment of the U.S. kidney-care market covering customer needs, patient segmentation, prescribing decisions, competitive positioning, and dialysis-industry economics.', method: 'I checked the earlier commercial assumptions against published research and stakeholder interviews. I looked at entry segments together with reimbursement and adoption barriers, so the recommendation accounts for patient need and for the incentives of prescribers and care providers.', finding: 'My analysis identified phosphate management in dialysis as a focused segment to evaluate. Fluid restrictions are a problem for a full drinkable format, so a low-volume bead or capsule format deserved consideration for that segment. Adoption would run through reimbursement and dialysis-facility economics, so the plan could not assume patients would pay directly.' },
    { title: 'Market model', description: 'I built an eight-tab spreadsheet linking patient segments and treatment populations with top-down (whole market first) and bottom-up (built from individual patients) market estimates, facility economics, and revenue sensitivities.', method: 'I separated the broad market from the reachable population, then varied net price and penetration to show how each assumption changed the opportunity. I also looked at payment transitions and potential savings scenarios from the care provider’s perspective.', finding: 'The market model let me question a headline market figure: which patients were actually reachable, what price the system could support, and how much adoption a revenue scenario required.' },
    { title: 'Competitor tracker', description: 'I organized drug-development and nutraceutical programs by stage, mechanism, target molecule, patient population, delivery format, and geography, with sources and update dates.', method: 'I compared alternatives by the problem they solved and the burden they placed on patients. That covered both technical differences and practical competition from established treatments and emerging lower-pill-burden products.', finding: 'A different mechanism alone was not enough. The commercial argument also needed evidence of a real improvement in treatment burden, tolerability, or outcomes, and an achievable development path.' },
    { title: 'Three posters', description: 'I created three posters to explain TheraT’s patient problem, research concept, and commercial opportunity in a format people could explore at a booth.', method: 'The posters had to connect the science with the business story. They needed to help an unfamiliar audience understand the idea, then give them enough structure to ask useful questions about the research and route to market.', figure: { src: '/experience/therat/posters/hollomon-poster.png', pdf: '/experience/therat/posters/hollomon-poster.pdf', width: 2400, height: 1920, alt: 'TheraT poster for the Hollomon Health Innovation Challenge, with a first phase in concierge medicine, wellness, and longevity markets, plus the therapy concept, preclinical results, competitive landscape, team, and advisors.', caption: 'Our poster for the Hollomon Health Innovation Challenge. The Dempsey poster appears above.', linkLabel: 'Open the full-size poster (PDF) ↗' } },
  ],
};
export const theratPhotos = [
  { src: '/experience/therat/nucleate-awards.jpg', alt: 'TheraT team holding award certificates at Nucleate PNW Demo Day with Mari Winkler, principal investigator, and Paige DeOra, a recent bioengineering graduate and clinical coordinator at Rainier Clinical Research Center.', caption: 'Nucleate PNW Demo Day 2026 · with Mari Winkler, TheraT’s principal investigator (PI), and Paige DeOra, a recent bioengineering graduate and clinical coordinator at Rainier Clinical Research Center.' },
  { src: '/experience/therat/nucleate-pitch.jpg', alt: 'TheraT team presenting on stage at Nucleate PNW Demo Day at the Allen Institute.', caption: 'Nucleate PNW Demo Day 2026 · presenting TheraT at the Allen Institute.' },
  { src: '/experience/therat/hic-exhibit.jpg', alt: 'Three TheraT team members behind their Health Innovation Challenge exhibit table.', caption: 'Hollomon Health Innovation Challenge · at the TheraT exhibit table.' },
  { src: '/experience/therat/hic-team-prize.jpg', alt: 'Nicolas, TheraT team members, and mentor Ivan Liachko celebrating with the second-place prize check.', caption: 'Hollomon Health Innovation Challenge · celebrating the $10,000 second-place prize with Ivan Liachko, one of our mentors.' },
  { src: '/experience/therat/hic-prize-portrait.jpg', alt: 'Nicolas holding TheraT’s second-place prize check at the team’s exhibit.', caption: 'Hollomon Health Innovation Challenge · at the TheraT exhibit with the team’s prize.' },
  { src: '/experience/therat/hic-award.png', alt: 'UW award graphic recognizing TheraT’s $10,000 second-place prize at the 2026 Hollomon Health Innovation Challenge.', caption: 'Hollomon Health Innovation Challenge · $10,000 WRF Capital Second Place Prize.' },
  { src: '/experience/therat/hic-team-booth.jpg', alt: 'Nicolas with Dr. Louis Chen, a recent UW PhD graduate, and MingChe Chung, a PhD student, at TheraT’s Dempsey Startup Competition exhibit.', caption: 'Dempsey Startup Competition · with Dr. Louis Chen, a recent UW PhD graduate, and MingChe Chung, a PhD student.' },
  { src: '/experience/therat/showcase-team.jpg', alt: 'Three TheraT team members standing beside their poster at UW’s Science & Technology Showcase.', caption: 'UW Science & Technology Showcase (STS) · presenting TheraT.' },
];
export const theratPitchSlides = [
  'Introduction · Transforming Kidney Health',
  'The kidney-care problem',
  'Toxin accumulation and disease burden',
  'The hydrogel-bead concept',
  'The scientific approach',
  'The proposed mechanism',
  'Intended patient outcomes',
  'Market opportunity and assumptions',
  'Preclinical phosphate research',
  'Competitive positioning',
  'Proposed regulatory strategy',
  'Preclinical research on other toxins',
  'Platform adaptability',
  'Proposed expansion strategy',
  'Team',
  'Advisory board',
  'Mentors',
  'Research and venture traction',
  'Proposed GAP Fund milestones',
  'Closing',
].map((caption, i) => ({ src: `/experience/therat/pitch-${i + 1}.png`, alt: `TheraT pitch slide ${i + 1}: ${caption}.`, caption: `Slide ${i + 1} · ${caption}.` }));
