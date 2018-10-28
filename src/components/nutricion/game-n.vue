<template>
  <div class="columns is-3 controls">
    <!-- primer juego -->
    <div class="colum games">
      <div class="card target" style="width: 18rem;" @click="goAdivina()">
        <img class="card-img-top topic-game" src="../../assets/games/pregunta.png" alt="Adivina">
        <div class="card-body">
          <h5 class="card-title" align="center">Sabias qué...</h5>
        </div>
      </div>
    </div>
    <!-- segundo juego -->
    <div class="colum games">
      <div class="card target" style="width: 18rem;" @click="goPiramide()">
        <img class="card-img-top topic-game" src="../../assets/icons/piramide-ico.svg" alt="Piramide">
        <div class="card-body">
          <h5 class="card-title" align="center">Juega piramide</h5>
        </div>
      </div>
    </div>
    <!-- tercer juego -->
    <div class="colum games">
      <div class="card target" style="width: 18rem;" @click="goConcentrate()">
        <img class="card-img-top topic-game" src="../../assets/games/cerebro.png" img-alt="Cerebro">
        <div class="card-body">
          <h5 class="card-title" align="center">Juega Concentrate</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import bulma from 'bulma'
export default {
  name: 'game',
  data() {
    return {}
  },
  methods: {
    goConcentrate() {
      this.$router.push({
        path: '/juegoConcentrate'
      })
    },
    goPiramide() {
      this.$router.push({
        path: '/juegoPiramide'
      })
    },
    goAdivina() {
      this.$router.push({
        path: '/juegoAdivina'
      })
    }
  }

}
</script>
<style>
.controls {
  margin-top: 100px;
}
.games{
  margin-left: 50px;
}
.topic-game{
  width: 100px;
  height: 100px;
}
.target{
  margin-left: 100px;
}

.target:hover {
  transition: 500ms all ease-out;
  background: rgba(255, 0, 0, 0.5);
}

@media screen and (max-width: 1300px){
  .target{
    margin-left: 0px;
    margin-right: 0px;
  }

}
</style>
