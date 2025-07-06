import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  base: "/",
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          fiber: ["@react-three/fiber"],
          drei: ["@react-three/drei"],
          gltf: ["three/examples/jsm/loaders/GLTFLoader"],
        },
      },
    },
  },
});
