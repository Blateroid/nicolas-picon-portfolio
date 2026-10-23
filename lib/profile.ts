import { empireStory } from '@/lib/empire';
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
    highlights: ['Wrote the PRD with the founder: goals, scope, user stories, functional requirements, and success metrics.', 'Built a weekly lead-generation pipeline that finds senior marketing and consumer-insights leaders through Apollo, scores them with an LLM, and emails the founder the top 20 every Monday.', 'Built a companion tool that finds and scores industry conferences for Runic to market at.', 'Tested candidate LLMs on real scoring prompts and kept the pipeline running on free tiers as models were retired.'],
    engagement: 'Consulting engagement with a portfolio company of the venture fund run by my Angel Investing Practicum professor.',
    impact: { value: '200%', label: 'increase in qualified leads' },
    tools: [{ name: 'Claude Code', logo: '/logos/tech/claude-color.svg' }, { name: 'Python', logo: '/logos/tech/python.svg' }, { name: 'GitHub Actions', logo: '/logos/tech/githubactions.svg' }, { name: 'cron-job.org', logo: '/logos/tech/cron-job.svg' }, { name: 'Gemini', logo: '/logos/tech/googlegemini-color.svg' }, { name: 'Lovable', logo: '/logos/tech/lovable.svg' }, { name: 'React', logo: '/logos/tech/react.svg' }, { name: 'Supabase', logo: '/logos/tech/supabase.svg' }, { name: 'Cloudflare Workers', logo: '/logos/tech/cloudflare.svg' }],
    discovery: {
      who: 'I worked directly with Runic’s founder over about ten calls, from the first scoping conversation through handover.',
      heardLabel: 'WHAT THE FOUNDER NEEDED', changedLabel: 'HOW I BUILT FOR IT',
      findings: [
        { heard: 'His time is valuable, and he wanted actionable information, not raw research.', changed: 'Every Monday he gets one short email with 20 ranked leads. Each lead has a fit score with a reason, a LinkedIn link, recent news, and a one-sentence pitch.' },
        { heard: 'The best early buyers were VP-level leaders in consumer insights, followed by marketing and product marketing, ideally one to three years into the role.', changed: 'I turned that into the scoring rubric: seniority combined with department, tenure as the tiebreaker, and anyone under 5 out of 10 filtered out.' },
        { heard: 'The signals worth acting on were company news from the last one to three months, new products, and CEO mandates around AI.', changed: 'The weekly email pulls recent news for each lead and turns it into a tailored one-line pitch.' },
        { heard: 'He wanted 10 to 20 strong leads a week, not an exhaustive list.', changed: 'The pipeline enriches about 40 candidates each week and sends only the best 20, which keeps Apollo credit use low.' },
        { heard: 'After the first emails, he said they were in good shape and asked for more context on how Runic could help.', changed: 'Each lead now ends with a pitch tailored to that person. I also fixed the email timing and added automatic company discovery so the pool refills when it runs low.' },
        { heard: 'For events, he wanted 30 to 50 options with senior attendees in marketing, advertising, and market research.', changed: 'The conference finder scores every event against Runic’s profile and shows how well each one is verified.' },
      ],
    } satisfies Discovery,
    sections: [
      { title: 'How it started', paragraphs: ['I met Runic’s founder through my Angel Investing Practicum professor, who runs a venture fund with Runic in its portfolio. On our first call, we identified where I could help. I then wrote an initial PRD (product requirements document) that captured his goals and the constraints and pain points we were targeting, and I scoped what the consulting contract would cover.'] },
      { title: 'The goals and the scope', paragraphs: ['We agreed on two goals. The first was to find opportunities to start sales conversations, from conferences where Runic could market itself to recent company news that gave the founder a timely reason to reach out. The second was to identify senior leaders at target accounts.', 'I scoped the minimum viable product in stages. The first covered target-account intake, the ideal customer profile and role preferences, and automated identification of likely senior stakeholders at each account. Later stages called for monitoring recent events at those accounts, scoring and ranking opportunities, founder-ready briefs with outreach angles, feedback controls, and a daily email digest.'] },
      { title: 'Choosing how to build it', paragraphs: [
        'I compared app builders like Lovable, Replit, and Bolt.new; automation tools like n8n, Zapier, Make, Gumloop, and Airtable; Perplexity Computer; and coding agents like Claude Code and Cursor. My priorities were getting a first version in front of the founder, keeping costs low, and having enough control to build out the workflows.',
        'Lovable was a useful starting point for the website and front end, and I was more familiar with it than Replit or Bolt.new. I built the first prototype there. As I got into the data collection, scoring, and automation, I wanted more technical depth and control over the implementation, so I moved the code into Claude Code and continued building there.',
        'This was my first time using n8n, though I already knew about it, Zapier, Make, and Gumloop. I tried Gumloop but decided against keeping it because it added another paid layer on top of the services we would already use. I wanted to see whether I could build the workflow without that premium.',
        'I also tried Perplexity Computer while it was still in its early stages to see what it could do. I was not satisfied with the work it produced for this project, so I continued with Claude Code after the Lovable prototype.',
        'LinkedIn was my first choice for finding people, but connecting it to an automated workflow through an API was difficult. I also considered contact databases such as Apollo, ZoomInfo, Coresignal, and Clay. Apollo made sense because the fund already paid for a subscription and was not using its full capacity. Using that existing subscription kept the project cost-effective.',
        'For timely sales signals, I considered company newsrooms, press releases, Google News, conference speaker lists, and hiring signals. The lead pipeline became a lean Python system, while the Lovable prototype became the front end for the conference finder.',
      ] },
      { id: 'lead-discovery', title: 'Tool one: weekly lead generation', paragraphs: ['I built the lead pipeline in Python with Claude Code. Every Saturday it searches Apollo for senior marketing and consumer-insights leaders at Runic’s target brands, using about 30 job titles and seniority filters. A rule-based filter drops junior titles, and an LLM scores each remaining person from 0 to 10 with a written reason.', 'On Monday morning, it enriches the 40 strongest leads not yet sent with LinkedIn profiles, employment history, and recent company news, scores them again, and emails the founder the best 20. A Google Sheet keeps every lead so nobody is sent twice, and a separate job finds new companies to research when the list runs low.', 'cron-job.org triggers the scheduled workflows on GitHub Actions. Apart from the Apollo subscription the fund already paid for and was not using in full, the pipeline runs on free tools and free LLMs, putting more of that existing subscription to work.'] },
      { title: 'Tool two: the conference finder', paragraphs: ['For the first goal, I built an event intelligence tool. I started it from a Lovable template and built it out with Claude Code. It searches the web with Firecrawl, then uses Gemini to pull out conferences only from the pages it actually fetched, so it can’t invent events.', 'Code then checks each event’s dates, links, and year, labels it verified, corroborated, or unverified, and scores it from 0 to 100 against Runic’s ideal customer profile with a plain-language breakdown. The founder can edit that profile directly or through an AI chat.'], image: { src: '/experience/runic-ai/events-dashboard.png', width: 1600, height: 884, alt: 'Runic Events dashboard listing upcoming industry conferences with dates, locations, industries, verification labels, fit scores, and status.', caption: 'The conference finder’s dashboard: each event gets a fit score and a verification label.' } },
      { title: 'Iterating with the founder', paragraphs: ['While building, I tested approaches with different tools, went back and forth with the founder, gathered his feedback, and iterated before delivering both tools and handing them over.'] },
    ],
    detailGroups: [
      { heading: 'Challenges along the way', items: [
        { title: 'Keeping the lead pipeline running as free models were retired', paragraphs: ['The pipeline scores leads with free LLMs on Groq, and those models change. I tested candidate models on real scoring prompts and moved the pipeline from Llama 3.1 to Llama 4 Scout, then to Qwen, then to GPT-OSS 120B as models were retired.', 'After one preview model disappeared and a weekly run hit 192 failed calls, I switched models and confirmed the fix with a 116-call test that returned no empty or cut-off responses.'] },
        { title: 'Working within rate limits on the conference finder', paragraphs: ['Groq, the first AI provider I moved the conference finder to, kept hitting its limit of 12,000 tokens per minute. I shrank the page excerpts, processed one page at a time, and added retries that wait as long as the API asks.', 'When that still wasn’t enough, I switched to Gemini, which has far more headroom. That let me go back to longer excerpts and batches of five pages, cutting each discovery run from 30 requests to 6.'] },
        { title: 'Protecting the Apollo credits', paragraphs: ['Enriching a lead costs one Apollo credit, so the pipeline only enriches the 40 strongest candidates each week. Low-scoring leads stay on file as filtered, so they are never evaluated or paid for twice.'] },
        { title: 'Making failures visible', paragraphs: ['If Apollo, the LLM, or Google Sheets fails, the run retries with backoff. A dead API key stops the run and sends an alert email instead of failing silently.'] },
      ] },
      { heading: 'The PRD in detail', items: [
        { title: 'User stories', items: ['As a founder, I want to upload a list of target accounts so the system can proactively monitor them for relevant people and events.', 'As a founder, I want the system to identify likely senior decision-makers so I can avoid manual account research.', 'As a founder, I want recent trigger events surfaced automatically so I have a timely reason to reach out.', 'As a founder, I want a concise account brief with suggested messaging so I can move directly into outreach.', 'As a founder, I want only the highest-signal opportunities shown first so my daily review takes very little time.'] },
        { title: 'Functional requirements', items: ['Account intake (P1): create and maintain a target-account list by manual input or CSV upload, store company name, website, segment, status, priority, and notes, and exclude accounts already in active conversation or out of scope.', 'ICP and role configuration (P1): define and edit ideal customer profile criteria, including target company characteristics and preferred stakeholder functions.', 'Contact identification (P1): find one or more likely senior leaders per account, each with a confidence score, name, title, company, function, source, and relevance rationale, ranked by likely influence.', 'Event detection (P2): detect recent public events at target accounts, such as leadership changes, funding, partnerships, product launches, hiring, and expansion, and store each with type, date, summary, source, and relevance score.', 'Opportunity scoring (P2): combine account fit, contact seniority, event freshness, event relevance, and source confidence into one score, explained in plain language.', 'Founder briefs (P3): for each top opportunity, a brief with the recommended contact, why they matter, the trigger event, why it matters now, an outreach angle, two or three talking points, a confidence level, and source links.', 'Digest and alerts (P3): a short, ranked, skimmable digest of the top opportunities through email or Slack.', 'Feedback loop (P3): mark recommendations as useful, not useful, contacted, or ignored, and keep that feedback to improve ranking later. This one was scoped but not built.'] },
        { title: 'Success metrics', items: ['North star: the percentage of meetings booked that came from product-sourced opportunities.', 'Signal to noise: the percentage of delivered briefs the founder rejects or marks irrelevant.', 'The percentage of accounts with at least one high-confidence senior contact.', 'The percentage of accounts with at least one relevant recent trigger event.'] },
      ] },
    ],
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
      { src: '/experience/uber/with-colleague.jpg', alt: 'Nicolas and his manager standing beside large lit-up UBER letters.', caption: 'With my manager at the Uber office.' },
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
    slug: 'empire-bio-diagnostics', company: 'Empire Bio Diagnostics', logo: 'empire.png', role: 'Product, operations & engineering',
    dates: '2020 – 2024', location: 'Hicksville, NY',
    summary: empireStory.summary,
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
