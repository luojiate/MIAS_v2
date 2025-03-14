import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  build: {
    // 生產環境移除 console 和 debugger
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 拆分代碼，提高緩存利用率
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // 根據需要可以添加更多的拆分規則
        },
      },
    },
    // 啟用 CSS 代碼分割
    cssCodeSplit: true,
    // 生成 source map
    sourcemap: false,
  },
  // 優化開發服務器配置
  server: {
    port: 5173,
    strictPort: false,
    open: true,
    hmr: {
      overlay: true,
    },
  },
  // 預渲染配置
  optimizeDeps: {
    include: ['react', 'react-dom'],
  },
  // 添加環境變數類型檢查
  envPrefix: ['VITE_'],
});
