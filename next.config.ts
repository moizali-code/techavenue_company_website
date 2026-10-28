import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "3001" },
      { protocol: "http", hostname: "localhost", port: "9002" },
      { protocol: "http", hostname: "minio", port: "9000" },
    ],
  },
};

export default nextConfig;
