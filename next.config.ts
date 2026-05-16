import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: {
    // @ts-expect-error - Next 16 type definitions might be outdated
    appIsrStatus: false,
    buildActivity: false,
  },
};

export default nextConfig;
