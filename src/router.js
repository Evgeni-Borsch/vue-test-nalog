import Vue from 'vue'
import Router from 'vue-router'

import defaultPage from '@/components/defaultPage'

Vue.use(Router);

let router = new Router({
  routes:[
    {
      path:'/def',
      name:'default',
      component: defaultPage
    }
  ]

});

export default router;