<template>
    <div class="container-fluid">
        <div class="row inf">
            <div class="">
                <b-button size="lg" variant="outline-success" @click="show()">Piramide Alimenticia</b-button>
            </div>
        </div>
        <div class="row bg-a">      
            <div class="col-lg-8 col-md-8 col-sm-8 main">
                <div class="l1" :style="{ opacity: opacity1 }" @mouseover="showInf1" @mouseleave="hidden"></div>
                <div class="l2" :style="{ opacity: opacity2 }" @mouseover="showInf2" @mouseleave="hidden"></div>
                <div class="l3" :style="{ opacity: opacity3 }" @mouseover="showInf3" @mouseleave="hidden"></div>
                <div class="l4" :style="{ opacity: opacity4 }" @mouseover="showInf4" @mouseleave="hidden"></div>
                <div class="l5" :style="{ opacity: opacity5 }" @mouseover="showInf5" @mouseleave="hidden"></div>
                <div class="l6" :style="{ opacity: opacity6 }" @mouseover="showInf6" @mouseleave="hidden"></div>
            </div>
            <div class="overflow" v-bind:class="[activeClass]" :style="{ display: display }">
                    {{ info }}
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
export default {
    data() {
        return {
           activeClass: '',
           info: '',
           display: 'none',
           opacity1: null,
           opacity2: null,
           opacity3: null,
           opacity4: null,
           opacity5: null,
           opacity6: null
        }
    },
    methods: {
        showInf1(){
            this.className = 'text-1';
            this.display = 'block';
            this.activeClass = 'p1';
            this.info = '6. El sexto grupo incluye grasas, aceites y dulces. ¡Estos alimentos te aportan muchísima energía y pocos nutrientes y por eso debes consumirlos en menor cantidad!.';
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf2(){
            this.className = 'text-2';
            this.display = 'block';
            this.activeClass = 'p2';
            this.info = '5. El quinto grupo incluye carnes, pescados y huevos. Estos alimentos son muy ricos en proteínas, que son los bloquecillos que construyen tu cuerpo. Son fundamentales pata tu optimo crecimiento.';
            this.opacity1 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
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
            this.activeClass =  'active';
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
.bg-a{
    margin-top: 20px;
}

.active{
    display: none;
}

.false{
    display: block;
}

.p1{
    position:  relative;
    top: 50px;
    background-color: red;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
}

.p2{
    position:  relative;
    top: 100px;
    background-color: yellow;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
    animation-direction: alternate;
}

.p3{
    position:  relative;
    top: 150px;
    background-color: yellow;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
    animation-direction: alternate;
}

.p4{
    position:  relative;
    top: 200px;
    background-color: green;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
    animation-direction: alternate;
}

.p5{
    position:  relative;
    top: 250px;
    background-color: green;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
    animation-direction: alternate;
}

.p6{
    position:  relative;
    top: 300px;
    background-color: blue;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
    animation-direction: alternate;
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

.l1, .l2, .l3, .l4, .l5, .l6{
    height: 90px;
    width: auto;
}



.l1{
    background: url("../../assets/6 Comidas Rapida.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 250px;
    margin-right: 250px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
}

.l2{
    background: url("../../assets/5 Carnes.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 200px;
    margin-right: 200px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
}

.l3{
    background: url("../../assets/4 Lacteos.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 150px;
    margin-right: 150px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
}
.l4{
    background: url("../../assets/3 Frutas.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 100px;
    margin-right: 100px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
}
.l5{
    background: url("../../assets/2 Arinas.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 50px;
    margin-right: 50px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
}

.l6{
    background: url("../../assets/1 Agua.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 0px;
    margin-right: 0px;
    border-top-left-radius: 70px;
    border-top-right-radius: 70px;
}
</style>
