<template>
  <div id="app">
    <meta Content-Type="text/html">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-11 col-md-11 col-sm-8">
          <router-view />
        </div>
        <div class="col-lg-1 col-md-1 col-sm-2">
          <navbar />
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import navbar from './components/navbar'
import axios from 'axios'
export default {
  name: 'app',
  components: {
    navbar,
  },
  data(){
    return{
      fondo: 'assets/audio/fondo.mp3'
    }
  },
  created(){
    axios.request('/path', {
        headers: {
          'Content-Type': 'text/html'
        }
      }).then(success => console.log('exito'))
        .catch(error => console.log(error))

    var audio = new Audio(this.fondo);
    audio.play();
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
      background: url(../src/assets/Fondo.svg);

      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
}
</style>
