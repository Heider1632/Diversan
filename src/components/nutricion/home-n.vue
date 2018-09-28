<template>
    <main>
        <div class="container">
            <div class="row bg-g">
                <div class="col-lg-8 col-sm-7">
                    <div class="alert sm-1">
                        <router-link class="alert-link" to="/conceptonutricion">Conceptos</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-5">
                    <img src="" alt="" />
                </div>
            </div>
            <div class="row bg-g">
                <div class="col-lg-4 col-sm-5">
                    <img src="" alt="" />
                </div>
                <div class="col-lg-8 col-sm-7">
                    <div class="alert sm-2" role="alert">
                        <router-link class="alert-link" to="/comidanutricion">Piramide Alimenticia</router-link>
                    </div>
                </div>
            </div>
            <div class="row">
                 <div class="col-lg-8 col-sm-7">
                    <div class="alert sm-3" role="alert">
                        <router-link class="alert-link" to="/tipsnutricion">Dieta Nutrición</router-link>
                    </div>
                </div>
                <div class="col-lg-4 col-sm-5">
                    <img src="" alt="" />
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-sm-5">
                    <img src="" alt="" />
                </div>
                <div class="col-lg-8 col-sm-7">
                    <div class="alert sm-4" role="alert">
                        <router-link class="alert-link" to="/juegonutricion">Juega</router-link>
                    </div>
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

.sm-1{
    height: 80px;
    background-color: teal;
    font-size: 30px;
    text-align: center;
}

.sm-2{
    height: 80px;
    background-color: darkgoldenrod;
    font-size: 30px;
    text-align: center;
}

.sm-3{
    height: 80px;
    background-color:darkgreen;
    font-size: 30px;
    text-align: center;
}

.sm-4{
   height: 80px;
   background-color:crimson;
   font-size: 30px;
   text-align: center; 
}

.sm-1 > a, .sm-2 > a, .sm-3 > a, .sm-4 > a{
    color: #fff;
}
</style>