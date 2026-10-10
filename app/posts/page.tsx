import Emoji from "@/components/ui/Emoji";
import { clipPaths } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { getPosts } from "./loader";

export default async function Posts() {
  const posts = await getPosts();

  return (
    <div className="min-h-[80dvh] flex flex-col gap-lg">
      <div className="flex flex-col items-center gap-md">
        <h1 className="text-5xl outlined text-accent-primary">
          Posts <Emoji name="sipspin" size={36} />
        </h1>

        <p>
          Posts about all kinds of <u>cool stuff</u> I came across
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-sm">
        {posts.map(({ slug, metadata, external }, i) => (
          <Link
            key={slug}
            href={external ? slug : `/p/${slug}`}
            target={external ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={
              `flex flex-col gap-sm bg-bg-secondary p-sm px-md shadow-md secondary`
              // + (metadata.featured ? " lg:col-span-2" : "")
            }
            style={{ clipPath: clipPaths[i % clipPaths.length] }}
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

              <h1 className="text-xl py-sm">
                {external ? `"${metadata.title}"` : metadata.title}
              </h1>
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
              {metadata.tags.slice(0, 3).map((tag) => (
                <div
                  key={tag}
                  className="flex items-center gap-sm bg-bg-tertiary overflow-hidden p-xxs"
                  style={{ clipPath: clipPaths[i % clipPaths.length] }}
                >
                  <span className="whitespace-nowrap"># {tag}</span>
                </div>
              ))}
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
        ))}
      </div>
    </div>
  );
}
