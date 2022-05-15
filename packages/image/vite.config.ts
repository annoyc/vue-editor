import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import pkg from './package.json'

export default defineConfig({
  plugins: [Vue()],
  build: {
    lib: {
      entry: './src/index.ts',
      name: 'LcImage',
      fileName: `lc-image.${pkg.version}`,
      formats: ['umd'],
    }
  }
})