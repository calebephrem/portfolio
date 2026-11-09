import staticData from "@/lib/staticdata";
import { Feed } from "feed";
import fs from "fs/promises";
import { format } from "prettier";
import { getBlogs } from "../app/blog/loader";
import { markdownToFeedHtml } from "./html";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
const tidy = (html: string) =>
  html
    .replace(/<link rel="preload"[^>]*>/g, "")
    .replace(
      /<iframe[^>]*src="https:\/\/www\.youtube(?:-nocookie)?\.com\/embed\/([\w-]+)[^"]*"[^>]*><\/iframe>/g,
      '<p><a href="https://www.youtube.com/watch?v=$1">Watch a video on YouTube</a></p>',
    )
    .replace(/(src|href)="\/(?!\/)/g, `$1="${staticData.site.url}/`)
    .replace(/>\s*\n\s*\n+\s*</g, ">\n<");

const posts = (await getBlogs()).filter((b) => !b.external).slice(0, 50);

const feed = new Feed({
  title: "Caleb's Blog",
  description: "Posts about all kinds of cool stuff I came across",
  id: `${staticData.site.url}/blog`,
  link: `${staticData.site.url}/blog`,
  language: "en",
  copyright: "Caleb",
  updated: posts[0]?.metadata.date,
  feed: `${staticData.site.url}/blog/feed.xml`,
  author: {
    avatar: `${staticData.site.url}/pfp.jpg`,
    name: "Caleb Ephrem",
    email: staticData.links.email,
    link: staticData.links.github,
  },
});

for (const p of posts) {
  const url = `${staticData.site.url}/blog/${p.slug}`;
  const banner = `<p><img src="${esc(p.metadata.banner)}" alt="${esc(p.metadata.title)}"/></p>`;

  feed.addItem({
    title: p.metadata.title,
    id: url,
    link: url,
    date: p.metadata.date,
    description: p.metadata.deck,
    content: banner + tidy(markdownToFeedHtml(p.content)),
  });
}

await fs.mkdir("public/blog", { recursive: true });
await fs.writeFile(
  "public/blog/feed.xml",
  await format(feed.rss2(), {
    parser: "xml",
    plugins: ["@prettier/plugin-xml"],
  }),
);

console.log(`feed.xml written with ${posts.length} posts`);
