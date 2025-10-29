/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/Steam-Workshop',  // Replace with YOUR repo name
  images: {
    unoptimized: true
  }
};

export default nextConfig;