# CLAUDE.md

Personal portfolio and website of Alessio Cassieri (Cassio7), deployed on Netlify at https://alessiocassieri.netlify.app/. It's a fork of Louai Zokerburg's Astro portfolio template, customized with my own profile, experience, projects and articles.

## Commands

Use **pnpm**, never npm or yarn.

```bash
pnpm install
pnpm dev        # local dev server (http://localhost:4321)
pnpm build      # static build into dist/ — run this to verify changes
pnpm preview    # serve the built site
pnpm format     # prettier --write over the whole repo
```

There is no test suite and no `lint` script. `eslint.config.js` exists but imports `globals`, which isn't in `package.json`, so run `pnpm build` (it type-checks content schemas and fails on broken routes) as the main check.

## Stack

- **Astro 7**, static output, with `@astrojs/mdx`, `@astrojs/react` and `@astrojs/sitemap`
- **Tailwind CSS v4** via `@tailwindcss/vite` (no `tailwind.config`; theme lives in `src/styles/global.css`) plus `@tailwindcss/typography`
- **TypeScript** strict (`astro/tsconfigs/strict`), path alias `@/*` → `src/*`
- shadcn-style color tokens (HSL CSS variables) and `cva`/`cn()` helpers in `src/lib/utils.ts`
- Icons: `lucide-react`, `developer-icons`; fonts from `@fontsource` (Geist Sans, JetBrains Mono, Roboto Condensed)
- `@vercel/analytics` and Astro `ClientRouter` (view transitions) in the base layout

## Layout of the repo

```
src/
  pages/            routes: index (home), projects/, articles/ (paginated, by category, by series), privacy, terms, 404
  layouts/          layout.astro (base: <head>, SEO/OG meta, JSON-LD, fonts), page-, article-, project-layout
  components/       Astro components; sections/ for home page blocks (about, experience, education, projects), ui/ for primitives
  data/blog/        articles (.md/.mdx)
  data/projects/    project pages (.md/.mdx)
  content.config.ts content collection schemas (blog, projects)
  lib/config.ts     SITE metadata (title, author, description, OG image, postPerPage)
  lib/constants/    personal data: profile, experience, education, tech stack, nav and social links
  lib/types.ts      Experience / Education types
  styles/           global.css (Tailwind + theme tokens, dark variant), mdx.css
public/             favicon, og-image.jpg, og-images/projects/*.png, robots.txt
```

## Editing content

Almost all personal content is data, not markup:

- **Bio, role, email, location** → `src/lib/constants/profile.ts`
- **Work experience** → `src/lib/constants/experience.ts` (description strings are Markdown, rendered with `markdown-it` via `src/lib/markdown.ts`)
- **Education** → `src/lib/constants/education.ts`
- **Tech stack** → `src/lib/constants/tech-stack.ts`
- **Nav / social links** → `src/lib/constants/index.ts`
- **Site title, description, posts per page** → `src/lib/config.ts`

### New project
Add `src/data/projects/<slug>.mdx`. Frontmatter (see `content.config.ts`):
`name`, `type` (`core` | `side`), `technologies` (string[]), `description`, optional `image`, `sourceCode`, `preview`. Put images in `public/og-images/projects/` and reference them as `/og-images/projects/<file>.png`.

### New article
Add `src/data/blog/<slug>.mdx`. Frontmatter: `pubDatetime` (date), `title`, `category`, `description`, optional `series`, `image`, `draft`, `tags` (defaults to `["others"]`).
Articles with `draft: true` are excluded everywhere (every `getCollection("blog", ({ data }) => !data.draft)`), so they never get a page; keep that filter on any new query.

## Conventions

- Prettier: 2 spaces, double quotes, semicolons, `printWidth: 120`, trailing commas `es5`, `arrowParens: avoid`; Astro and Tailwind class-sorting plugins enabled. Run `pnpm format` after edits.
- Import with the `@/` alias rather than relative paths.
- Use theme tokens (`bg-background`, `text-muted-foreground`, `border-border`, …) instead of raw colors so light/dark mode keeps working. Dark mode is class-based (`.dark`), toggled by `components/mode-toggle.astro`.
- Prefer `.astro` components; React is available but used only where interactivity needs it.
- ESLint config forbids `console` (`no-console: error`).
- Keep the site URL in sync between `astro.config.mjs` (`site`) and `src/lib/config.ts` (`SITE.profile`).

## Git

Work on `develop` and merge to `main` via PR; `main` is what Netlify deploys. Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore(deps):`, …).
