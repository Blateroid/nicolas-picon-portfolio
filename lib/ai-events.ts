export const techStory = {
  summary: 'Organized AI building experiences for Foster MBA students, from redesigning a cross-program hackathon to leading a hands-on vibe-coding session.',
  paragraphs: [
    'As VP of Special AI Events for the MBA Tech Club, I wanted to give business students a practical way to build with AI. We started by trying to revive a business-school hackathon that had stopped before COVID. The goal was to bring MBA students together with software engineers and students from other programs, so business judgment and technical skills could turn an idea into a working prototype.',
    'AI gave us a reason to rethink who could participate and how teams would work. With vibe coding, where you describe what you want in plain language and an AI tool writes the code, business students could help build the product, not only define the problem, customer, and business value. We designed the challenge so people from any background could contribute, whether or not they could code.',
    'I formed an organizing team, created a tracker, delegated responsibilities, and coordinated challenge design, participant experience, partnerships, and funding. We contacted the previous hackathon organizers to learn from their experience and understand what it would take to bring the event back. Our proposed three-day format moved from an initial prototype to building with mentor support, then final pitches and judging. I developed a sponsorship proposal to explain the experience and the ways partners could support it.',
    'After defining the format, we approached clubs and companies. We built partnerships with groups willing to help, but did not secure the financial sponsorship needed for an event at that scale. I had to separate the goal, getting students to build with AI, from the budget and logistics of the original format. We reduced the scope and brought the experience into the Foster MBA community through smaller vibe-coding hackathons.',
    'In April 2026, I led a vibe-coding session with the challenge “Build the Tool You Wish You Had in Your MBA.” Starting with a familiar problem made it easier for students to judge whether their idea would be useful. A workshop introduced the tools, followed by time to build with Lovable, an AI-assisted app builder. Participants then submitted a live app link and a short demo document explaining the problem, their solution, and how it worked.',
    'Judging used four criteria: problem quality (25%), product thinking (30%), functionality (25%), and creativity and ambition (20%). Finalists presented their work and explained what they had built and why someone would use it. The ideas covered recruiting, scheduling, campus information, personal productivity, and other needs students knew from their own lives.',
  ],
  lesson: 'When funding fell through, I asked which parts of the experience students actually needed. A familiar problem, accessible tools, and a chance to show their work mattered more than a large event. A smaller scope kept those three things and gave us a format we could run.',
  followOn: 'That work led to my nomination to the Foster AI Day organizing committee, where I led the hackathon for AI Spark. The day included speakers, workshops, networking, and hands-on building. More than 150 students attended, and the hackathon awarded over $1,000 in prizes.',
};
export const techArtifacts = [
  { title: 'Sponsorship proposal', url: '/leadership/technology/sponsor-dossier-excerpt.pdf' },
  { title: 'Challenge brief', url: '/leadership/technology/vibesprint-onepager.pdf' },
  { title: 'Session slides', url: '/leadership/technology/vibe-coding-hackathon.pptx' },
];
export const sponsorPages = [1,2,3,4].map(number => ({ src: `/leadership/technology/sponsor-${number}.png`, alt: `Husky Hackathon sponsorship proposal, page ${number}`, caption: `Proposed three-day hackathon · page ${number} of 4` }));
export const hackathonSubmissions = [
  { title: 'Ski-pass comparison', description: 'Compared ski passes against destinations, budget, and expected ski days.' },
  { title: 'Recruiting workspace', description: 'Connected target companies, job opportunities, contacts, and next actions in one place.' },
  { title: 'Travel-cost dashboard', description: 'Explored exchange-rate and flight-price timing with mock data.' },
  { title: 'Slack activity dashboard', description: 'Organized mentions, channel activity, and topics relevant to MBA students.' },
  { title: 'Campus food-event feed', description: 'Used AI to organize food-event information from Slack messages.' },
  { title: 'AI writing-style assistant', description: 'Turned examples of someone’s work into reusable instructions for an AI writing tool.' },
  { title: 'Wellness companion', description: 'Paired short wellness activities with progress tracking for busy students.' },
  { title: 'Career-event discovery', description: 'Filtered event opportunities by career interests.' },
  { title: 'Assignment planner', description: 'Turned pasted Canvas assignment information into deadline cards.' },
  { title: 'Personalized voice experience', description: 'Used conversational AI and text-to-speech for personalized voice interactions.' },
  { title: 'Weekly planning assistant', description: 'Built a weekly plan from a calendar screenshot, tasks, and constraints.' },
  { title: 'Shared calendar', description: 'Helped friends, family, and teammates find time together.' },
  { title: 'Voice journal', description: 'Organized spoken reflections and turned them into illustrated stories.' },
];
const aiSparkSponsors = ['UW Foster School of Business', 'Lovable', 'Databricks', 'T-Mobile'];
export const aiSpark = {
  sponsors: aiSparkSponsors,
  title: 'AI Spark · Foster AI Day', date: 'May 15, 2026', isoDate: '2026-05-15', role: 'AI Day Committee · Hackathon Lead', url: '/events/ai-spark',
  summary: 'Led the hackathon effort within Foster’s student-led day of AI speakers, workshops, networking, and hands-on building.',
  context: 'After the MBA Tech Club hackathon work, I was nominated to join the Foster AI Day committee and lead its hackathon. AI Spark let students use AI on a real business problem instead of only talking about it.',
  contributions: [
    { title: 'Format, challenge & evaluation', text: 'I created the hackathon format, problem statement, schedule, submission expectations, and judging criteria. The challenge was open to beginners: students applied AI tools to a concrete business problem and showed a prototype.' },
    { title: 'Project planning & team coordination', text: 'I planned the work and coordinated the organizing team. I also sequenced the workshop, build period, judging, presentations, and day-of operations.' },
    { title: 'Judges, sponsors & workshop support', text: 'I reached out to judges and sponsors and found a speaker for a workshop. Unlike the earlier large-scale hackathon proposal, this time we secured sponsors.' },
    { title: 'Marketing, flyer & website', text: 'I helped with marketing and created the hackathon flyer with generative AI using Gemini Nano Banana Pro. With the organizing team, I also helped build the Foster AI Day website by vibe coding (describing what you want in plain language and letting an AI tool write the code) in Lovable, then maintained and updated its hackathon section.' },
    { title: 'Day-of delivery', text: 'I led hackathon operations on the day and coordinated the team through the transitions between learning, building, judging, and presentations.' },
  ],
  outcomes: [
    { value: '150+', label: 'Students attended AI Day', detail: 'The day included speakers, workshops, networking, and hands-on AI learning.' },
    { value: '$1K+', label: 'Hackathon prizes awarded', detail: 'Prizes went to hackathon participants for their work.' },
    { value: 'Sponsor support', label: 'Secured for the event', detail: `The hackathon was sponsored by ${aiSparkSponsors.slice(0, -1).join(', ')}, and ${aiSparkSponsors.at(-1)}.` },
  ],
  websiteContribution: 'I helped build the Foster AI Day website as part of a team vibe-coding in Lovable. I maintained and updated the hackathon section, which promoted the event and explained the challenge and the day’s format to participants.',
  websiteTools: [{ name: 'Lovable', logo: '/logos/tech/lovable.svg' }],
  flyer: { description: 'I created the flyer with generative AI using Gemini Nano Banana Pro. It tells students that no coding experience is required, that the problem is a real business one, and that they will build with AI tools.', src: '/events/ai-spark/hackathon-flyer.jpg', alt: 'AI Spark vibe-coding hackathon flyer: May 15, 2026, Founders Hall Room 370; beginner-friendly, no coding experience required, and over $1,000 in prizes.', caption: 'The hackathon flyer: May 15, 2026, Founders Hall Room 370, beginner-friendly.' },
  lesson: 'A tool on its own was not enough. Participants needed a clear problem, a manageable build window, workshop support, and explicit judging criteria to get from curiosity to something they could demonstrate.',
  sources: [
    { title: 'Explore the hackathon', url: 'https://foster-aispark.live/hackathon' },
    { title: 'Foster AI Day website', url: 'https://foster-aispark.live/' },
    { title: 'UW Foster LinkedIn post', url: 'https://lnkd.in/p/egA9cGrf' },
    { title: 'Event Instagram post', url: 'https://www.instagram.com/p/DXISfpxjlfe/' },
  ],
};
export const aiSparkPhotos = [
  { file: 'organizing-team', alt: 'The Foster AI Day organizing team gathered with AI Spark banners and posters.', caption: 'The organizing team behind AI Spark.' },
  { file: 'speaker', alt: 'A speaker addressing the audience in front of an AI Spark presentation.', caption: 'One of the AI Day talks.' },
  { file: 'speaker-closeup', alt: 'A speaker at the lectern with AI Spark projected behind him.', caption: 'A speaker at Foster AI Day.' },
  { file: 'hackathon-room', alt: 'Hackathon participants gathered with laptops in the Founders Hall classroom.', caption: 'The hackathon in Founders Hall.' },
  { file: 'room-audience', alt: 'Participants and judges seated in the hackathon classroom.', caption: 'Participants and judges in the room.' },
  { file: 'audience', alt: 'Rows of participants watching the front of the hackathon room.', caption: 'Following along from the seats.' },
  { file: 'demo', alt: 'Two participants demonstrating their work at the front of the classroom.', caption: 'A team demoing its prototype.' },
  { file: 'team-presentation', alt: 'A team presenting its solution with a problem overview projected behind them.', caption: 'A team walking through its problem and solution.' },
  { file: 'coordination', alt: 'Nicolas at a laptop alongside another person in the AI Spark hackathon room.', caption: 'Me during the hackathon.' },
  { file: 'event-banner', alt: 'AI Spark event banner outside a room with an audience.', caption: 'AI Spark, May 15, 2026.' },
  { file: 'team-building', alt: 'A group of hackathon participants working together around laptops.', caption: 'Teams building together.' },
  { file: 'collaboration', alt: 'Two participants discussing work at a laptop.', caption: 'Working through an idea.' },
  { file: 'prototype-team', alt: 'Hackathon participants smiling and discussing a laptop screen.', caption: 'A team reviewing its work.' },
  { file: 'team-work', alt: 'A team gathered around laptops in the hackathon classroom.', caption: 'Building during the hackathon.' },
  { file: 'participants', alt: 'Several rows of participants working on laptops in a classroom.', caption: 'The build session.' },
  { file: 'participant', alt: 'An AI Spark participant seated at a laptop.', caption: 'A participant at work.' },
  { file: 'husky', alt: 'An inflatable Husky mascot in front of a Foster School of Business backdrop.', caption: 'The Husky mascot showed up too.' },
].map(item => ({ src: `/events/ai-spark/${item.file}.jpg`, alt: item.alt, caption: item.caption }));
