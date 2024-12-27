/// <reference types="vitest" />
import {fileURLToPath} from 'node:url'
import {defineConfig} from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'


export default defineConfig({
  root: 'src',

  plugins: [
    tsconfigPaths({}),
  ],

  test: {
    root: import.meta.dirname,

    environment: 'happy-dom',

    setupFiles: ['./tests/setup.ts'],

    alias: [{find: /^~\/(.*)/u, replacement: fileURLToPath(new URL('src/$1', import.meta.url))}],

    reporters: ['verbose'],

    outputFile: {
      junit: 'test_results/vitest/junit.xml',
    },

    restoreMocks: true,

    coverage: {
      enabled         : true,
      include         : ['src/**'],
      reportsDirectory: 'test_results/vitest',
      reporter        : [
        ['text'],
        // ['clover', {file: 'clover.xml'}],
        ['lcov'],
      ],
    },
  },
})
