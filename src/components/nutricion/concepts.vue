<template>
<div class="container-fluid">
  <h1 align="center" class="title-text">{{ title_message }}</h1>
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-10">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="card-nutricion">
            <b-card>
              <b-media no-body>
                <b-media-body class="ml-3">
                  <h5 class="mt-0">{{ N_title }}</h5>
                  <video height="400" width="400" controls>
                    <source :src="video_1">
                  </video>
                </b-media-body>
              </b-media>
            </b-card>
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-8">
          <div class="card-alimentacion">
            <b-card>
              <b-media no-body>
                <b-media-body class="ml-3">
                  <h5 class="mt-0">{{ A_title }}</h5>
                  <!-- video -->
                  <video height="400" width="400" controls>
                    <source :src="video_2">
                  </video>
                </b-media-body>
              </b-media>
            </b-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-10">
          <div class="box mx-auto">
            <h3 align="center">{{ title }}</h3>
            <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-5">
              <div class="card">
                <div class="card-body">
                  <p class="lead">{{ body1 }}</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-5">
              <div class="card">
                <div class="card-body">
                  <p class="lead">{{ body2 }}</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2 ajust-t">
      <navbar />
    </div>
  </div>
</div>
</template>
<script>
import {
  store
} from '../../store/store'
import vod1 from '../../assets/video/nutricionf.mp4'
import vod2 from '../../assets/video/alimentacionf.mp4'
import vod3 from '../../assets/video/nutritionf.mp4'
import vod4 from '../../assets/video/feedingF.mp4'
import navbar from '../navbar'
export default {
  name: 'concepts',
  components: {
    navbar
  },
  data() {
    return {
      language: store.getters.getLanguage,
      title: 'alimentacion sana y no sana',
      body1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
      body2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut',
      title_message: 'Aprendamos',
      N_title: 'Nutricion',
      A_title: 'Alimentacion',
      video_1: vod1,
      video_2: vod2
    }
  },
  mounted() {
    if (this.language == 'en') {
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
      this.video_1 = vod3;
      this.video_2 = vod4;
      this.title = 'healthy and unhealthly';
      this.body1 = 'Eating Healthy food means eating a variety of foods that give you the nutrients you need to maintain your health, feel good, and have energy. These nutrients include protein, carbohydrates, fat, water, vitamins, and minerals.';
      this.body2 = 'Any food that is not regarded as being conducive to maintaining health. Unhealthy foods include fats (especially of animal origin), “fast” foods (which are low in fibre and vitamins), foods high in salt  and tropical oils (e.g.,fried potato crisps/chips), and cream-based (“white”) sauces (which are high in fat).';
    }
  }
}
</script>
<style>
.ajust-t {
  position: relative;
  margin-top: -70px;
}

.title-text {
  background-color: #ccc;
  width: 83.3333%;
  box-shadow: 1px solid #ccc;
  margin-top: 50px;
}
</style>
