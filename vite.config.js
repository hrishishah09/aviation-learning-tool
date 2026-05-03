import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'index.html'),
        module1: path.resolve(__dirname, 'module1.html'),
        module2: path.resolve(__dirname, 'module2.html'),
        module3: path.resolve(__dirname, 'module3.html'),
        module4: path.resolve(__dirname, 'module4.html'),
        module5: path.resolve(__dirname, 'module5.html'),
        module6: path.resolve(__dirname, 'module6.html'),
        module7: path.resolve(__dirname, 'module7.html'),
        module8: path.resolve(__dirname, 'module8.html'),
        module9: path.resolve(__dirname, 'module9.html'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
