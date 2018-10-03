<template>
<main>
    <div class="container-fluid wrapper">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="centrador"></div>
            </div>
            <div class="main col-lg-12 col-md-12 col-sm-12">
                <div class="nutricion">
                    <h1>
                        <router-link to="/inicionutricion">INICIO</router-link>
                    </h1>
                </div>
            </div>
        </div>
    </div>
    <audio src="../avicii-heybrother.mp3" autoplay></audio>
</main>
</template>
<script>
export default {
    name: 'home'
}
</script>


<style scoped>
.wrapper{
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.centrador{
    width: 100%;
    height: 300px;
    background: url("../assets/logo.svg");
    background-position: center;
    background-repeat: no-repeat;

}
.nutricion{
      margin: 50px;
      background-color: #fff;
      width: auto;
      height: 5em;
      border-width: 2px;
      border-radius:  25px;
      text-align: center;
}

a{
    text-decoration: none;
}

</style>
