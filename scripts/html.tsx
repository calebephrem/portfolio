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
  card: () => <div></div>,
  emoji: ({ name }: { name: string }) => {
    const src = emojiMap[name];
    return src ? (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={name} width={20} height={20} />
    ) : (
      <div></div>
    );
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
