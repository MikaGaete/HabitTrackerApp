import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/Components'),
      '@habits': path.resolve(__dirname, './src/Habits'),
      '@pages': path.resolve(__dirname, './src/Pages'),
      '@utilities': path.resolve(__dirname, './src/Utilities'),
    }
  },
  plugins: [react()],
})
