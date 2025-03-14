import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* 核心配置 */
  reactStrictMode: true,
  swcMinify: true, // 使用 SWC 進行最小化

  /* 靜態優化 */
  poweredByHeader: false, // 移除 X-Powered-By 響應頭
  compress: true, // 啟用 gzip 壓縮

  /* 圖像優化 */
  images: {
    domains: ['localhost'], // 添加您需要的圖像來源域
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  /* 環境變數 */
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  },

  /* 性能優化 */
  experimental: {
    serverComponentsExternalPackages: [], // 在服務器組件中作為外部包處理的依賴項
    optimizeCss: true, // 優化 CSS
  },

  /* 构建时输出独立的 Next.js 程序 */
  output: 'standalone',

  /* 配置資源依賴 */
  transpilePackages: [], // 需要在 Next.js 應用程序中進行轉譯的外部依賴包
};

export default nextConfig;
