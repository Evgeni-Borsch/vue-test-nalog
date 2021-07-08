import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import VueRouter from 'vue-router'
=======
>>>>>>> 01fe30a5b22de641e833602a0ecac88e77d21be2
import router from '@/router.js'

Vue.config.productionTip = false;
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
