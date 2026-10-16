# Portfolio brief

This is the short version of what the site is for. Read it before changing content or design. Detailed rules live in `SPEC.md`; continuation notes live in `working/HANDOFF.md`.

## Goal

Help Nicolas Picon get hired as a **product manager**. A visitor should leave knowing three things: he designs products around the people they are meant to help, he can go from user interviews to a working product to a business case, and he has an engineering background plus a UW Foster MBA (2026).

## Audience

1. Recruiters and hiring managers for PM roles. They skim on a phone, often for under a minute. The homepage has to work for them.
2. Interviewers who read one project in depth before a conversation.
3. AI tools that read `/llms.txt` and `/portfolio.json`. Both come from the same data as the pages.

## Positioning

- Headline: "Good products start with people. So do I."
- Theme: human-centered design. Start with the people, learn what they need, then build and check whether it can last as a business.
- Proof, in priority order:
  1. **HeyLily.** User research with older adults changed a core feature: Trusted Circle became optional. A school project, so it has no production or sales numbers, and it doesn't need them.
  2. **TheraT.** Customer discovery (30+ interviews), the commercial case for a UW spinout, and team awards ($75K Innovation Gap Fund, $10K Hollomon prize).
  3. **Sticker Buddy.** A product he built in Lovable and used to fill his own album, shaped by feedback from other collectors.
  4. **Uber internship.** Merchant research turned into a PRD and a prototype, with executive buy-in.
  5. **AI Spark and the MBA Tech Club.** Leadership, and adapting when the original funding fell through.

## Voice

Follow Nicolas's writing style (the `nico-report-writing-style` skill) and run the `humanizer` skill on new copy.

- First person for his own work, "we" or "our team" for team work. State things directly; no "we believe."
- No em dashes, en dashes, or hyphens used to join sentences. Hyphenated word pairs ("research-stage") and date ranges ("Oct 2025 – Aug 2026") are fine.
- No sentences about the page itself and no disclaimer paragraphs. Keep honesty labels short and inside the sentence: proposed, concept, sample data, team outcome, not built yet.
- Define jargon in plain words on first use.
- Never invent facts, metrics, quotes, or dates.
- Never mention a report, deliverable, document, or file as if the reader already knows it exists. Describe the work and the decision it informed. When an artifact matters, introduce it first ("I wrote a market and reimbursement report that…").

## Decisions already made (October 8, 2026)

- Target role: product manager.
- Contact: LinkedIn plus nicolas.picon@hotmail.com. No resume PDF.
- Coming-soon project cards stay on the homepage for now.
- On phones, the homepage hides secondary text (summaries, disclosures) with CSS. The content stays in the HTML.
- TheraT page shows recognition and photos before the long write-ups.
- Published October 9, 2026: public GitHub repo, deployed on Vercel from `main`, search indexing on, sitemap at `/sitemap.xml`. Private notes (`SPEC.md`, `TASKS.md`, `working/`, `research/`, `preview/`) stay local and are gitignored.

## Open items

- HeyLily's interactive demos (pitch slides 7 and 8) only play for visitors signed in to Figma with access to the prototype. Options: Nicolas records a short demo video, or shares the prototype file publicly and the site embeds it directly.
- Stories still needed from Nicolas: the five coming-soon projects, three leadership roles, FIFA volunteering, VCIC details, and the TheraT posters.
