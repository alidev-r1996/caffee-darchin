import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.ufs.sh", // wildcard for all ufs.sh subdomains
      },
      {
        protocol: "https",
        hostname: "uploadthing.com", // if using direct links
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com", // if using Clerk avatars
      },
      {
        protocol: "https",
        hostname: "*.googleusercontent.com", // for Google avatars
      },
    ],
  },
};

export default nextConfig;
