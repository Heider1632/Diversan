<template>
    <main>
        <div class="container">
            <div class="row bg-g">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="sm-1 animated lightSpeedIn delay-2s">
                        <a class="alert-link" href="#" @click="showModal">Conceptos</a>
                    </div>
                    <div class="sm-2 animated lightSpeedIn delay-3s">
                        <router-link class="alert-link" to="/comidanutricion">Piramide Alimenticia</router-link>
                    </div>
                    <div class="sm-3 animated lightSpeedIn delay-4s">
                        <router-link class="alert-link" to="/tipsnutricion">Dieta Nutrición</router-link>
                    </div>
                    <div class="sm-4 animated lightSpeedIn delay-5s">
                        <router-link class="alert-link" to="/juegonutricion">Juega</router-link>
                    </div>
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
.bg-g{
    margin-top: 100px;
    justify-content: center;
    text-align: center;
}

.sm-1, .sm-2, .sm-3, .sm-4{
    height: 80px;
    font-size: 40px;
    margin-bottom: 40px;
    text-align: center;
    border-radius: 15px;
}

.sm-1{
    background-color: teal;
}

.sm-2{
    background-color: darkgoldenrod;
}

.sm-3{
    background-color:darkgreen;
}

.sm-4{
   background-color:crimson;
   
}

.sm-1 > a, .sm-2 > a, .sm-3 > a, .sm-4 > a{
    color: #fff;
    text-decoration: none;
}

.modal-content{
    margin-top: 150px;
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