import TwitterCard, { CardProps } from "@/components/ui/Card";
import { customAlerts } from "@/components/ui/customAlerts";
import Emoji from "@/components/ui/Emoji";
import Tooltip from "@/components/ui/Tooltip";
import { clipPaths } from "@/lib/constants";
import type { Emoji as EmojiType } from "@/lib/emojis";
import staticData from "@/lib/staticdata";
import rehypeShiki from "@shikijs/rehype";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Components, MarkdownAsync } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";
import { getBlog, getBlogs } from "../loader";
import { Card } from "../page";
import CopyLink from "./CopyLink";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlog(slug);

  if (!blog) return { title: "Not Found" };

  const { title, description, banner, authors } = blog.metadata;

  return {
    title,
    description,
    authors: authors.map(({ name, social: url }) => ({ name, url })),
    creator: staticData.name,
    publisher: staticData.name,

    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${staticData.site.url}/blog/${slug}`,
      siteName: staticData.name,
      title,
      description,
      images: [
        {
          url: banner,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [banner],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export async function generateStaticParams() {
  const blog = await getBlogs();

  return blog.map(({ slug }) => ({ slug }));
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = await getBlogs();
  const blog = blogs.find((p) => p.slug === slug);

  if (!blog) notFound();

  return (
    <div className="flex flex-col gap-md">
      <u className="flex flex-col gap-md py-md">
        <Link href="/blog" className="w-fit flex items-center gap-sm">
          <Emoji name="arrow" className="rotate-90" />

          <span>Back to Blog</span>
        </Link>

        <div className="flex items-center gap-sm">
          <div className="flex flex-wrap shrink-0 gap-xxs">
            {blog.metadata.tags.map((tag, i) => (
              <div
                key={tag}
                className="flex items-center gap-sm bg-bg-secondary overflow-hidden p-xs hover:bg-bg-tertiary"
                style={{ clipPath: clipPaths[i % clipPaths.length] }}
              >
                <span className="whitespace-nowrap"># {tag}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-px bg-bg-tertiary" />
        </div>

        <h1 className="text-5xl outlined text-accent-primary">
          {blog.metadata.title}
        </h1>

        <p>{blog.metadata.description}</p>

        <div className="flex flex-wrap items-center gap-sm md:gap-md">
          <div className="flex items-center gap-sm">
            {blog.metadata.authors.map((author) => (
              <Link
                href={author.social}
                target="_blank"
                rel="noopener noreferrer"
                key={author.name}
                className="flex items-center gap-xs"
              >
                <Image
                  src={author.avatar}
                  height={36}
                  width={36}
                  alt={author.name}
                  className="rounded-full"
                />

                <u>{author.name}</u>
              </Link>
            ))}
          </div>

          <div>{new Date(blog.metadata.date).toLocaleDateString()}</div>

          <div>{blog.metadata.readingTime}</div>

          <Link
            href={`/r/portfolio/edit/main/content/blog/${slug}.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs secondary w-fit"
          >
            <Emoji name="typewriter" />

            <Tooltip text="Edit this blog on GitHub">Edit blog</Tooltip>
          </Link>

          <CopyLink slug={slug} />

          <div className="flex items-center gap-xs">
            <Link
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`${blog.metadata.title}\n\n${blog.metadata.description}`)}&url=${encodeURIComponent(`${staticData.site.url}/b/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Emoji name="twitter" />
            </Link>

            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${staticData.site.url}/b/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Emoji name="facebook" />
            </Link>

            <Link
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`${staticData.site.url}/b/${slug}`)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Emoji name="linkedin" />
            </Link>
          </div>
        </div>
      </u>

      <article className="markdown">
        <MarkdownAsync
          remarkPlugins={[
            remarkDirective,
            remarkDirectiveRehype,
            customAlerts,
            remarkGfm,
          ]}
          rehypePlugins={[rehypeRaw, [rehypeShiki, { theme: "github-light" }]]}
          components={
            {
              card: (props: CardProps) => <TwitterCard {...props} />,
              emoji: ({ name }: { name: string }) => (
                <Emoji name={name as EmojiType} />
              ),
              a: ({ ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
              table: ({ children, ...props }) => (
                <div className="table-wrapper">
                  <table {...props}>{children}</table>
                </div>
              ),
            } as Components
          }
        >
          {blog.content}
        </MarkdownAsync>
      </article>

      <div className="flex flex-col gap-sm">
        <div className="flex items-center gap-sm">
          <Emoji name="arrow" />

          <h1 className="text-3xl">Read more</h1>

          <Emoji name="arrow" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-sm">
          {blogs
            .filter((blog) => blog.slug !== slug)
            .slice(0, 3)
            .map((blog, i) => (
              <Card blog={blog} i={i} key={i} />
            ))}
        </div>
      </div>
    </div>
  );
}
