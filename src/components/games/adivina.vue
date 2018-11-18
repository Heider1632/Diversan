<template>
<div class="row">
<div class="col-lg-10 col-md-10 col-sm-10">
  <div class="wrapper">

          <!-- primera pregunta -->
            <!-- card -->
            <div class="q-1">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <h5>¿Cuántos grupos alimenticios conforman la piramide alimenticia?</h5>
                    </div>
                    <!-- options -->
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <ul class="list-group">
                        <li class="list-group-item" @click="op1()">A: 3</li>
                        <li class="list-group-item" @click="op2()">B: 2</li>
                        <li class="list-group-item" @click="op3()">C: 5</li>
                        <li class="list-group-item" @click="op4()">D: 6</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <!-- segunda pregunta -->
              <!-- card -->
            <div class="q-2">
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-4">
                      <h5>¿Cuál es el primer nivel en la piramide alimenticia?</h5>
                    </div>
                    <!-- options -->
                    <div class="col-lg-6 col-md-6 col-sm-6">
                      <ul class="list-group">
                        <li class="list-group-item" @click="op5()">A: Carnes</li>
                        <li class="list-group-item" @click="op6()">B: Frutas</li>
                        <li class="list-group-item" @click="op7()">C: Agua</li>
                        <li class="list-group-item" @click="op8()">D: Dulces</li>
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
                        <h5>¿Por qué es importante alimentarse bien?</h5>
                      </div>
                      <!-- options -->
                      <div class="col-lg-6 col-md-6 col-sm-6">
                        <ul class="list-group">
                          <li class="list-group-item" @click="op13()">A: Porque creces sano y fuerte</li>
                          <li class="list-group-item" @click="op14()">B: Porque puedes jugar sin ningún problema</li>
                          <li class="list-group-item" @click="op15()">C: Porque te evita enfermedades</li>
                          <li class="list-group-item" @click="op16()">D: Porque duermes bien</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              <!-- end card -->
            </div>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-2">
                <navbar />
          </div>
      </div>
</template>
<script>
import swal from 'sweetalert2'
import navbar from '../navbar'
export default {
    name: 'adivina',
    components: { navbar },
    data(){
        return{
          questions: {
            q1:{
              name: '',
              options:['', '', '', '', '']
            },
            q2:{
              name: '',
              options:['', '', '', '', '']
            },
            q3:{
              name: '',
              options:['', '', '', '', '']
            },
            q4:{
              name: '',
              options:['', '', '', '', '']
            },
            q5:{
              name: '',
              options:['', '', '', '', '']
            },
            q6:{
              name: '',
              options:['', '', '', '', '']
            },
            q7:{
              name: '',
              options:['', '', '', '', '']
            },
            q8:{
              name: '',
              options:['', '', '', '', '']
            },
            q9:{
              name: '',
              options:['', '', '', '', '']
            },
            q10:{
              name: '',
              options:['', '', '', '', '']
            },
            q11:{
              name: '',
              options:['', '', '', '', '']
            },
            q12:{
              name: '',
              options:['', '', '', '', '']
            }
          }

        }
    },
    methods:{
        op1(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op2(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op3(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })

        },
        op4(){
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
        op5(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op6(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op7(){
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
        op8(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        //q3//
        op9(){
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
        op10(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op11(){
             swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op12(){
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
        op13(){
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
        op14(){
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
        op15(){
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
        }
    }
}
</script>
<style>
.wrapper{
  width: 1000px;
  margin-top: 100px;
  margin-left: 5px;
}

.q-1{
  background-color: #fff;
  margin-left: 0px;
  margin-right: 0px;
  float: left;
  max-width: 500px;
}

.q-2{
  background-color: #fff;
  margin-left: 0px;
  margin-right: 0px;
  float: left;
  max-width: 400px;
}

.q-3{
  background-color: #fff;
  clear:both;
  width: 90%;
}

.list-group-item:hover{
    background-color: #0033cc;
    color: #fff;
}

@media screen and (max-width: 1130px) {
  .q1, .q2{
    float: none;
    width: 90%;
  }
}
</style>
