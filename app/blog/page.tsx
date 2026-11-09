import Emoji from "@/components/ui/Emoji";
import Link from "next/link";
import { Card } from "./Card";
import { BlogData, getBlogs } from "./loader";

export default async function Blog() {
  const blogs = await getBlogs();

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

      <div className="flex flex-col gap-sm">
        {blogs.map((blog: BlogData, i) => (
          <Card blog={blog} i={i} key={i} />
        ))}
      </div>
    </div>
  );
}
