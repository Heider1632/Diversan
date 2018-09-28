<template>
    <div class="container-fluid">
        <div class="bg-p">
            <h1 align="center">Piramide Alimenticia</h1>
            <p class="lead" align="center">
                Para que tu alimentación sea correcta, es importante que incluya alimentos variados y en las cantidades adecuadas.
                La pirámide alimenticia te ayuda a identificar con facilidad cuáles alimentos son necesarios y qué cantidad debes consumir en una dieta balanceada. Para esto, se divide en varios grupos:
            </p>
        </div>
        <div class="row bg-a">      
            <div class="col-lg-8">
                <div class="l1" @click="click()">
                    <img src="../../assets/6 Comidas Rapida.svg" alt="block-1">
                </div>
                <div class="l2">
                    <img src="../../assets/5 Carnes.svg" alt="block-2">
                </div>
                <div class="l3">
                    <img src="../../assets/4 Lacteos.svg" alt="block-3">
                </div>
                <div class="l4">
                    <img src="../../assets/3 Frutas.svg" alt="block-4">
                </div>
                <div class="l5">
                    <img src="../../assets/2 Arinas.svg" alt="block-5">
                </div>
                <div class="l6">
                    <img src="../../assets/1 Agua.svg" alt="block-6">
                </div>
            </div>
            <div class="col-lg-4" v-bind:class="[activeClass]">
                <p class="lead text-box" id="text-box">
                    Hola
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           activeClass: 'active'
        }
    },
    methods: {
        click(){
            this.activeClass = 'false';
            console.log("hola");
        }
    }
}
</script>
<style>
.bg-p{
    margin-top: 25px;
    background-color: aliceblue;
    border-block-end-color: aquamarine;
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
    max-height: 100px;
}

.l1{
    margin-left: 100px;
    margin-right: 100px;
    transition: 2s all ease-in-out;
}

.l2{
    margin-left: 80px;
    margin-right: 80px;
}

.l3{
    margin-left: 60px;
    margin-right: 60px;
}
.l4{
    margin-left: 40px;
    margin-right: 40px;
}
.l5{
    margin-left: 20px;
    margin-right: 20px;
}
</style>
