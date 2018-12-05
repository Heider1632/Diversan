<template>
<div class="row">
  <div class="col-lg-10 col-md-10 col-sm-10">
    <div class="wrapper">
      <!-- card -->
      <div class="q-1">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12">
              <h5>{{ q1 }}</h5>
            </div>
            <!-- options -->
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ul class="list-group">
                <li class="list-group-item" @click="op1()" v-bind="options_q1">{{ options_q1.A }}</li>
                <li class="list-group-item" @click="op2()" v-bind="options_q1">{{ options_q1.B }}</li>
                <li class="list-group-item" @click="op3()" v-bind="options_q1">{{ options_q1.C }}</li>
                <li class="list-group-item" @click="op4()" v-bind="options_q1">{{ options_q1.D }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end card -->
      <!-- segunda pregunta -->
      <!-- card -->
      <div class="q-2">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h5>{{ q2 }}</h5>
            </div>
            <!-- options -->
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ul class="list-group">
                <li class="list-group-item" @click="op5()" v-bind="options_q2">{{ options_q2.A }}</li>
                <li class="list-group-item" @click="op6()" v-bind="options_q2">{{ options_q2.B }}</li>
                <li class="list-group-item" @click="op7()" v-bind="options_q2">{{ options_q2.C }}</li>
                <li class="list-group-item" @click="op8()" v-bind="options_q2">{{ options_q2.D }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end card -->
      <!-- tercera pregunta -->
      <!-- card -->
      <div class="q-3">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <h5>{{ q3 }}</h5>
            </div>
            <!-- options -->
            <div class="col-lg-6 col-md-6 col-sm-6">
              <ul class="list-group">
                <li class="list-group-item" @click="op13()" v-bind="options_q3">{{ options_q3.A }}</li>
                <li class="list-group-item" @click="op14()" v-bind="options_q3">{{ options_q3.B }}</li>
                <li class="list-group-item" @click="op15()" v-bind="options_q3">{{ options_q3.C }}</li>
                <li class="list-group-item" @click="op16()" v-bind="options_q3">{{ options_q3.D }}</li>
                <li class="list-group-item" @click="op17()" v-bind="options_q3">{{ options_q3.E }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- end card -->
    </div>
  </div>

  <div class="col-lg-2 col-md-2 col-sm-2 ajust-m">
    <navbar />
  </div>
</div>
</template>
<script>
import {store} from '../../store/store'
import swal from 'sweetalert2'
import navbar from '../navbar'
export default {
  name: 'adivina',
  components: {
    navbar
  },
  data() {
    return {
      language: store.getters.getLanguage,
      q1: '¿Cuántos grupos alimenticios conforman la piramide alimenticia?',
      options_q1: {
        A: '3',
        B: '2',
        C: '5',
        D: '6'
      },
      q2: '¿Cuál es el primer nivel en la piramide alimenticia?',
      options_q2: {
        A: 'Carnes',
        B: 'Frutas',
        C: 'Agua',
        D: 'Dulces'
      },
      q3: '¿Por qué es importante alimentarse bien?',
      options_q3: {
        A: 'Porque creces sano y fuerte',
        B: 'Porque puedes jugar sin ningún problema',
        C: 'Porque te evita enfermedades',
        D: 'Todas las anteriores',
        E: 'Ninguna de las anteriores'
      }
    }
  },
  mounted() {
    if (this.language == 'en') {
      this.q1 = 'How many food groups are parte of the food pyramid?';
      this.q2 = 'Which is the first food group of the food pyramid?';
      this.options_q2 = {
        A: 'Meats', B: 'Fruits', C:'Water', D: 'Sweets'
      };
      this.q3 = 'Why is it important to eat healtly food?';
      this.options_q3 = {
        A: 'Because you can growth healthy',
        B: 'Because you can play without any problem',
        C: 'Because it Avoids diseases',
        D: 'All of the above',
        E: 'None of the above'
      };
    }
  },
  methods: {
    op1() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op2() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op3() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })

    },
    op4() {
      this.$store.dispatch('incrementAsync');

      swal({
        title: 'Bien hecho!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                    rgb(17, 255, 17, 0.2)
                    url("../../assets/nyan-cat.gif")
                    center left
                    no-repeat
                    `
      })
    },
    //q2//
    op5() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op6() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op7() {
      this.$store.dispatch('incrementAsync');

      swal({
        title: 'Bien hecho!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                    rgba(0,0,123,0.4)
                    url("../../assets/nyan-cat.gif")
                    center left
                    no-repeat
                    `
      })
    },
    op8() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    //q3//
    op9() {
      this.$store.dispatch('incrementAsync');

      swal({
        title: 'Bien hecho!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                    rgba(0,0,123,0.4)
                    url("../../assets/nyan-cat.gif")
                    center left
                    no-repeat
                    `
      })
    },
    op10() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op11() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op12() {
      this.$store.dispatch('incrementAsync');

      swal({
        title: 'Bien hecho!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                    rgba(0,0,123,0.4)
                    url("../../assets/nyan-cat.gif")
                    center left
                    no-repeat
                    `
      })
    },
    //q4//
    op13() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op14() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op15() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
    op16(){
      this.$store.dispatch('incrementAsync');

      swal({
        title: 'Bien hecho!',
        width: 600,
        padding: '3em',
        background: '#fff url(/images/trees.png)',
        backdrop: `
                    rgb(17, 255, 17, 0.2)
                    url("../../assets/nyan-cat.gif")
                    center left
                    no-repeat
                    `
      })
    },
    op17() {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Intentalo de nuevo',
        animation: false,
        customClass: 'animated tada'
      })
    },
  }
}
</script>
<style>
.wrapper {
  width: 1000px;
  margin-top: 100px;
  margin-left: 5px;
}

.ajust-m {
  position: relative;
  margin-top: -30px;
}

.q-1 {
  background-color: #fff;
  margin-left: 0px;
  margin-right: 0px;
  float: left;
  max-width: 500px;
}

.q-2 {
  background-color: #fff;
  margin-left: 0px;
  margin-right: 0px;
  float: left;
  max-width: 400px;
}

.q-3 {
  background-color: #fff;
  clear: both;
  width: 90%;
}

.list-group-item:hover {
  background-color: #0033cc;
  color: #fff;
}

@media screen and (max-width: 1130px) {

  .q1,
  .q2 {
    float: none;
    width: 90%;
  }
}
</style>
