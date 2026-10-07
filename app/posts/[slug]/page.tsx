import { customAlerts } from "@/components/ui/customAlerts";
import Emoji from "@/components/ui/Emoji";
import TwitterCard, { TwitterCardProps } from "@/components/ui/TwitterCard";
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
import { getPost, getPosts } from "../loader";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: "Not Found" };

  const { title, description, banner, authors } = post.metadata;

  return {
    title,
    description,
    authors: authors.map(({ name, social: url }) => ({ name, url })),
    creator: staticData.name,
    publisher: staticData.name,

    openGraph: {
      type: "article",
      locale: "en_US",
      url: `${staticData.site.url}/posts/${slug}`,
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
  const posts = await getPosts();

  return posts.map(({ slug }) => ({ slug }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <div className="flex flex-col gap-md">
      <u className="flex flex-col gap-md py-md">
        <Link href="/posts" className="w-fit flex items-center gap-sm">
          <Emoji name="arrow" className="rotate-90" />

          <span>Back to Posts</span>
        </Link>

        <div className="flex items-center gap-sm">
          <div className="flex flex-wrap shrink-0 gap-xxs">
            {post.metadata.tags.map((tag, i) => (
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
          {post.metadata.title}
        </h1>

        <p>{post.metadata.description}</p>

        <div className="flex items-center gap-md">
          <div className="flex items-center gap-sm">
            {/*<Emoji name="typewriter" size={32} />*/}

            {post.metadata.authors.map((author) => (
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

          <div>{new Date(post.metadata.date).toLocaleDateString()}</div>

          <div>{post.metadata.readingTime}</div>

          <Link
            href={`${staticData.links.github}/portfolio/edit/main/content/posts/${slug}.md`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-xs secondary"
          >
            <Emoji name="typewriter" />

            <span>Edit post</span>
          </Link>
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
              card: (props: TwitterCardProps) => <TwitterCard {...props} />,
              emoji: ({ name }: { name: string }) => (
                <Emoji name={name as EmojiType} />
              ),
              a: ({ ...props }) => (
                <a {...props} target="_blank" rel="noopener noreferrer" />
              ),
            } as Components
          }
        >
          {post.content}
        </MarkdownAsync>
      </article>
    </div>
  );
}
