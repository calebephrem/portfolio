import { getPosts } from "@/app/posts/loader";
import staticData from "@/lib/staticdata";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = (await getPosts()).filter((post) => post.external);
  const post = posts.find((post) => post.metadata.id === slug);

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
      url: slug,
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
  const posts = (await getPosts()).filter((post) => post.external);

  return posts.map(({ metadata }) => ({ slug: metadata.id }));
}

export default async function Post({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = (await getPosts()).filter((post) => post.external);
  const post = posts.find((post) => post.metadata.id === slug);

  if (!post) notFound();

  redirect(post.slug);
}
