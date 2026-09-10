import type { Metadata } from "next";
import staticData from "./staticdata";

const metadata: Metadata = {
  metadataBase: new URL(staticData.site.url),
  // title: {
  //   default: staticData.name.full,
  //   template: "%s | Dev",
  // },
  title: staticData.name.full,
  description: staticData.site.description,
  authors: [{ name: staticData.name.full }],
  creator: staticData.name.full,
  publisher: staticData.name.full,
  icons: {
    icon: "/pfp.jpg",
    shortcut: "/pfp.jpg",
    apple: "/pfp.jpg",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: staticData.site.url,
    siteName: staticData.name.full,
    title: staticData.name.full,
    description: staticData.site.description,
    images: [
      {
        url: "/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Banner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: staticData.name.full,
    description: staticData.site.description,
    images: ["/banner.jpg"],
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
