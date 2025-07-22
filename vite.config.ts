import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_singleFetch: true,
        v3_lazyRouteDiscovery: true,
      },
    }),
    tsconfigPaths(),
  ],
  server: {
    port: Number(process.env.PORT) || 5173,
    host: process.env.HOST || 'localhost',
    strictPort: true,
    hmr: {
      protocol: 'ws',
      host: process.env.HOST || 'localhost',
      port: Number(process.env.PORT) || 5173,
    },
    proxy: {
      '/api/account': 'http://localhost:8956',
      '/api/auth': 'http://localhost:5689',
    },
  },
  optimizeDeps: {
    include: ['@remix-run/react', '@remix-run/node'],
  },
});
