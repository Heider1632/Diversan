import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    token: localStorage.getItem('user-token') || '',
    status: '',
    points: 0,
  },
  getters:{
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
    getPoints: state => state.points,
    getToken: state => state.token,
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

      },
      incrementAsync: (context) => {
        context.commit('increment_points');
      }
    }
})
