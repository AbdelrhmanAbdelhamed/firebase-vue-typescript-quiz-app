import Vue from "vue";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./store";

import { registerAuthUserState } from "@/auth";

Vue.config.productionTip = false;

sync(store, router, { moduleName: "route" });

let vue: any = null;
registerAuthUserState().then(() => {
  if (!vue) {
    vue = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
