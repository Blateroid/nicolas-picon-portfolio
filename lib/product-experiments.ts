import { publicResumeSkill } from './resume-tailoring';
import type { TechTool } from '@/components/tech-stack';
import type { Discovery } from '@/lib/discovery';

export type ProductExperiment = {
  slug: string; title: string; symbol: string; stage: string; summary: string;
  hook: string; introduction: string; appUrl?: string; linkLabel?: string; linkNote?: string;
  techStack: TechTool[];
  toolsLabel?: string;
  mascot?: { src: string; alt: string };
  image?: { src: string; alt: string; caption: string; width?: number; height?: number; fullSize?: boolean };
  discovery?: Discovery;
  skill?: { title: string; description: string; href: string; content: string };
  sections: { title: string; id?: string; symbol?: string; paragraphs: string[] }[];
};

export const productExperiments: ProductExperiment[] = [
  {
    slug: 'grokbot-agent-organization', title: 'Grokbot Agent Organization', symbol: '🤖', stage: 'In progress · Multi-agent experiment',
    summary: 'An AI agent organization spanning research, development, security, operations, and marketing. I am building toward a social-media content workflow that brings people to an e-commerce store.',
    hook: 'Giving AI agents roles and a shared goal.',
    introduction: 'I created an organization of AI agents, software assistants with assigned roles, and am using Grokbot to deploy it. I share the co-CEO role with one bot that oversees the others. A chief of staff, department leads, and specialist agents form the rest of the organization.',
    techStack: [{ name: 'Grokbot', logo: '/logos/tech/grok.svg' }],
    toolsLabel: 'Tools',
    mascot: { src: '/projects/grokbot-agent-organization/mascot.png', alt: 'A friendly ivory and forest-green robot mascot waving, with an orange orbit-shaped core.' },
    image: { src: '/projects/grokbot-agent-organization/organization-chart-with-mascot.png', width: 1536, height: 1024, fullSize: true, alt: 'Illustrated Grokbot organization chart showing Nicolas and the co-CEO bot, chief of staff, research, development, security and operations, marketing, project manager, Dr. Egg, and the waving project mascot. The role descriptions below explain each team.', caption: 'The current agent organization. The full-stack developer also works with security and operations. Select the chart to see every role at full size.' },
    sections: [
      { title: 'How I organized the agents', symbol: '🤖', paragraphs: [
        'I gave the agents different responsibilities within a hierarchy. The co-CEO bot oversees the other bots alongside me, with a chief of staff and department leads coordinating the specialist roles.',
      ] },
      { title: 'Research', symbol: '🔬', paragraphs: [
        'The research team has a lead, a literature researcher, Toolsmith, and Verifier. Toolsmith researches skills for agents, and Verifier checks facts.',
      ] },
      { title: 'Development', symbol: '💻', paragraphs: [
        'A full-stack developer leads the development team, which also includes a front-end developer, a back-end developer, a product designer, and a QA engineer responsible for quality assurance.',
      ] },
      { title: 'Security and operations', symbol: '🛡️', paragraphs: [
        'The full-stack developer also participates in the security and operations team, alongside a security engineer, a vulnerability tester, and a DevOps engineer focused on development and operations.',
      ] },
      { title: 'Marketing and video production', symbol: '🎬', paragraphs: [
        'The marketing team includes a growth marketer, a marketplace role, an SEO specialist focused on search visibility, a script and hook writer, a Pinterest and community manager, and an email and lifecycle marketer.',
        'A video production bot reports to the growth marketer. Its assigned role is to create reels and produce high-quality content for the social-media workflow.',
      ] },
      { title: 'Project visibility and creating new bots', symbol: '🥚', paragraphs: [
        'A project manager bot is responsible for gathering projects across the organization and putting them in Notion so I can see what is going on.',
        'I also imported Dr. Egg, an existing bot template that helps create other bots.',
      ] },
      { title: 'The content and commerce goal', symbol: '🛍️', paragraphs: [
        'I am trying to get the agents to work together on a content-generation workflow for TikTok and Instagram. The goal is to create reels that bring viewers to an e-commerce marketplace or store where I can sell products.',
      ] },
      { title: 'Where the project stands', symbol: '🚧', paragraphs: [
        'This is an active experiment in progress. I have created the roles and am still working on getting the agents to coordinate and carry out the content-to-commerce workflow.',
      ] },
    ],
  },
  {
    slug: 'ai-trading-bot', title: 'AI Trading Bots', symbol: '📊', stage: 'In progress · Two investing experiments',
    summary: 'Two current AI trading experiments: a Grokbot bot connected to Robinhood with $100, and @musetrader in Muse paper trading $10,000 and publicly sharing its picks and reasoning.',
    hook: 'Two agents, two investing experiments.',
    introduction: 'I am running two AI trading experiments: a Grokbot bot connected to Robinhood through MCP with $100 allocated, and a Muse bot paper trading a $10,000 simulated portfolio. Each has its own portfolio and setup.',
    toolsLabel: 'Tools',
    techStack: [{ name: 'Grokbot', logo: '/logos/tech/grok.svg' }, { name: 'Robinhood · MCP', logo: '/logos/tech/robinhood.svg' }, { name: 'Muse', logo: '/logos/tech/muse.svg' }],
    sections: [
      { title: 'Experiment one: Grokbot + Robinhood · $100', paragraphs: [
        'I run this bot through Grokbot to analyze companies and potential trades. It is connected to Robinhood through MCP, a standard for connecting AI assistants to external tools and data.',
        'I allocated $100 to this experiment as I work toward automated trading. It is separate from the agent organization I am building for content and commerce.',
      ] },
      { title: 'Experiment two: Muse · $10,000 paper portfolio', paragraphs: [
        'My second bot runs in Muse under the handle @musetrader. It paper trades $10,000 in simulated funds, with a portfolio separate from the Robinhood experiment.',
        'The bot publicly publishes the stocks it picks and why it picked them. That public record makes its selections and reasoning visible as the experiment runs.',
      ] },
      { title: 'Future idea: follow the Robinhood experiment here', paragraphs: [
        'I want to share daily updates on this website showing the Robinhood account value, trades, and results as the experiment runs. I am still figuring out how to bring those updates onto the site, either through the bot or by adding them myself.',
      ] },
    ],
  },
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
    techStack: [{ name: 'Lovable', logo: '/logos/tech/lovable.svg' }, { name: 'React', logo: '/logos/tech/react.svg' }, { name: 'Tailwind CSS', logo: '/logos/tech/tailwindcss.svg' }, { name: 'Supabase', logo: '/logos/tech/supabase.svg' }, { name: 'PostgreSQL', logo: '/logos/tech/postgresql.svg' }, { name: 'Claude', logo: '/logos/tech/claude-color.svg' }, { name: 'GPT', logo: '/logos/tech/openai-color.svg' }],
    toolsLabel: 'Tools',
    image: { src: '/projects/your-career-ally/applications-dashboard.png', width: 1920, height: 552, alt: 'JobTracker AI applications dashboard with Salesforce, Uber, and Microsoft demo records showing Saved, Applied, and Interviewing statuses, beside AI Chat, Memory, STAR Stories, and Files navigation.', caption: 'The current JobTracker AI prototype with demo applications at real companies. These are illustrative records, not actual applications or advertised openings.' },
    skill: { title: 'Read the resume-tailoring skill', description: 'A public adaptation of the standalone workflow, with personal paths and private references removed. It contains the instructions rather than the original local scripts.', href: '/skills/resume-tailor.md', content: publicResumeSkill },
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
      { id: 'resume-tailoring', title: 'An addition: the resume-tailoring skill', paragraphs: [
        'Alongside the app, I built a separate resume-tailoring workflow as a Claude skill and adapted it for GPT. I refined it over several tries. It is not integrated into the prototype yet; I plan to add it when I have time.',
        'The workflow starts with a source resume and a job posting. It selects the experience most relevant to the role, translates that evidence into the employer’s vocabulary, and produces a tailored resume with a record of what changed.',
      ] },
      { title: 'Why the workflow starts with evidence', paragraphs: [
        'The central design choice is to select and translate real experience before optimizing the wording. Each rewritten claim must trace back to the source resume or something I have directly confirmed. This keeps a stronger-sounding sentence from quietly adding experience I do not have.',
        'The checks cover ownership, scope, time period, units, and qualifiers as well as numbers. A number can stay the same while its meaning changes: projected savings can become realized savings, or a team result can read like an individual achievement. The evidence map is there to catch those changes.',
        'Selection also happens across the whole resume. A recent role or a large metric does not automatically provide the best evidence for a particular job. The workflow asks what each accomplishment proves and records why stronger evidence was kept or left out.',
      ] },
      { title: 'Checking keywords without chasing a score', paragraphs: [
        'The skill compares the draft against a fixed list of requirements and phrases from the posting. For a missing term, it checks whether truthful rewording or a different supported accomplishment can close the gap. If the experience is not there, it leaves the gap visible.',
        'Before-and-after keyword coverage makes wording changes inspectable. It is a diagnostic, not a prediction that an applicant tracking system will accept the resume or that a recruiter will offer an interview. Relevance and factual accuracy take priority over the percentage.',
      ] },
      { title: 'Checking the document people actually read', paragraphs: [
        'The workflow preserves the approved Word format and checks the rendered document, not just its text. It looks for page overflow, clipped content, awkward bullet wrapping, inconsistent formatting, and missing or reordered text. A readable single column and contact information in the document body support a straightforward reading order.',
        'It also reviews recruiter scanability, hiring-manager relevance, and factual fidelity, while distinguishing simulated reviewer perspectives from independent reviews. The change log records meaningful rewrites, selection trade-offs, unresolved gaps, and which checks actually ran. That makes the output something I can inspect instead of accepting a polished draft on trust.',
      ] },
      { title: 'Starting with candidates before a marketplace', paragraphs: [
        'My current hypothesis for reaching users is to start with candidates and a free core experience. I first want to learn whether people keep using the product to record milestones and make career decisions, rather than only visiting when they need a cover letter.',
        'Recruiter and company discovery would come later, once I understand that habit. One design question is how to keep private reflection separate from what a person chooses to publish or share. The marketplace, premium learning support, and the timing of that expansion are still open.',
      ] },
      { title: 'Next steps: the second brain', paragraphs: [
        'I want to extend the current structured memory into a private career second brain: a place to capture milestones, reflect on strengths, and turn real experiences into application materials, interview stories, and selected portfolio content. The current memory feature is a starting point; this broader workflow is still planned. Longer-term ideas include an agent that interviews the user, suggests learning or project opportunities, and connects different assistants to the same memory through MCP.',
      ] },
      { title: 'Next steps: bring resume tailoring into the app', paragraphs: [
        'I plan to integrate the separate Claude skill, adapted for GPT, when I have time. The aim is to connect the source resume, job posting, and career memory to the evidence checks, tailored document, and change log in one application workflow. The standalone skill runs in Claude or GPT, while the prototype’s current AI functions use Gemini through Lovable’s gateway.',
      ] },
      { title: 'Next steps: hosting and control', paragraphs: [
        'I want to move from the current Lovable-hosted prototype toward a deployment on Vercel so I have more control over the code and releases. That move is planned; the public prototype remains on its Lovable URL.',
      ] },
      { title: 'Suggested priorities before expanding', paragraphs: [
        'Useful supporting priorities are to test the full application-to-document workflow with users, check whether the evidence map survives resume generation, and evaluate the usefulness of the interview coaching. Those checks would show where to improve the current experience before adding more features.',
        'For the second brain, useful additions would be clear controls for reviewing, correcting, exporting, and deleting stored career information. For a hosting move, the next work would be to verify authentication, file storage, AI calls, and environment configuration in the new deployment before switching the public link. These are proposed priorities, not completed capabilities.',
      ] },
      { title: 'Where the project stands', paragraphs: [
        'I am developing the prototype in Lovable with React and Tailwind CSS, Supabase authentication and storage, PostgreSQL records, and server functions for AI chat, document parsing, cover-letter generation, and STAR coaching. The current AI functions call Gemini through Lovable’s gateway.',
        'The project is in progress. The prototype has application tracking, memory, file upload, writing, and story coaching. The broader career platform is still a concept. Next I will evaluate the connected workflows and see whether the product helps people keep useful context and prepare for opportunities more consistently.',
      ] },
    ],
  },
  {
    slug: 'ai-influencer-muse', title: 'AI influencer · Muse', symbol: '✨', stage: 'In progress · AI content experiment',
    summary: 'An experiment using Muse and Higgsfield to create a fictional AI influencer and explore what makes entertainment posts go viral.',
    hook: 'Exploring entertainment with a fictional creator.',
    introduction: 'I am trying to use Muse and Higgsfield to create an AI influencer: a fictional person who appears in entertainment posts. I want to see what is possible with AI-generated content and whether someone who does not actually exist can attract a real audience.',
    techStack: [{ name: 'Muse', logo: '/logos/tech/muse.svg' }, { name: 'Higgsfield', logo: '/logos/tech/higgsfield.png' }],
    toolsLabel: 'Tools',
    sections: [
      { title: 'What I want to learn', paragraphs: [
        'The question I am exploring is how to make this kind of content go viral. I want to learn what makes people pay attention to entertainment posts from an AI-generated influencer and what approach gives the content the best chance of spreading.',
      ] },
      { title: 'Where the project stands', paragraphs: [
        'This project is in progress. I am still experimenting with Muse and Higgsfield to figure out how to create the influencer and develop the posts.',
      ] },
    ],
  },
];
