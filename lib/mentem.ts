import type { Discovery } from '@/lib/discovery';

export const mentem = {
  slug: 'mentem-lab', title: 'Mentem.Lab', symbol: '🧠', url: '/projects/mentem-lab',
  category: 'Mental-health venture concept', role: 'Business Lead',
  dates: 'Oct 2024 – Mar 2025', location: 'Seattle, WA',
  summary: 'A depression-anxiety care navigation platform for primary care providers.',
  linkedin: 'https://www.linkedin.com/company/mentem-lab/about/',
  hook: 'What happens after a patient says they need help?',
  introduction: 'We started with the idea of a mental-health chatbot. Conversations with clinicians led us toward a different product: a second brain for primary care providers, helping them prepare for conversations about depression and anxiety and navigate the next steps in care.',
  sections: [
    { title: 'Starting with a problem that felt too big to ignore', paragraphs: [
      'We saw depression and anxiety as a widespread and growing problem, and wanted to make support easier to reach. Our first idea was a patient-facing chatbot that people could turn to when they needed help.',
      'We explored Nucleate and applied to its accelerator. We were not selected, but we were still excited to keep working. I led the business and finance work, built the business plan and pitch deck, and recruited two engineers and a designer. Our team went on to the finals of the Hollomon Health Innovation Challenge and also presented at the social venture competition at Seattle Pacific University.',
    ] },
    { title: 'From a chatbot to supporting the clinician', paragraphs: [
      'The more we talked to care providers, the more we questioned the responsibility we would be taking on with a chatbot providing mental-health services. Liability and patient safety became central concerns for our team. We shifted toward supporting doctors and therapists, with the professional responsible for care decisions.',
      'Across nine discovery interviews, we explored how clinicians identified concerns, handled screening, and helped patients find support. We spoke with an OB-GYN, a physician caring for high-risk pregnancies, a primary care physician, and other care stakeholders. Their day-to-day workflows gave us a more specific problem to solve.',
    ] },
    { title: 'A referral does not mean someone can get care', paragraphs: [
      'An OB-GYN described how hard it was to connect patients with mental-health care: clinics were overwhelmed, insurance narrowed the options, and some patients could not wait three months for an appointment. Screening could identify a concern without giving the patient a workable next step.',
      'That changed our thinking again. We explored care navigation: helping people find therapists or other professionals based on availability and insurance coverage. Access varied by setting. The primary care physician we interviewed reported that in-clinic social workers were generally available, so we needed to understand each practice’s resources instead of assuming every clinic had the same gap.',
    ] },
    { title: 'Where we landed: a second brain for primary care', paragraphs: [
      'We ultimately focused on primary care providers who were already discussing mental health with patients alongside many other concerns. Our proposed platform would bring depression and anxiety screening into the pre-appointment checklist, with patients able to complete it at home. The goal was to reduce routine preparation during the visit and give the clinician more time for the conversation.',
      'The provider view would surface concerns to discuss, changes since the previous check-in, and patients needing attention. Care navigation would help the clinician consider referrals, available services, and insurance fit. We also envisioned guidance and mental-health resources the clinician could review and share when a specialist referral was not the next step.',
      'The product direction was a depression-anxiety care navigation platform for primary care providers: a second brain for preparing, following up, and deciding where a patient could get support. The clinician would interpret the information and decide what care was appropriate.',
    ] },
    { title: 'More than a score', paragraphs: [
      'We wanted the clinician to understand the context behind a patient’s answers. A questionnaire score alone would not explain what had changed in someone’s life, why a question was hard to answer, or what support they could actually access.',
      'The proposed conversational screening would let patients clarify their responses and add that context. A concise summary would bring the relevant information into the appointment and, when needed, into the referral handoff. The goal was to help the provider prepare without having to read an entire chat.',
    ] },
    { title: 'Learning what clinics would actually use', paragraphs: [
      'The team’s later concept walkthrough with a psychiatrist in April 2025 raised a practical challenge: another dashboard could become another place to sign in, another record to update, and another source of conflicting information. Some of the proposed features already existed in the clinic’s electronic health record.',
      'The more useful opportunities were specific: make outstanding follow-up tasks visible, connect them to the right patient, and show actual assessment results clearly over time. The clinician also questioned who would review information arriving between appointments. Collecting more data would only help if someone had time and responsibility to act on it.',
      'That feedback sharpened the product question: where could the tool remove work from the clinic’s day? Integration with existing records and a clear follow-up workflow became essential design considerations.',
    ] },
  ],
  workflow: {
    title: 'The proposed patient-to-provider workflow',
    steps: [
      { title: 'Before the visit', description: 'The patient completes conversational screening at home as part of the appointment checklist, with room to clarify answers and explain what has changed.' },
      { title: 'Prepare the conversation', description: 'The provider reviews questionnaire results, a concise context summary, and concerns to discuss, alongside the existing patient record.' },
      { title: 'Choose the next step', description: 'The clinician decides on care, resources, or referral options, considering the patient’s needs, preferences, insurance, and available services.' },
      { title: 'Keep the follow-up visible', description: 'Planned check-ins and outstanding tasks help the care team see what needs attention between appointments.' },
    ],
  },
  pitch: {
    title: 'The AI Ignite pitch',
    description: 'Our 2025 AI Ignite deck presents PuLse, the Mentem.Lab concept for screening, care navigation, and follow-up in primary care. The product capabilities, market estimates, and financials reflect the proposal and projections at the time.',
    pdf: '/projects/mentem-lab/ai-ignite/mentem-lab-ai-ignite-2025.pdf',
    slides: [
      'Mentem.Lab · AI Ignite 2025',
      'The proposed problem: screening, treatment matching, and follow-up',
      'Mentem.Lab mission and vision',
      'PuLse product concept with provider and patient screens',
      'Proposed screening, treatment decision support, and asynchronous care',
      'Strategic landscape and potential partner pathways',
      'Proposed differentiation and primary care focus',
      'Leadership team',
      'Advisors',
      'The team’s rationale for timing',
      'Estimated behavioral health market opportunity',
      'Team-reported company status at the time of the pitch',
      'Proposed development and validation plan',
      'Funding ask and alternative development scenarios',
      'Financial projections and assumptions',
      'Mentem.Lab contact slide',
      'Illustrative patient journey',
      'Proposed pricing strategy',
      'Pitch references',
    ].map((caption, index) => ({
      src: `/projects/mentem-lab/ai-ignite/slide-${String(index + 1).padStart(2, '0')}.jpg`,
      alt: `AI Ignite 2025 slide ${index + 1}: ${caption}.`, caption,
    })),
  },
  discovery: {
    stat: '9', statLabel: 'discovery interviews with care providers',
    who: 'We traced the work from the patient’s questionnaire through scoring, the clinical conversation, referral, and follow-up.',
    heardLabel: 'WHAT WE HEARD', changedLabel: 'HOW IT SHAPED THE CONCEPT',
    findings: [
      { heard: 'One clinician described a paper questionnaire, nurse scoring, manual entry, and a separate handoff to a social worker.', changed: 'We focused on preparation before the appointment and a concise provider view that would fit the existing workflow.' },
      { heard: 'An OB-GYN described follow-up that depended on staff remembering, alongside difficulty finding services covered by insurance.', changed: 'We explored follow-up support and care navigation that considered both availability and coverage.' },
      { heard: 'A physician wanted to understand urgency and what had changed since the previous conversation.', changed: 'We proposed surfacing changes and concerns for the clinician to review before deciding on the next step.' },
    ],
  } satisfies Discovery,
  photos: [
      { src: '/experience/mentem-lab/hollomon-team.jpg', alt: 'Four Mentem.lab team members at their booth under a Hollomon Health Innovation Challenge sign.', caption: 'Our team at the Hollomon Health Innovation Challenge.' },
      { src: '/experience/mentem-lab/buerk-center-team.jpg', alt: 'Four Mentem.lab team members beside a Buerk Center for Entrepreneurship banner and a Hollomon Health Innovation Challenge sign.', caption: 'With the team at the Hollomon Health Innovation Challenge.' },
      { src: '/experience/mentem-lab/hollomon-booth.jpg', alt: 'The Mentem.lab booth with two posters covering the problem, market, go-to-market strategy, solution, and traction.', caption: 'Our Mentem.lab booth.' },
      { src: '/experience/mentem-lab/social-venture-team.jpg', alt: 'Three Mentem.lab team members standing between their posters at the Seattle Pacific University social venture competition.', caption: 'At the social venture competition at Seattle Pacific University.' },
    ],
  closing: {
    title: 'What I took from the project',
    paragraphs: [
      'The biggest change was in how we defined the customer and the job to be done. We began with a broad ambition to help people through a chatbot. Listening to clinicians brought us to a specific workflow: help a primary care provider see what needs a conversation and connect the patient with an appropriate next step.',
    ],
  },
};
