import type { NextConfig } from "next";

// Forms POST to the site's own origin (see LANDING_API_URL) and this rewrite
// proxies them to the API — same-origin for the browser, so no CORS.
// Override the upstream with LANDING_API_ORIGIN when testing.
const LANDING_API_ORIGIN =
  process.env.LANDING_API_ORIGIN ?? "https://api.zenda.cash";

const nextConfig: NextConfig = {
  devIndicators: false,
  async rewrites() {
    return [
      {
        source: "/api/landing/:path*",
        destination: `${LANDING_API_ORIGIN}/api/landing/:path*`,
      },
    ];
  },
};

export default nextConfig;
