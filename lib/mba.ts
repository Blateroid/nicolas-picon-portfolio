import { ventureProjects } from '@/lib/venture-projects';
import { mentem } from '@/lib/mentem';
import { angelInvesting } from '@/lib/angel-investing';
import { education, experience } from '@/lib/profile';
import { leadership } from '@/lib/leadership';
import { aiSpark } from '@/lib/ai-events';
import { publicProjects } from '@/lib/projects';

const foster = education[0];
const therat = experience.find(item => item.slug === 'therat')!;
const heyLily = publicProjects.find(item => item.slug === 'hey-lily')!;
export const mbaExperience = {
  url: '/education/foster-mba', title: 'My MBA at Foster', school: foster.school,
  degree: foster.degree, focus: foster.focus, graduation: foster.date,
  summary: 'My Foster MBA combined product work, venture investing, research commercialization, and student leadership, and I used each one outside the classroom.',
  vcic: { title: 'UW intramural Venture Capital Investment Competition (VCIC)', participation: 'First and second MBA years', description: 'I participated in UW’s intramural VCIC competition during both years of my MBA at Foster.', context: 'In VCIC, student teams act as a venture capital firm: they evaluate real startups, make investment decisions, and defend their recommendations to venture capital judges.', contribution: 'I analyzed the go-to-market (how a company reaches customers) and finance strategies of the companies our team evaluated.', updateNote: 'More details from both competitions coming soon.', source: 'https://foster.uw.edu/centers/buerk-ctr-entrepreneurship/entrepreneurship-competitions/venture-capital-investment-competition/' },
  coursework: [
    { title: 'Microsoft independent study', description: 'Designed and evaluated an LLM prompt for email-intent classification using real data.' },
    { title: 'Aerospace consulting', description: 'Developed cost-allocation analysis and pricing recommendations for aerospace components.' },
  ],
  projects: [...ventureProjects.map(project => ({ title: project.title, description: project.summary, url: `/projects/${project.slug}` })), { title: mentem.title, description: mentem.summary, url: mentem.url }, { title: heyLily.title, description: heyLily.summary, url: `/projects/${heyLily.slug}` }],
  investing: [{ title: angelInvesting.title, description: angelInvesting.summary, url: angelInvesting.url }],
  commercialization: [{ title: 'TheraT', description: therat.summary, url: `/experience/${therat.slug}` }],
  leadership: leadership.map(item => ({ title: item.organization, role: item.role, term: item.term, description: item.summary, url: `/leadership/${item.slug}` })),
  community: [{ title: aiSpark.title, role: aiSpark.role, description: aiSpark.summary, url: aiSpark.url }],
};
