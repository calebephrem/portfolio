import Emoji from "@/components/ui/Emoji";
import staticData from "@/lib/staticdata";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="flex flex-col gap-md">
      <div className="flex gap-md flex-col items-center md:flex-row">
        <div className="dotted min-w-fit">
          <Image src="/me.jpg" height={24} width={200} alt="me" />
        </div>

        <div className="flex justify-center flex-col gap-md">
          <div className="flex items-center gap-xs">
            <h1 className="text-5xl">
              Hello, {"I'm"}{" "}
              <span className="text-accent-primary outlined">
                Caleb <Emoji name="wave" size={36} />
              </span>
            </h1>
          </div>

          <p className="text-md">
            <u>A creative developer</u> based in{" "}
            <mark className="secondary">Ethiopia</mark>, making and building
            things that work and {"don't"} hurt to look at. When {"I'm"} not
            working, you can find me exploring new coffee spots or{" "}
            <mark>contributing to open source projects :3</mark>
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-md">
        <h1 className="text-3xl">What I love to do</h1>

        <ul>
          <li>
            Build interfaces that are fast, accessible, and built to scale.{" "}
            <u>React, Next.js, and Tailwind</u> are my tools of choice.
          </li>
          <li>
            Design to production with careful attention to typography, spacing,
            and interaction. Making sure the final product feels as considered
            as it looks.
          </li>
          <li>
            Build tools and bots that people actually want to use daily: from
            Discord bots to browser extensions, focused on solving real,
            recurring problems rather than building for the sake of it.
          </li>
          <li>
            Write code meant to be maintained: Clean structure, sensible naming,
            and documentation that {"doesn't"} lie to the next person reading it
            (usually future me <Emoji name="giggle" />
            ).
          </li>
          <li>
            Always curious -{" "}
            <mark className="secondary">
              always picking up new tools when they solve a problem better than
              what I already know.
            </mark>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-md">
        <h1 className="text-3xl">Things I work with</h1>

        <div className="flex gap-sm flex-wrap">
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
              icon: "https://zed.dev/_next/static/media/logo_wordmark_black_bigger.2877pop7hmjx0.png",
            },
            {
              label: "Figma",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg",
            },
            {
              label: "Postman",
              icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
            },
          ].map(({ label, icon }, i) => {
            const clipPath = [
              "polygon(2% 4%, 98% 2%, 96% 94%, 3% 97%)",
              "polygon(1% 2%, 99% 4%, 97% 96%, 2% 92%)",
              "polygon(3% 3%, 97% 1%, 98% 95%, 1% 98%)",
              "polygon(2% 1%, 96% 3%, 99% 97%, 4% 93%)",
            ][i % 4];

            return (
              <div
                key={label}
                className="flex items-center gap-sm bg-bg-secondary overflow-hidden p-sm hover:bg-bg-tertiary dotted border-accent-primary!"
                style={{ clipPath }}
              >
                <Image src={icon} height={24} width={24} alt={label} />

                <span>{label}</span>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col gap-md">
          <h1 className="text-3xl">Some projects I liked</h1>

          <div className="flex flex-col lg:flex-row gap-sm">
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
                  "https://github.com/open-devhub/quillbot/blob/main/assets/icon.png?raw=true",
                title: "QuillBot",
                description:
                  "Advanced Discord developer assistant for coding, documentation lookup, and more",
                link: "https://github.com/open-devhub/quillbot",
              },
              {
                banner:
                  "https://github.com/calebephrem/portfolio/blob/main/app/icon.svg?raw=true",
                title: "Portfolio",
                description:
                  "a snapshot of who I am as a developer. My style, my craft, and my ongoing evolution.",
                link: `/r/portfolio`,
              },
            ].map(({ banner, title, description, link }, i) => {
              const clipPath = [
                "polygon(0.5% 0.5%, 50% 1.8%, 99.5% 0.5%, 98.5% 50%, 99.5% 99.5%, 50% 98.2%, 0.5% 99.5%, 1.5% 50%)",
                "polygon(1% 0.5%, 50% 2%, 99% 1%, 98% 50%, 99.5% 99%, 50% 98%, 0.5% 99.5%, 1% 50%)",
                "polygon(0.5% 1%, 50% 1.5%, 99.5% 0.5%, 99% 50%, 99% 99.5%, 50% 98.5%, 1% 99%, 0.5% 50%)",
                "polygon(1% 0.5%, 50% 1.8%, 99.5% 1%, 98.5% 50%, 99% 99%, 50% 98.2%, 0.5% 99.5%, 1% 50%)",
              ][i % 4];

              return (
                <Link
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={title}
                  className="flex items-center flex-col sm:flex-row gap-md bg-bg-secondary p-sm px-md after:bg-accent-secondary"
                  style={{ clipPath }}
                >
                  <Image
                    src={banner}
                    height={54}
                    width={54}
                    alt={title}
                    className="w-full max-w-24 lg:max-w-18"
                  />

                  <div className="flex flex-col \gap-xs">
                    <h1 className="text-2xl">{title}</h1>

                    <p>{description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex flex-col gap-md">
          <h1 className="text-3xl">GitHub Activity</h1>

          <Link
            href={staticData.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="after:hidden"
          >
            <Image
              src="https://ghchart.rshah.org/4375ad/calebephrem"
              height={24}
              width={24}
              alt="GitHub Activity"
              className="w-full"
            />
          </Link>
        </div>

        <div className="flex flex-col gap-md">
          <h1 className="text-3xl">Find me online</h1>

          <div className="flex items-center gap-md flex-wrap">
            {[
              {
                icon: "https://img.icons8.com/?size=100&id=106562&format=png&color=000000",
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
                icon: "https://img.icons8.com/?size=100&id=53388&format=png&color=000000",
                label: "Email",
                link: `mailto:${staticData.links.email}`,
              },
              {
                icon: "https://img.icons8.com/?size=100&id=12463&format=png&color=FF4500",
                label: "Reddit",
                link: "/reddit",
              },
            ].map(({ icon, label, link }) => (
              <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                key={label}
                className="flex items-center gap-md bg-bg-secondary p-sm"
              >
                <Image
                  src={icon}
                  height={24}
                  width={24}
                  alt={label}
                  className="shrink-0 w-8"
                />

                <span>{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
