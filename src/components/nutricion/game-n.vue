<template>
<main>
<div class="container">
  <div class="row controls">
      <!-- primer juego -->
      <div class="col-lg-6 col-md-6 col-sm-6">
          <b-alert show variant="warning">
            <router-link @click.native="hide()" to="/juegonutricion/juegaAdivina">Juega Adivina</router-link>
          </b-alert>
      </div>  
      <!-- segundo juego -->
       <div class="col-lg-6 col-md-6 col-sm-6">
           <b-alert show variant="primary">
             <router-link @click.native="hide()" to="/juegonutricion/juegaPiramide">Juega Piramide</router-link>
           </b-alert>
       </div>

       <div v-bind:class="[option]"></div>
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
      option: 'option',
    }
  },
  created(){
    this.option = 'option';
  },
  methods: {
    hide: function() {
    // Do what you want here.
    this.option = 'hide';
    }
  }

}
</script>
<style>
.controls{
  margin-top: 50px;
  display: flex;
  justify-content: center;
  text-align: center;
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

