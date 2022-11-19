// import Login from '@pages/Login.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
			title: 'Home'
		},
    component: HomePage
  },
  {
    path: '/login',
		name: 'login',
		meta: {
			title: 'Login'
		},
		exact: true,
		component: () => import('../pages/LoginPage.vue')
  }
]

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: routes
})

// Add document title on every navigation
router.beforeEach(async (to: any) => {
	if (to.matched.length) document.title = to.meta.title
})

export default router;
