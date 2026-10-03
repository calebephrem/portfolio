import { type Emoji, emojis } from "@/lib/emojis";
import Image from "next/image";
import Tooltip from "./Tooltip";

interface EmojiProps {
  name: Emoji;
  size?: number;
  className?: string;
}

export default function Emoji({ name, size = 20, className }: EmojiProps) {
  return (
    <Tooltip text={`:${name}:`}>
      <Image
        src={emojis[name]}
        height={size}
        width={size}
        alt={name}
        className={["inline", className].join(" ")}
      />
    </Tooltip>
  );
}
