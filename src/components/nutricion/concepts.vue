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
                    <source src="../../assets/video/nutricion.mp4">
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
                    <source src="../../assets/video/nutricion.mp4">
                  </video>
                </b-media-body>
              </b-media>
            </b-card>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="box mx-auto">
          <h1 align="center">{{ title }}</h1>
          <p class="lead">{{ body }}</p>
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
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      title_message: 'Aprendamos',
      N_title: 'Nutricion',
      A_title: 'Alimentacion'
    }
  },
  mounted() {
    if (this.language == 'en') {
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
    }
  },
  beforeUpdate() {
    if (this.language == 'en') {
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
    }
  },
  update() {
    if (this.language == 'en') {
      this.title_message = 'let`s learn';
      this.N_title = 'Nutrition';
      this.A_title = 'Feddind';
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
