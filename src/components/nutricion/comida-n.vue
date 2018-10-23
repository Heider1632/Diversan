<template>
    <div class="container-fluid">
        <div class="row">      
            <div class="col-lg-12 col-md-12 col-sm-12 main">
                <div class="box-piramide">
                <img src="../../assets/piramide/comidarapida.svg" class="elements-piramide el1" @mouseover="showInf1"/>
                <img src="../../assets/piramide/carnes.svg" class="elements-piramide el2" @mouseover="showInf2" />
                <img src="../../assets/piramide/lacteos.svg" class="elements-piramide el3" @mouseover="showInf3" />
                <img src="../../assets/piramide/frutas.svg" class="elements-piramide el4" @mouseover="showInf4" />
                <img src="../../assets/piramide/harinas.svg" class="elements-piramide el5" @mouseover="showInf5" />
                <img src="../../assets/piramide/agua.svg" class="elements-piramide el6" @mouseover="showInf6" />
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
            this.className = 'text-3';
            this.display = 'block';
            this.activeClass = 'p3';
            this.info = '4. El cuarto grupo son los lacteos, que te proveen de calcio que te ayudan a mantener huesos sanos y fuertes.';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf4(){
            this.className = 'text-4';
            this.display = 'block';
            this.activeClass = 'p4';
            this.info = '3. El tercer grupo incluye las frutas, las verduras y las hortalizas.¡Son alimentos ricos en vitaminas y minerales!';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf5(){
            this.className = 'text-5';
            this.display = 'block';
            this.activeClass = 'p5';
            this.info = '2. El segundo grupo incluye alimentos como cereales, pan, arroz, leguminosas y pasta.¡Estos son los que te aportan más vitaminas y carbohidratos!';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf6(){
            this.className = 'text-6';
            this.display = 'block';
            this.activeClass = 'p6';
            this.info = '1. El primer grupo, la base de la pirámide, incluye el agua, que aunque no es un alimento, consumirla es fundamental para tu vida.';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
        },
        hidden(){
            this.display = 'none';
            this.opacity1 = null;
            this.opacity2 = null;
            this.opacity3 = null;
            this.opacity4 = null;
            this.opacity5 = null;
            this.opacity6 = null;
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
.box-piramide{
    display:block;
    margin-left:30%;
    float:left;
    width: 100%;
    min-height:10;
}

.elements-piramide{
    position: relative;
    display: table-cell;
    vertical-align: middle
}

.el1{
    width: 200px;
    height: 300px;
    right: 60px;
}

.el2{
    bottom: 180px;
    width: 350px;
    height: 300px;
    right: 130px;
}
.el3{
    bottom: 360px;
    width: 500px;
    height: 300px;
    right: 190px;
}

.el4{
    bottom: 480px;
    width: 550px;
    height: 300px;
    right: 130px;
}
 .el5{
    bottom: 580px;
    width: 600px;
    height: 300px;
    right: 130px;
 }

.el6{
    bottom: 580px;
    width: 600px;
    height: 300px;
    right: 130px;  
}

.main{
    text-align: center;
}

.inf{
    margin-top: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
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
