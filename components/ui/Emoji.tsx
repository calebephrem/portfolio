import { type Emoji, emojis } from "@/lib/emojis";
import Image from "next/image";

type EmojiProps = {
  name: Emoji;
  size?: number;
};

export default function Emoji({ name, size = 16 }: EmojiProps) {
  return (
    <Image
      src={emojis[name]}
      height={size}
      width={size}
      alt={name}
      title={`:${name}:`}
      className="inline"
    />
  );
}
