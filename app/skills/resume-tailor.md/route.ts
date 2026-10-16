import { publicResumeSkill } from '@/lib/resume-tailoring';
export const dynamic = 'force-static';
export function GET() {
  return new Response(publicResumeSkill, { headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Content-Disposition': 'attachment; filename="SKILL.md"' } });
}
