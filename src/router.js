import VueRouter from 'vue-router'

import defaultPage from '@/components/defaultPage'
import lastPage from '@/components/lastPage'


export default new VueRouter({
  mode: 'history',
  routes:[
    {
      path:'/',
      name:'default',
      component: defaultPage,
      props: true
    },
    {
      path:'/last',
      name:'last',
      component: lastPage,
      props: true
    }
  ]

});
