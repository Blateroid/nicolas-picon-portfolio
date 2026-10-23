type Slide = { src: string; alt: string; caption: string };
export type VentureProject = {
  slug: string; title: string; symbol: string; category: string; role: string; dates: string;
  summary: string; hook: string; introduction: string;
  recognition?: string;
  artwork?: { src: string; alt: string; credit: string; href: string };
  mentor?: { name: string; href: string };
  contextLinks?: { label: string; href: string }[];
  mockup?: { src: string; alt: string; width: number; height: number; caption: string };
  sections: { title: string; paragraphs: string[] }[];
  pitch: { title: string; description: string; pdf: string; slides: Slide[] };
  onePager?: { src: string; pdf: string; width: number; height: number; alt: string; caption: string };
};
function slides(slug: string, captions: string[]): Slide[] {
  return captions.map((caption, index) => ({
    src: `/projects/${slug}/slide-${String(index + 1).padStart(2, '0')}.jpg`,
    alt: `${slug === 'ditto' ? 'Ditto' : 'ShiftSpark'} pitch slide ${index + 1}: ${caption}.`, caption,
  }));
}

export const ventureProjects: VentureProject[] = [
  {
    slug: 'ditto', title: 'Ditto', symbol: '👥', category: 'UW Foster MBA · Technology commercialization',
    role: 'Commercialization project team member', dates: 'Spring 2025',
    summary: 'A UW Foster commercialization project exploring a recruiting business for Microsoft Research’s Ditto technology, including company-culture screening as a key hypothesis.',
    hook: 'Turning Microsoft’s personalized meeting-agent research into a recruiting concept that could help candidates and companies understand how they would work together.',
    artwork: { src: '/projects/ditto/ditto-pokemon.png', alt: 'Ditto, the purple Pokémon.', credit: 'Ditto artwork: Pokémon', href: 'https://www.pokemon.com/us/pokedex/ditto' },
    mentor: { name: 'Taylor Black', href: 'https://www.linkedin.com/in/blacktaylor/' },
    introduction: 'Our starting point was Microsoft Research’s Ditto: a personalized digital agent designed to represent someone in a meeting they could not attend. The research asked what it would mean for an agent to resemble a person, sound like them, and contribute on their behalf. Our class explored a different question: where could that technology become a business?',
    contextLinks: [
      { label: 'Read “Sending a Ditto to a Meeting You Can’t Attend” · ACM CSCW Blog ↗', href: 'https://medium.com/acm-cscw/sending-a-ditto-to-a-meeting-you-cant-attend-experiences-with-an-autonomous-ai-agent-for-meetings-1caea95eba9e' },
    ],
    sections: [
      { title: 'From Microsoft research to a business application', paragraphs: [
        'Ditto came from researchers at Microsoft Research and the MIT Media Lab. Its original purpose was meeting representation: a personalized agent could stand in when scheduling conflicts or other commitments kept someone away. The 2024 research explored presence, trust, and the risks of having an agent speak for another person. It included human-assisted simulations, so it was an exploration of the experience rather than proof of a fully autonomous commercial product.',
        'When the technology was presented to our Spring 2025 class, it was described as being in “cold storage”: research with potential, but without an active commercial path for us to build on. Our assignment was to work with the technology’s team to identify a business application, a customer, and a model that could make it commercially useful.',
        'The course was led by Taylor Black, who also worked at Microsoft. I worked with four classmates on the commercialization proposal. We were responsible for the business application and market analysis around the existing technology.',
      ] },
      { title: 'Starting with a technology, then finding the customer', paragraphs: [
        'Our team focused on early recruiting conversations. Recruiters faced large application pools and limited time for individual conversations, while candidates had little opportunity to show more than a resume. A personalized hiring-manager agent offered a specific application for Ditto’s ability to represent someone in a conversation.',
        'We proposed using that agent for preliminary interviews: asking consistent questions, answering approved questions about the role, and returning a useful summary to the recruiter. The business case depended on giving recruiters more time for promising candidates while making the first interaction more informative for applicants.',
      ] },
      { title: 'Designing for both sides of the conversation', paragraphs: [
        'The proposed value went beyond handling a higher volume of interviews. Candidates would have another way to explain their experience and ask questions, while recruiters would receive a summary to help decide who to spend time with next.',
        'We centered the concept on personalization and reciprocity: the agent would reflect the hiring manager, and what it learned from a candidate would return to the human recruiter. The intended role was an initial screening conversation that supported later human interviews.',
      ] },
      { title: 'The key hypothesis: could it screen for company culture?', paragraphs: [
        'One of our most important success hypotheses was whether Ditto could help screen for the culture part of a company. A resume can describe experience, but it tells a hiring team much less about how someone collaborates, handles feedback, or approaches the day-to-day expectations of a workplace. We believed that a useful conversation about those dimensions could make the recruiting application much more valuable.',
        'The opportunity was two-way. A candidate could learn about the team’s working style, while the hiring team could receive concrete examples of how the candidate preferred to work. If Ditto could surface that information reliably, we believed it would be a strong reason for a company to adopt the product.',
        'That hypothesis would need careful definition and testing. “Culture” would have to mean explicit, job-relevant behaviors and expectations, rather than similarity to the interviewer or a vague personality score. The agent’s summary would need to show the evidence behind its observations and leave the hiring decision with people. We did not validate an automated culture-screening capability in the course project.',
      ] },
      { title: 'What would have to work for the business to succeed', paragraphs: [
        'Personalization had to be useful beyond appearance. The agent would need an accurate understanding of the hiring manager, role, and team, stay within approved information, and acknowledge questions it could not answer. A convincing avatar alone would not establish that it could conduct a useful interview.',
        'Reciprocity was central to our pitch: what the agent learned had to return to the human recruiter in a clear, accurate, actionable form. Interview summaries needed to preserve a candidate’s meaning and connect observations to the role’s requirements so the next human conversation could build on them.',
        'Candidate trust and workflow adoption were equally important. Applicants needed to know they were speaking with an AI agent, understand how their information would be used, and have a route to a person. Recruiters needed the output inside their applicant-tracking workflow, without creating another system to maintain.',
        'The proposed pilots would need to test recruiter time saved, candidate experience, summary accuracy, and the usefulness of the screening conversation. Culture-related screening would also need checks for bias and accessibility. Those were conditions for making the concept credible, not results we had already demonstrated.',
      ] },
      { title: 'Making the commercial case', paragraphs: [
        'We defined an initial customer segment of large technology employers with in-house recruiting teams and high application volumes. The work covered the customer journey, market sizing, alternatives, and positioning against human recruiters and other AI interview tools.',
        'Our proposed roadmap moved from product adaptation to enterprise pilots, feedback, and broader expansion. We identified candidate experience, recruiter effort, and integration with applicant-tracking systems as things the product would need to address. The pitch included a proposed $700,000 seed funding ask for the team, MVP development, pilot deployments, and operating expenses.',
      ] },
      { title: 'My contribution', paragraphs: [
        'I interviewed recruiters and HR managers to understand their pain points and challenges in the hiring process. I synthesized those conversations to help refine our value proposition: where Ditto could be useful, which problems it should address, and how it could support recruiting teams and candidates.',
        'As a team, we also interviewed the researchers directly to better understand the technology and inform our proposed business application. I helped develop the fundraising ask and the case for how the proposed $700,000 would support MVP development, pilot deployments, and operating expenses.',
        'The work was a commercialization exercise around existing technology. The recruiting application, pilots, funding ask, and expansion timeline were our team’s proposals.',
      ] },
      { title: 'What I learned', paragraphs: [
        'A technology can support many use cases, but a commercial proposition has to choose one. For Ditto, that meant being specific about the recruiting step we wanted to improve and what a better experience would mean for candidates as well as hiring managers.',
      ] },
    ],
    pitch: {
      title: 'The commercialization pitch',
      description: 'Our course presentation covers the recruiting use case, customer journey, market analysis, positioning, and proposed path to a spinout. Market figures, benefits, and milestones are estimates and proposals from the course project.',
      pdf: '/projects/ditto/ditto-pitch.pdf',
      slides: slides('ditto', ['Ditto and the UW course team', 'Recruiter and candidate challenges', 'Recruiter perspective in the pitch', 'Candidate perspective in the pitch', 'The hiring concept', 'Personalization and reciprocity', 'Proposed recruiting use case', 'Customer journey map', 'Estimated market opportunity', 'Competitive positioning', 'Proposed commercialization roadmap', 'Proposed seed funding ask', 'Closing slide']),
    },
  },
  {
    slug: 'shiftspark', title: 'ShiftSpark', symbol: '✨', category: 'Health innovation · Business strategy',
    role: 'Business strategy contributor', dates: '2025–2026',
    summary: 'A clinician-led concept for support during nursing shifts, with a business strategy connecting nurse adoption to hospital workforce needs.',
    hook: 'A workplace wellbeing app concept that brings nurses emotional check-ins, peer support, and practical tools during their shifts.',
    recognition: 'HIC · Best Digital Health Idea · $2,500 prize',
    mockup: {
      src: '/projects/shiftspark/slide-08.jpg', width: 1600, height: 900,
      alt: 'Six ShiftSpark mobile prototype screens: home check-in, ShiftTalk peer support, learning library, personal trends, calendar integration, and clinical tips.',
      caption: 'The team’s prototype screens explore how support could fit into a nursing shift. Open the image to view the mockups at full size.',
    },
    introduction: 'I worked with Stephanie Stoll and Laura Alford on ShiftSpark, a concept for emotional support and peer connection during nursing shifts. They brought frontline healthcare experience. I helped create the business strategy: who would use it, who would pay for it, and how a useful experience for nurses could become a sustainable offering for hospitals.',
    sections: [
      { title: 'The gap was in the timing', paragraphs: [
        'The team started with the emotional realities of clinical work: difficult patient interactions, loss, heavy workloads, and the pressure to keep going. Support programs could exist without being available in the moment a nurse needed them.',
        'ShiftSpark’s concept was to fit support into the rhythm of a shift. Brief check-ins, grounding exercises, reflection, and peer recognition would be available around natural pauses, including nights and weekends. The aim was to make support easy to reach without creating another task nurses had to complete.',
      ] },
      { title: 'Listening to nurses and hospital leaders', paragraphs: [
        'The team’s discovery included frontline nurses, nurse leaders, workforce-wellbeing staff, founders, and investors. Their perspectives shaped two related needs: nurses wanted private, low-effort support and peer connection; leaders wanted useful signals about workforce strain.',
        'That created an important design boundary. The proposed leadership view would show aggregated, de-identified trends at the unit level. Individual reflection and support needed to feel safe to use, rather than becoming a way for managers to monitor a particular nurse.',
      ] },
      { title: 'Separating the user from the buyer', paragraphs: [
        'My strategy contribution focused on connecting the nurse’s experience to a hospital purchasing decision. Nurses would use the product, while nursing executives, workforce leaders, and wellbeing teams would evaluate whether it belonged in the organization’s support programs.',
        'The proposed business model combined free core access for individual clinicians with paid premium features and hospital-sponsored licenses. The plan used an $8 monthly premium price as a starting assumption, with volume pricing for health systems. Retention and workforce wellbeing were the proposed business case, with the financial benefits still to be tested.',
      ] },
      { title: 'Building a path from interest to adoption', paragraphs: [
        'We developed two routes to market. One would reach nurses directly through a free core experience and build evidence of engagement. The other would work with hospital leadership on a pilot, with an internal wellbeing champion supporting adoption.',
        'The proposed pilot would test whether the tool fit into daily work and delivered value before a broader contract. The business strategy also addressed pricing, market sizing, funding needs, and the costs of product development, security, implementation, and evaluation.',
      ] },
      { title: 'Turning the strategy into a concept people could explore', paragraphs: [
        'The team’s plan describes a Lovable demo with a mobile prototype and leadership dashboard mockups. It illustrates check-ins, a debrief after a difficult event, peer recognition through “Sparks,” and unit-level trends.',
        'The pitch and one-pager bring the product idea and business case together. Their market estimates, pricing, revenue projections, and proposed integrations describe the plan for the venture.',
      ] },
      { title: 'What I took from the project', paragraphs: [
        'A clear business strategy had to account for both the person using the product and the organization paying for it. For ShiftSpark, an attractive hospital business case would mean little if nurses saw the app as more work or did not trust how their information was used.',
      ] },
    ],
    pitch: {
      title: 'The ShiftSpark pitch',
      description: 'Selected slides from the project pitch cover the concept, customer discovery, business model, pricing, and development assumptions. Financial returns and product capabilities reflect the proposal, not measured results from a hospital deployment.',
      pdf: '/projects/shiftspark/shiftspark-pitch.pdf',
      slides: slides('shiftspark', ['ShiftSpark concept', 'The support gap described in the pitch', 'Proposed shift-based support experience', 'Illustrative hospital business case', 'Estimated market opportunity', 'Alternatives considered by the team', 'Team customer-discovery themes', 'Mobile prototype screens', 'Proposed business model', 'Pricing assumptions', 'Market-sizing assumptions', 'Five-year revenue projection', 'Adoption and privacy risks', 'Research considered by the team', 'Proposed AI development stages', 'Proposed intellectual-property strategy', 'Team’s proposed wellness positioning']),
    },
    onePager: {
      src: '/projects/shiftspark/one-pager.jpg', pdf: '/projects/shiftspark/shiftspark-one-pager.pdf',
      width: 1500, height: 2122, alt: 'ShiftSpark one-pager showing the in-shift support concept, prototype screens, proposed features, revenue model, and market estimates.',
      caption: 'The ShiftSpark concept at a glance. Pricing and market figures are planning assumptions.',
    },
  },
];

const slugs = ventureProjects.map(project => project.slug);
if (new Set(slugs).size !== slugs.length || slugs.some(slug => !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug))) throw new Error('Invalid or duplicate venture project slug');
