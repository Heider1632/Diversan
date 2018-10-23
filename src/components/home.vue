<template>
<main>
    <div class="container-fluid wrapper">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="centrador" v-b-tooltip.hover title="Click aquí para continuar" @click="goInicio()" ></div>
            </div>
        </div>
    </div>
</main>
</template>
<script>
export default {
    name: 'home',
    methods: {
        goInicio(){
            this.$router.push({
                path: 'inicionutricion'
            })
        }
    }
}
</script>


<style scoped>
.wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
}
.centrador{
    margin-top: 50%;
    width: 300px;
    height: 300px;
    background: url("../assets/logo.svg");
    background-position: center;
    background-repeat: no-repeat;
}

</style>
