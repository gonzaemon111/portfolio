import Vue from 'vue'
import Router from 'vue-router'
import Top from './components/Top'
import Skill from './components/Skill'
import Work from './components/Work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/skills',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/works',
      name: 'Work',
      component: Work
    }
  ]
})