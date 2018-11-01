<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8 col-md-8 col-sm-8 main">
                <div class="box-piramide">
                  <img src="../../assets/piramide/piramide.svg" class="piramid-img img-fluid" alt="Responsive image">
                </div>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-2">
                <div class="elements-group">
                    <div class="g1" @click="showInf1()">
                        <h3>Grupo 6</h3>
                    </div>
                    <div class="g2" @click="showInf2()">
                        <h3>Grupo 5</h3>
                    </div>
                    <div class="g3" @click="showInf3()">
                        <h3>Grupo 4</h3>
                    </div>
                    <div class="g4" @click="showInf4()">
                        <h3>Grupo 3</h3>
                    </div>
                    <div class="g5" @click="showInf5()">
                        <h3>Grupo 2</h3>
                    </div>
                    <div class="g6" @click="showInf6()">
                        <h3>Grupo 1</h3>
                    </div>
                </div>
            </div>
            <div class="col-lg-1 col-md-1 col-sm-1">
              <navbar />
            </div>
        </div>

         <!-- modal piramide -->
            <b-modal ref="myModalPiramide" hide-footer title="Definicion">
                    <div class="d-block text-center">
                        <p>
                            Para que tu alimentación sea correcta, es importante que incluya alimentos variados  en las cantidades adecuadas. La pirámide alimenticia te ayuda a identificar con facilidad cuáles alimentos son necesarios y qué cantidad debes consumir en una dieta balanceada. Para esto, se divide en varios grupos:
                        </p>
                    </div>
                    <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-btn>
            </b-modal>
    </div>
</template>
<script>
import swal from 'sweetalert2'
import navbar from '../navbar'
export default {
    components: { navbar },
    data() {
        return {
        }
    },
    methods: {
        showInf1(){
            swal({
                position: 'top-start',
                type: 'info',
                title: 'Sexto Grupo',
                text: 'El sexto grupo incluye grasas, aceites y dulces. ¡Estos alimentos te aportan muchísima energía y pocos nutrientes y por eso debes consumirlos en menor cantidad!.',
                showConfirmButton: false,
                timer: 3000
            })
        },
        showInf2(){
            swal({
                position: 'top-start',
                type: 'info',
                title: 'Quinto Grupo',
                text: ' El quinto grupo incluye carnes, pescados y huevos. Estos alimentos son muy ricos en proteínas, que son los bloquecillos que construyen tu cuerpo. Son fundamentales pata tu optimo crecimiento.',
                showConfirmButton: false,
                timer: 3000
            })
        },
        showInf3(){
          swal({
              position: 'top-start',
              type: 'info',
              title: 'Cuarto Grupo',
              text: 'El cuarto grupo son los lacteos, que te proveen de calcio que te ayudan a mantener huesos sanos y fuertes.',
              showConfirmButton: false,
              timer: 3000
          })
        },
        showInf4(){
          swal({
              position: 'top-start',
              type: 'info',
              title: 'Tercer Grupo',
              text: 'El tercer grupo incluye las frutas, las verduras y las hortalizas.¡Son alimentos ricos en vitaminas y minerales!',
              showConfirmButton: false,
              timer: 3000
          })
        },
        showInf5(){
          swal({
              position: 'top-start',
              type: 'info',
              title: 'Segundo Grupo',
              text: 'El segundo grupo incluye alimentos como cereales, pan, arroz, leguminosas y pasta.¡Estos son los que te aportan más vitaminas y carbohidratos!',
              showConfirmButton: false,
              timer: 3000
          })
        },
        showInf6(){
          swal({
              position: 'top-start',
              type: 'info',
              title: 'Primer Grupo',
              text: 'El primer grupo, la base de la pirámide, incluye el agua, que aunque no es un alimento, consumirla es fundamental para tu vida.',
              showConfirmButton: false,
              timer: 3000
          })
        },
        show(){
            this.$refs.myModalPiramide.show();
        },
        hideModal () {
            this.$refs.myModalPiramide.hide()
        }
    }
}
</script>
<style>
.main{
    text-align: center;
}
.box-piramide{
    margin-top: 100px;
    height: 100%;
    width: 100%;
}

.elements-group{
    margin-top: 150px;
}
.g1, .g2, .g3, .g4, .g5, .g6{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 20px;
    width: 100%;
    background: #fff;
}

.g1:hover, .g2:hover, .g3:hover, .g4:hover, .g5:hover, .g6:hover{
  animation-name: slidein;
  animation-duration: 500ms;
}
h3{
    position: relative;
    bottom: 30px;
}
.g1{
    background-color: #e74c3c;
}
.g2{
     background-color: #f1c40f;
}
.g3{
    background-color: #d35400;
}
.g4{
    background-color: #27ae60;
}
.g5{
    background-color: #f39c12;
}
.g6{
    background-color: #3498db;
}
@keyframes slidein {
    0% {
        width: 100%;
    }

    100% {
        width: 130%;
    }
}

@media screen and (max-width: 864px) {
  .elements-group{
    margin-top: 20px;
  }
  .g1, .g2, .g3, .g4, .g5, .g6{
    display: inline-block;
  }
}

</style>
