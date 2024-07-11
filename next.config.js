/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: "/Front-end-Web-Development-IU",
  assetPrefix: "/Front-end-Web-Development-IU/",
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imgs.xkcd.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
