export default {
    install(Vue) {
        const { Store } = require("./store");
        const { SDK } = require("./sdk");
        Vue.prototype.$store = Store;
        Vue.prototype.$sdk = SDK;
    },
};