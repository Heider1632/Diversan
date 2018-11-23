<template>
<div class="container-fluid">
  <h1 align="center">{{ title_message }}</h1>
  <div class="row">
    <div class="col-lg-5 col-md-5 col-sm-8">
      <div class="card-nutricion">
        <b-card>
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder" />
            </b-media-aside>
            <b-media-body class="ml-3">
              <h5 class="mt-0">{{ N_title }}</h5>
              <p>
                {{ n_body }}
              </p>
              <p class="mb-0" @click="openVodN()">
                ver video
              </p>
            </b-media-body>
          </b-media>
        </b-card>
      </div>
    </div>
    <div class="col-lg-5 col-md-5 col-sm-8">
      <div class="card-alimentacion">
        <b-card>
          <b-media no-body>
            <b-media-aside vertical-align="center">
              <b-img blank blank-color="#ccc" width="128" height="256" alt="placeholder" />
            </b-media-aside>
            <b-media-body class="ml-3">
              <h5 class="mt-0">{{ A_title }}</h5>
              <p>
                {{ a_body }}
              </p>
              <p class="mb-0" @click="openVodA()">
                ver video
              </p>
            </b-media-body>
          </b-media>
        </b-card>
      </div>
    </div>

    <div class="col-lg-2 col-md-2 col-sm-2 ajust-t">
      <navbar />
    </div>

    <!-- modal concepto -->
    <b-modal ref="vodNutricion" hide-footer :title="N_title">
      <div class="d-block text-center">
        <video height="400" width="400" controls>
          <source src="../../assets/video/nutricion.mp4">
        </video>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-btn>
    </b-modal>

    <b-modal ref="vodAlimentacion" hide-footer :title="A_title">
      <div class="d-block text-center">
        <video height="400" width="400" controls>
          <source src="../../assets/video/nutricion.mp4">
        </video>
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Cerrar</b-btn>
    </b-modal>
  </div>
</div>
</template>
<script>
import {store} from '../../store/store'
import navbar from '../navbar'
export default {
  name: 'concepts',
  components: { navbar },
  data() {
    return {
      language: store.getters.getLanguage,
      title_message: 'Aprendamos',
      N_title: 'Nutricion',
      A_title: 'Alimentacion',
      n_body: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.',
      a_body: 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante  sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.'
    }
  },
  mounted(){
    if(this.language == 'en'){
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
      this.n_body ='Nutrition is a process performed by your body daily. Through this, the body takes the necessary substances for its functioning, called nutrients, absorbs them, transforms them and uses them to provide energy for all the human body, it also builds and/or repairs your organs and tissues, additionally, it regulates other processes in your body and even prevents and protects it from diseases.';
      this.a_body ='When you take a meal and ingest it, you acquire from this energy and nutrients, you are feeding your body. Eating in a proper way is the most important manner of protecting your health. This is truth!, many diseases may damage your body if you do not feed yourself correctly, and that`s why it`s very important  you learn to choose the key substances you should consume on a daily basis!';
    }
  },
  beforeUpdate(){
    if(this.language == 'en'){
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
      this.n_body ='Nutrition is a process performed by your body daily. Through this, the body takes the necessary substances for its functioning, called nutrients, absorbs them, transforms them and uses them to provide energy for all the human body, it also builds and/or repairs your organs and tissues, additionally, it regulates other processes in your body and even prevents and protects it from diseases.';
      this.a_body ='When you take a meal and ingest it, you acquire from this energy and nutrients, you are feeding your body. Eating in a proper way is the most important manner of protecting your health. This is truth!, many diseases may damage your body if you do not feed yourself correctly, and that`s why it`s very important  you learn to choose the key substances you should consume on a daily basis!';
    }
  },
  update(){
    if(this.language == 'en'){
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
      this.n_body ='Nutrition is a process performed by your body daily. Through this, the body takes the necessary substances for its functioning, called nutrients, absorbs them, transforms them and uses them to provide energy for all the human body, it also builds and/or repairs your organs and tissues, additionally, it regulates other processes in your body and even prevents and protects it from diseases.';
      this.a_body ='When you take a meal and ingest it, you acquire from this energy and nutrients, you are feeding your body. Eating in a proper way is the most important manner of protecting your health. This is truth!, many diseases may damage your body if you do not feed yourself correctly, and that`s why it`s very important  you learn to choose the key substances you should consume on a daily basis!';
    }
  },
  methods: {
    openVodN() {
      this.$refs.vodNutricion.show()
    },
    openVodA() {
      this.$refs.vodAlimentacion.show()
    },
    hideModal(){
      this.$refs.modal.hidden()
    }
  }
}
</script>
<style>
  .ajust-t{
    position: relative;
    margin-top: -70px;
  }
</style>
