import { defineConfig } from 'vite';
import path,{ resolve } from 'path';

import pugPlugin from 'vite-plugin-pug';
import babel from 'vite-plugin-babel';

export default defineConfig({
  // resolve: {
  //   alias: {
  //     '@': path.resolve(__dirname, './src'),
  //   },
  // },
  plugins: [
    pugPlugin({
      localImports: true,
    }),
    babel(),
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
