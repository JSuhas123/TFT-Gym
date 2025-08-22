import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          forms: ['formik', 'yup'],
          icons: ['lucide-react'],
          routing: ['react-router-dom'],
          notifications: ['react-toastify']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Enable source maps for better debugging
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true
  },
  server: {
    port: 5173,
    host: true,
    // Enable HMR for better development experience
    hmr: true
  },
  preview: {
    port: 4173,
    host: true
  },
  // Enable prefetching for better performance
  experimental: {
    renderBuiltUrl(filename: string) {
      return '/' + filename;
    }
  }
});
