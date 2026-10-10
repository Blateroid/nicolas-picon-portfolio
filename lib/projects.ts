import type { Discovery } from '@/lib/discovery';

export type Project = {
  id: string; slug: string; title: string; subtitle: string; category: string;
  status: string; role: string; team: string; summary: string; takeaway: string;
  problem: string | string[]; decision: string; outcome: string; skills: string[];
  featured: boolean; publicSummary: boolean; updated: string;
  takeawayDetails?: string[];
  discovery?: Discovery;
  lesson?: string;
  press?: { publisher: string; headline: string; date: string; url: string };
  cover?: string;
  pitchEmbed?: string;
  pitchDemoUrl?: string;
  demos?: { title: string; description: string; embed: string; url: string }[];
  designTools?: { name: string; logo: string }[];
  problemSources?: { label: string; url: string }[];
  photos?: { src: string; alt: string; caption: string }[];
  gallery?: { src: string; alt: string; caption: string }[];
  artifacts?: { label: string; href: string; description: string }[];
  details: { title: string; paragraphs: string[]; table?: { headers: string[]; rows: string[][]; caption: string } }[];
  sources: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: 'lily', slug: 'hey-lily', title: 'HeyLily', subtitle: 'Protection that preserves independence.',
    category: 'Product & venture strategy', status: 'Course project · Android app & venture concept',
    role: 'Product requirements, financial modeling & fundraising strategy',
    team: '11 members: 4 designers, 4 engineers & 3 business students',
    summary: 'An AI assistant that screens scam calls for older adults. Our team built an Android app and a plan to reach users through senior-care organizations.',
    takeaway: 'A feature intended to reassure can feel intrusive.',
    takeawayDetails: ['In user research, older adults raised privacy concerns about bringing family into their calls, so we made Trusted Circle optional.'],
    lesson: 'Trusting a family member doesn’t give a product permission to involve them. A safety product has to let users decide how much help they want.',
    problem: ['In 2025, Americans 60 and older filed 201,266 complaints with the FBI’s Internet Crime Complaint Center and reported $7.7 billion in losses, up 59% from the year before. AI is making these scams easier to run. Voice cloning can mimic the sound of a loved one in distress, and complaints involving AI accounted for more than $893 million in losses across all ages that year.', 'Older adults are a frequent target. The FBI notes that they tend to be trusting and polite, and often have savings, own a home, and have good credit. Scam calls turn that trust against them by creating urgency and impersonating someone familiar, like a grandchild, a bank, or a government agency.', 'Our team explored how AI could help older adults spot a suspicious call and decide what to do next while staying in control of their own phone.'],
    problemSources: [{ label: 'FBI 2025 Internet Crime Report', url: 'https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf' }, { label: 'FBI on why seniors are targeted', url: 'https://www.fbi.gov/contact-us/field-offices/saltlakecity/news/press-releases/fbi-warns-of-increased-reports-of-fraud-targeting-seniors-in-montana' }],
    decision: 'Trusted Circle, our family-support feature, started as a core part of HeyLily. We assumed that involving a family member would make users feel safer. User research with older adults challenged that assumption: they raised privacy concerns about family involvement. We made the feature optional, so the person being protected decides whether a trusted contact gets involved.',
    outcome: 'Our 11-person team built an Android app and a Figma prototype. We also wrote a go-to-market plan that reaches users through senior-care organizations (a B2B2C model, business to business to consumer), a pricing strategy, a PRFAQ (Amazon’s press release and FAQ format), a financial model, and the final pitch. We presented at Pioneer Square Labs, and GeekWire included HeyLily in its coverage of the UW student pitches.',
    skills: ['User research', 'Product requirements', 'Financial modeling', 'Fundraising strategy'], featured: true, publicSummary: true, updated: '2026-10-06',
    press: { publisher: 'GeekWire', headline: 'Here’s the pitch: UW students get in the room with key investors to share their AI startup ideas', date: 'March 12, 2026', url: 'https://www.geekwire.com/2026/heres-the-pitch-uw-students-get-in-the-room-with-key-investors-to-share-their-ai-startup-ideas/' },
    cover: '/projects/heylily/pitch-cover.png',
    pitchEmbed: 'https://embed.figma.com/deck/mmnamUYxRQnGip7Zax5vio/HeyLily-Pitch---Final?node-id=5197-306&embed-host=nicolas-picon-portfolio&footer=false&theme=light',
    pitchDemoUrl: 'https://www.figma.com/deck/mmnamUYxRQnGip7Zax5vio/HeyLily-Pitch---Final?node-id=5193-333',
    demos: [
      { title: 'Onboarding', description: 'The four-step setup a new user goes through.', embed: 'https://embed.figma.com/proto/8GzKNDY1lA0smktBDsyZNP/HeyLily-Mockups?node-id=3044-1000&starting-point-node-id=3044%3A1000&scaling=scale-down&content-scaling=fixed&hide-ui=1&embed-host=nicolas-picon-portfolio', url: 'https://www.figma.com/proto/8GzKNDY1lA0smktBDsyZNP/HeyLily-Mockups?node-id=3044-1000&starting-point-node-id=3044%3A1000' },
      { title: 'Screening', description: 'Lily screens an unknown caller and shows a scam-risk rating before you answer.', embed: 'https://embed.figma.com/proto/8GzKNDY1lA0smktBDsyZNP/HeyLily-Mockups?node-id=3058-1873&starting-point-node-id=3058%3A1873&scaling=scale-down&content-scaling=fixed&hide-ui=1&embed-host=nicolas-picon-portfolio', url: 'https://www.figma.com/proto/8GzKNDY1lA0smktBDsyZNP/HeyLily-Mockups?node-id=3058-1873&starting-point-node-id=3058%3A1873' },
    ],
    designTools: [{ name: 'Figma', logo: '/logos/tech/figma.svg' }, { name: 'Claude', logo: '/logos/tech/claude.svg' }, { name: 'Claude Code', logo: '/logos/tech/claude.svg' }, { name: 'ChatGPT', logo: '/logos/tech/openai.svg' }, { name: 'Codex', logo: '/logos/tech/openai.svg' }, { name: 'Gemini', logo: '/logos/tech/googlegemini.svg' }],
    photos: [
      { src: '/projects/heylily/team-with-instructors.jpg', alt: 'HeyLily team members with instructors Greg Gottesman and Ed Lazowska in front of a Pioneer Square Labs backdrop.', caption: 'HeyLily team members with our instructors, Greg Gottesman and Ed Lazowska, at Pioneer Square Labs.' },
      { src: '/projects/heylily/team-at-psl.jpg', alt: 'HeyLily team members gathered together on a sofa at Pioneer Square Labs.', caption: 'Together at Pioneer Square Labs for demo day.' },
      { src: '/projects/heylily/psl-demo-day.jpg', alt: 'Students seated in the audience during demo day at Pioneer Square Labs.', caption: 'Demo day at Pioneer Square Labs: sharing the projects with an audience.' },
    ],
    artifacts: [
      { label: 'View the pitch deck above', href: '#pitch-deck', description: 'Browse the product concept, design demos, pricing, and venture strategy directly on this page.' },
      { label: 'Read the working-backwards press release', href: '/artifacts/heylily/prfaq.pdf', description: 'PDF · An imagined launch announcement describing the customer experience we wanted to create.' },
      { label: 'Explore the financial model', href: '/artifacts/heylily/financial-model.xlsx', description: 'Excel · Planning assumptions, projections, cash flow, and sensitivity scenarios.' },
    ],
    discovery: {
      stat: '15+', statLabel: 'discovery interviews',
      who: 'Our team interviewed older adults and the assisted-living organizations that serve them.',
      heardLabel: 'WHAT WE HEARD', changedLabel: 'WHAT WE DID',
      persona: { name: 'Cautious Cathy', quote: 'I want help before I panic, not after.', traits: ['62 years old', 'Lives independently', 'Somewhat comfortable with smartphones', 'Gets suspicious calls weekly', 'Wants technological independence', 'Values privacy and clarity'], note: 'A persona our team built from the interviews, not a single real participant.' },
      findings: [
        { heard: 'Technical setup was hard for many older adults.', changed: 'We designed a guided four-step setup.' },
        { heard: 'Many relied on a trusted family member for help.', changed: 'We built Trusted Circle so a family member could step in.' },
        { heard: 'They raised privacy concerns about bringing family into their calls.', changed: 'We made Trusted Circle optional, so the person being protected decides who gets involved.' },
        { heard: 'Many had limited disposable income.', changed: 'We kept a free tier and planned to reach users through senior-care organizations that pay per resident.' },
      ],
    },
    details: [
      { title: 'My contribution & the team’s deliverables', paragraphs: ['I did customer research, worked on user needs and product requirements, and worked through features with our engineers and designers. In the pitch, my role covered product, business strategy, and financials, including the financial model and the fundraising strategy.', 'The Android app, design prototype, business strategy, and PRFAQ (Amazon’s press release and FAQ format) came from the whole 11-person team.'] },
      { title: 'Product concept & competitive landscape', paragraphs: ['We designed HeyLily to screen unknown callers, ask their name and reason for calling, analyze language and voice signals, and present a call summary. The intended experience included plain-language warnings and practical next steps, such as ending a suspicious call or verifying it through a saved number. Users would choose whether to involve a trusted contact.', 'We compared HeyLily with Hiya AI Phone, Truecaller AI Assistant, T-Mobile Scam Shield, and iPhone Live Voicemail as they stood during the course. Our direction focused on guiding users during a suspicious call and letting them control who else gets involved.', 'The screens on this page come from our Figma prototype, not the Android app.'] },
      { title: 'Go-to-market: reach seniors through trusted channels', paragraphs: ['We planned to start with senior-care organizations, which offered a route to users and a setting for pilots. Caregiver and direct-to-consumer adoption would follow, and later banks and insurance providers could become distribution channels.', 'Our financial model combines two revenue streams. Community organizations pay a monthly lease per resident, and a free tier introduces individual users to paid protection. These channels were the plan we pitched, not signed partnerships.'] },
      { title: 'Financial modeling & fundraising strategy', paragraphs: ['I built the financial model with help from Claude, and I developed the fundraising strategy for the pitch, which asked investors for a $2 million seed round.', 'I modeled a $5 per resident monthly community lease alongside free, individual, and family subscriptions. From there I built 12-month projections, a three-year P&L, cash flow, and a sensitivity analysis.', 'We considered several prices for individual protection: $100 per year in the pitch, $120 in the financial model, and a $109 alternative. We never settled on a final price.', 'The revenue, retention, and exit scenarios in the model are forecasts.'], table: { caption: 'Course pricing assumptions · USD', headers: ['Plan', 'Final pitch', 'Financial model input'], rows: [['Free', '$0', '$0'], ['Protected', '$100 / year', '$120 / year'], ['Family · 4 users', '$240 / year', '$240 / year'], ['Community lease', 'Not priced on pricing slide', '$5 / resident / month']] } },
      { title: 'Working backwards with the PRFAQ', paragraphs: ['We used Amazon’s working-backwards method: write the launch announcement first, then decide how to build the product. Ours described layered call protection, clear guidance during a call, and optional help from a trusted contact. Writing it first made the value proposition concrete before we talked about implementation.', 'The launch and customer quotes in the announcement are imagined. HeyLily stayed a course project.'] },
      { title: 'Pitch & press coverage', paragraphs: ['On March 12, 2026, GeekWire covered the final investor pitches from the UW entrepreneurship course at Pioneer Square Labs and described HeyLily as an AI product for detecting scam calls.'] },
    ],
    sources: [{ label: 'GeekWire: UW students pitch AI startup ideas', url: 'https://www.geekwire.com/2026/heres-the-pitch-uw-students-get-in-the-room-with-key-investors-to-share-their-ai-startup-ideas/' }],
  },
  {
    id: 'therat', slug: 'therat', title: 'TheraT', subtitle: 'From research insight to venture potential.',
    category: 'Research commercialization', status: 'UW research · Potential spinout',
    role: 'Market research, business planning & financial forecasts',
    team: 'University of Washington research team; Mari Winkler, principal investigator',
    summary: 'Evaluating a commercialization path for a research-stage oral hydrogel platform targeting gut toxins in chronic kidney disease.',
    takeaway: 'Connected a research-stage technology to market analysis, a business plan, and financial forecasts.',
    problem: 'A promising research platform needs more than technical development to become a viable venture. TheraT needed a view of the market, business opportunity, and financial assumptions supporting a potential spinout.',
    decision: 'My work focused on evaluating a commercialization path through market research, business planning, financial forecasting, and recommendations developed directly with the professor.',
    outcome: 'I created a market research report, business plan, financial forecasts, and recommendations. UW lists me as team lead for TheraT; a UW announcement confirms a $75,000 grant to the team.',
    skills: ['Market research', 'Business strategy', 'Financial modeling'], featured: false, publicSummary: false, updated: '2026-10-06',
    details: [
      { title: 'Explore my contribution and team context', paragraphs: ['I worked directly with the professor on research commercialization. My contribution was a market research report, a business plan, financial forecasts, and recommendations.', 'CoMotion lists Nicolas Picon as team leader and Mari Winkler as principal investigator, alongside other teammates. Funding is a team outcome; it should not be attributed to one person alone.'] },
      { title: 'Read the technology context and limitations', paragraphs: ['TheraT is developing a research-stage oral hydrogel bead platform targeting gut toxins in chronic kidney disease. The work described here concerns a potential venture, not a launched company.', 'This case does not establish clinical effectiveness, regulatory approval, or a therapy available to patients. Financial forecasts are planning outputs, not realized revenue.'] },
      { title: 'Review funding evidence', paragraphs: ['The University of Washington’s July 7, 2026 announcement confirms $75,000 in funding for TheraT. This public case uses that documented amount; additional reported funding is omitted pending supporting documentation.'] },
      { title: 'View artifact availability', paragraphs: ['The market research report, business plan, and financial models I created are not shared in this preview. Detailed assumptions and confidential research material will only be added after review for public sharing.'] },
    ],
    sources: [
      {label: 'UW CoMotion: TheraT team and award', url: 'https://comotion.uw.edu/funding-and-competitions/programs/comotion-innovation-gap-fund/awardees/'},
      {label: 'UW Population Health: $75,000 grant announcement', url: 'https://www.washington.edu/populationhealth/2026/07/07/initiative-jointly-funds-spring-2026-innovation-gap-fund-project-with-comotion/'},
    ],
  },
];

// Fail early on publishing mistakes; titles may repeat, route identities may not.
const ids = new Set<string>();
const slugs = new Set<string>();
for (const p of projects) {
  if (!p.id || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(p.slug) || !p.title.trim() || !p.summary.trim() || !p.role.trim() || !p.takeaway.trim() || ids.has(p.id) || slugs.has(p.slug)) {
    throw new Error(`Invalid or duplicate project metadata: ${p.id}`);
  }
  for (const source of p.sources) {
    if (new URL(source.url).protocol !== 'https:') throw new Error(`Invalid source URL: ${p.id}`);
  }
  ids.add(p.id); slugs.add(p.slug);
}
export const publicProjects = projects.filter(p => p.publicSummary);
