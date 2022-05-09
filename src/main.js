/* ----- IMPORT:PACKAGES------------------------- */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./plugins/routes";
import store from "./plugins/store";

/* ----- IMPORT:STYLES------------------------- */
import "./assets/scss/core/_import.scss";
import "./assets/scss/static/_import.scss";

/* ----- CREATE:APP------------------------- */
createApp(App).use(router).use(store).mount("#app");
