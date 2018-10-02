<template>
    <div class="container-fluid">
        <div class="row bg-a">      
            <div class="col-lg-12 col-md-12 col-sm-12 main">
                <div class="l1" :style="{ opacity: opacity1 }" @mouseover="showInf1" @mouseleave="hidden"></div>
                <div class="l2" :style="{ opacity: opacity2 }" @mouseover="showInf2" @mouseleave="hidden"></div>
                <div class="l3" :style="{ opacity: opacity3 }" @mouseover="showInf3" @mouseleave="hidden"></div>
                <div class="l4" :style="{ opacity: opacity4 }" @mouseover="showInf4" @mouseleave="hidden"></div>
                <div class="l5" :style="{ opacity: opacity5 }" @mouseover="showInf5" @mouseleave="hidden"></div>
                <div class="l6" :style="{ opacity: opacity6 }" @mouseover="showInf6" @mouseleave="hidden"></div>
            </div>
            <div class="overflow" v-bind:class="[activeClass]">
                <div v-bind:class="[className]" id="text-box">
                    {{ info }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
           className: '',
           activeClass: 'active',
           info: '',
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
            this.activeClass = 'false';
            this.info = 'hola :/';
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf2(){
            this.className = 'text-2';
            this.activeClass = 'false';
            this.info = 'hola 2';
            this.opacity1 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf3(){
            this.className = 'text-3';
            this.activeClass = 'false';
            this.info = 'hola 3';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity4 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf4(){
            this.className = 'text-4';
            this.activeClass = 'false';
            this.info = 'hola 4';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity5 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf5(){
            this.className = 'text-5';
            this.activeClass = 'false';
            this.info = 'hola 5';
            this.opacity1 = 0.5;
            this.opacity2 = 0.5;
            this.opacity3 = 0.5;
            this.opacity4 = 0.5;
            this.opacity6 = 0.5;
        },
        showInf6(){
            this.className = 'text-6';
            this.activeClass = 'false';
            this.info = 'El agua resulta escensial por lo que debemos ingerir entre 6 y 8 vasos al día';
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
        }
    }
}
</script>
<style>
.bg-a{
    margin-top: 25px;
}

.active{
    display: none;
}

.false{
    display: block;
}

.main{
    text-align: center;
}

.text-1{
    background-color: red;
    position: absolute;
    left: 800px;
    top: 100px;
    color:#000;
    border-radius: 15px;
    animation-duration: 500ms;
    animation-name: slidein;
}

.text-2{
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

.text-3{
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

.text-4{
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

.text-5{
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

.text-6{
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

@keyframes slidein {
    0% {
        height: 0px;
    }

    50% {
        height: 50px;
    }

    100% {
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
