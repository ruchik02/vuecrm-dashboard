import DashboardLayout from "@/layouts/DashboardLayout.vue";
import LoginLayout from "@/layouts/LoginLayout.vue";
import SignupLayout from "@/layouts/SignupLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

// Import your components

// Define routes
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginLayout,
        meta: {
          requiresAuth: false
        }
      },
      {
        path: '/signup',
        name: 'Signup',
        component: SignupLayout,
        meta: {
          requiresAuth: false
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardLayout ,
        meta: {
          requiresAuth: false
        }
    }
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Navigation guard to handle authentication
router.beforeEach((to, from, next) => {
    const isAuthenticated = false // Replace with your auth check logic
    
    if (to.meta.requiresAuth && !isAuthenticated) {
      next('/login')
    } else if (isAuthenticated && (to.path === '/login' || to.path === '/signup')) {
      next('/dashboard') // Redirect to dashboard if user is already logged in
    } else {
      next()
    }
  })

export default router;
