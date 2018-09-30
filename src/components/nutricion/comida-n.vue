<template>
    <div class="container-fluid">
        <div class="bg-p">
            <h1 align="center">Piramide Alimenticia
                <span>
                    <b-btn v-b-popover.hover="'Haz click sobre cualquier nivel de la piramide'" title="Importante">
                        Ayuda
                    </b-btn>
                </span>
            </h1>
            <p class="lead" align="center">
                Para que tu alimentación sea correcta, es importante que incluya alimentos variados y en las cantidades adecuadas.
                La pirámide alimenticia te ayuda a identificar con facilidad cuáles alimentos son necesarios y qué cantidad debes consumir en una dieta balanceada. Para esto, se divide en varios grupos:
            </p>
        </div>
        <div class="row bg-a">      
            <div class="col-lg-8">
                <div class="l1" @click="click()"></div>
                <div class="l2" @click="click()"></div>
                <div class="l3" @click="click()"></div>
                <div class="l4" @click="click()"></div>
                <div class="l5" @click="click()"></div>
                <div class="l6" @click="click()"></div>
            </div>
            <div class="col-lg-4" v-bind:class="[activeClass]">
                <p class="lead text-box" id="text-box" @click="hidden()">
                    {{ info }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           activeClass: 'active',
           info: 'hola'
        }
    },
    methods: {
        click(){
            this.activeClass = 'false';
        },

        hidden(){
            this.activeClass =  'active'
        }
    }
}
</script>
<style>
.bg-p{
    margin-top: 25px;
    background-color: white;
    border-radius: 25px;
}

.active{
    display: none;
}

.false{
    display: block;
}

.text-box{
    background-color: white;
    width: auto;
    height: auto;
    color:#000;
    border-radius: 50px;
}

.bg-a{
    margin-top: 0px;
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
    margin-left: 100px;
    margin-right: 100px;
}

.l2{
    background: url("../../assets/5 Carnes.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 80px;
    margin-right: 80px;
}

.l3{
    background: url("../../assets/4 Lacteos.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 60px;
    margin-right: 60px;
}
.l4{
    background: url("../../assets/3 Frutas.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 40px;
    margin-right: 40px;
}
.l5{
    background: url("../../assets/2 Arinas.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 20px;
    margin-right: 20px;
}

.l6{
    background: url("../../assets/1 Agua.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: 0%;
    margin-left: 0px;
    margin-right: 0px;
}
</style>
