import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // This will allow the build to finish even if there are type errors
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
