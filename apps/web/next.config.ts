import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/cv",
        destination: "/resume.pdf",
        permanent: true,
      },
      {
        source: "/hire-me",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/hire",
        destination: "/#contact",
        permanent: false,
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },

  env: {
    NEXT_PUBLIC_SITE_URL:
      process.env["NEXT_PUBLIC_SITE_URL"] ?? "https://tanishk-khare.me",
    NEXT_PUBLIC_API_URL:
      process.env["NEXT_PUBLIC_API_URL"] ?? "http://localhost:4000",
  },

  transpilePackages: ["@repo/content", "@repo/config"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
