import Vue from 'vue';
import VueRouter from 'vue-router'
import home from '../components/home'
import homeNutricion from '../components/nutricion/home-n'
import comidaNutricion from '../components/nutricion/comida-n'
import tipsNutricion from '../components/nutricion/tips-n'
import gameNutricion from '../components/nutricion/game-n'
import piramide from '../components/games/piramide'
import adivina from '../components/games/adivina'
import concentrate from '../components/games/concentrate'
import { store } from '../store/store' // your vuex store

Vue.use(VueRouter);

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path : '/',
			name: 'home',
			component: home,
      meta: {
        resquestAuth: true
      }
		},
		{
			path: '/inicionutricion',
			name: 'inicionutricion',
			component: homeNutricion,
		},
		{
			path: '/comidanutricion',
			name: 'comidanutricion',
			component: comidaNutricion,
		},
		{
			path: '/tipsnutricion',
			name: 'tipsnutricion',
			component: tipsNutricion
		},
		{
			path: '/juegonutricion',
			name: 'juegonutricion',
			component: gameNutricion
		},
		{
			path: '/juegoPiramide',
			name: 'juegoPiramide',
			component: piramide
		},
		{
			path: '/juegoAdivina',
			name: 'juegoAdivina',
			component: adivina
		},
		{
			path: '/juegoConcentrate',
			name: 'juegoConcentrate',
			component: concentrate,
		}

	]
});

// Nav Guard
/*router.beforeEach((to, from, next) => {
  // Check for requiresAuth guard
	if (to.matched.some(record => record.meta.requiresAuth)) {
    // Check if NO logged user
    if (!store.getters.isAuthenticated) {
      next()
      return
    }else{
      next('/')
    }
  }
});*/

export default router;
