import Vue from 'vue'
import Router from 'vue-router'
/* import Home from '@/view/home' */
import Contact from '@/view/contact'
import Product from '@/view/product'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contact',
      component: Contact
    },
    /*  {
      path: '/contact',
      name: 'contact',
      component: Contact
    }, */
    {
      path: '/product',
      name: 'product',
      component: Product
    }
  ]
})
