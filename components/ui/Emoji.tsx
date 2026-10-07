import { type Emoji, emojis } from "@/lib/emojis";
import Tooltip from "./Tooltip";

export interface EmojiProps {
  name: Emoji;
  size?: number;
  className?: string;
}

export default function Emoji({ name, size = 24, className }: EmojiProps) {
  return (
    <Tooltip text={`:${name}:`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={emojis[name]}
        height={size}
        width={size}
        alt={name}
        className={["inline", className].filter(Boolean).join(" ")}
      />
    </Tooltip>
  );
}
