<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 box-inf">
      <user />
    </div>
  </div>
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10">
      <div class="columns is-multiline controls">
        <!-- primer juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goAdivina()">
            <img class="card-img-top topic-game" src="../../assets/games/pregunta.png" alt="Adivina">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Sabias qué...</h5>
            </div>
          </div>
        </div>
        <!-- segundo juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goPiramide()">
            <img class="card-img-top topic-game" src="../../assets/icons/piramide-ico.svg" alt="Piramide">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Juega piramide</h5>
            </div>
          </div>
        </div>
        <!-- tercer juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goConcentrate()">
            <img class="card-img-top topic-game" src="../../assets/games/cerebro.png" img-alt="Cerebro">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Juega Concentrate</h5>
            </div>
          </div>
        </div>
        <!-- cuarto juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goHealtly()">
            <img class="card-img-top topic-game" src="../../assets/games/pregunta.png" alt="Adivina">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">Healthly and unhealtly</h5>
            </div>
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
    goConcentrate(){
      console.log('work');
      this.$router.push({
        path: '/juegoConcentrate'
      })
    },
    goPiramide(){
      this.$router.push({
        path: '/juegoPiramide'
      })
    },
    goAdivina(){
      this.$router.push({
        path: '/juegoAdivina'
      })
    },
    goHealtly(){
      this.$router.push({
        path: '/juegoHealtly'
      })
    }
  }

}
</script>
<style>
.games {
  margin-left: 10px;
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
  margin-bottom: 80px;
}

@media screen and (max-width: 1300px) {
  .target {
    margin-left: 0px;
    margin-right: 0px;
  }
}

.ajust-t-2{
  position: absolute;
  margin-top: -190px;
}
</style>
