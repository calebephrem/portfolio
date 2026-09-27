import type { Metadata } from "next";
import staticData from "./staticdata";

const metadata: Metadata = {
  // metadataBase: "http://localhost:3000",
  metadataBase: new URL(staticData.site.url),
  // title: {
  //   default: staticData.name,
  //   template: "%s | Dev",
  // },
  title: staticData.name,
  description: staticData.site.description,
  authors: [{ name: staticData.name }],
  creator: staticData.name,
  publisher: staticData.name,
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/pfp.jpg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: staticData.site.url,
    siteName: staticData.name,
    title: staticData.name,
    description: staticData.site.description,
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: staticData.name,
    description: staticData.site.description,
    images: ["/banner.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default metadata;
