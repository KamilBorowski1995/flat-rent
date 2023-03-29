/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cordiapolska.pl",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "internityhome.pl",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.galleries.smcloud.net",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
