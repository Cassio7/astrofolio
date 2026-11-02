// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import { readdirSync, readFileSync } from "node:fs";

// Publication date of each article, by slug, used as <lastmod> in the sitemap
const articleDates = Object.fromEntries(
  readdirSync("./src/data/blog")
    .filter(file => /\.mdx?$/.test(file))
    .map(file => {
      const date = readFileSync(`./src/data/blog/${file}`, "utf8").match(/^pubDatetime:\s*(\S+)/m)?.[1];
      return [file.replace(/\.mdx?$/, ""), date];
    })
    .filter(([, date]) => date)
);

// https://astro.build/config
export default defineConfig({
  site: 'https://alessiocassieri.netlify.app/',
  integrations: [
    react(),
    mdx(),
    sitemap({
      serialize(item) {
        const slug = item.url.match(/\/articles\/([^/]+)\/$/)?.[1];
        if (slug && articleDates[slug]) item.lastmod = new Date(articleDates[slug]).toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});