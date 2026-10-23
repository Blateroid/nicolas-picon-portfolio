import { ventureProjects } from '@/lib/venture-projects';
import { mentem } from '@/lib/mentem';
import { angelInvesting } from '@/lib/angel-investing';
import { mbaExperience } from '@/lib/mba';
import { aiSpark } from '@/lib/ai-events';
import { volunteering } from '@/lib/volunteering';
import { leadership } from '@/lib/leadership';
import { awards } from '@/lib/awards';
import { contactEmail, experience } from '@/lib/profile';
import { publicProjects } from '@/lib/projects';
import { projectSummaries } from '@/lib/project-summaries';
import { stickerBuddy } from '@/lib/sticker-buddy';
import { productExperiments } from '@/lib/product-experiments';
export const dynamic = 'force-static';
export function GET() {
  const text = `# Nicolas Picon

> Portfolio of product, technology, business, and research commercialization work.

## Overview
- [Home](/): Experience, volunteering, education, interests, and projects.
- [About](/about): Profile and approach.
- Contact: ${contactEmail} · [LinkedIn](https://www.linkedin.com/in/npicon)
- [Structured portfolio](/portfolio.json): Same public summaries and experience highlights as the website, in JSON. Relative URLs resolve against this site.

## Experience
${experience.map(item => `- [${item.company}](/experience/${item.slug}): ${item.role}. ${item.dates}.`).join('\n')}

## MBA experience
- [${mbaExperience.title}](${mbaExperience.url}): ${mbaExperience.summary} ${mbaExperience.vcic.description}

## Leadership
${leadership.map(item => `- [${item.organization}](/leadership/${item.slug}): ${item.role}. ${item.term}. ${item.summary}`).join('\n')}

## Volunteering
${volunteering.map(item => `- [${item.organization}](${item.url}): ${item.role}. ${item.dates}. ${item.summary}`).join('\n')}

## Awards
${awards.map(item => `- ${item.url ? `[${item.title}](${item.url})` : item.title}: ${item.organization}. ${item.note}.`).join('\n')}

## Events
- [${aiSpark.title}](${aiSpark.url}): ${aiSpark.date}. ${aiSpark.summary}

## Projects
${ventureProjects.map(project => `- [${project.title}](/projects/${project.slug}): ${project.category}. ${project.summary}`).join('\n')}
- [${mentem.title}](${mentem.url}): ${mentem.summary}
- [${angelInvesting.title}](${angelInvesting.url}): ${angelInvesting.category}. ${angelInvesting.summary}
${publicProjects.map(item => `- [${item.title}](/projects/${item.slug}): ${item.summary}`).join('\n')}
- [Career Ally resume-tailoring skill](/projects/your-career-ally#resume-tailoring): Standalone Claude skill adapted for GPT; prototype integration planned. [Download public adaptation](/skills/resume-tailor.md).
- [${stickerBuddy.title}](/projects/${stickerBuddy.slug}): ${stickerBuddy.summary}
${projectSummaries.filter(item => item.slug === 'blue-ember').map(item => `- [${item.title}](/projects/${item.slug}): ${item.summary}`).join('\n')}
${productExperiments.map(item => `- [${item.title}](/projects/${item.slug}): ${item.stage}. ${item.summary}`).join('\n')}

${projectSummaries.filter(item => 'href' in item).map(item => `- [${item.title}](${'href' in item ? item.href : `/projects/${item.slug}`}): ${'attribution' in item ? item.attribution : ''}. ${item.summary}`).join('\n')}

## Project previews
${projectSummaries.filter(item => !('href' in item) && !ventureProjects.some(project => project.slug === item.slug) && item.slug !== mentem.slug && item.slug !== angelInvesting.slug && item.slug !== stickerBuddy.slug && item.slug !== 'blue-ember' && !productExperiments.some(project => project.slug === item.slug)).map(item => `- [${item.title}](/projects/${item.slug}): Placeholder; project details coming soon.`).join('\n')}

## Reading context
The Husky Hackathon dossier is an unfunded proposal, not secured sponsorship. AI Day attendance covers the whole event; student prototypes are summarized anonymously. TheraT is experience, not a project listing. Its work later became paid. The Angel Investing Practicum is academic. Projected savings and proposed investments are not realized results. Source documents and contact details beyond the public profile are not available through this directory.
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
