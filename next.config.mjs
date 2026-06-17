import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const repoName = 'ipmat-resources-test';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  basePath: isGitHubActions ? `/${repoName}` : undefined,
  assetPrefix: isGitHubActions ? `/${repoName}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
