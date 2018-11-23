<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 box-inf">
      <user />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10">
      <div class="columns is-3 controls">
        <!-- primer juego -->
        <div class="colum games">
          <div class="card target" style="width: 15rem;" @click="goAdivina()">
            <img class="card-img-top topic-game" src="../../assets/games/pregunta.png" alt="Adivina">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Sabias qué...</h5>
            </div>
            <p class="card-text text-center text-justify">Descubre que tanto saber del tema y como puedes mejorar respondiendo entas divertidas preguntas!</p>
          </div>
        </div>
        <!-- segundo juego -->
        <div class="colum games">
          <div class="card target" style="width: 15rem;" @click="goPiramide()">
            <img class="card-img-top topic-game" src="../../assets/icons/piramide-ico.svg" alt="Piramide">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Juega piramide</h5>
            </div>
            <p class="card-text text-center text-justify">diviertete con un juego de arrastra y suelta con la piramide alimenticia y todos las comidas y frutas que puedas imaginas</p>
          </div>
        </div>
        <!-- tercer juego -->
        <div class="colum games">
          <div class="card target" style="width: 15rem;" @click="goConcentrate()">
            <img class="card-img-top topic-game" src="../../assets/games/cerebro.png" img-alt="Cerebro">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Juega Concentrate</h5>
            </div>
            <p class="card-text text-center text-justify">Resuelve este divertido puzzle donde la concentracion y la memoria son importantes recordando donde estaba cada elemento</p>
          </div>
        </div>
      </div>
    </div>

    <div class="col-lg-2 col-md-2 col-sm-2 ajust-t-2">
      <navbar />
    </div>
  </div>
</div>
</template>
<script>
import bulma from 'bulma'
import navbar from '../navbar'
import user from '../user'
export default {
  name: 'game',
  components: {
    navbar, user
  },
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
  margin-top: 5px;
}

.games {
  margin-left: 50px;
}

.topic-game {
  margin: 2px;
}

.target {
  margin-left: 100px;
}

.target:hover {
  transition: 500ms all ease-out;
  background: #00bcd4;
}

.target:hover h5,
.target:hover p {
  color: white;
}

.box-inf{
  display: flex;
  justify-content: center;
  text-align: center;
}

@media screen and (max-width: 1300px) {
  .target {
    margin-left: 0px;
    margin-right: 0px;
  }
}

.ajust-t-2{
  position: relative;
  margin-top: -120px;
}
</style>
