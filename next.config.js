/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/belyakova-anna.github.io/Front-end-Web-Development-IU',  // замените 'your-repo-name' на имя вашего репозитория
  assetPrefix: '/belyakova-anna.github.io/Front-end-Web-Development-IU/',
  trailingSlash: true,  // добавляет слэш в конце каждого пути
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imgs.xkcd.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
