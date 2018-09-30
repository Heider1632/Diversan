<template>
<main>
<div class="container">
    <div class="row bg-g">
    <div class="col-lg-8 col-sm-8">
      <div class="boxes-game">
        <!--<h5 align="center" class="title">Carnes</h5>-->
        <div v-bind:class="[className]" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Lácteos</h5>-->
        <div v-bind:class="[className]" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Comidas Rápidas</h5>-->
        <div v-bind:class="[className]" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Agua</h5>-->
        <div v-bind:class="[className]" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Harinas</h5>-->
        <div v-bind:class="[className]" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Frutas</h5>-->
        <div v-bind:class="[className]" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
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
      dragged: undefined,
      className: 'empty',
      classOn: 'fill',
      id: null
      }
    },
    methods:{
      // Drag Functions //
      dragstart: function(e) {
        this.className = 'hold';
        this.draggingItem = e.target.id;
        this.dragged = e.target;
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
        this.classOn = 'enter';
        this.dragged.parentNode.removeChild( this.dragged );
        event.target.appendChild( this.dragged );
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
  cursor: pointer;
  margin: 10px;
}

.enter{
  display: inline-block;
  height: 100px;
  width: 100px;
  cursor: pointer;
}

#l1{
  background: url("../../assets/Vaso De agua.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l2{
  background: url("../../assets/Cena.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l3{
  background: url("../../assets/Desayuno.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l4{
  background: url("../../assets/Verduras.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l5{
  background: url("../../assets/Comidas Frutas.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#l6{
  background: url("../../assets/Almuerso.svg");
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

