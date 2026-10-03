import Emoji from "@/components/ui/Emoji";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./loader";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="min-h-[80dvh] flex flex-col gap-lg">
      <h1 className="text-5xl outlined text-accent-primary text-center">
        Posts <Emoji name="sipspin" size={36} />
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-sm">
        {posts.map(({ slug, metadata, external }, i) => {
          const clipPath = [
            "polygon(0.5% 0.5%, 50% 1.8%, 99.5% 0.5%, 98.5% 50%, 99.5% 99.5%, 50% 98.2%, 0.5% 99.5%, 1.5% 50%)",
            "polygon(1% 0.5%, 50% 2%, 99% 1%, 98% 50%, 99.5% 99%, 50% 98%, 0.5% 99.5%, 1% 50%)",
            "polygon(0.5% 1%, 50% 1.5%, 99.5% 0.5%, 99% 50%, 99% 99.5%, 50% 98.5%, 1% 99%, 0.5% 50%)",
            "polygon(1% 0.5%, 50% 1.8%, 99.5% 1%, 98.5% 50%, 99% 99%, 50% 98.2%, 0.5% 99.5%, 1% 50%)",
          ][i % 4];

          return (
            <Link
              key={slug}
              href={external ? slug : `/p/${slug}`}
              target={external ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className={
                `flex flex-col gap-sm bg-bg-secondary p-sm px-md after:bg-accent-secondary shadow-md`
                // + (metadata.featured ? " lg:col-span-2" : "")
              }
              style={{ clipPath }}
            >
              <u>
                <div className="flex items-center gap-sm">
                  <span className="text-fg-tertiary">
                    {new Date(metadata.date).toLocaleDateString()}
                  </span>

                  <div className="w-full h-px bg-bg-tertiary" />

                  {external && (
                    <Emoji name="arrow" size={32} className="-rotate-145" />
                  )}
                </div>

                {/*<Image
                  src={metadata.banner}
                  height={48}
                  width={48}
                  className="w-full max-w-72 max-h-72 mx-auto"
                  alt={metadata.title}
                />*/}

                <h1 className="text-xl py-sm">{metadata.title}</h1>
              </u>

              <p className="text-fg-secondary grow">
                {metadata.description.length < 375
                  ? metadata.description
                  : metadata.description.slice(0, 375) + "..."}
              </p>

              <Image
                src={metadata.banner}
                height={48}
                width={48}
                className="w-full max-w-72 max-h-72 mx-auto"
                alt={metadata.title}
              />

              <div className="flex flex-wrap gap-xxs">
                {metadata.tags.slice(0, 3).map((tag) => {
                  const clipPath = [
                    "polygon(2% 4%, 98% 2%, 96% 94%, 3% 97%)",
                    "polygon(1% 2%, 99% 4%, 97% 96%, 2% 92%)",
                    "polygon(3% 3%, 97% 1%, 98% 95%, 1% 98%)",
                    "polygon(2% 1%, 96% 3%, 99% 97%, 4% 93%)",
                  ][i % 4];

                  return (
                    <div
                      key={tag}
                      className="flex items-center gap-sm bg-bg-tertiary overflow-hidden dotted border-accent-primary! p-xxs"
                      style={{ clipPath }}
                    >
                      <span className="whitespace-nowrap"># {tag}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-xs">
                  <Emoji name="typewriter" />

                  <span>
                    {new Intl.ListFormat("en-US").format(
                      metadata.authors.map((author) => author.name),
                    )}
                  </span>
                </div>

                <span>{metadata.readingTime}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
