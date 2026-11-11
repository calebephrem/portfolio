import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import Emoji from "../ui/Emoji";
import Tooltip from "../ui/Tooltip";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-sm py-md mt-md">
      <div className="flex items-center gap-xxs">
        <Link href="/blog">
          <u>Blog</u> <Emoji name="sipspin" />
        </Link>

        <Link href="/credits">
          <u>Credits</u> <Emoji name="heart" />
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

      <div className="flex flex-col md:flex-row gap-sm items-center justify-between">
        <span>
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

        <div className="flex items-center gap-xxs">
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

          {/* TODO: update button (site is no longer up) */}
          <Link
            href="https://louiszn.fyi"
            target="_blank"
            rel="noopener"
            className="-rotate-3"
          >
            <Tooltip text="Cutie oreo">
              <Image
                src="https://louiszn.fyi/assets/88x31/me.png"
                alt="Oreo cat"
                width={88}
                height={31}
              />
            </Tooltip>
          </Link>
        </div>
      </div>
    </footer>
  );
}
