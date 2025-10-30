/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
    qualities: [100, 75], // Add this to fix the warning
  },
  // Uncomment if your repo is username.github.io/repo-name
  // basePath: '/steam-workshop',
  // assetPrefix: '/steam-workshop/',
};

export default nextConfig;