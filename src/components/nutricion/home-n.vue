<template>
    <main>
        <div class="container">
            <div class="row bg-g">
                <div class="col-lg-8 col-sm-7">
                    <div class="alert sm-1 animated lightSpeedIn delay-2s">
                        <router-link class="alert-link" to="/conceptonutricion">Conceptos</router-link>
                    </div>
                    <div class="alert sm-2 animated lightSpeedIn delay-3s" role="alert">
                        <router-link class="alert-link" to="/comidanutricion">Piramide Alimenticia</router-link>
                    </div>
                    <div class="alert sm-3 animated lightSpeedIn delay-4s" role="alert">
                        <router-link class="alert-link" to="/tipsnutricion">Dieta Nutrición</router-link>
                    </div>
                    <div class="alert sm-4 animated lightSpeedIn delay-5s" role="alert">
                        <router-link class="alert-link" to="/juegonutricion">Juega</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-5">
                    <div class="bubble animated lightSpeedIn delay-1s" style="border-color: pink; background: pink;">
                        Bienvenido
                    </div>
                    <img src="../../assets/doctora.svg" class="doctora" alt="doc" />
                </div>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    name: 'homenutricion',
}
</script>
<style>
.bg-g{
    margin-top: 50px;
}

.sm-1, .sm-2, .sm-3, .sm-4{
    height: 80px;
    font-size: 30px;
    text-align: center;
    border-radius: 150px;
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

.bubble {
    padding: 10px;
    position: relative;
}
.bubble:after {
    content: "";
    position: absolute;
   top: 100%;
   left: 20px;
   border-top: 20px solid blue;
   border-top-color: inherit;
   border-left: 20px solid transparent;
   border-right: 20px solid transparent;
}

.doctora{
    width: 400px;
    height: 400px;
}
</style>