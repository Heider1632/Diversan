<template>
    <main>
        <div class="container">
            <div class="row bg-g">
                <div class="col-lg-12 col-md-12 col-sm-8">
                    <div class="sm animated lightSpeedIn delay-500ms">
                        <img src="../../assets/icons/handshake.svg" class="pic1"  @click="showModal"/>
                        <a class="alert-link" href="#" @click="showModal">Aprendamos</a>
                    </div>
                    <div class="sm animated lightSpeedIn delay-1000ms">
                        <img src="../../assets/icons/piramide-ico.svg" class="pic2" @click="goPiramide()"/>
                        <router-link class="alert-link" to="/comidanutricion">Piramide</router-link>
                    </div>
                    <div class="sm animated lightSpeedIn delay-1500ms" >
                        <img src="../../assets/icons/apple.svg" class="pic3" @click="goAlimentacion()"/>
                        <router-link class="alert-link" to="/tipsnutricion">Alimentación sana</router-link>
                    </div>
                    <div class="sm animated lightSpeedIn delay-2000ms">
                        <img src="../../assets/icons/windmill.svg" class="pic4" @click="goJuega()"/>
                        <router-link class="alert-link" to="/juegonutricion">Juega</router-link>
                    </div>
                <div class="h-b"></div>
                </div>
            </div>

            <!-- modal concepto -->
            <b-modal ref="myModalRef" hide-footer title="Bienvenido">
                    <div class="d-block text-center">
                        <video height="400" width="400" controls>
                           <source src="../../assets/video/nutricion.mp4">
                        </video>
                    </div>
                    <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-btn>
            </b-modal>
        </div>
    </main>
</template>
<script>
export default {
    name: 'homenutricion',
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
    width: 300px;
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
    width: 90%;
    background-color: #ff4d4d;
    z-index: 0;
}

.sm{
    position: relative;
    display: inline-block;
    width: 20%;
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
