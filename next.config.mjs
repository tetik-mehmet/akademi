/** @type {import('next').NextConfig} */
const nextConfig = {
  // Bundle analizi için
  experimental: {
    bundlePagesExternally: true,
  },

  // Görsel optimizasyonu
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },

  // Compiler optimizasyonları
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Webpack optimizasyonları
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Production optimizasyonları
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendors",
            chunks: "all",
          },
        },
      };
    }
    return config;
  },
};

// Bundle analizi için
if (process.env.ANALYZE === "true") {
  const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: true,
  });
  module.exports = withBundleAnalyzer(nextConfig);
}

export default nextConfig;
