<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-sm-7">
                    <div class="alert alert-primary" role="alert">
                        <router-link class="alert-link" to="/conceptonutricion">Conceptos</router-link>
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
                    <div class="alert alert-primary" role="alert">
                        <router-link class="alert-link" to="/comidanutricion">Piramide Alimenticia</router-link>
                    </div>
                </div>
            </div>
            <div class="row">
                 <div class="col-lg-8 col-sm-7">
                    <div class="alert alert-primary" role="alert">
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
                    <div class="alert alert-primary" role="alert">
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
.row{
    margin-top: 50px;
}

</style>