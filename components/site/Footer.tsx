import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import Emoji from "../ui/Emoji";
import Tooltip from "../ui/Tooltip";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-sm py-md mt-md">
      <div className="flex flex-col md:flex-row gap-sm items-center justify-between">
        <span className="text-center md:text-start">
          © 2026{" "}
          <Link
            href={staticData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary"
          >
            <u>Caleb Ephrem</u>
          </Link>
          . Licensed under{" "}
          <Tooltip text="© 2026 Caleb Ephrem">
            <Link
              href="https://raw.githubusercontent.com/calebephrem/portfolio/refs/heads/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary"
            >
              <u>MIT License.</u>
            </Link>
          </Tooltip>
        </span>

        <div className="flex flex-wrap justify-center items-center gap-xxs">
          <Link href="/blog">
            <u>Blog</u> <Emoji name="sipspin" />
          </Link>

          <Link href="/credits">
            <u>Credits</u> <Emoji name="heart" />
          </Link>

          <Link href="/ai">
            <u>AI</u> <Emoji name="bot" />
          </Link>

          <Link href="/r/portfolio" target="_blank" rel="noopener noreferrer">
            <u>Repo</u> <Emoji name="typing" />
          </Link>

          <Link
            href={`mailto:${staticData.links.email}`}
            rel="noopener noreferrer"
          >
            <u>Email me!</u> <Emoji name="mail" />
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center gap-xxs flex-wrap">
        <Link
          href="https://codeberg.org/louiszn"
          className="-rotate-4"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip text="Cutie oreo">
            <Image src="/louis.png" alt="Cutie oreo" width={88} height={31} />
          </Tooltip>
        </Link>

        <Link
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="rotate-2"
        >
          <Tooltip text=":D">
            <Image
              src="/paws.gif"
              alt="Made with my own two paws!"
              width={88}
              height={31}
            />
          </Tooltip>
        </Link>

        <Link href="/blog/88x31-buttons" className="-rotate-3">
          <Tooltip text="Pumkin pie">
            <Image src="/88x31.jpg" alt="Pumkin pie" width={88} height={31} />
          </Tooltip>
        </Link>

        <Link href="/blog/feed.xml" className="rotate-2">
          <Tooltip text="My RSS feed!">
            <Image src="/rss.gif" alt="RSS" width={88} height={31} />
          </Tooltip>
        </Link>

        <Link
          href="https://voidlinux.org"
          className="-rotate-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip text="Void Linux!">
            <Image src="/void.webp" alt="Void" width={88} height={31} />
          </Tooltip>
        </Link>
      </div>
    </footer>
  );
}
