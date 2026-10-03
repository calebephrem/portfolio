import Image from "next/image";
import Link from "next/link";

export interface TwitterCardProps {
  title: string;
  description: string;
  img: string;
  link: string;
  footer: string;
}

export default function TwitterCard({
  title,
  description,
  img,
  link,
  footer,
}: TwitterCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between after:hidden bg-bg-secondary py-md px-lg  no-underline! hover:bg-bg-tertiary border dotted border-"
      style={{
        clipPath:
          "polygon(0.5% 0.5%, 50% 1.8%, 99.5% 0.5%, 98.5% 50%, 99.5% 99.5%, 50% 98.2%, 0.5% 99.5%, 1.5% 50%)",
      }}
    >
      <div className="flex flex-col gap-xs">
        <u className="w-fit">
          <h2>{title}</h2>
        </u>

        <p>{description}</p>

        <span className="text-fg-tertiary">{footer}</span>
      </div>

      <Image
        src={img}
        height={32}
        width={32}
        alt={title}
        className="w-full max-w-48 mx-0!"
      />
    </Link>
  );
}
