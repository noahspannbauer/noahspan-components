import { defineConfig } from 'vite';
import { extname, relative, resolve } from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

const packageName = 'noahspan-components';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      exclude: ['**/*.stories.tsx'],
      insertTypesEntry: true
    })
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: packageName,
      fileName: (format) => `${packageName}.${format}.js`,
      formats: ['cjs', 'es', 'umd']
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      input: {
        main: resolve(__dirname, 'src/index.ts')
      },
      output: {
        assetFileNames: `${packageName}.[ext]`,
        exports: 'named',
        globals: {
          react: 'React',
          'react-dom': 'react-dom',
          'react/jsx-runtime': 'react/jsx-runtime'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
