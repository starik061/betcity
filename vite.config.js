import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig({
  base: "/betcity/",
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  server: {
    host: true, // Разрешает доступ с внешних устройств
    port: 5173, // Или ваш порт
    allowedHosts: [".ngrok-free.app"] // Разрешаем все ngrok-домены
  }
});
