import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code2 } from "reicon-react";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-sm">
      <Link href="/" className="flex items-center gap-xs">
        <Image
          src="/pfp.jpg"
          height={30}
          width={30}
          className="rounded-lg"
          alt="Caleb"
        />

        <h1 className="text-xl">Caleb</h1>
      </Link>

      <nav className="flex items-center gap-xs">
        <Link
          href={`mailto:${staticData.external.email}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button icon={ArrowRight}>Contact</Button>
        </Link>
        <Link href={`/r/portfolio`} target="_blank" rel="noopener noreferrer">
          <Button variant="primary" icon={Code2} />
        </Link>
      </nav>
    </header>
  );
}
