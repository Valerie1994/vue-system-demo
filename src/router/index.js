import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/pages/mainPage'

Vue.use(Router)
Vue.use(iView)
Vue.use(MainPage)

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
    }
  ]
})
