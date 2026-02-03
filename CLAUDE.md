# CLAUDE.md

## Project Overview

AI Learning Hub (`ai-tech-hub`) — a Next.js educational platform about AI tools, tutorials, and insights. Deployed via Firebase Hosting as a static site.

## Tech Stack

- **Framework:** Next.js 14.1.0 (static export mode)
- **Language:** TypeScript 5.3.3, React 18.2.0
- **Styling:** Styled Components 6.1.8, Framer Motion
- **Content:** MDX via next-mdx-remote, gray-matter for frontmatter
- **AI Integration:** Google Gemini API (`@google/generative-ai`)
- **Hosting:** Firebase Hosting (project: TBD)

## Project Structure

All source code lives under `/src/`:

- `pages/` — Next.js file-based routing (tutorials, ai-tools, ai-insights, guides, resources, etc.)
- `components/` — Reusable React components (Header, Footer, Sidebar, ArticleCard, ContactForm, etc.)
- `templates/` — Page templates (Articles.tsx, CaseStudy.tsx)
- `layouts/` — MainLayout.tsx wrapper
- `content/articles/` — MDX article files
- `styles/theme.ts` — Design system (colors, typography, spacing, breakpoints)
- `public/images/` — Static assets
- `out/` — Static export build output

## Commands

All commands run from `/src/`:

```bash
npm run dev      # Start dev server
npm run build    # Production build (static export to /out)
npm run start    # Start production server
npm run lint     # ESLint
```

## Key Conventions

- Dark theme with accent blues — see `styles/theme.ts` for design tokens
- Responsive breakpoints: 480px, 768px, 1024px, 1200px
- Articles are MDX files in `content/articles/` with YAML frontmatter
- Path alias: `@/*` maps to project root
- Static export: images must use `unoptimized: true` in next.config.js
- No test suite configured

## Environment Variables

- `NEXT_PUBLIC_GEMINI_API_KEY` — Google Gemini API key (in `.env.local`)
