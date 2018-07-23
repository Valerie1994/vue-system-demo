import Vue from 'vue'
import Router from 'vue-router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import HelloWorld from '@/components/HelloWorld'
import ProjectItemModal from '@/components/ProjectItemModal'
import MainPage from '@/pages/mainPage'
import Page1_1 from '@/pages/page1_1'
import Page1_3 from '@/pages/page1_3'

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
    },
    {
      path: '/page1_3',
      name: 'page1_3',
      component: Page1_3
    },
    {
      path: '/projectItemModal',
      name: 'projectItemModal',
      component: ProjectItemModal
    },
  ]
})
