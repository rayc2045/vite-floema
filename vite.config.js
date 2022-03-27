import { defineConfig } from 'vite';
import { resolve } from 'path';

import pugPlugin from 'vite-plugin-pug';
import babel from 'vite-plugin-babel';

export default defineConfig({
  plugins: [
    pugPlugin(),
    babel(),
    // babel({
    //   babelConfig: {
    //     babelrc: false,
    //     configFile: false,
    //     plugin: ['@babel/plugin-proposal-decorators'],
    //   },
    // }),
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
