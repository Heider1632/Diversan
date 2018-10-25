<template>
  <div class="controls">
      <!-- primer juego -->
      <div class="col-lg-4 col-md-4 col-sm-2 games">
          <b-card title="Juega Adivina"
            @click="goAdivina()"
            :img-src="require('@/assets/games/pregunta.png')"
            img-alt="Adivina"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            </b-card>
      </div>
      <!-- segundo juego -->
       <div class="col-lg-4 col-md-4 col-sm-2 games">
          <b-card title="Juega Piramide"
            @click="goPiramide()"
            :img-src="require('@/assets/icons/piramide-ico.svg')"
            img-alt="Piramide"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
              <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </p>
            </b-card>
       </div>
      <!-- tercer juego -->
       <div class="col-lg-4 col-md-4 col-sm-2 games">
          <b-card title="Juega Concentrate"
            @click="goConcentrate()"
            :img-src="require('@/assets/games/cerebro.png')"
            img-alt="Cerebro"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2">
            <p class="card-text">
                Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            </b-card>
       </div>
    </div>
</template>
<script>

export default {
  name: 'game',
  data(){
    return{
    }
  },
  methods: {
    goConcentrate(){
      this.$router.push({ path: '/juegoConcentrate' })
    },
    goPiramide(){
      this.$router.push({ path: '/juegoPiramide' })
    },
    goAdivina(){
      this.$router.push({ path: '/juegoAdivina' })
    }
  }

}
</script>
<style>
.controls{
  margin-top: 80px;
}

.games{
  display: inline-block;
}

.card:hover{
  transition: 500ms all ease-out;
  background-color:  #4d94ff;
}

.card:hover p, .card:hover a{
  color: white;
}
</style>
