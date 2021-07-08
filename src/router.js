<<<<<<< HEAD
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
=======
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
>>>>>>> 01fe30a5b22de641e833602a0ecac88e77d21be2
    }
  ]

});
<<<<<<< HEAD
=======

export default router;
>>>>>>> 01fe30a5b22de641e833602a0ecac88e77d21be2
