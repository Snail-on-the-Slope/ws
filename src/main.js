import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Core from "./plugings/miniCore";
import axios from "axios";

Vue.config.productionTip = false;
Vue.use(Core);

new Vue({
    router,
    render: h => h(App),
}).$mount("#app");