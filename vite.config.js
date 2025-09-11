import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/Portfolio-2.0/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate vendor libraries
          vendor: ['react', 'react-dom'],
          // Group UI components together
          ui: [
            './src/ui/ProfileCard',
            './src/ui/DecryptLine', 
            './src/ui/GooeyNav'
          ],
          // Group utility components
          components: [
            './src/components/SparklesPreview',
            './src/components/ui/ExpandableCardDemo',
            './src/components/ui/sparkles'
          ]
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'esbuild',
    // Enable source maps for debugging (optional)
    sourcemap: false
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
})
