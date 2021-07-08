import VueRouter from 'vue-router'

import defaultPage from '@/components/defaultPage'
import firstPage from '@/components/firstPage'


export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      name:'mainPage',
      component: defaultPage,
      props: true
    },
    {
      path:'/first',
      name:'first',
      component: firstPage,
      props: true
    }
  ]

});
