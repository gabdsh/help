import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ViewUIPlus from "view-ui-plus";
import "view-ui-plus/dist/styles/viewuiplus.css";
import locale from "view-ui-plus/dist/locale/ru-RU";
import "@/utils/index.less";

// npm install view-ui-plus --save

if (process.env.NODE_ENV === "development") {
  require("./assets/fonts/otf/Montserrat.css");
  require("./assets/fonts/ttf/Montserrat.css");
  require("./assets/fonts/webfonts/Montserrat.css");
}

createApp(App)
  .use(store)
  .use(router)
  .use(ViewUIPlus, { locale })
  .mount("#app-main");
