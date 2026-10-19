import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const basePath = isGitHubPages ? "/cheryl-portfolio" : "";

const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(isGitHubPages ? {
    output: "export",
    basePath,
    trailingSlash: true,
    images: { unoptimized: true },
  } : {}),
};

export default nextConfig;
