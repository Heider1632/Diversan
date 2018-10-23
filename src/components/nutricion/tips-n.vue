<template>
    <div class="container-fluid">
        <div class="row down">
            <div class="col-lg-8 col-md-12 col-sm-12">
            <h3 align="center">Tips</h3>
            <div class="bg-l">
                <div role="tablist">
                    <b-card no-body class="mb-1">
                    <b-card-header header-tag="header" class="p-1" role="tab">
                        <b-btn block href="#" v-b-toggle.accordion1 variant="info">Consejo 1</b-btn>
                    </b-card-header>
                        <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
                                <b-card-body>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <p class="card-text">
                                            El desayuno es la comida más importante del día porque te da mucha energía!
                                            Nunca te olvides de desayunar!
                                            </p>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="img1"></div>
                                        </div>
                                    </div>
                                </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- tip 2 -->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion2 variant="info">Consejo 2</b-btn>
                        </b-card-header>

                        <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <p class="card-text">
                                            Las frutas te dan muchas vitaminas y nutrientes que te harán crecer grande y fuerte
                                        </p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="img2"></div>
                                    </div>
                                </div>
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- tip 3-->
                    <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion3 variant="info">Consejo 3</b-btn>
                        </b-card-header>

                        <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <p class="card-text">
                                            las verduras combaten muchas enfermedades y mejoran tu semblante
                                        </p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="img3"></div>
                                    </div>
                                </div>                                
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- tip 4-->
                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion4 variant="info">Consejo 4</b-btn>
                        </b-card-header>

                        <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <p class="card-text">
                                            Tomar mucha agua ayuda a liberar toxinas
                                        </p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="img4"></div>
                                    </div>
                                </div>                               
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- tip 5-->
                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion5 variant="info">Consejo 5</b-btn>
                        </b-card-header>

                        <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <p class="card-text">
                                           No consumas gasesosas, mejor consume jugos naturales
                                        </p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="img5"></div>
                                    </div>
                                </div>                                    
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- tip 6-->
                     <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion6 variant="info">Consejo 6</b-btn>
                        </b-card-header>

                        <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <p class="card-text">
                                          No te excedas en golosinas mejor come frutas
                                        </p>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="img6"></div>
                                    </div>
                                </div>    
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                    <!-- tip 7-->
                 <b-card no-body class="mb-1">
                        <b-card-header header-tag="header" class="p-1" role="tab">
                            <b-btn block href="#" v-b-toggle.accordion7 variant="info">Consejo 7</b-btn>
                        </b-card-header>

                        <b-collapse id="accordion7" accordion="my-accordion" role="tabpanel">
                            <b-card-body>
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <p class="card-text">
                                            Recuerda que debes comer las tres comidas principales
                                        </p>
                                        <ol>
                                            <li>Desayuno</li>
                                            <li>Almuerso</li>
                                            <li>Cena</li>
                                        </ol>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6">
                                        <div class="img7"></div>
                                    </div>
                                </div>  
                            </b-card-body>
                        </b-collapse>
                    </b-card>
                </div>
            </div>
            </div>
            <div class="col-lg-3 col-md-12 col-sm-12">
                <aside class="aside">
                    <h3 align="center">Dieta: </h3>
                    <p class="lead text-justify">
                    la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.
                    </p>
                </aside>

            </div>
        </div>
    </div>
</template>
<style>
.down{
    margin-top: 100px;
}
.bg-l{
    display: flex;
    justify-content: center;
    text-align: center;
}
.aside {
  background-color: blanchedalmond;
  border-radius: 25px;
  padding: 50px;
  width: 100%;
}

.card{
    margin-left: 100px;
    margin-right: 100px;
    width: 700px;
}

p{
    font-size: 20px;
}

.img1 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/Desayuno.svg");
  background-position: center;
  background-size: cover;
}

.img2 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/frutas.svg");
  background-position: center;
  background-size: cover;
}

.img3 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/verduras.svg");
  background-position: right;
  background-size: cover;
}
.img4 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/agua.svg");
  background-position: right;
  background-size: cover;
}
.img5 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/agua.svg");
  background-position: right;
  background-size: cover;
}
.img6 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/frutas.svg");
  background-position: right;
  background-size: cover;
}
.img7 {
  width: 100px;
  height: 100px;
  background: url("../../assets/tips/agua.svg");
  background-position: right;
  background-size: cover;
}
</style>
