import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "../ui/Tooltip";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-sm items-center justify-between py-md px-sm mt-md">
      <div className="flex flex-col items-center">
        <span>
          © 2026{" "}
          <Link
            href={staticData.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            Caleb Ephrem
          </Link>
          . Licensed under{" "}
          <Tooltip text="© 2026 Caleb Ephrem">
            <u>
              <Link
                href="https://raw.githubusercontent.com/calebephrem/portfolio/refs/heads/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License.
              </Link>
            </u>
          </Tooltip>
        </span>

        <span>Artwork & Content All Rights Reserved.</span>
      </div>

      <div className="flex items-center gap-xxs">
        <Link
          href="https://voidlinux.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="-rotate-5"
        >
          <Tooltip text="Void Linux">
            <Image src="/void.webp" alt="Void Linux" width={88} height={31} />
          </Tooltip>
        </Link>

        <Link
          href="https://youtu.be/dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
          className="rotate-2"
        >
          <Tooltip text="Made with my own two paws!">
            <Image
              src="/paws.gif"
              alt="Made with my own two paws!"
              width={88}
              height={31}
            />
          </Tooltip>
        </Link>

        <Link
          href="https://louiszn.fyi"
          target="_blank"
          rel="noopener noreferrer"
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
    </footer>
  );
}
