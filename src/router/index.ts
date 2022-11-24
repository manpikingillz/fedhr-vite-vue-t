// import Login from '@pages/Login.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import MainAppPage from '@/pages/MainAppPage.vue';
import LandingPage from '@/pages/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'landing',
    meta: {
			title: 'Landing'
		},
    component: LandingPage,
  },
  {
    path: '/login',
		name: 'login',
		meta: {
			title: 'Login'
		},
		exact: true,
		component: () => import('../pages/LoginPage.vue')
  },
  {
    path: '/main',
    name: 'main',
    meta: {
			title: 'Main'
		},
    component: MainAppPage,
    children: [
      {
        path: '',
        name: 'dashboard',
        meta: {
          title: 'Dashboard',
          // For aiding in menu selection, and should match menuItemKey
          menuItemKey: 'dashboard'
        },
        exact: true,
        component: () => import('../pages/DashboardPage.vue')
      },
      {
        path: '/employees',
        name: 'employees',
        meta: {
          title: 'Employees',
          menuItemKey: 'employees'
        },
        exact: true,
        component: () => import('../pages/EmployeesPage.vue')
      },
      {
        path: '/hiring',
        name: 'hiring',
        meta: {
          title: 'Hiring',
          menuItemKey: 'hiring'
        },
        exact: true,
        component: () => import('../pages/HiringPage.vue')
      },
      {
        path: '/timeoff',
        name: 'timeoff',
        meta: {
          title: 'Time Off',
          menuItemKey: 'timeoff'
        },
        exact: true,
        component: () => import('../pages/timeoff/TimeOffPage.vue'),
        children: [
          {
            path: '/overview',
            name: 'overview',
            meta: {
              title: 'Timeoff Overview',
              menuItemKey: 'timeoff',
              tabMenuItemKey: 'overview'
            },
            exact: true,
            component: () => import('../pages/timeoff/TimeoffOverview.vue')
          },
          {
            path: '/requests',
            name: 'requests',
            meta: {
              title: 'Timeoff Requests',
              menuItemKey: 'timeoff',
              tabMenuItemKey: 'requests'
            },
            exact: true,
            component: () => import('../pages/timeoff/TimeoffRequests.vue')
          },
          {
            path: '/balances',
            name: 'balances',
            meta: {
              title: 'Timeoff Balances',
              menuItemKey: 'timeoff',
              tabMenuItemKey: 'balances'
            },
            exact: true,
            component: () => import('../pages/timeoff/TimeoffBalances.vue')
          },
          {
            path: '/reports',
            name: 'reports',
            meta: {
              title: 'Timeoff Reports',
              menuItemKey: 'timeoff',
              tabMenuItemKey: 'reports'
            },
            exact: true,
            component: () => import('../pages/timeoff/TimeoffReports.vue')
          },
          {
            path: '/settings',
            name: 'settings',
            meta: {
              title: 'Timeoff Settings',
              menuItemKey: 'timeoff',
              tabMenuItemKey: 'settings'
            },
            exact: true,
            component: () => import('../pages/timeoff/TimeoffSettings.vue')
          }
        ]
      },
      {
        path: '/scheduling',
        name: 'scheduling',
        meta: {
          title: 'Scheduling',
          menuItemKey: 'scheduling'
        },
        exact: true,
        component: () => import('../pages/SchedulingPage.vue')
      }
    ]
  },
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
