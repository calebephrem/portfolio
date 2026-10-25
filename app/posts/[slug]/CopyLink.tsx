"use client";

import Emoji from "@/components/ui/Emoji";
import Tooltip from "@/components/ui/Tooltip";
import staticData from "@/lib/staticdata";

export default function CopyLink({ slug }: { slug: string }) {
  return (
    <div
      className="flex items-center gap-xs secondary"
      onClick={() =>
        navigator.clipboard.writeText(`${staticData.site.shortUrl}/p/${slug}`)
      }
    >
      <Emoji name="redstone" />

      <Tooltip text="Copy post link!">
        <u className="cursor-pointer">Copy link</u>
      </Tooltip>
    </div>
  );
}
