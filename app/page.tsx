import Button from "@/components/ui/Button";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Coffee,
  Handshake,
  Home2,
  Pin,
} from "reicon-react";

export default async function Home() {
  // const status = await (
  //   await fetch("https://api.lanyard.rest/v1/users/1411006542916091975")
  // )
  //   .json()
  //   .catch(() => undefined);

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center gap-md">
        <Image
          src="/me.jpg"
          height={160}
          width={160}
          alt="me"
          className="rounded-lg border-2 hidden md:visible"
        />

        <div className="flex flex-col gap-md py-md">
          <h1 className="text-3xl">
            Hello, {"I'm "}
            <span className="text-accent underlined">Caleb</span>
            <Handshake size={26} className="inline ml-xs -scale-x-100" />
          </h1>

          <span className="text-fg-secondary">
            A creative developer based in Ethiopia, making and building things
            that work and {"don't"} hurt to look at. When {"I'm"} not working,
            you can find me exploring new coffee spots or contributing to open
            source projects :3
          </span>

          <div className="flex items-center bg-bg-secondary w-fit rounded-lg">
            {[
              { icon: Pin, label: "Ethiopia" },
              { icon: Home2, label: "Available" },
              { icon: Coffee, label: "∞" },
            ].map(({ icon: Icon, label }) => (
              <div
                className="flex items-center gap-xs py-xs px-sm rounded-lg hover:bg-bg-tertiary"
                key={label}
              >
                <Icon size={14} className="text-fg-secondary" />
                <span className="text-sm">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="separator" />

      <div className="py-md flex flex-col gap-md">
        <h1 className="text-xl">What I love to do</h1>

        <ul className="list-disc ml-md text-fg-secondary flex flex-col gap-xs">
          <li>
            Build interfaces that are fast, accessible, and built to scale.
            <span className="underlined delayed">
              {" "}
              React, Next.js, and Tailwind
            </span>{" "}
            are my tools of choice. I care as much about how a site feels to use
            as how it looks.
          </li>
          <li>
            Design to production with careful attention to typography, spacing,
            and interaction. Making sure the final product feels as considered
            as it looks.
          </li>
          <li>
            Build tools and bots that people actually use daily: from Discord
            bots to browser extensions, focused on solving real, recurring
            problems rather than building for the sake of it.
          </li>
          <li>
            Write code meant to be maintained: Clean structure, sensible naming,
            and documentation that {"doesn't"} lie to the next person reading it
            (usually future me).
          </li>
          <li>
            Always curious - always picking up new tools when they solve a
            problem better than what I already know.
          </li>
        </ul>
      </div>

      <div className="separator" />

      <div className="py-md flex flex-col gap-md">
        <h1 className="text-xl">Things I work with</h1>

        <div className="flex flex-wrap gap-xs">
          {[
            {
              label: "JavaScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            },
            {
              label: "TypeScript",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            },
            {
              label: "Tailwind CSS",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
            },
            {
              label: "Next.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            },
            {
              label: "React",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            },
            {
              label: "Vite",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
            },
            {
              label: "Framer Motion",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
            },

            {
              label: "Bootstrap",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
            },
            {
              label: "React Bits",
              icon: "https://github.com/DavidHDev/react-bits/blob/main/public/favicon-32x32.png?raw=true",
            },
            {
              label: "React Native",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactnative/reactnative-original.svg",
            },
            {
              label: "Expo",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/expo/expo-original.svg",
            },
            {
              label: "Node.js",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
            },
            {
              label: "Firebase",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
            },
            {
              label: "Express",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
            },
            { label: "Hono", icon: "https://hono.dev/images/logo.svg" },
            {
              label: "MongoDB",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
            },
            {
              label: "Mongoose",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
            },
            {
              label: "HTML5",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            },
            {
              label: "CSS3",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            },
            {
              label: "Git & GitHub",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            },
            {
              label: "Vercel",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg",
            },
            {
              label: "Cloudflare",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cloudflare/cloudflare-original.svg",
            },
            {
              label: "Zed",
              icon: "https://zed.dev/_next/static/media/logo_wordmark_white_bigger.3loqk4pxc_cwi.png",
            },
            {
              label: "Figma",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
            },
            {
              label: "Postman",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
            },
          ].map(({ label, icon }) => (
            <div
              key={label}
              className="bg-bg-secondary py-xs px-xs rounded-lg flex items-center gap-sm border hover:bg-bg-tertiary"
            >
              <div className="h-6 overflow-hidden">
                <Image
                  src={icon}
                  height={20}
                  width={20}
                  alt={label}
                  className="w-5 opacity-70"
                />
              </div>

              <span className="text-sm">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="separator" />

      <div className="py-md flex flex-col gap-md">
        <h1 className="text-xl">Some projects I liked</h1>

        <div className="grid gap-sm">
          {[
            {
              banner:
                "https://github.com/calebephrem/quantum-vscode/raw/main/assets/icon.png?raw=true",
              title: "Quantum VSCode Theme",
              description:
                "Beautify your IDE with the best combos of blue, lime, yellow, purple and more!",
              link: "https://marketplace.visualstudio.com/items?itemName=CalebEphrem.quantum",
            },
            {
              banner:
                "https://avatars.githubusercontent.com/u/301267837?s=200&v=4",
              title: "Hookto",
              description:
                "Hookto is a self-hostable, all-in-one GitHub app built to automate the boring stuff in your org, account, or repo.",
              link: `/r/hookto`,
              // featured: true,
            },
            {
              banner:
                "https://github.com/open-devhub/quillbot/blob/main/assets/icon.png?raw=true",
              title: "QuillBot",
              description:
                "Advanced Discord developer assistant for coding, documentation lookup, and more",
              link: "https://github.com/open-devhub/quillbot",
            },
          ].map(({ title, description, banner, link }) => (
            <div
              key={title}
              className={`bg-bg-secondary hover:bg-bg-tertiary flex flex-col sm:flex-row items-center p-sm rounded-lg gap-md border`}
            >
              <Image
                src={banner}
                height={120}
                width={120}
                alt={title}
                className="w-44 h-34 shrink-0 rounded-lg object-cover"
              />

              <div className="flex flex-col gap-sm">
                <h2 className="text-lg">{title}</h2>

                <span className="text-fg-secondary">{description}</span>

                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <Button icon={ArrowRight}>See more</Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href={`/gh?tab=repositories&q=&type=&language=&sort=stargazers`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center"
        >
          <Button icon={ArrowUpRight}>See all</Button>
        </Link>
      </div>

      <div className="separator" />

      <div className="py-md flex flex-col gap-md">
        <h1 className="text-xl">GitHub Activity</h1>

        <Link href="/github" target="_blank" rel="noopener noreferrer">
          <Image
            src="https://ghchart.rshah.org/3f7fff/calebephrem"
            height={160}
            width={160}
            alt="Contribution Graph"
            className="w-full"
          />
        </Link>
      </div>

      <div className="separator" />

      <div className="py-md flex flex-col gap-md">
        <h1 className="text-xl">Find me online</h1>

        <div className="grid gap-sm grid-cols-2 sm:grid-cols-3">
          {[
            {
              icon: "https://img.icons8.com/?size=100&id=106562&format=png&color=FFFFFF",
              label: "GitHub",
              link: "/github",
            },
            {
              icon: "https://img.icons8.com/?size=100&id=M725CLW4L7wE&format=png&color=000000",
              label: "Discord",
              link: "/discord",
            },
            {
              icon: "https://img.icons8.com/?size=100&id=0vJNjSJWpHy7&format=png&color=000000",
              label: "Discord Server",
              link: "https://devhub.vercel.app/join",
            },
            {
              icon: "https://img.icons8.com/?size=100&id=ClbD5JTFM7FA&format=png&color=FFFFFF",
              label: "Twitter / X",
              link: "/x",
            },

            {
              icon: "https://img.icons8.com/?size=100&id=53388&format=png&color=FFFFFF",
              label: "Email",
              link: `mailto:${staticData.external.email}`,
            },
            {
              icon: "https://img.icons8.com/?size=100&id=12463&format=png&color=FF4500",
              label: "Reddit",
              link: "/reddit",
            },
          ].map(({ icon, label, link }) => (
            <Link
              key={label}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-bg-secondary hover:bg-bg-tertiary p-sm rounded-lg flex items-center gap-md border"
            >
              <Image src={icon} height={24} width={24} alt={label} />
              <span className="font-display">{label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
