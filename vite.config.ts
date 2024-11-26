import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), dts({ tsconfigPath: './tsconfig.app.json' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: '@module/fe-core',
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    emptyOutDir: false,
  },
});
