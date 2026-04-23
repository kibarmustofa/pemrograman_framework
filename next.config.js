/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dynamic.zacdn.com", // Tambahkan domain ZALORA ini
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.gstatic.com", // Wildcard ini akan mengizinkan tbn0, tbn1, tbn2, dst.
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "assets.adidas.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;