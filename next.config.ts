import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Yonetim panelinden yuklenen gorseller Sanity CDN'inden gelir.
       Bu izin olmadan next/image uzak adresleri reddeder. */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
