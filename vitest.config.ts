import tsconfigPaths from 'vite-tsconfig-paths'
import {defineConfig} from 'vitest/config'


export default defineConfig({
  root: 'src',

  plugins: [
    tsconfigPaths(),
  ],

  test: {
    root: '.',

    environment: 'happy-dom',

    setupFiles: ['./tests/setup.ts'],

    reporters: ['verbose'],

    restoreMocks: true,

    coverage: {
      enabled         : true,
      include         : ['src/**'],
      reportsDirectory: 'test_results/vitest',
      reporter        : [['text'], ['html-spa']],
    },
  },
})
