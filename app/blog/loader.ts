import { Author, authors as authorsData } from "@/content/authors";
import externalBlogs from "@/content/blog/external.json" with { type: "json" };
import { blogSchema } from "@/schemas/blog";
import fs from "fs/promises";
import matter from "gray-matter";
import path, { join } from "path";
import readingTime from "reading-time";
import z from "zod";

export interface BlogData {
  slug: string;
  metadata: Omit<z.infer<typeof blogSchema>, "authors"> & {
    authors: Author[];
    readingTime: string;
  };
  content: string;
  external?: boolean;
}

export async function getBlogs(): Promise<BlogData[]> {
  const blogsDir = join(process.cwd(), "content", "blog");
  const files = (await fs.readdir(blogsDir)).filter((f) => f.endsWith(".md"));
  const blogs: BlogData[] = [];

  for (const file of files) {
    const slug = path.basename(file, path.extname(file));
    const filePath = join(blogsDir, file);
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    const result = blogSchema.safeParse(data);

    if (!result.success) continue;

    const meta = result.data;
    const authors = meta.authors
      .map((name) => authorsData.find((a) => a.name === name))
      .filter((a): a is NonNullable<typeof a> => Boolean(a));

    // console.log(authors);

    blogs.push({
      slug,
      metadata: {
        ...meta,
        authors,
        readingTime: readingTime(content).text,
      },
      content,
    });
  }

  for (const blog of externalBlogs) {
    blogs.push({
      slug: blog.link,
      metadata: { ...blog, date: new Date(blog.date) },
      content: blog.deck,
      external: true,
    });
  }

  return blogs.sort(
    (a, b) => b.metadata.date.getTime() - a.metadata.date.getTime(),
  );
}

export async function getBlog(slug: string): Promise<BlogData | undefined> {
  const all = await getBlogs();

  return all.find((p) => p.slug === slug);
}
