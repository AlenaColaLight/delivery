import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  base: './', // важливо для коректного підключення JS/CSS при відкритті локально
  sourcemap: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/repo-name/' : '/',

});
