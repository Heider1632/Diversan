<template>
<main>
<div class="container">
    <div class="row bg-g">
    <div class="col-lg-8 col-sm-8">
      <div class="boxes-game">
        <!--<h5 align="center" class="title">Carnes</h5>-->
        <div v-bind:class="[className]" :id="id.l1" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Lácteos</h5>-->
        <div v-bind:class="[className]" :id="id.l2" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Comidas Rápidas</h5>-->
        <div v-bind:class="[className]" :id="id.l3" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Agua</h5>-->
        <div v-bind:class="[className]" :id="id.l4" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Harinas</h5>-->
        <div v-bind:class="[className]" :id="id.l5" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Frutas</h5>-->
        <div v-bind:class="[className]" :id="id.l6" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
      </div>

      <div class="boxes-player">
        <div v-bind:class="[classOn]" id="l1" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="l2" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="l3" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="l4" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="l5" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="l6" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      </div>
    </div>
    <div class="col-lg-4 col-sm-4">
    </div>
    </div>
</div>
</main>
</template>
<script>

export default {
    components: {},
  data() {
    return {
      draggingItem: undefined,
      className: 'empty',
      classOn: 'fill',
      id: {
        l1: null,
        l2: null,
        l3: null,
        l4: null,
        l5: null,
        l6: null,
      }
      }
    },
    methods:{
      // Drag Functions //
      dragstart: function(e) {
        this.className = 'hold';
        this.draggingItem = e.target.id; 
        e.target.style.opacity = 0.5;
      },
      dragend: function(e) {
          e.target.style.opacity = 1;
      },
      dragenter: function(e) {
        e.preventDefault();
        this.className = 'hovered';
      },
      dragleave: function(e){
        this.className = 'empty';
      },
      dragdrop: function(e){
        this.className = 'empty';
        this.id = this.draggingItem;
      },
      dragover: function(e){
        e.preventDefault();
      }
    }
}
</script>
<style>

.fill {
  display: inline-block;
  height: 100px;
  width: 100px;
  top: 5px;
  left: 5px;
  cursor: pointer;
  margin: 10px;
}

#l1{
  background: url("../../assets/1 Agua.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l2{
  background: url("../../assets/2 Arinas.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l3{
  background: url("../../assets/3 Frutas.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l4{
  background: url("../../assets/4 Lacteos.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l5{
  background: url("../../assets/5 Carnes.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l6{
  background: url("../../assets/6 Comidas Rapida.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}


.hold{
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 10px;
  background: white;
  border: solid 5px #ccc;
}

.title{
  display: inline-block;
  position: relative;
  top: -180px;
}

.empty {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 10px;
  border: solid 3px salmon;
  background: white;
}

.hovered {
  display: inline-block;
  height: 100px;
  width: 100px;
  margin: 10px;
  background: #f4f4f4;
  border-style: dashed;
}


</style>

