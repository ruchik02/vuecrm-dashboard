import { createVuetify } from "vuetify";
import "vuetify/styles";
import * as components from "vuetify/components";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import "@mdi/font/css/materialdesignicons.css";
import store from "./store/store";

const vuetify = createVuetify({
  components,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "light",
    themes: {},
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(store);
app.use(router);
app.mount("#app");
