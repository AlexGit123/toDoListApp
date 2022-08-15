import { router } from "./router";
import { createApp } from "vue";
import App from "./components/App.vue";
import axios from "axios";
import VueAxios from "vue-axios";

// window.Vue = require("vue");

console.log("testing javascript");

createApp(App).use(router, axios).mount("#app");
