import Emoji from "@/components/ui/Emoji";
import Link from "next/link";
import { ReactNode } from "react";

function Credit({ link, children }: { link: string; children: ReactNode }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <u>{children}</u>
    </Link>
  );
}

export default function Credits() {
  return (
    <div className="min-h-[80dvh] flex flex-col gap-lg">
      <div className="flex flex-col items-center gap-md">
        <h1 className="text-5xl outlined text-accent-primary">
          Credits <Emoji name="panda_heart" size={36} />
        </h1>

        <p>Credits to all who made this site a site</p>
      </div>

      {/*<div className="grid lg:grid-cols-2 gap-sm">
        {[
          {
            title: "Portfolio",
            description:
              "a snapshot of who I am as a developer. My style, my craft, and my ongoing evolution.",
            link: `/r/portfolio`,
          },
          {
            title: "Quantum VSCode Theme",
            description:
              "Beautify your IDE with the best combos of blue, lime, yellow, purple and more!",
            link: "https://marketplace.visualstudio.com/items?itemName=CalebEphrem.quantum",
          },
          {
            title: "QuillBot",
            description:
              "Advanced Discord developer assistant for coding, documentation lookup, and more",
            link: "https://github.com/open-devhub/quillbot",
          },
        ].map(({ title, description, link }, i) => (
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={title}
            className="flex flex-col gap-xs bg-bg-secondary p-md shadow-md secondary"
            style={{ clipPath: clipPaths[i % clipPaths.length] }}
          >
            <h1 className="text-2xl">{title}</h1>

            <p>{description}</p>
          </Link>
        ))}
      </div>*/}

      <div className="flex flex-col gap-md">
        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Inspiration</h1>

          <p>
            This website design is inspired by{" "}
            <Credit link="https://sarthakrawat-1.github.io/sketchbook-ui/">
              {"Sarthak Rawat's"} Sketchbook UI Components
            </Credit>
            , though {"it's"} made without looking at any of its source code.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Tools & Frameworks</h1>

          <p>
            <Credit link="https://nextjs.org">Next.js</Credit>,{" "}
            <Credit link="http://tailwindcss.com/">Tailwind CSS</Credit> and{" "}
            <Credit link="https://github.com/remarkjs/react-markdown">
              React Markdown
            </Credit>{" "}
            for making the entire website,{" "}
            <Credit link="https://www.cloudflare.com/">Cloudflare</Credit> for
            hosting it entirely for free, and{" "}
            <Credit link="https://github.com">GitHub</Credit> for hosting the
            source code of this site for free as well.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Fonts</h1>

          <p>
            <Credit link="https://fonts.google.com/specimen/Caveat+Brush?preview.script=Latn">
              Caveat Brush
            </Credit>{" "}
            for the heading texts, and{" "}
            <Credit link="https://fonts.google.com/specimen/Patrick+Hand?preview.script=Latn">
              Patrick Hand
            </Credit>{" "}
            for body/long content.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Images</h1>

          <p>
            Emojis used in this website are all from{" "}
            <Credit link="https://emoji.gg/">emoji.gg</Credit>{" "}
            <Emoji name="nuke" />
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Friends</h1>

          <p>
            <Credit link="https://louiszn.fyi">Louiszn</Credit> for suggesting
            layout/spacing, font family, and a <Emoji name="blobcat_eyeblink" />
          </p>
        </div>
      </div>
    </div>
  );
}
