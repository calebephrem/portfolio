import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    types: { "application/rss+xml": "/blog/rss.xml" },
  },
};

export default function BlogLayout({ children }: LayoutProps<"/">) {
  return children;
}
