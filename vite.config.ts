import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
// Security headers configuration
const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  // Note: Strict-Transport-Security should be set at the server level with HTTPS
};

export default defineConfig(({ mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [
      react(),
      // Compression for production build
      isProduction && viteCompression({
        algorithm: 'gzip',
        ext: '.gz',
        threshold: 10240, // 10KB
      }),
      isProduction && viteCompression({
        algorithm: 'brotliCompress',
        ext: '.br',
        threshold: 10240, // 10KB
      }),
      // Visualizer will only be loaded in production build
      isProduction && visualizer({
        open: true,
        filename: 'bundle-analyzer-report.html',
        gzipSize: true,
        brotliSize: true,
      }),
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    optimizeDeps: {
      exclude: ['lucide-react'],
      include: [
        'react',
        'react-dom',
        'react-router-dom',
        '@mui/material',
        '@emotion/react',
        '@emotion/styled',
      ],
    },
    // Server configuration for development
    server: {
      headers: {
        ...securityHeaders,
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https:; connect-src 'self' https://api.example.com;"
      },
    },
    // Build configuration
    build: {
      // Minify CSS and JS
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: isProduction, // Remove console.log in production
          drop_debugger: isProduction, // Remove debugger in production
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            // Split vendor modules
            vendor: [
              'react',
              'react-dom',
              'react-router-dom',
              '@mui/material',
              '@emotion/react',
              '@emotion/styled',
            ],
            // Split routes into separate chunks for better code splitting
            home: ['./src/pages/Home'],
            business: [
              './src/pages/StartBusiness',
              './src/pages/BusinessCounselling',
              './src/pages/Resources',
            ],
            about: [
              './src/pages/about/WhoWeAre',
              './src/pages/about/Team',
              './src/pages/about/Board',
              './src/pages/about/ClientProfiles',
              './src/pages/about/Partners',
              './src/pages/about/Contact',
            ],
            legal: [
              './src/pages/legal/PrivacyPolicy',
              './src/pages/legal/TermsOfUse',
              './src/pages/legal/Accessibility',
              './src/pages/legal/Disclaimer',
            ],
          },
        },
      },
      chunkSizeWarningLimit: 1000, // Size in KB
      // Asset handling
      assetsInlineLimit: 4096, // 4kb
      // Output directory configuration
      outDir: 'dist',
      // Generate sourcemaps in production for better error tracking
      sourcemap: isProduction ? 'hidden' : false,
    },
  };
});
