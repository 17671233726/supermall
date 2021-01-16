import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import Toast from "./components/common/toast/index"
import Fastclick from "fastclick"
import VueLazyLoad from "vue-lazyload"
Vue.use(Toast);

Vue.use(VueLazyLoad);

Fastclick.attach(document.body);

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
