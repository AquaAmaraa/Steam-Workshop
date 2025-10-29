/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/steam-workshop',  // Your repo name
  images: {
    unoptimized: true
  }
};

export default nextConfig;