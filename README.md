# Alessio Cassieri — Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/2152eb5a-0c5d-4f03-9916-a5f98bef99f4/deploy-status)](https://app.netlify.com/projects/alessiocassieri/deploys)

My personal website and portfolio: who I am, where I've worked, what I've built and what I write about.

🌐 **Live:** [alessiocassieri.netlify.app](https://alessiocassieri.netlify.app/)

## Features

- 🌙 **Light & Dark Mode** – Class-based theme toggle.
- 📱 **Mobile-Friendly** – Fully responsive design.
- 📖 **Articles** – Written in **MDX**, with an automatic table of contents, reading time and pagination.
- 🏷️ **Categories & Series** – Browse articles by category or series.
- 🚀 **Projects Showcase** – A dedicated page for each project, with images, tech used and links.
- 🖼️ **SEO & Open Graph** – Canonical URLs, sitemap, JSON-LD and per-page OG images.

## Tech Stack

- **[Astro](https://astro.build/)** – Static site generation, with MDX, React and Sitemap integrations.
- **[Tailwind CSS v4](https://tailwindcss.com/)** – Utility-first styling with shadcn-style color tokens.
- **TypeScript** – Strict mode.
- **Prettier** – Formatting, with the Astro and Tailwind plugins.
- **Netlify** – Hosting and deploys.

## Getting Started

You need Node.js and [pnpm](https://pnpm.io/).

```bash
pnpm install
pnpm dev       # http://localhost:4321
pnpm build     # production build into dist/
pnpm preview   # serve the build locally
pnpm format    # format the codebase
```

## Editing Content

| What                                    | Where                                        |
| --------------------------------------- | -------------------------------------------- |
| Bio, role, email, location              | `src/lib/constants/profile.ts`               |
| Work experience                         | `src/lib/constants/experience.ts`            |
| Education                               | `src/lib/constants/education.ts`             |
| Tech stack                              | `src/lib/constants/tech-stack.ts`            |
| Nav & social links                      | `src/lib/constants/index.ts`                 |
| Site title, description, posts per page | `src/lib/config.ts`                          |
| Articles                                | `src/data/blog/*.mdx`                        |
| Projects                                | `src/data/projects/*.mdx`                    |
| Images & OG images                      | `public/`, `public/og-images/projects/`      |
| Theme colors                            | `src/styles/global.css`                      |

The frontmatter fields for articles and projects are defined in `src/content.config.ts`.

## Credits

This site is a fork of [Louai Zokerburg's portfolio](https://github.com/Louai-Zokerburg/louai). Special thanks to him for the awesome work!
