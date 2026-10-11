import { getCollection } from "astro:content";

// Drafts are visible in `pnpm dev` so they can be previewed, and left out of production builds.
export function getArticles() {
  return getCollection("blog", ({ data }) => import.meta.env.DEV || !data.draft);
}
