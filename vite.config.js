import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/MyMuseumTourBuilder.jsx",
      formats: ["es"],
      name: "MyMuseumTourBuilder",
    },
    rollupOptions: {
      // We don't want to bundle React with our code, so we mark it as external
      external: ["react", "react-dom", "react/jsx-runtime", "prop-types"],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `assets/[name].[ext]`,
        globals: {
          react: "react",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
          "prop-types": "PropTypes",
        },
      },
    },
  },
  // This option avoids bundling excess code.
  // It seems related to React 17+ changing the JSX runtime
  // and may need to be re-evaluated if we upgrade React
  // See:
  // - https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html
  // - https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#jsxruntime
  // - https://www.npmjs.com/package/@vitejs/plugin-react
  plugins: [react({ jsxRuntime: "classic" })],
  // Have static port for documentation purposes
  server: {
    port: 43110,
    strictPort: true,
  },
  publicDir: resolve(__dirname, "cypress", "fixtures"),
});
