<template>
<div id="app">
  <meta Content-Type="text/html">
  <div class="container-fluid" :class="fondo">
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <router-view />
      </div>
      <button class="btn btn-primary btn-sm fixed" @click.prevent="audio.isPlaying ? pause(audio) : play(audio)">
      {{ audio.isPlaying ? 'Pause' : 'Play' }} {{ audio.name }}
      </button>
    </div>
  </div>
</div>
</template>

<script>
import {store} from './store/store'
import axios from 'axios'
export default {
  name: 'app',
  data() {
    return {
      //variable del fondo dinamico
      fondo: 'fondo',
      audio:
      {
        id: 'music-fondo',
        name: 'music-fondo',
        file: new Audio(require('./assets/audio/fondo.mp3')),
        isPlaying: false
      }
    }
  },
  created() {
    //intercept error for system cache
    axios.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          // if you ever get an unauthorized, logout the user
          this.$store.dispatch('AUTH_LOGOUT')
          // you can also redirect to /login if needed !
        }
        throw err;
      });
    });
    //mutated header for that play sound in windows
    axios.request('/', {
      headers: {
        'Content-Type': 'text/html'
      }
    });
    //cambio de fondo dinamico//
    if(store.getters.getFondo == 'fondo2'){
      this.fondo = 'fondo2'
    }else{
      this.fondo = 'fondo'
    }
  },
  beforeUpdate(){
    //cambio de fondo dinamico//
    if(store.getters.getFondo == 'fondo2'){
      this.fondo = 'fondo2'
    }else{
      this.fondo = 'fondo'
    }
  },
  update(){
    //cambio de fondo dinamico//
    if(store.getters.getFondo == 'fondo2'){
      this.fondo = 'fondo2'
    }else{
      this.fondo = 'fondo'
    }
  },
  mounted(){
    //cambio de fondo dinamico//
    if(store.getters.getFondo == 'fondo2'){
      this.fondo = 'fondo2'
    }else{
      this.fondo = 'fondo'
    }
  },
  methods: {
    play (audio) {
     audio.isPlaying = true;
     audio.file.play();
    },

    pause (audio) {
     audio.isPlaying = false;
     audio.file.pause();
   }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Merriweather', serif;
  font-family: 'Indie Flower', cursive;
}

.fondo{
  background: url(../src/assets/fondo.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 750px;
}

.fondo2{
  background: url(../src/assets/fondo2.jpg) no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 750px;
}

.fixed{
  position: absolute;
  top: 0;
  left: 0;
}
</style>
