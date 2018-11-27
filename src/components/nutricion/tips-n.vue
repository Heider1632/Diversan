<template>
<div class="container-fluid">
  <div class="row down">
    <div class="col-lg-5 col-md-5 col-sm-11 m-20">
      <div class="bg-l">
        <div role="tablist">
          <b-card no-body class="mb-1" @click="viewImg1()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion1 variant="info">Consejo 1</b-btn>
            </b-card-header>
            <b-collapse id="accordion1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_1 }}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- tip 2 -->
          <b-card no-body class="mb-1" @click="viewImg2()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion2 variant="info">Consejo 2</b-btn>
            </b-card-header>

            <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_2 }}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- tip 3-->
          <b-card no-body class="mb-1" @click="viewImg3()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion3 variant="info">Consejo 3</b-btn>
            </b-card-header>

            <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_3 }}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- tip 4-->
          <b-card no-body class="mb-1" @click="viewImg4()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion4 variant="info">Consejo 4</b-btn>
            </b-card-header>

            <b-collapse id="accordion4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_4 }}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- tip 5-->
          <b-card no-body class="mb-1" @click="viewImg5()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion5 variant="info">Consejo 5</b-btn>
            </b-card-header>

            <b-collapse id="accordion5" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_5 }}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- tip 6-->
          <b-card no-body class="mb-1" @click="viewImg6()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion6 variant="info">Consejo 6</b-btn>
            </b-card-header>

            <b-collapse id="accordion6" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_6 }}
                </p>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- tip 7-->
          <b-card no-body class="mb-1" @click="viewImg7()">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-btn block href="#" v-b-toggle.accordion7 variant="info">Consejo 7</b-btn>
            </b-card-header>

            <b-collapse id="accordion7" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <p class="card-text">
                  {{ t_7 }}
                </p>
                <ol v-for="tip in tips">
                  <li>{{ tip.ol }}</li>
                </ol>
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </div>
    <div class="col-lg-5 col-md-5 col-sm-11 m-20">
      <aside class="aside">
        <h3 align="center">{{ dieta_title}}</h3>
        <p class="lead text-justify">
          {{ dieta_body }}
        </p>
      </aside>

      <img :src="image" :alt="img_name" width="200px" height="200px" :usermap="detalle" />

      <map :name="detalle">
        <area shape="circle" coords="90,58,5" @mouseover="fisrt" />
        <area shape="rect" coords="0,161,300,350" @mouseover="second"/>
      </map>
    </div>
    <div class="col-lg-1 col-md-1 col-sm-1 ajust-t r-40">
      <navbar />
    </div>
  </div>
</div>
</template>
<script>
import {store} from '../../store/store'

import image1 from '../../assets/tips/agua.svg'
import image2 from '../../assets/tips/Desayuno.svg'
import image3 from '../../assets/tips/frutas.svg'
import image4 from '../../assets/tips/lacteos.svg'
import image5 from '../../assets/tips/verduras.svg'


import navbar from '../navbar'
export default {
  name: 'tips',
  components: {
    navbar
  },
  data(){
    return{
      language: store.getters.getLanguage,
      dieta_title: 'Dieta:',
      dieta_body: 'la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.',
      t_1: 'El desayuno es la comida más importante del día porque te da mucha energía! Nunca te olvides de desayunar!',
      t_2: 'Las frutas te dan muchas vitaminas y nutrientes que te harán crecer grande y fuerte',
      t_3: 'las verduras combaten muchas enfermedades y mejoran tu semblante',
      t_4: 'Tomar mucha agua ayuda a liberar toxinas',
      t_5: 'No consumas gasesosas, mejor consume jugos naturales',
      t_6: 'No te excedas en golosinas mejor come frutas',
      t_7: 'Recuerda que debes comer las tres comidas principales',
      tips: [
        {ol: 'desayuno'},
        {ol: 'almuerzo'},
        {ol: 'cena'}
      ],
      image: image2,
      img_name: null,
      detalle: null,
    }
  },
  mounted(){
    if(this.language == 'en'){
      this.dieta_title = 'WHAT IS A BALANCED DIET?';
      this.dieta_body = 'Diet is the set of aliments that you consume on a daily basis. This allows you to obtain the nutrients necessary for your appropriate development. For a diet to be healthy it must include a variety of aliments in the right amounts. We present some tips to make your diet a healthy diet for your good development.';
      this.t_1 = 'Breakfast is the most important meal of the day because it gives you a lot of energy! Never forget to have breakfast!';
      this.t_2 = 'Fruits give you many vitamins and nutrients that will make you grow big and strong';
      this.t_3 = 'The vegetables fight against many diseases and improve your look';
      this.t_4 = 'Drinking a  lot of water helps to release toxins';
      this.t_5 = 'Do not consume soft drinks, better consume natural juices';
      this.t_6 = 'Do not exceed in consuming goodies, better eat fruits';
      this.t_7 = 'Remember that you must eat the three main meals';

    }else{
      this.dieta_title = 'POR QUÉ UNA DIETA BALACEADA?';
      this.dieta_body = 'la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.';
      this.t_1 = 'El desayuno es la comida más importante del día porque te da mucha energía! Nunca te olvides de desayunar!';
      this.t_2 = 'Las frutas te dan muchas vitaminas y nutrientes que te harán crecer grande y fuerte';
      this.t_3 = 'las verduras combaten muchas enfermedades y mejoran tu semblante';
      this.t_4 = 'Tomar mucha agua ayuda a liberar toxinas';
      this.t_5 = 'No consumas gasesosas, mejor consume jugos naturales';
      this.t_6 = 'No te excedas en golosinas mejor come frutas';
      this.t_7 = 'Recuerda que debes comer las tres comidas principales';
    }
  },
  beforeUpdate(){
    if(this.language == 'en'){
      this.dieta_title = 'WHAT IS A BALANCED DIET?';
      this.dieta_body = 'Diet is the set of aliments that you consume on a daily basis. This allows you to obtain the nutrients necessary for your appropriate development. For a diet to be healthy it must include a variety of aliments in the right amounts. We present some tips to make your diet a healthy diet for your good development.';
      this.t_1 = 'Breakfast is the most important meal of the day because it gives you a lot of energy! Never forget to have breakfast!';
      this.t_2 = 'Fruits give you many vitamins and nutrients that will make you grow big and strong';
      this.t_3 = 'The vegetables fight against many diseases and improve your look';
      this.t_4 = 'Drinking a  lot of water helps to release toxins';
      this.t_5 = 'Do not consume soft drinks, better consume natural juices';
      this.t_6 = 'Do not exceed in consuming goodies, better eat fruits';
      this.t_7 = 'Remember that you must eat the three main meals';

    }else{
      this.dieta_title = 'POR QUÉ UNA DIETA BALACEADA?';
      this.dieta_body = 'la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.';
      this.t_1 = 'El desayuno es la comida más importante del día porque te da mucha energía! Nunca te olvides de desayunar!';
      this.t_2 = 'Las frutas te dan muchas vitaminas y nutrientes que te harán crecer grande y fuerte';
      this.t_3 = 'las verduras combaten muchas enfermedades y mejoran tu semblante';
      this.t_4 = 'Tomar mucha agua ayuda a liberar toxinas';
      this.t_5 = 'No consumas gasesosas, mejor consume jugos naturales';
      this.t_6 = 'No te excedas en golosinas mejor come frutas';
      this.t_7 = 'Recuerda que debes comer las tres comidas principales';
    }
  },
  update(){
    if(this.language == 'en'){
      this.dieta_title = 'WHAT IS A BALANCED DIET?';
      this.dieta_body = 'Diet is the set of aliments that you consume on a daily basis. This allows you to obtain the nutrients necessary for your appropriate development. For a diet to be healthy it must include a variety of aliments in the right amounts. We present some tips to make your diet a healthy diet for your good development.';
      this.t_1 = 'Breakfast is the most important meal of the day because it gives you a lot of energy! Never forget to have breakfast!';
      this.t_2 = 'Fruits give you many vitamins and nutrients that will make you grow big and strong';
      this.t_3 = 'The vegetables fight against many diseases and improve your look';
      this.t_4 = 'Drinking a  lot of water helps to release toxins';
      this.t_5 = 'Do not consume soft drinks, better consume natural juices';
      this.t_6 = 'Do not exceed in consuming goodies, better eat fruits';
      this.t_7 = 'Remember that you must eat the three main meals';

    }else{
      this.dieta_title = 'POR QUÉ UNA DIETA BALACEADA?';
      this.dieta_body = 'la dieta es el conjunto de alimentos que consumes a diario. Esta te permite obtener a través de dichos alimentos, los nutrientes necesarios para tu desarrollo. Para que la dieta sea saludable debe incluir alimentos variados en las cantidades adecuadas.';
      this.t_1 = 'El desayuno es la comida más importante del día porque te da mucha energía! Nunca te olvides de desayunar!';
      this.t_2 = 'Las frutas te dan muchas vitaminas y nutrientes que te harán crecer grande y fuerte';
      this.t_3 = 'las verduras combaten muchas enfermedades y mejoran tu semblante';
      this.t_4 = 'Tomar mucha agua ayuda a liberar toxinas';
      this.t_5 = 'No consumas gasesosas, mejor consume jugos naturales';
      this.t_6 = 'No te excedas en golosinas mejor come frutas';
      this.t_7 = 'Recuerda que debes comer las tres comidas principales';
    }
  },
  methods: {
    viewImg1(){
      this.image = image2;
      this.img_name = 'Desayuno';
      this.detalle = '#desayunoMap';
    },
    viewImg2(){
      this.image = image3;
      this.img_name = 'Frutas';
      this.detalle = '#frutasMap';
    },
    viewImg3(){
      this.image = image5;
      this.img_name = 'Verduras';
      this.detalle = '#verdurasMap';
    },
    viewImg4(){
      this.image = image1;
      this.img_name = 'Agua';
      this.detalle = '#aguaMap';
    },
    viewImg5(){
      this.image = image1;
      this.img_name = 'lacteos';
      this.detalle = '#lacteosMap';
    },
    viewImg6(){
      this.image = image3;
      this.img_name = 'frutas';
      this.detalle = '#frutasMap';
    },
    viewImg7(){
      this.image = image1;
      this.img_name = 'Desayuno';
      this.detalle = '#desayunoMap';
    },
    fisrt: function(){
      alert('work');
    },
    second: function(){
      alert('work');
    }
  }
}
</script>
<style>
.down {
  margin-top: 50px;
}

.r-40{
  right: 40px;
}

.bg-l {
  display: flex;
  justify-content: center;
  text-align: center;
}

.aside {
  background-color: blanchedalmond;
  border-radius: 25px;
  padding: 30px;
}

.card {
  width: 500px;
}

p {
  font-size: 20px;
}

.img1 {
  width: 100px;
  height: 100px;
  background: url("");
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

.m-20 {
  margin: 20px;
}
</style>
