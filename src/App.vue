<template>
<div id="app">
  <meta Content-Type="text/html">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <router-view />
      </div>
    </div>
    <span :id="audio"></span>
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
      fondo: 'assets/audio/fondo.mp3',
      audio: audio
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

    audio = new Audio(this.fondo);

    var playPromise = this.audio.play();

    // In browsers that don’t yet support this functionality,
    // playPromise won’t be defined.
    if (playPromise !== undefined) {
      playPromise.then(function() {
        // Automatic playback started!
      }).catch(function(error) {
        // Automatic playback failed.
        // Show a UI element to let the user manually start playback.
      });
    }
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
