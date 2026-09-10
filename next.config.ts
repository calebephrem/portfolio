import type { NextConfig } from "next";
import redirects from "./lib/redirects";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },

  async redirects() {
    return redirects
      .map(({ sources, destination }) =>
        sources.map((source) => ({
          source: `${source}`,
          destination,
          permanent: false,
        })),
      )
      .flat();
  },
};

export default nextConfig;
