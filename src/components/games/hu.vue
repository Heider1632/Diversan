<template>
<div class="container">
  <div class="row">
    <div class="col-lg-10 col-md-10 col-sm-12">
      <div class="row bg">
        <div class="titles">
          <h1>Alimentos sanos || Alimentos no sanos</h1>
        </div>
      </div>
      <div class="row">
        <div :id="box1.id" class="box-one" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <div :id="box2.id" class="box-two" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
      </div>
      <div class="row">
        <div class="items" v-for="item in items">
          <img :src="item.src" v-bind:class="[classOn]" :id="item.id" :alt="item.name" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></img>
        </div>
      </div>
    </div>
    <div class="col-lg-2 col-md-2 col-sm-2">
      <navbar />
    </div>
  </div>
</div>
</template>
<script>
import navbar from '../navbar';
import pizza from '../../assets/icons/pizza.svg'
import manzana from '../../assets/icons/manzana.svg'
import papas from '../../assets/icons/papas-fritas.svg'
import swal from 'sweetalert2'
export default {
  name: 'healtly',
  components: {
    navbar
  },
  data() {
    return {
      draggingItem: undefined,
      dragged: undefined,
      classOn: 'fill',
      items: [
        {
          id: 1,
          name: 'pizza',
          src: pizza
        },
        {
          id: 2,
          name: 'manzana',
          src: manzana
        },
        {
          id: 3,
          name: 'papas-fritas',
          src: papas
        },
      ],
      box1: {
        id: 'b1',
        cad: []
      },
      box2: {
        id: 'b2',
        cad: []
      },
    }
  },
  methods: {
    // Drag Functions //
    dragstart: function(e) {
      this.className = 'hold';
      this.draggingItem = e.target.id;
      this.dragged = e.target;
      e.target.style.opacity = 0.5;
      e.target.style.width = '50px';
      e.target.style.height = '50px';
    },
    dragend: function(e) {
      e.target.style.opacity = 1;
    },
    dragenter: function(e) {
      e.preventDefault();
    },
    dragleave: function(e) {
      this.className = 'empty';
    },
    dragdrop: function(e) {
      //push array//
      if (event.target.id == this.box1.id) {
        this.box1.cad.push(this.draggingItem);
        this.draggingItem = '';
        //level 1//
        for (var i = 0; i < this.box1.cad.length; i += 1) {
          if (this.box1.cad[i] == 2) {
            //añade el hijo a la piramide
            event.target.appendChild(this.dragged);

            this.$store.dispatch('incrementAsync');

            swal({
              position: 'top-end',
              type: 'success',
              title: 'Buen trabajo! sigue así',
              showConfirmButton: false,
              timer: 1500
            })
          } else if (this.box1.cad[i] == 4) {
            //añade el hijo a la piramide
            event.target.appendChild(this.dragged);

            this.$store.dispatch('incrementAsync');

            swal({
              position: 'top-end',
              type: 'success',
              title: 'Buen trabajo! sigue así',
              showConfirmButton: false,
              timer: 1500
            })
          } else {
            swal({
              position: 'top-end',
              type: 'error',
              title: 'Oh oh :( intentalo de nuevo',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      }else{
        this.box2.cad.push(this.draggingItem);
        this.draggingItem = '';
        //level 2
        for (var i = 0; i < this.box2.cad.length; i += 1) {
          if (this.box2.cad[i] == 1) {
            //añade el hijo a la piramide
            event.target.appendChild(this.dragged);
            //desvanece el item principal

            this.$store.dispatch('incrementAsync');

            swal({
              position: 'top-end',
              type: 'success',
              title: 'Buen trabajo! sigue así',
              showConfirmButton: false,
              timer: 1500
            })
          } else if (this.box2.cad[i] == 3) {
            //añade el hijo a la piramide
            event.target.appendChild(this.dragged);
            //desvanece el item principal

            this.$store.dispatch('incrementAsync');

            swal({
              position: 'top-end',
              type: 'success',
              title: 'Buen trabajo! sigue así',
              showConfirmButton: false,
              timer: 1500
            })
          } else {

            swal({
              position: 'top-end',
              type: 'error',
              title: 'Oh oh :( intentalo de nuevo',
              showConfirmButton: false,
              timer: 1500
            })
          }
        }
      }
    },
    dragover: function(e){
      e.preventDefault();
    }
  }
}
</script>
<style>
.box-one {
  height: 250px;
  width: 46.333%;
  background: #EA973F;
  margin-bottom: 40px;
}

.box-two {
  height: 250px;
  width: 46.333%;
  background: #3175B6;
  margin-bottom: 40px;
}

.titles {
  display: inline-block;
  background: #fff;
  width: 92.666%;
  word-spacing: 23.33px;
}

.items {
  background: #fff;
}
</style>
