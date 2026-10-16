import { mbaExperience } from '@/lib/mba';
import { aiSpark, aiSparkPhotos, techStory, techArtifacts, hackathonSubmissions } from '@/lib/ai-events';
import { volunteering } from '@/lib/volunteering';
import { leadership } from '@/lib/leadership';
import { awards } from '@/lib/awards';
import { contactEmail, education, experience, interests } from '@/lib/profile';
import { publicProjects } from '@/lib/projects';
import { theratStory, theratPhotos, theratPitchSlides } from '@/lib/therat';
import { projectSummaries } from '@/lib/project-summaries';
import { stickerBuddy } from '@/lib/sticker-buddy';
import { productExperiments } from '@/lib/product-experiments';
export const dynamic = 'force-static';
export function GET() {
  return Response.json({
    name: 'Nicolas Picon', profile: '/about', email: contactEmail, linkedin: 'https://www.linkedin.com/in/npicon',
    experience: experience.map(item => ({ ...item, url: `/experience/${item.slug}`, logo: `/logos/${item.logo}`, ...(item.slug === 'therat' ? { story: theratStory, photos: theratPhotos, pitchSlides: theratPitchSlides } : {}) })),
    leadership: leadership.map(item => ({ ...item, url: `/leadership/${item.slug}`, institution: 'University of Washington · Foster School of Business', ...(item.slug === 'technology' ? { story: techStory, artifacts: techArtifacts, participantSubmissions: hackathonSubmissions } : {}) })),
    volunteering, awards,
    events: [{ ...aiSpark, photos: aiSparkPhotos }],
    education, mbaExperience, interests,
    projects: [...publicProjects.map(item => ({ title: item.title, summary: item.summary, role: item.role, designTools: item.designTools, takeaway: item.takeaway, discovery: item.discovery, url: `/projects/${item.slug}`, sources: item.sources, ...(item.photos?.length ? { photos: item.photos } : {}) })), ...projectSummaries.filter(item => 'href' in item).map(item => ({ title: item.title, summary: item.summary, url: 'href' in item ? item.href : `/projects/${item.slug}`, attribution: 'attribution' in item ? item.attribution : undefined }))],
    personalProjects: [{ ...stickerBuddy, url: `/projects/${stickerBuddy.slug}`, status: 'Built and used by Nicolas for his own album' }, ...productExperiments.map(project => ({ ...project, url: `/projects/${project.slug}`, status: project.stage })), ...projectSummaries.filter(item => item.slug === 'blue-ember').map(item => ({ ...item, url: `/projects/${item.slug}`, status: 'Personal project' }))],
    projectPreviews: projectSummaries.filter(item => !('href' in item) && item.slug !== stickerBuddy.slug && item.slug !== 'blue-ember' && !productExperiments.some(project => project.slug === item.slug)).map(item => ({ ...item, url: `/projects/${item.slug}`, status: 'Placeholder — project details coming soon' })),
  });
}
