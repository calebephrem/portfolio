import Emoji from "@/components/ui/Emoji";
import { clipPaths } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { BlogData } from "./loader";

export function Card({ blog, i }: { blog: BlogData; i: number }) {
  const { slug, external, metadata } = blog;

  return (
    <Link
      key={slug}
      href={external ? slug : `/blog/${slug}`}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      className="flex flex-col md:flex-row gap-sm md:gap-md undecorated bg-bg-secondary p-md shadow-md hover:bg-bg-tertiary"

      style={{ clipPath: clipPaths[i % clipPaths.length] }}
    >
      <Image
        src={metadata.banner}
        height={48}
        width={48}
        className="w-full max-w-84 max-h-72 mx-auto md:mx-0"
        alt={metadata.title}
      />

      <div className="flex flex-col gap-sm">
        <u>
          <div className="flex items-center gap-sm">
            <span className="text-fg-tertiary">
              {new Date(metadata.date).toLocaleDateString()}
            </span>

            <div className="w-full h-px bg-bg-tertiary" />

            <div className="flex items-center gap-xxs">
              {external ? (
                <Emoji name="arrow" size={32} className="-rotate-145" />
              ) : (
                <Emoji name="read" size={32} />
              )}

              {metadata.featured && <Emoji name="fire" size={36} />}
            </div>
          </div>

          <h1 className="text-xl py-sm">
            {external ? `"${metadata.title}"` : metadata.title}
          </h1>
        </u>

        <p className="text-fg-secondary grow">
          {metadata.description.length < 375
            ? metadata.description
            : metadata.description.slice(0, 375) + "..."}
        </p>

        <div className="flex flex-wrap gap-xxs">
          {metadata.tags.slice(0, 5).map((tag) => (
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
      </div>
    </Link>
  );
}
