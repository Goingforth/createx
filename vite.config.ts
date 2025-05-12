import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@use "./src/assets/styles/global.scss","./src/assets/styles/mixin.scss";`,
        additionalData: `@use "/src/assets/styles/_global.scss" as *;`,
      },
    },
  },
});
