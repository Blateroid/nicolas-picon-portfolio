import type { Discovery } from '@/lib/discovery';
// Public profile summaries from Nicolas's supplied running resume.
export const contactEmail = 'nicolas.picon@hotmail.com';
export const experience = [
  {
    slug: 'therat', company: 'TheraT · University of Washington', logo: 'therat.png', role: 'Commercialization Lead',
    dates: 'Oct 2025 – Aug 2026', location: 'Seattle, WA',
    engagement: 'Venture development, then a paid consulting contract with Mari Winkler’s lab in August 2026, funded by the Innovation Gap Fund award.',
    summary: 'Built the commercial case for a research-stage chronic kidney disease therapy, from customer discovery to market analysis and a possible spinout strategy.',
    highlights: ['Developed a market-entry strategy and staged expansion roadmap informed by clinical validation and regulatory risk.', 'Built a bottom-up market model and competitive differentiation matrix for the investment case.', 'Conducted more than 30 discovery interviews with patients, clinicians, dietitians, nurses, industry executives, regulators, and investors to refine the target segment and value proposition.'],
  },
  {
    slug: 'runic-ai', company: 'Runic.AI', logo: 'runic.svg', role: 'AI GTM Automation Consultant',
    dates: 'Mar – Jun 2026', location: 'Boston, MA · Remote',
    summary: 'Built and shipped an agentic lead-generation pipeline, from product requirements through deployment, that increased qualified leads by 200%.',
    highlights: ['Automated weekly lead sourcing, scoring, and enrichment against the company’s ideal customer profile.', 'Built a companion tool to identify marketing events and conferences for outbound targeting.', 'Compared LLMs through an evaluation and selected the best-performing model for the pipeline.'],
  },
  {
    slug: 'angel-investing-practicum', company: 'University of Washington', logo: 'uw.png', role: 'Angel Investing Practicum · Class Fund Team Member',
    dates: 'Sep 2025 – Jun 2026', location: 'Seattle, WA · Academic practicum',
    summary: 'Sourced startup opportunities, developed an investment thesis, and wrote investment memos as part of a student investment fund.',
    highlights: ['Sourced 15 deals and wrote two investment memos.', 'Applied comparable-company multiples, VC and reverse-VC methods, and scenario-weighted valuation.', 'Worked with the class fund team to select a startup as a candidate for a proposed $25,000 university investment.'],
  },
  {
    slug: 'uber', company: 'Uber', logo: 'uber.png', role: 'Senior Product Operations Manager Intern',
    dates: 'Jun – Aug 2025', location: 'Seattle, WA · Global Digital Experience Team',
    summary: 'Led product discovery and design for Uber Eats merchant-support automation, translating support pain points into requirements and an experience aligned with 32 cross-functional stakeholders.',
    highlights: ['Analyzed more than 100 merchant interactions, conducted interviews, and mapped the merchant-support flow.', 'Built a front-end prototype and PRD with user stories and acceptance criteria; secured executive buy-in to begin development after the internship.', 'Proposed a safety-incident escalation policy with legal, safety, compliance, and marketplace teams. The support redesign projected approximately $2 million in annual savings.'],
    impact: { value: '$2M', label: 'projected annual savings in merchant support operating costs' },
    discovery: {
      stat: '100+', statLabel: 'merchant calls to our support center analyzed',
      extraStats: [{ stat: '32', label: 'stakeholders included in the final recommendation' }],
      who: 'I listened to merchant calls to understand what our support agents were solving, then talked with the people who designed the support policy and the teams that gave input on it. I also interviewed the customer experience team and went to restaurants to hear directly from merchants.',
      heardLabel: 'WHAT I FOUND', changedLabel: 'WHAT I DID',
      findings: [
        { heard: 'Human agents solved the same problems as the automation but earned a higher CSAT (customer satisfaction score). Sometimes they stepped outside the policy to do it, while the automation followed the policy exactly.', changed: 'I flagged the policy gaps to the operations team.' },
        { heard: 'The people who designed the policy and the teams that shaped it confirmed it was not exhaustive and needed more flexibility for edge cases.', changed: 'The redesigned automation covers more cases and gives merchants more flexibility.' },
        { heard: 'Restaurants care most about operational efficiency. When something goes wrong, they have to keep the kitchen running while they report the issue to Uber Eats.', changed: 'I added a hands-free mode powered by voice AI, so merchants can report an issue without stopping work.' },
        { heard: 'Merchants said they could not really explain their problem to the automation and never saw what came of it.', changed: 'That confirmed the policy and the automation needed to handle more situations, which shaped the redesign.' },
      ],
      outcome: 'What changed: I turned these findings into a redesigned automation with more exhaustive cases, more flexibility, and a hands-free voice mode, then built a front-end prototype and a PRD with user stories and acceptance criteria. Executives agreed to begin development after the internship.',
    } satisfies Discovery,
    photos: [
      { src: '/experience/uber/badge.jpg', alt: 'Nicolas holding his Uber NORAM intern badge.', caption: 'My Uber intern badge.' },
      { src: '/experience/uber/welcome-kit.jpg', alt: 'An Uber backpack, water bottle, notebook, and accessories on a desk in the Uber office.', caption: 'The welcome kit at my desk.' },
      { src: '/experience/uber/with-colleague.jpg', alt: 'Nicolas and a colleague standing beside large lit-up UBER letters.', caption: 'With a colleague at the Uber office.' },
      { src: '/experience/uber/library-wall.jpg', alt: 'A wall of open books with an Albert Einstein quote about knowing the location of the library.', caption: 'The library wall at the Uber office.' },
    ],
  },
  {
    slug: 'voyager-capital', company: 'Voyager Capital', logo: 'voyager.png', role: 'Venture Capital Fellow',
    dates: 'Jan – Jun 2025', location: 'Seattle, WA',
    summary: 'Evaluated startup opportunities and supported due diligence across AI, SaaS, agriculture, and robotics.',
    highlights: ['Assessed 15 startup pitches; two advanced to further due diligence and investment consideration.', 'Conducted due diligence on five startups, across market size, competition, team, and technology.', 'Built a liquidation-waterfall model using term-sheet and cap-table data to compare investment returns across three exit scenarios.'],
  },
  {
    slug: 'mentem-lab', company: 'Mentem.Lab', logo: 'mentem.png', role: 'Business Lead',
    dates: 'Oct 2024 – Mar 2025', location: 'Seattle, WA',
    summary: 'Led business strategy for an early-stage mental-health startup. Customer discovery informed a pivot from a patient-facing chatbot to a care-management tool for provider check-ins.',
    highlights: ['Conducted nine discovery interviews with care providers.', 'Built the business plan and pitch deck, and recruited two engineers and one designer.', 'Led the team to the finals of the Hollomon Health Innovation Challenge.'],
    discovery: {
      stat: '9', statLabel: 'discovery interviews with care providers',
      extraStats: [{ stat: '2', label: 'pitch competitions' }],
      who: 'We interviewed care providers, including an OB-GYN, a physician who cares for high-risk pregnancies, and a primary care physician. Then we tested our assumptions at two pitch competitions: the Hollomon Health Innovation Challenge and the social venture competition at Seattle Pacific University.',
      quotes: [
        { text: 'We can do better for screening.', source: 'A physician who cares for high-risk pregnancies' },
        { text: 'Make my life easier.', source: 'The same physician, on what would make a clinician pay for a tool' },
      ],
      heardLabel: 'WHAT WE HEARD', changedLabel: 'WHAT WE DID',
      findings: [
        { heard: 'Screening still runs on paper. The patient fills out a form, a nurse scores it, someone enters it by hand, and staff then look for a social worker.', changed: 'We designed routine automation and integration with the electronic health record, the system where clinics keep patient charts, so screening stops being one more manual task.' },
        { heard: 'Follow-up depends on the doctor or staff remembering. An OB-GYN wished for a system that checks in with patients monthly, more often than her team has time for.', changed: 'We pivoted from a patient-facing chatbot to a care-management tool that handles provider check-ins.' },
        { heard: 'Clinicians wanted to see who needs attention first, with levels of alert and what changed since the last conversation.', changed: 'We added an AI-derived risk score so clinicians can prioritize the patients most at risk.' },
        { heard: 'After screening, the biggest barriers were availability of care, insurance coverage, and patients not knowing what to do next.', changed: 'We added personalized care-path recommendations for next steps.' },
      ],
    } satisfies Discovery,
    photos: [
      { src: '/experience/mentem-lab/hollomon-team.jpg', alt: 'Four Mentem.lab team members at their booth under a Hollomon Health Innovation Challenge sign.', caption: 'Our team at the Hollomon Health Innovation Challenge.' },
      { src: '/experience/mentem-lab/buerk-center-team.jpg', alt: 'Four Mentem.lab team members beside a Buerk Center for Entrepreneurship banner and a Hollomon Health Innovation Challenge sign.', caption: 'With the team at the Hollomon Health Innovation Challenge.' },
      { src: '/experience/mentem-lab/hollomon-booth.jpg', alt: 'The Mentem.lab booth with two posters covering the problem, market, go-to-market strategy, solution, and traction.', caption: 'Our Mentem.lab booth.' },
      { src: '/experience/mentem-lab/social-venture-team.jpg', alt: 'Three Mentem.lab team members standing between their posters at the Seattle Pacific University social venture competition.', caption: 'At the social venture competition at Seattle Pacific University.' },
    ],
  },
  {
    slug: 'empire-bio-diagnostics', company: 'Empire Bio Diagnostics', logo: 'empire.png', role: 'Product, operations & engineering',
    dates: '2020 – 2024', location: 'Hicksville, NY',
    summary: 'Worked across product management, business operations, production, and R&D at a biotechnology startup developing rapid cleanliness-testing systems.',
    highlights: ['Technical Product Manager · Apr 2023 – Aug 2024: owned product roadmaps, launch requirements, pricing, customer discovery, and ten web launches delivered on schedule and under budget.', 'Business Operations Manager · Sep 2022 – Apr 2024: led 27 operators, managed a $6 million annual operating budget, and introduced operational upgrades that reduced production costs by 20%.', 'Production Manager · Sep 2021 – Sep 2022: led a 12-person team, built production forecasts, and improved production efficiency from 80% to 95%.', 'R&D Engineer · Jul 2020 – Sep 2022: developed automation programs, tested handheld-device and web-app software, and ran repeatable laboratory experiments.'],
  },
];

export const education = [
  {
    school: 'University of Washington · Foster School of Business', logo: 'uw.png', degree: 'Master of Business Administration', date: 'June 2026',
    focus: 'Product Management & Marketing', url: '/education/foster-mba',
    details: ['Participated in UW’s intramural VCIC competition in both MBA years.', 'MBA student leadership in global business, the LatinX community, technology, and entrepreneurship.', 'Microsoft independent study: designed and evaluated an LLM prompt for email-intent classification using real data.', 'Aerospace consulting: cost-allocation analysis and pricing recommendations for aerospace components.', 'Venture-capital fellowships and programs: Voyager Capital, Dorm Room Fund, Black Venture Capital Consortium, and the Angel Investing Practicum.'],
  },
  {
    school: 'New York Institute of Technology', logo: 'nyit.svg', degree: 'B.S. in Electrical and Computer Engineering', date: 'May 2021',
    focus: 'Summa Cum Laude',
    details: ['Academic-performance recognition and President’s Lists.', 'Senior design project: magnetic-levitation car.'],
  },
];

export const interests = ['AI', 'Investing', 'Soccer', 'Dog care · Rover', 'Beach volleyball', 'Travel', 'Esports · Former college player', 'Food', 'Board games'];

const experienceSlugs = experience.map(item => item.slug);
if (new Set(experienceSlugs).size !== experienceSlugs.length || experienceSlugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) throw new Error('Invalid or duplicate experience slug');
