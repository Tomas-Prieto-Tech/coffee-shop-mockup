import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      swr$: path.resolve(__dirname, "node_modules/swr/dist/index/index.mjs"),
    };

    return config;
  },
};

export default nextConfig;
