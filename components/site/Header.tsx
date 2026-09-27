import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-sm mb-sm">
      <Link href="/" className="flex items-center gap-sm">
        <Image
          src="/pfp.jpg"
          height={36}
          width={36}
          alt="Caleb"
          className="rounded-full"
        />

        <h1 className="text-3xl">Caleb</h1>
      </Link>

      <nav className="text-md flex items-center gap-md font-display">
        <Link href={`mailto:${staticData.links.email}`}>Contact</Link>

        <Link
          href={`/r/portfolio`}
          target="_blank"
          rel="noopener noreferrer"
          className="after:rotate-y-180"
        >
          {"</>"}
        </Link>
      </nav>
    </header>
  );
}
