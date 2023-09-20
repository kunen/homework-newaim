import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('../views/Login.vue')
		},
		{
			path: '/list',
			name: 'List',
			component: () => import('../views/List.vue')
		}
	]
})

export default router
