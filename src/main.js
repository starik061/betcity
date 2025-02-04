import "normalize.css";
import "./assets/main.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import { init } from "@telegram-apps/sdk-vue";

import App from "./App.vue";
import router from "./router";

init();

const app = createApp(App);

app.use(createPinia()).use(router).mount("#root");
