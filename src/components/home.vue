<template>
  <div class="form-login">
    <img class="Resposive-img centrador" src="../assets/diversan.svg" alt="Logo" />

    <div class="input-group form-sign">
      <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" v-model="username">
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="login">Iniciar</button>
      </div>
    </div>

  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'home',
  data(){
    return{
      username: undefined,
    }
  },
  created(){
    if(this.$cookies.isKey('user')){
      var username =  this.$cookies.isKey('user').name;

      this.$store.dispatch('AUTH_REQUEST_ASYNC', { username })
          .then( ()=> {
            //se redirecciona al home
            this.$router.push('/inicionutricion');
          }).catch(err => {
            console.log(err);
          })
    }
  },
  methods: {
    login: function() {
          const { username } = this
          this.$store.dispatch('AUTH_REQUEST_ASYNC', { username })
          .then( ()=> {
            //se redirecciona al home
            this.$router.push('/inicionutricion');
          }).catch(err => {
            console.log(err);
          })
    }
  }
}
</script>


<style scoped>
.form-login{
  margin-top: 100px;
  display: block;
}

.centrador {
  height: 300px;
  width: 300px;
  margin: 10px auto;
  display:block;
}

.form-sign{
  margin: 10px auto;
  width: 40%;
}

@media screen and (max-width: 300px){
  .form.sign{
    width: 60%;
  }
}
</style>
