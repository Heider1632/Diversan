import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    token: localStorage.getItem('user-token') || '',
    status: '',
    points: 0,
    fondo: 'fondo',
    language: 'es'
  },
  getters:{
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getPoints: state => state.points,
    getToken: state => state.token,
    getLanguage: state => state.language,
    getFondo: state => state.fondo
  },
  mutations:{
    auth_request: (state) => {
      state.status = 'loading'
    },
    auth_success: (state, token) => {
      state.status = 'success'
      state.token = token
    },
    auth_error: (state) => {
      state.status = 'error'
    },
    increment_points: (state) => {
      state.points++
    },
    change_background: (state) => {
      state.fondo = 'fondo2'
    },
    backBackground: (state) => {
      state.fondo = 'fondo'
    },
    change_language:(state) => {
      state.language = 'en'
    },
    backLanguage: (state) => {
      state.language = 'es'
    }
  },
  actions:{
    AUTH_REQUEST_ASYNC: (context, username) => {
        context.commit('auth_request')

        setTimeout(() => {
            //creamos el token md5//
            var crypto = require('crypto');
            const token = crypto.createHash('md5').update(username.username).digest("hex");
            var user = { name:username.username, session: token };
            //guadamos la session en el login
            window.$cookies.set('user', user);
            //activa el estado activo el store
            context.commit('auth_success', token);

        }, 2000);
        //cambio de fondo dinamico
        context.commit('change_background')

      },
      incrementAsync: (context) => {
        context.commit('increment_points');
      },
      backgroundAsync: (context) => {
        context.commit('change_background');
      },
      backAsync: (context) => {
        context.commit('backBackground');
      },
      LanguageAsync: (context) => {
        context.commit('change_language');
      },
      backLanguageAsync: (context) => {
        context.commit('backLanguage');
      }
    }
})
