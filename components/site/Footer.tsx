import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-sm items-center justify-between py-md px-sm">
      <div className="text-fg-secondary flex items-center flex-col text-sm gap-xxs">
        <span>
          © 2026{" "}
          <Link
            href="https://github.com/calebephrem"
            className="underlined"
            target="_blank"
            rel="noopener noreferrer"
          >
            Caleb Ephrem
          </Link>
          . Licensed under{" "}
          <Link
            href="https://raw.githubusercontent.com/calebephrem/portfolio/refs/heads/main/LICENSE"
            className="underlined"
            target="_blank"
            rel="noopener noreferrer"
          >
            MIT
          </Link>{" "}
          License.
        </span>
        <span>Artwork & Content All Rights Reserved.</span>
      </div>

      <div className="flex items-center gap-xs">
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

        {/*<Link
          href="https://voidlinux.org"
          title="Void Linux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/void.webp" alt="Void Linux" width={88} height={31} />
        </Link>*/}

        {/*<Link
          href="/88x31.jpg"
          title="Pumpkin spice"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/88x31.jpg" alt="Pumpkin spice" width={88} height={31} />
        </Link>*/}
      </div>
    </footer>
  );
}
