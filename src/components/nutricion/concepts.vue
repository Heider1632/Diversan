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
              <h5 class="mt-0">Nutricion</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                in faucibus.
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
              <h5 class="mt-0">Alimentación</h5>
              <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis.
                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis
                in faucibus.
              </p>
              <p class="mb-0" @click="openVodA()">
                ver video
              </p>
            </b-media-body>
          </b-media>
        </b-card>
      </div>
    </div>
    
    <div class="col-lg-2 col-md-2 col-sm-2">
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
import navbar from '../navbar'
export default {
  name: 'concepts',
  components: { navbar },
  data() {
    return {
      title_message: 'Aprendamos',
      N_title: 'Nutricion',
      A_titl: 'Alimentacion'

    }
  },
  methods: {
    openVodN() {
      this.$refs.vodNutricion.show()

    },

    openVodA() {
      this.$refs.vodAlimentacion.show()

    }
  }
}
</script>
<style>
</style>
