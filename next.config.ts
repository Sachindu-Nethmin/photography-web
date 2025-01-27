import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
    domains: [], // Add any external image domains if needed
  },
};

export default nextConfig;
