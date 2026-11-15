import Markdown from "@/components/site/Markdown";
import Emoji from "@/components/ui/Emoji";
import content from "./content.md";

export default function Credits() {
  return (
    <div className="min-h-[80dvh] flex flex-col gap-lg">
      <div className="flex flex-col items-center gap-md">
        <h1 className="text-5xl outlined text-accent-primary">
          Credits <Emoji name="heart" size={36} />
        </h1>

        <p>Credits to all who made this site a site</p>

        <p className="text-fg-secondary">Last updated: November 14, 2026</p>
      </div>

      <Markdown>{content}</Markdown>
    </div>
  );
}
