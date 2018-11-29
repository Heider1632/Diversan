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
              <h5 class="card-title" align="center">{{ game_1 }}</h5>
            </div>
          </div>
        </div>
        <!-- segundo juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goPiramide()">
            <img class="card-img-top topic-game" src="../../assets/icons/piramide-ico.svg" alt="Piramide">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">{{ game_2 }}</h5>
            </div>
          </div>
        </div>
        <!-- tercer juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goConcentrate()">
            <img class="card-img-top topic-game" src="../../assets/games/cerebro.png" img-alt="Cerebro">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">{{ game_3 }}</h5>
            </div>
          </div>
        </div>
        <!-- cuarto juego -->
        <div class="colum games">
          <div class="card target" style="width: 13rem;" @click="goHealtly()">
            <img class="card-img-top topic-game" src="../../assets/games/pregunta.png" alt="Adivina">
            <hr>
            <div class="card-body">
              <h5 class="card-title" align="center">{{ game_4 }}</h5>
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
import {store} from '../../store/store'
export default {
  name: 'game',
  components: {
    navbar, user
  },
  data() {
    return {
      language: store.getters.getLanguage,
      game_1: 'Sabias qué...',
      game_2: 'Juega piramide',
      game_3: 'Juega Concentrate',
      game_4: 'Alimentos sanos y no sanos'
    }
  },
  mounted(){
    if(this.language == 'en'){
      this.game_1 = 'You know that...';
      this.game_2 = 'Food Pyramid';
      this.game_3 = 'Game concentration';
      this.game_4 = 'Healthly and unhealtly';
    }
  },
  update(){
    if(this.language == 'en'){
      this.game_1 = 'Know you that...';
      this.game_2 = 'Food Pyramid';
      this.game_3 = 'Game concentration';
      this.game_4 = 'Healthly and unhealtly';
    }
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
  position: relative;
  margin-top: -190px;
}
</style>
