import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-sm items-center justify-between py-md px-sm">
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
          <u>
            <Link
              href="https://raw.githubusercontent.com/calebephrem/portfolio/refs/heads/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              MIT License.
            </Link>
          </u>
        </span>

        <span>Artwork & Content All Rights Reserved.</span>
      </div>

      <div className="flex items-center gap-xs">
        <Link
          href="https://voidlinux.org/"
          title="Void Linux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/void.webp" alt="Oreo cat" width={88} height={31} />
        </Link>

        <Link
          href="https://louiszn.fyi"
          title="Cutie oreo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://louiszn.fyi/assets/88x31/me.png"
            alt="Oreo cat"
            width={88}
            height={31}
          />
        </Link>
      </div>
    </footer>
  );
}
