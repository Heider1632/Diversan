<template>
<main>
<div class="container">
  <div class="row controls">
      <!-- primer juego -->
      <div class="col-lg-6 col-md-6 col-sm-6">
          <b-alert show variant="warning">
            <router-link to="/juegonutricion/juegaAdivina">Juega Adivina</router-link>
          </b-alert>
      </div>  
      <!-- segundo juego -->
       <div class="col-lg-6 col-md-6 col-sm-6">
           <b-alert show variant="primary">
             <router-link to="/juegonutricion/juegaPiramide">Juega Piramide</router-link>
           </b-alert>
       </div>
    </div>
</div>

<router-view />
</main>
</template>
<script>

export default {
  components: {},

}
</script>
<style>
.controls{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
}
</style>

