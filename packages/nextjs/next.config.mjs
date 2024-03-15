/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: false, 
  experimental: {
    externalDir: true,
  },
  transpilePackages: ['@single-spa-poc/angularjs-legacy'],
};

export default nextConfig;
