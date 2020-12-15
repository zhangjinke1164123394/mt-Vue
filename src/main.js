import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from  "./routes"
import VueRouter from 'vue-router'
import store from './store'
import imgLazy from './imgLizy'
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.mixin({
  mounted(){
    imgLazy.change()
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
