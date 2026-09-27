import { type Emoji, emojis } from "@/lib/emojis";
import Image from "next/image";
import Tooltip from "./Tooltip";

type EmojiProps = {
  name: Emoji;
  size?: number;
};

export default function Emoji({ name, size = 20 }: EmojiProps) {
  return (
    <Tooltip text={`:${name}:`}>
      <Image
        src={emojis[name]}
        height={size}
        width={size}
        alt={name}

        className="inline"
      />
    </Tooltip>
  );
}
