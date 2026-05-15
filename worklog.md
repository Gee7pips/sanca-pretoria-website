# SANCA Pretoria Website — Worklog

---
Task ID: 1
Agent: Main
Task: Clone and integrate SANCA Pretoria website from GitHub

Work Log:
- Cloned repo from https://github.com/Gee7pips/sanca-pretoria-website.git
- Copied all SANCA-specific components (40 components) to src/components/sanca/
- Copied public assets (hero-bg.png, hope-image.png, images/sanca/ with 17 facility photos)
- Copied core app files (page.tsx, layout.tsx, globals.css, api/chat/route.ts)
- Copied config files (tailwind.config.ts, prisma/schema.prisma, next.config.ts)
- Copied scroll-reveal hook
- Installed missing dependencies: embla-carousel-autoplay, remark-gfm
- Pushed prisma schema to SQLite database
- Started dev server — app compiles and serves successfully (GET / 200)
- Lint passes with no errors

Stage Summary:
- SANCA Pretoria website successfully running at localhost:3000
- 40 custom components + 47 shadcn/ui components available
- AI chatbot functional via /api/chat endpoint (z-ai-web-dev-sdk)
- Key gaps identified: contact form has no backend (simulated), newsletter is frontend-only, prisma schema unused, no admin panel

---
Task ID: 2
Agent: Main
Task: Fix website not showing in preview - investigate and resolve server crashes

Work Log:
- Investigated dev server crashes — process kept dying after 1-2 requests
- Root cause: `output: "standalone"` in next.config.ts caused the Next.js dev server to crash after serving requests
- Removed `output: "standalone"` from next.config.ts — server now stays stable
- Changed dev script from `next dev -p 3000 2>&1 | tee dev.log` to `next dev --port 3000` (tee pipe was causing issues with bun)
- Page uses dynamic imports (ssr: false) for all 40 components — reduces initial SSR payload and avoids server-side rendering crashes
- Server must be started using .zscripts/dev.sh (uses bun run dev & with disown) for proper process management
- Verified 10/10 consecutive requests return 200 through Caddy proxy on port 81
- All static assets accessible (logo.svg, facility images, etc.)
- Lint passes cleanly

Stage Summary:
- Website now renders successfully in preview
- Page title: "SANCA Pretoria — Your Path to Healing Begins Here"
- Page size: ~430KB (dynamic imports, client-side rendering)
- Server stable on port 3000, accessible through Caddy on port 81
- Two key fixes: removed standalone output config, fixed dev script
