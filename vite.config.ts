import { faviconsPlugin } from '@darkobits/vite-plugin-favicons';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  plugins: [
    faviconsPlugin({
      inject: true,
      cache: true,
      icons: {
        favicons: {
          source: './assets/logo.png'
        },
      }
    })
  ]
}));