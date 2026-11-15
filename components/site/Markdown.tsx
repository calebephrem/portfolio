import TwitterCard, { CardProps } from "@/components/ui/Card";
import { customAlerts } from "@/components/ui/customAlerts";
import Emoji from "@/components/ui/Emoji";
import type { Emoji as EmojiType } from "@/lib/emojis";
import rehypeShiki from "@shikijs/rehype";
import Image from "next/image";
import { ComponentProps } from "react";
import { Components, MarkdownAsync } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";

export default function Markdown({
  children,
  className,
}: ComponentProps<"div"> & { children: string }) {
  return (
    <article className={`markdown ${className}`}>
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
            img: ({ alt, width, height, src, ...props }) =>
              // @ts-expect-error has type any
              props["data-strict"] ? (
                <Image
                  src={String(src)}
                  alt={alt ?? ""}
                  width={Number(width) || 1000}
                  height={Number(height) || 1000}
                  {...props}
                />
              ) : (
                <span className="flex flex-col items-center">
                  <Image
                    src={String(src)}
                    width={Number(width) || 1000}
                    height={Number(height) || 1000}
                    alt={alt ?? ""}
                    {...props}
                    className="h-auto w-auto max-w-xl"
                  />

                  <span className="text-fg-tertiary">{alt}</span>
                </span>
              ),
          } as Components
        }
      >
        {children}
      </MarkdownAsync>
    </article>
  );
}
