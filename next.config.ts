import type { NextConfig } from "next";

// When this build runs inside GitHub Actions, GITHUB_REPOSITORY is
// "your-username/your-repo-name". We use the repo name as the basePath
// so links and assets resolve correctly at username.github.io/repo-name.
// If you deploy to a root user site (username.github.io repo itself),
// this evaluates to an empty string automatically and can be ignored.
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserRootSite = repoName.endsWith(".github.io");
const basePath = process.env.GITHUB_ACTIONS && repoName && !isUserRootSite
  ? `/${repoName}`
  : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
