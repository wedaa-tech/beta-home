/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'utfs.io',
      'img.clerk.com',
      'subdomain',
    ],
  },
  basePath: "/beta-home",
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
