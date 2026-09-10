import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  images: { unoptimized: true },
  allowedDevOrigins: ['192.168.1.57'],
};

export default nextConfig;
