import { defineConfig } from 'vite';
import path, { resolve } from 'path';

import pugPlugin from 'vite-plugin-pug';
import babel from 'vite-plugin-babel';
import compress from 'vite-plugin-compress';

export default defineConfig({
  plugins: [
    pugPlugin({
      localImports: true,
    }),
    babel(),
    compress(),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
      },
    },
  },
});
