import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random-image-pepebigotes.vercel.app",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname:
          "supabasekong-jwos8wcggkwwo44gk4gcgogg.145.223.88.104.sslip.io",
        port: "",
        pathname: "/**",
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
