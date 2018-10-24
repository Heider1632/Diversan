<template>
    <div class="container-fluid">
        <div class="row">      
            <div class="col-lg-8 col-md-8 col-sm-12 main">
                <div class="box-piramide">
                </div>
            </div>
            <div class="col-lg-2 col-md-8 col-sm-12">
                <div class="elements-group">
                    <div class="g1">
                        <h3>Grupo 6</h3>
                    </div>
                    <div class="g2">
                        <h3>Grupo 5</h3>
                    </div>
                    <div class="g3">
                        <h3>Grupo 4</h3>
                    </div>
                    <div class="g4">
                        <h3>Grupo 3</h3>
                    </div>
                    <div class="g5">
                        <h3>Grupo 2</h3>
                    </div>
                    <div class="g6">
                        <h3>Grupo 1</h3>
                    </div>
                </div>
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
export default {
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
            this.info = '4. El cuarto grupo son los lacteos, que te proveen de calcio que te ayudan a mantener huesos sanos y fuertes.';
        },
        showInf4(){
            this.info = '3. El tercer grupo incluye las frutas, las verduras y las hortalizas.¡Son alimentos ricos en vitaminas y minerales!';
        },
        showInf5(){
            this.info = '2. El segundo grupo incluye alimentos como cereales, pan, arroz, leguminosas y pasta.¡Estos son los que te aportan más vitaminas y carbohidratos!';
        },
        showInf6(){
            this.info = '1. El primer grupo, la base de la pirámide, incluye el agua, que aunque no es un alimento, consumirla es fundamental para tu vida.';
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
    height: 700px;
    width: 1000px;
    background: url('../../assets/piramide/piramide.svg');
    background-position: center;
    background-repeat: no-repeat;
}

.elements-group{
    margin-top: 100px;
}

.g1, .g2, .g3, .g4, .g5, .g6{
    margin-top: 70px;
    display: flex;
    justify-content: center;
    text-align: center;
    height: 20px;
    width: 50%;
    background: #fff;
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
    background-color: #f39c12;
}

.g5{
    background-color: #27ae60;
}

.g6{
    background-color: #3498db;
}
@keyframes slidein {
    0% {
        width: 0px;
        height: 0px;
    }

    25% {
        width: 25px;
        height: 25px; 
    }

    50% {
        width: 50px;
        height: 50px;
    }

    75% {
        width: 75px;
        height: 75px;
    }

    100% {
        width: 100px;
        height: 100px;
    }
}

</style>
