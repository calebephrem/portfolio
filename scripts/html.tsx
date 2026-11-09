import { customAlerts } from "@/components/ui/customAlerts";
import { emojis } from "@/lib/emojis";
import { renderToStaticMarkup } from "react-dom/server";
import Markdown, { type Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkDirective from "remark-directive";
import remarkDirectiveRehype from "remark-directive-rehype";
import remarkGfm from "remark-gfm";

const emojiMap: Record<string, string> = emojis;

const components = {
  card: ({ title, link }: { title?: string; link?: string }) =>
    link ? (
      <p>
        <a href={link}>{title ?? link}</a>
      </p>
    ) : null,
  emoji: ({ name }: { name: string }) => {
    const src = emojiMap[name];
    // eslint-disable-next-line @next/next/no-img-element
    return src ? <img src={src} alt={name} width={20} height={20} /> : null;
  },
} as Components;

export function markdownToFeedHtml(md: string) {
  return renderToStaticMarkup(
    <Markdown
      remarkPlugins={[
        remarkDirective,
        remarkDirectiveRehype,
        customAlerts,
        remarkGfm,
      ]}
      rehypePlugins={[rehypeRaw]}
      components={components}
    >
      {md}
    </Markdown>,
  );
}
