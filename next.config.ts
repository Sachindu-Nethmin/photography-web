import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/photography-web", // Add if deploying to GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    domains: [], // Add any external image domains if needed
  },
  assetPrefix: "/photography-web/",
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/videos`,
          outputPath: 'static/videos',
          name: '[name].[ext]',
        },
      },
    });
    return config;
  },
};

export default nextConfig;
