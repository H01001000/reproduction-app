import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    loader: "custom",
    loaderFile: "./src/imageLoader.ts"
  }
};

export default nextConfig;
