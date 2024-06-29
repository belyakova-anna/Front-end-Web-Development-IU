import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Front-end-Web-Development-IU/",
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        comic: resolve(__dirname, 'comic.html'),
      }
    }
  },
})
