import VueRouter from 'vue-router'

import LoginPage from './components/pages/login-page/login-page.component.vue'
import SignupPage from './components/pages/signup-page/signup-page.component.vue'
import DashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue'
import ListPage from './components/pages/list-page/list-page.component.vue'

const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/login'
    },
    {
      path: '/signup',
      component: SignupPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      component: DashboardPage
    },
    {
      path: '/list',
      component: ListPage
    }
  ]
})

export default router