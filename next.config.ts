import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    reactStrictMode: true,
    // basePath: '/anant-github-page-test',

    images: {
        unoptimized: true,
    },
    
  /* config options here */
};

export default nextConfig;
