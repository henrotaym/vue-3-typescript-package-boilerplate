import { createApp } from "vue";
import App from "./App.vue";
import "./main.css";
import { TestastosPlugin } from "./lib";

createApp(App).use(TestastosPlugin, { name: "Florent" }).mount("#app");
