import type { NextConfig } from "next";

const provider = process.env.CMS_PROVIDER ?? "payload";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "3001" },
      { protocol: "http", hostname: "localhost", port: "9002" },
      { protocol: "http", hostname: "minio", port: "9000" },
      { protocol: "http", hostname: "localhost", port: "8090" },
      { protocol: "http", hostname: "cockpit" },
    ],
  },
  turbopack: {
    resolveAlias:
      provider === "cockpit"
        ? { "@/lib/cms": "./lib/cms/cockpit" }
        : {},
  },
};

export default nextConfig;
