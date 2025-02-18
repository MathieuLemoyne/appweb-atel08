import { defineConfig } from "vite";
base: "/appweb-atel08/";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
});
