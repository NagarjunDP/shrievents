// import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import fs from "node:fs";
// import path from "path";
// import { defineConfig } from "vite";
// import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

// export default defineConfig({
//   plugins,
//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },
//   envDir: path.resolve(import.meta.dirname),
//   root: path.resolve(import.meta.dirname, "client"),
//   build: {
//     outDir: path.resolve(import.meta.dirname, "dist/public"),
//     emptyOutDir: true,
//   },
//   server: {
//     port: 3000,
//     strictPort: false, // Will find next available port if 3000 is busy
//     host: true,
//     allowedHosts: [
//       ".manuspre.computer",
//       ".manus.computer",
//       ".manus-asia.computer",
//       ".manuscomputer.ai",
//       ".manusvm.computer",
//       "localhost",
//       "127.0.0.1",
//     ],
//     fs: {
//       strict: true,
//       deny: ["**/.*"],
//     },
//   },
// });

// // vite.config.ts
// // vite.config.ts// vite.config.ts
// import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
// import tailwindcss from "@tailwindcss/vite";
// import react from "@vitejs/plugin-react";
// import path from "path";
// import { defineConfig } from "vite";
// import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

// const plugins = [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()];

// export default defineConfig({
//   plugins,
//   root: path.resolve(import.meta.dirname, "client"),

//   // ❗ Output MUST be "dist" – not "dist/public"
//   build: {
//   outDir: path.resolve(import.meta.dirname, "dist"),
//   emptyOutDir: true,
// },

//   resolve: {
//     alias: {
//       "@": path.resolve(import.meta.dirname, "client", "src"),
//       "@shared": path.resolve(import.meta.dirname, "shared"),
//       "@assets": path.resolve(import.meta.dirname, "attached_assets"),
//     },
//   },

//   server: {
//     port: 3000,
//     host: true,
//   },
// });
import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  plugins: [react(), tailwindcss(), jsxLocPlugin(), vitePluginManusRuntime()],

  root: path.resolve(__dirname, "client"),

  build: {
    outDir: path.resolve(__dirname, "client/dist"),
    emptyOutDir: true,
    copyPublicDir: true,   // 👍 ensures images from /public are copied
  },

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client/src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },

  server: {
    port: 3000,
    host: true,
  },
});
