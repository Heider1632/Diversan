<template>
<main>
  <div class="container-inf">
    <div class="stars-inf" v-if="status">
      <h5 class="user-title">{{ username }}</h5>
      <div class="star"></div>
      <h3 class="user-points"> : {{ points }}</h3>
    </div>
    <div class="start-err" v-else>
      <p class="lead">No se ha podido cargar su usuario</p>
    </div>
  </div>
</main>
</template>
<script>
import {
  store
} from '../store/store'
export default {
  name: 'user-inf',
  data() {
    return {
      status: false,
      points: '',
      token: '',
      username: '',
    }
  },
  mounted() {
    if (this.$cookies.get('user')) {
      //inf user
      this.token = store.getters.getToken;
      this.username = this.$cookies.get('user').name;
      //inf game
      this.points = store.getters.getPoints;
      this.status = store.getters.authStatus;
    } else {
      console.log('error al cargar el usuario');
    }
  },
  /*computed: function() {

  }*/
}
</script>
<style>
.container-inf{
  float: left;
  width: 400px;
  background: #b2ebf2;
  min-height: 40px;
}

.start-err{

}

.start-err p{
  display: inline-block;
  padding: 5px;
  font-size: 15px;
  color: #f44336
}

.star{
  height: 40px;
  width: 40px;
  margin-left: 140px;
  background: url('../assets/icons/favourites.svg');
  background-repeat: no-repeat;
  background-size: 80% 80%;
  position: relative;
  top: 5px;
}

.star-inf{
  display: inline-block;
  height:  100px;
}


</style>
