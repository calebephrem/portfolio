import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import metadata from "@/lib/metadata";
import ReactLenis from "lenis/react";
import { Caveat_Brush, Syne } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const display = Caveat_Brush({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const sans = Syne({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export function Paper({ children }: { children: ReactNode }) {
  return (
    <div
      className="w-screen h-full min-h-screen px-md"
      style={{
        backgroundImage: `linear-gradient(to bottom, transparent 31px, #a5f3fc 31px, #a5f3fc 32px)`,
        backgroundSize: "100% 32px",
      }}
    >
      <div
        className="min-h-full max-w-232 mx-auto"
        style={{ lineHeight: "32px" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} h-full antialiased `}
    >
      <body className="">
        <ReactLenis root options={{ lerp: 0.2 }}>
          <Paper>
            <Header />

            <main>{children}</main>

            <Footer />
          </Paper>
        </ReactLenis>
      </body>
    </html>
  );
}

export { metadata };
