import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import { fileURLToPath, URL } from "url";
import tsconfigPaths from "vite-tsconfig-paths";

const baseURL = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  plugins: [
    nodePolyfills(), 
    react(),
    tsconfigPaths(),
  ],
  define: {
    "process.env": {},
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server:{
    port: 3000
  },
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: baseURL,
      },
      {
        find: "@assets",
        replacement: `${baseURL}/assets`,
      },
      {
        find: "@icons",
        replacement: `${baseURL}/components/Icons`,
      },
    ],
  },
});
