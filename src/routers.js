//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//Pages
import Home from '@/pages/Home'
import Admin from '@/pages/Admin'
import NotFound from '@/pages/404'

//Routering
export default new Router({
	scrollBehavior: () => ({ x: 0, y: 0 }),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin
		},
		{
			path: '*',
			name: 'notFound',
			component: NotFound
		}
	]
})