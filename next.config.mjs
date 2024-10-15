/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.BASE_PATH,
  images: {
    domains: [
      'utfs.io',
      'subdomain',
    ],
  },
  reactStrictMode: false,
};

export default nextConfig;