<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-11 col-md-11 col-sm-8 bg-g">
                    <div class="sm animated lightSpeedIn delay-500ms">
                        <img src="../../assets/icons/handshake.svg" class="pic1"  @click="goConceptos()"/>
                        <a class="alert-link" href="#" @click="goConceptos()">{{ op1 }}</a>
                    </div>
                    <div class="sm animated lightSpeedIn delay-1000ms">
                        <img src="../../assets/icons/piramide-ico.svg" class="pic2" @click="goPiramide()"/>
                        <router-link class="alert-link" to="/comidanutricion">{{ op2 }}</router-link>
                    </div>
                    <div class="sm animated lightSpeedIn delay-1500ms" >
                        <img src="../../assets/icons/apple.svg" class="pic3" @click="goAlimentacion()"/>
                        <router-link class="alert-link" to="/tipsnutricion">{{ op3 }}</router-link>
                    </div>
                    <div class="sm animated lightSpeedIn delay-2000ms">
                        <img src="../../assets/icons/windmill.svg" class="pic4" @click="goJuega()"/>
                        <router-link class="alert-link" to="/juegonutricion">{{ op4 }}</router-link>
                    </div>
                <div class="h-b"></div>
                </div>
                <div class="col-lg-1 col-md-1 col-sm1">
                  <navbar />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
import {store} from '../../store/store'
import navbar from '../navbar'
export default {
    name: 'homenutricion',
    components: { navbar},
    data(){
      return{
        language: store.getters.getLanguage,
        op1: 'Aprendamos',
        op2: 'Piramide',
        op3: 'Alimentación',
        op4: 'Juega'
      }
    },
    mounted(){
      if(this.language == 'en'){
        this.op1 = 'let`s learn';
        this.op2 = 'Food Pyramid';
        this.op3 = 'Feeding';
        this.op4 = 'Game';
      }
    },
    update(){
      if(this.language == 'en'){
        this.op1 = 'let`s learn';
        this.op2 = 'Food Pyramid';
        this.op3 = 'Feeding';
        this.op4 = 'Game';
      }
    },
    methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    },
    goPiramide(){
        this.$router.push({ path: '/comidanutricion' })
    },
    goAlimentacion(){
        this.$router.push({ path: '/tipsnutricion' })
    },
    goJuega(){
        this.$router.push({ path: '/juegonutricion' })
    },
    goConceptos(){
      this.$router.push({ path: '/conceptosnutricion' })
    }
  }
}
</script>
<style>
.container{
    margin-left: 50px;
}
.bg-g{
    margin-top: 180px;
    justify-content: center;
    text-align: center;
}

.pic1, .pic2, .pic3, .pic4{
    position: relative;
    bottom: 30px;
    width: 200px;
    height: 150px;
}

.pic1:hover, .pic2:hover, .pic3:hover, .pic4:hover{
    animation: up 1s 1;
    opacity: 0.6;
}

@keyframes up{
    0%{
        bottom: 0px;
    }
    50%{
        bottom: 50px;
    }
    100%{
        bottom: 0px;
    }
}

.h-b{
    position: relative;
    float: left;
    bottom: 40px;
    height: 50px;
    width: 93%;
    background-color: #ff4d4d;
    z-index: 0;
}

.sm{
    position: relative;
    display: inline-block;
    width: 25%;
    height: auto;
    z-index: 100;
}

.sm a{
    text-decoration: none;
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
}

@media screen and (max-width: 864px) {
  .h-b{
    display: none;
  }
  .bg-g{
    margin-top: 20px;
  }
  .sm{
    display: flex;
  }
}

.modal-content{
    margin-top: 100px;
    widows: auto;
    height: auto;
}

.modal-header{
    background: #009999;
    text-align: center;
}

.modal-title{
    color: #fff;
}
</style>
