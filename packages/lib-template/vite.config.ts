import { defineConfig } from 'vite'
import * as path from 'path'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: 'src',
      include: ['./src/**/*.ts', './src/**/*.vue'],
      exclude: ['vite.config.ts'],
    }),
  ],
  build: {
    minify: false,
    outDir: 'dist',
    lib: {
      name: '@example/lib-template',
      entry: path.resolve(__dirname, 'src/index.ts'),
    },
    rollupOptions: {
      external: ['vue'],
      input: ['src/index.ts'],
      output: [
        {
          format: 'es',
          entryFileNames: '[name].mjs',
          preserveModulesRoot: 'src',
          preserveModules: true,
          exports: 'named',
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
          exports: 'named',
        },
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
