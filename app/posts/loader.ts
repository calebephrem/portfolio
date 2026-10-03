import { Author, authors as authorsData } from "@/content/authors";
import externalPosts from "@/content/posts/external.json" with { type: "json" };
import { postSchema } from "@/schemas/posts";
import fs from "fs/promises";
import matter from "gray-matter";
import path, { join } from "path";
import readingTime from "reading-time";
import z from "zod";

export interface PostData {
  slug: string;
  metadata: Omit<z.infer<typeof postSchema>, "authors"> & {
    authors: Author[];
    readingTime: string;
  };
  content: string;
  external?: boolean;
}

// type ExternalPost = Omit<z.infer<typeof postSchema>, "authors"> & {
//   link: string;
//   readingTime: string;
//   authors: Author[];
// };

export async function getPosts(): Promise<PostData[]> {
  const postsDir = join(process.cwd(), "content", "posts");
  const files = (await fs.readdir(postsDir)).filter((f) => f.endsWith(".md"));
  const posts: PostData[] = [];

  for (const file of files) {
    const slug = path.basename(file, path.extname(file));
    const filePath = join(postsDir, file);
    const raw = await fs.readFile(filePath, "utf-8");
    const { data, content } = matter(raw);
    const result = postSchema.safeParse(data);

    if (!result.success) continue;

    const meta = result.data;
    const authors = meta.authors
      .map((name) => authorsData.find((a) => a.name === name))
      .filter((a): a is NonNullable<typeof a> => Boolean(a));

    // console.log(authors);

    posts.push({
      slug,
      metadata: {
        ...meta,
        authors,
        readingTime: readingTime(content).text,
      },
      content,
    });
  }

  for (const post of externalPosts) {
    posts.push({
      slug: post.link,
      metadata: { ...post, date: new Date(post.date) },
      content: post.description,
      external: true,
    });
  }

  return posts.sort(
    (a, b) => b.metadata.date.getTime() - a.metadata.date.getTime(),
  );
}

export async function getPost(slug: string): Promise<PostData | undefined> {
  const all = await getPosts();

  return all.find((p) => p.slug === slug);
}
