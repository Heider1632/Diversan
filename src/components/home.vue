<template>
<main>
    <div class="container-fluid wrapper">
        <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12">
                <div class="centrador"></div>
            </div>
            <div class="main col-lg-12 col-md-12 col-sm-12">
                <div class="iteraction">
                    <div class="nutricion">
                        <h1>
                            <router-link to="/inicionutricion">INICIO</router-link>
                        </h1>
                    </div>
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
    margin-top: 20px;
}
.centrador{
    width: 100%;
    height: 300px;
    background: url("../assets/logo.svg");
    background-position: center;
    background-repeat: no-repeat;

}
.iteraction{
      width: 100%;
      height: auto;
      text-align: center;
      border: 5px solid #d35400;
      border-radius: 10px;
      transition: border-width 0.6s linear;
}

.iteraction:hover{
      border-width: 10px;
}

.iteraction h1{
    margin:auto;
    line-height:51px;
    vertical-align:middle;
}

.nutricion{
      margin: 50px;
      background-color: #fff;
      width: auto;
      height: 5em;
      border-width: 2px;
      border-radius:  25px;
      transition: all 500ms ease-out;
      text-align: center;
}

.nutricion:hover{
    position: relative;
    margin: 0px;
    transition: all 500ms ease-out;
    text-align: center;
    background-color: #3498db;
}

.iteraction a{
    text-decoration: none;
}

.nutricion:hover a{
    color: #fff;
}
</style>
