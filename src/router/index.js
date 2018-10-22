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

Vue.use(VueRouter);

let router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path : '/',
			name: 'home', 
			component: home,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/inicionutricion', 
			name: 'inicionutricion',
			component: homeNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/comidanutricion',
			name: 'comidanutricion',
			component: comidaNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/tipsnutricion', 
			name: 'tipsnutricion',
			component: tipsNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/juegonutricion', 
			name: 'juegonutricion',
			component: gameNutricion,
			meta: {
				progress: {
				  func: [
					{call: 'color', modifier: 'temp', argument: '#ffb000'},
					{call: 'fail', modifier: 'temp', argument: '#6e0000'},
					{call: 'location', modifier: 'temp', argument: 'top'},
					{call: 'transition', modifier: 'temp', argument: {speed: '1.5s', opacity: '0.6s', termination: 400}}
				  ]
				}
			  }
		},
		{
			path: '/juegoPiramide', 
			name: 'juegoPiramide',
			component: piramide,
		},
		{
			path: '/juegoAdivina', 
			name: 'juegoAdivina',
			component: adivina,
		},
		{
			path: '/juegoConcentrate', 
			name: 'juegoConcentrate',
			component: concentrate,
		}
		
	]
});

export default router;