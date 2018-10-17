<template>
    <main>
        <div class="container">
            <div class="row bg-g">
                <div class="col-lg-12 col-md-12 col-sm-8">
                    <div class="sm animated lightSpeedIn delay-500ms">
                        <img src="../../assets/icons/handshake.svg" class="pic1" />
                        <a class="alert-link" href="#" @click="showModal">Aprendamos</a>
                    </div>
                    <div class="sm animated lightSpeedIn delay-1000ms">
                        <img src="../../assets/icons/porridge.svg" class="pic2" />
                        <router-link class="alert-link" to="/comidanutricion">Piramide</router-link>
                    </div>
                    <div class="sm animated lightSpeedIn delay-1500ms" >
                        <img src="../../assets/icons/apple.svg" class="pic3" />
                        <router-link class="alert-link" to="/tipsnutricion">Alimentación sana</router-link>
                    </div>
                    <div class="sm animated lightSpeedIn delay-2000ms">
                        <img src="../../assets/icons/windmill.svg" class="pic4" />
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

.h-b{
    position: relative;
    float: left;
    bottom: 70px;
    height: 110px;
    width: 100%;
    background-color: #ff4d4d;
    transform: skew(-20deg);
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