import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import metadata from "@/lib/metadata";
import ReactLenis from "lenis/react";
import { Inter, Syne } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  // weight: "400",
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} h-full antialiased flex justify-center`}
    >
      <body className="h-fit flex flex-col font-sans border-x-2 border-border w-full max-w-200 py-sm px-md bg-bg-primary/95">
        <div className="fixed inset-0 -z-10 flex items-center justify-center overflow-hidden wave-zoom">
          <Image
            src="/wave.png"
            alt="Wave"
            fill
            priority
            className="object-cover object-center opacity-20"
          />
        </div>

        <ReactLenis root options={{ lerp: 0.2 }}>
          <Header />

          <div className="separator" />

          <main>{children}</main>

          <div className="separator" />

          <Footer />
        </ReactLenis>
      </body>
    </html>
  );
}

export { metadata };
