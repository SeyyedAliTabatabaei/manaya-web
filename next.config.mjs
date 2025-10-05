/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  trailingSlash: true,
  experimental: {
    typedRoutes: true
  },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

