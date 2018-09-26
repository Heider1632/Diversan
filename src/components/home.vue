<template>
<main>
    <div class="container-fluid wrapper">
        <div class="row">
            <div class="col-lg-12 col-sm-8">
                <img src="../assets/logo.svg" class="logo" alt="logo">
            </div>
            <div class="main col-lg-12 col-sm-6">
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
</main>
</template>
<script>
export default {
    name: 'home'
}
</script>


<style scoped>
.logo{
    width: 300px;
    height: 300px;
    position: relative;
    left: 500px;
}
.wrapper{
    margin-top: 100px;
}
.iteraction{
      width: 600px;
      height: auto;
      border: 5px solid #d35400;
      border-radius: 10px;
      transition: border-width 0.6s linear;
      margin-left: 25px;
      position: relative;
      left: 350px;
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
