<template>
<main>
<div class="container">
  <div class="row controls">
      <!-- primer juego -->
      <div class="col-lg-4 col-md-4 col-sm-2 games">
          <b-card title="Juega Adivina"
            img-src="../assets/games/cerebro.png"
            img-alt="Adivina"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
              <router-link  to="/juegoAdivina">Juega Adivina</router-link>
            </b-card>  
      </div>  
      <!-- segundo juego -->
       <div class="col-lg-4 col-md-4 col-sm-2 games">
          <b-card title="Juega Piramide"
            img-src="../../assets/games/cerebro.png"
            img-alt="Piramide"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
              <router-link to="/juegoPiramide">Juega Piramide</router-link>
            </b-card>          
       </div>
      <!-- tercer juego -->
       <div class="col-lg-4 col-md-4 col-sm-2 games">
          <b-card title="Juega Concentrate"
            img-src="../../assets/games/cerebro.png"
            img-alt="Cerebro"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
              <router-link to="/juegoConcentrate">Juega Concentrate</router-link>
            </b-card>
       </div>
    </div>
</div>

<router-view />
</main>
</template>
<script>

export default {
  name: 'game',
  data(){
    return{
    }
  },
  created(){
  },
  methods: {
  }

}
</script>
<style>
.controls{
  margin-top: 150px;
  position: relative;
  right: 200px;
  display: flex;
  justify-content: center;
  text-align: center;
}

.games{
  display: inline-block;
}

.option{
  width: 400px;
  height: 500px;
  background: url("../../assets/boy.svg");
  background-size: 90% 90%;
  background-position: center;
  background-repeat: no-repeat
}

.hide{
  display: none;
}
</style>

