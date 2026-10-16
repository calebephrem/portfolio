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
          Credits <Emoji name="heart" size={36} />
        </h1>

        <p>Credits to all who made this site a site</p>
      </div>

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
            hosting it entirely for free,{" "}
            <Credit link="https://is-a.dev">is-a.dev</Credit> for the nice
            subdomain, and <Credit link="https://github.com">GitHub</Credit> for
            hosting the source code of this site for free as well.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Fonts</h1>

          <p>
            <Credit link="https://fonts.google.com/specimen/Caveat+Brush">
              Caveat Brush
            </Credit>{" "}
            for heading texts.
          </p>

          <p>
            <Credit link="https://fonts.google.com/specimen/Patrick+Hand">
              Patrick Hand
            </Credit>{" "}
            for body/long content.
          </p>

          <p>
            <Credit link="https://fonts.google.com/specimen/Fira+Code">
              Fira Code
            </Credit>{" "}
            for code blocks.
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Images</h1>

          <p>
            Emojis used in this website are all from{" "}
            <Credit link="https://emoji.gg/">emoji.gg</Credit>{" "}
            <Emoji name="nuke" />
          </p>

          <p>
            Image {'"me"'} (red panda standing with its feet looking up) by{" "}
            <Credit link="https://www.pinterest.com/ruachuonggio/">
              ruachuonggio
            </Credit>{" "}
            on{" "}
            <Credit link="https://www.pinterest.com/pin/589267932532734665/">
              Pinterest
            </Credit>
            .
          </p>

          <p>
            Pfp (red panda sipping coke) by{" "}
            <Credit link="https://www.pinterest.com/xmorslnx/">xmorslnx</Credit>{" "}
            on{" "}
            <Credit link="https://www.pinterest.com/pin/880805639640685446/">
              Pinterest
            </Credit>
            .
          </p>

          <p>
            <Credit link="/88x31.jpg">88x31 button of this site</Credit> by{" "}
            <Credit link="https://unsplash.com/@nikol_royce?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              ran liwen
            </Credit>{" "}
            on{" "}
            <Credit link="https://unsplash.com/photos/a-red-panda-sleeping-on-top-of-a-wooden-fence-4-a-KjMTAkE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
              Unsplash
            </Credit>
            .
          </p>
        </div>

        <div className="flex flex-col gap-sm">
          <h1 className="text-2xl">Friends</h1>

          <p>
            <Credit link="https://louiszn.fyi">Louiszn</Credit> for suggesting
            layout/spacing, font family, and a <Emoji name="cet" />
          </p>

          <p>
            <Credit link="https://calebden.io">Caleb Denio</Credit> for
            transferring the{" "}
            <Credit link="https://caleb.is-a.dev">caleb.is-a.dev</Credit>{" "}
            subdomain over to my account <Emoji name="heart" />
          </p>
        </div>
      </div>
    </div>
  );
}
