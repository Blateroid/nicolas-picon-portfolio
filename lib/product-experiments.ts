import type { TechTool } from '@/components/tech-stack';
import type { Discovery } from '@/lib/discovery';

export type ProductExperiment = {
  slug: string; title: string; symbol: string; stage: string; summary: string;
  hook: string; introduction: string; appUrl: string; linkLabel: string; linkNote?: string;
  techStack: TechTool[];
  image?: { src: string; alt: string; caption: string };
  discovery?: Discovery;
  sections: { title: string; paragraphs: string[] }[];
};

export const productExperiments: ProductExperiment[] = [
  {
    slug: 'trackline', title: 'Trackline', symbol: '📈', stage: 'Concept · Landing-page experiment',
    summary: 'A trading-strategy marketplace concept I turned into a landing page to test early interest before building the platform.',
    hook: 'Would people follow a track record they could verify?',
    introduction: 'I wanted to explore a marketplace where traders could demonstrate their performance and investors could compare strategies with risk in view. Before building broker integrations or trade execution, I used Lovable, an AI app builder, to make a landing page with a sample dashboard, proposed pricing, and an early-access sign-up.',
    appUrl: 'https://track-line.lovable.app', linkLabel: 'Explore the Trackline concept',
    techStack: [{ name: 'Lovable', logo: '/logos/tech/lovable.svg' }, { name: 'React', logo: '/logos/tech/react.svg' }, { name: 'Tailwind CSS', logo: '/logos/tech/tailwindcss.svg' }],
    image: { src: '/projects/trackline/landing-page.png', alt: 'Trackline landing page with its value proposition, early-access button, and sample risk-first strategy leaderboard.', caption: 'The concept landing page shows the proposed value next to a sample leaderboard. The strategy data and AI insight are illustrative.' },
    sections: [
      { title: 'The question behind the concept', paragraphs: [
        'The idea starts with a trust problem. A trader can show an attractive return, but an investor still needs to know where the numbers came from, how much risk was taken, and whether the strategy fits their goals. I wanted to test interest in a more transparent way to compare strategies.',
        'I considered both sides of the marketplace. Traders would need a credible way to present their work and earn from followers. Investors would need a way to find strategies, compare their risk, and keep control of their own brokerage accounts.',
      ] },
      { title: 'The proposed experience', paragraphs: [
        'The concept centers on broker-sourced records, risk-aware discovery, and controlled trade mirroring (copying a trader’s trades into a follower’s own account). The sample leaderboard puts returns next to Sharpe ratios, which show how uneven a strategy’s performance was, and maximum drawdowns, which show how far it fell from a peak.',
        'A sample AI insight shows how the product might explain portfolio fit and allocation. The concept also includes proposed position limits, daily-loss caps, and stop controls for investors. None of them connect to a real brokerage yet.',
      ] },
      { title: 'Testing interest before building the marketplace', paragraphs: [
        'My goal was to see whether people would be interested enough to join an early-access list. I designed a short flow asking for an email, a role (trader, investor, or platform partner), and optional context. The role answer would show whether someone wants to publish a strategy or follow one.',
        'I also drew up proposed free, investor, and creator plans so people could react to the business model. Right now the sign-up shows a confirmation but doesn’t save submissions. The next step is connecting it to a real waitlist and watching who signs up.',
      ] },
      { title: 'What I built and what is still open', paragraphs: [
        'I built a responsive landing page in React and Tailwind CSS with a dashboard mockup, explanations for each type of user, feature sections, pricing, an expandable FAQ, and the early-access sign-up. It gives a potential user something to inspect and respond to.',
        'The open question is whether verifiable performance and clearer risk information create real interest on both sides. Broker connections, strategy verification, AI analysis, and trade mirroring still need to be built. The performance numbers and testimonials on the page are samples.',
      ] },
    ],
  },
  {
    slug: 'your-career-ally', title: 'Your Career Ally', symbol: '🧭', stage: 'In progress · Career-support prototype',
    summary: 'A career-support app in progress that combines application tracking, personal memory, AI-assisted writing, and interview-story preparation.',
    hook: 'Career preparation that starts from your own experience.',
    introduction: 'Every application asks people to rebuild the same history: what they did, what they learned, and why it matters for this role. I am building Your Career Ally to keep that context in one place, so career preparation can start from a person’s experience rather than a blank chat every time.',
    appUrl: 'https://career-compass-bud.lovable.app', linkLabel: 'Open the Career Ally prototype',
    linkNote: 'The prototype currently uses the name JobTracker AI and opens to a sign-in screen.',
    techStack: [{ name: 'Lovable', logo: '/logos/tech/lovable.svg' }, { name: 'React', logo: '/logos/tech/react.svg' }, { name: 'Tailwind CSS', logo: '/logos/tech/tailwindcss.svg' }, { name: 'Supabase', logo: '/logos/tech/supabase.svg' }, { name: 'PostgreSQL', logo: '/logos/tech/postgresql.svg' }],
    discovery: {
      who: 'I have been talking with MBA classmates who are in the middle of applying for jobs.',
      heardLabel: 'WHAT I HEARD', changedLabel: 'WHAT I BUILT',
      findings: [
        { heard: 'It is hard to remember your own stories when an application or an interview asks for them.', changed: 'A structured memory and a STAR story workspace keep those stories saved and ready to reuse.' },
        { heard: 'There is no time to prepare, because applying itself takes all the time.', changed: 'Cover letters and interview stories draw on saved experience, so preparation does not start from zero for each role.' },
      ],
    },
    sections: [
      { title: 'Starting with job-search tracking', paragraphs: [
        'The first version keeps applications and their context in one workspace. Each application record has the company, role, job description, link, location, salary range, and notes, plus a status: saved, applied, interviewing, offered, rejected, or withdrawn.',
        'A candidate can return to an opportunity with the details still attached. Cover-letter drafting uses the job description along with the candidate’s profile, saved experiences, and parsed documents, so they do not re-enter their background for every role.',
      ] },
      { title: 'A memory for the assistant', paragraphs: [
        'I built a structured memory area for experiences, skills, achievements, preferences, education, and projects. Each entry has a title, content, and an optional source, and the user can edit it as their account of the work gets clearer. The AI chat is designed to draw on that memory and on uploaded documents.',
        'The prototype can upload and parse files, and it has a workflow for importing information from accessible web links. That lets existing resumes, earlier writing, and professional context become reusable entries. I still need to test link import and parsing on real sources.',
      ] },
      { title: 'Turning an experience into an interview story', paragraphs: [
        'I added a STAR-story workspace: Situation, Task, Action, and Result. It combines editable story fields with an AI coach that asks focused questions about the context, the person’s responsibility, the actions they took, and the outcome.',
        'The aim is to make answers specific: “I helped the team” becomes a particular problem, a personal contribution, and a result the candidate can explain. A story can also start from saved memories, so application writing and interview preparation reuse the same background.',
      ] },
      { title: 'What I am exploring next', paragraphs: [
        'I now see the idea going beyond application tracking. I want to explore a private career “second brain,” a place where people capture milestones, reflect on what they can offer, and decide what to learn or build next. Most career progress never becomes a social-media post, and I want the product to help people remember it anyway.',
        'The longer-term concept includes an agent that interviews the user, helps prepare stories, and turns selected experience into a public profile or portfolio. It could also suggest projects and learning activities. I am also exploring an MCP connection (MCP is an open standard for connecting AI assistants to outside data) so different assistants could read from and add to the same memory. None of this is built yet.',
      ] },
      { title: 'Starting with candidates before a marketplace', paragraphs: [
        'My current hypothesis for reaching users is to start with candidates and a free core experience. I first want to learn whether people keep using the product to record milestones and make career decisions, rather than only visiting when they need a cover letter.',
        'Recruiter and company discovery would come later, once I understand that habit. One design question is how to keep private reflection separate from what a person chooses to publish or share. The marketplace, premium learning support, and the timing of that expansion are still open.',
      ] },
      { title: 'Where the project stands', paragraphs: [
        'I am developing the prototype in Lovable with React and Tailwind CSS, Supabase authentication and storage, PostgreSQL records, and server functions for AI chat, document parsing, cover-letter generation, and STAR coaching. The current AI functions call Gemini through Lovable’s gateway.',
        'The project is in progress. The prototype has application tracking, memory, file upload, writing, and story coaching. The broader career platform is still a concept. Next I will evaluate the connected workflows and see whether the product helps people keep useful context and prepare for opportunities more consistently.',
      ] },
    ],
  },
];
