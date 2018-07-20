import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/pages/mainPage'
import Page1_1 from '@/pages/page1_1'

Vue.use(Router)
Vue.use(iView)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: MainPage
    },
    {
      path: '/page1_1',
      name: 'page1_1',
      component: Page1_1
    }
  ]
})
