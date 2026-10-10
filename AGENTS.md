# Agent continuation context

Before continuing this project, read `working/README.md` and `working/HANDOFF.md`, then the relevant parts of `SPEC.md` and the source files you will change. The handoff records previous work and verification limits; recheck changed behavior before claiming success.

The user explicitly requested a persistent project-local working folder. Save and maintain future handoffs in `working/HANDOFF.md`, overriding any skill default that places them in an OS temporary directory. Follow the maintenance instructions in `working/README.md`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
