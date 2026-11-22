import Emoji from "@/components/ui/Emoji";
import Link from "next/link";
import { Card } from "./Card";
import { BlogData, getBlogs } from "./loader";

export default async function Blog() {
  const blogs = await getBlogs();
  // latest 10 posts are considered not-old
  const newPosts = 10;

  return (
    <div className="min-h-[80dvh] flex flex-col gap-lg">
      <div className="flex flex-col items-center gap-md">
        <h1 className="text-5xl outlined text-accent-primary">
          Blog <Emoji name="sipspin" size={36} />
        </h1>

        <p>
          Posts about all kinds of <u>cool stuff</u> I came across
        </p>

        <Link href="/blog/feed.xml" target="_blank" className="secondary">
          <Emoji name="rss" /> Follow along with RSS
        </Link>
      </div>

      <div className="flex flex-col gap-md">
        <div className="flex flex-col gap-sm">
          {blogs.slice(0, newPosts).map((blog: BlogData, i) => (
            <Card blog={blog} i={i} key={i} />
          ))}
        </div>

        {blogs.slice(newPosts).length ? (
          <>
            <h1 className="text-3xl">
              Older posts <Emoji name="cool" size={30} />
            </h1>

            <div className="grid md:grid-cols-3 gap-sm">
              {blogs.slice(newPosts).map((blog: BlogData, i) => (
                <Card blog={blog} i={i} key={i} mini={true} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
