import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/photography-web", // Add if deploying to GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    domains: [], // Add any external image domains if needed
  },
  assetPrefix: "/photography-web/",
};

export default nextConfig;
