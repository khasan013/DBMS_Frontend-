import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import react from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const routeTreePath = fileURLToPath(new URL("./src/routeTree.gen.js", import.meta.url));

function javascriptRouteTree() {
  const removeTypeRegistration = () => {
    const source = readFileSync(routeTreePath, "utf8");
    const javascript = source.replace(/\nimport type[\s\S]*$/, "\n");

    if (javascript !== source) writeFileSync(routeTreePath, javascript);
    return javascript;
  };

  return {
    name: "javascript-route-tree",
    enforce: "post",
    configResolved: removeTypeRegistration,
    handleHotUpdate({ file }) {
      if (file === routeTreePath) removeTypeRegistration();
    },
    transform(code, id) {
      return id === routeTreePath ? removeTypeRegistration() : code;
    },
  };
}

export default defineConfig({
  plugins: [
    tailwindcss(),
    tanstackStart({
      router: {
        disableTypes: true,
        generatedRouteTree: "routeTree.gen.js",
      },
      server: { entry: "server" },
    }),
    nitro({ defaultPreset: "cloudflare-module" }),
    react(),
    javascriptRouteTree(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
