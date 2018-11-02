<template>
<div id="app">
  <meta Content-Type="text/html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <router-view />
      </div>
    </div>
    <audio :src="require('./assets/audio/fondo.mp3')" autoplay></audio>
  </div>
</div>
</template>

<script>
import axios from 'axios'
import $ from 'jquery'
export default {
  name: 'app',
  data() {
    return {
      audio: 'audio'
    }
  },
  created() {
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch(AUTH_LOGOUT)
          // you can also redirect to /login if needed !
        }
        throw err;
      });
    });

    axios.request('/', {
      headers: {
        'Content-Type': 'text/html'
      }
    })
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  font-family: 'Merriweather', serif;
  font-family: 'Indie Flower', cursive;
}

html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
}

body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background: url(../src/assets/fondo.jpg);

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
