<template>
<main>
<div class="container-fluid">
    <div class="row bg-g">
    <!-- Cards player-->
    <div class="col-lg-4 col-md-2 col-sm-2">
      <div v-bind:class="[classOn]" id="i1" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i2" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i3" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i4" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i5" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i6" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i7" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i8" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i9" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      <div v-bind:class="[classOn]" id="i10" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
    </div>
    <div class="col-lg-4 col-md-6 col-sm-6 piramid">
        <!--<h5 align="center" class="title">Carnes</h5>-->
        <div :id="level1.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Lácteos</h5>-->
        <div :id="level2.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Comidas Rápidas</h5>-->
        <div :id="level3.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Agua</h5>-->
        <div :id="level4.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Harinas</h5>-->
        <div :id="level5.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Harinas</h5>-->
        <div :id="level6.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
        <!--<h5 align="center" class="title">Harinas</h5>-->
        <div :id="level7.id" v-on:dragenter="dragenter($event)" v-on:dragleave="dragleave($event)" v-on:dragover="dragover($event)" v-on:drop="dragdrop($event)"></div>
    </div>
      <!-- Cards player -->
      <div class="col-lg-4 col-md-2 col-sm-2">
        <div v-bind:class="[classOn]" id="i11" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i12" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i13" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i14" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i15" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i16" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i17" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i18" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i19" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
        <div v-bind:class="[classOn]" id="i20" draggable="true" v-on:dragstart="dragstart($event)" v-on:dragend="dragend($event)"></div>
      </div>
    </div>
</div>
</main>
</template>
<script>
import swal from 'sweetalert2';
export default {
    components: {},
  data() {
    return {
      draggingItem: undefined,
      dragged: undefined,
      className: 'empty',
      classOn: 'fill',
      level1:{
        id: 'v1',
        cad1: []
      },
      level2:{
        id: 'v2',
        cad2: []
      },
      level3:{
        id: 'v3',
        cad3: []
      },
      level4:{
        id: 'v4',
        cad4: []
      },
      level5:{
        id: 'v5',
        cad5: []
      },
      level6:{
        id: 'v6',
        cad6: []
      },
      level7: {
        id: 'v7',
        cad7: []
      } 
    }
  },
    methods:{
      // Drag Functions //
      dragstart: function(e) {
        this.className = 'hold';
        this.draggingItem = e.target.id;
        this.dragged = e.target;
        e.target.style.opacity = 0.5;
        e.target.style.height = "50px";
        e.target.style.width = "50px";
      },
      dragend: function(e) {
          e.target.style.opacity = 1;
      },
      dragenter: function(e) {
        e.preventDefault();
      },
      dragleave: function(e){
        this.className = 'empty';
      },
      dragdrop: function(e){
        var div = document.createElement("div");
        var clon = this.dragged.cloneNode(true);
        //crea un hijo a un div//
        div.appendChild(clon);

        //push array//
        if(event.target.id == this.level1.id){
          this.level1.cad1.push( this.draggingItem );
          this.draggingItem = '';
          //level 1//
          for(var i = 0; i < this.level1.cad1.length; i+=1){
            if(this.level1.cad1[i] == 'i2' || this.level1.cad1[i] == 'i9' || this.level1.cad1[i] == 'i10'){
              console.log(div);
              //añade el hijo a la piramide
              event.target.appendChild(div);
              
              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              //quita el hijo que se creo//
              event.target.removeChild(div);

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level2.id){
          this.level2.cad2.push( this.draggingItem );
          this.draggingItem = '';
          //level 2
          for(var i = 0; i < this.level2.cad2.length; i+=1){
            if(this.level2.cad2[i] == 'i7'){
              //añade el hijo a la piramide
              event.target.appendChild(div);

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              //quita el hijo que se creo//
              event.target.removeChild(div);

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level3.id){
          this.level3.cad3.push( this.draggingItem );
          this.draggingItem = '';
            //level 3
          for(var i = 0; i < this.level3.cad3.length; i+=1){
            if(this.level3.cad3[i] == 'i3' || this.level3.cad3[i] == 'i4' || this.level3.cad3[i] == 'i8'){
              //añade el hijo a la piramide
              event.target.appendChild(div);

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              //quita el hijo que se creo//
              event.target.removeChild(div);

              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level4.id){
          this.level4.cad4.push( this.draggingItem );
          this.draggingItem = '';
          //level 4//
          for(var i = 0; i < this.level4.cad4.length; i+=1){
            if(this.level4.cad4[i] == 'i5' || this.level4.cad4[i] == 'i18' || this.level4.cad4[i] == 'i19'){
              //añade el hijo a la piramide
              event.target.appendChild(div);

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
            //quita el hijo que se creo//
            event.target.removeChild(div);

            swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level5.id){
          this.level5.cad5.push( this.draggingItem );
          this.draggingItem = '';
          // level 5//
          for(var i = 0; i < this.level5.cad5.length; i+=1){
            if(this.level5.cad5[i] == 'i17'){
              //añade el hijo a la piramide
              event.target.appendChild(div);

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              })
            }else{
              //quita el hijo que se creo
              event.target.removeChild(div);
              swal({
                position: 'top-end',
                type: 'error',
                title: 'Oh oh :( intentalo de nuevo',
                showConfirmButton: false,
                timer: 1500
              })
            }
          }
        }else if(event.target.id == this.level6.id){
          this.level6.cad6.push( this.draggingItem );
          this.draggingItem = '';
          // level 6//
          for(var i = 0; i < this.level6.cad6.length; i+=1){
            if(this.level6.cad6[i] == 'i20' || this.level6.cad6[i] == 'i12' ||   this.level6.cad6[i] == 'i6' || this.level6.cad6[i] == 'i16'){
              //añade el hijo a la piramide
              event.target.appendChild(div);

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
              });
            }else{
              //quita el hijo que se creo//
              event.target.removeChild(div);

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
          this.level7.cad7.push( this.draggingItem );
          this.draggingItem = '';
          //level 7//
          for (var i = 0; i < this.level7.cad7.length; i+=1) {
            if(this.level7.cad7[i] == 'i1'){
              //añade el hijo a la piramide
              event.target.appendChild(div);

              swal({
                position: 'top-end',
                type: 'success',
                title: 'Buen trabajo! sigue así',
                showConfirmButton: false,
                timer: 1500
             })
            }else{
              //quita el hijo que se creo//
              event.target.removeChild(div);

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
        //final del codigo//
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
  height: 40px;
  width: 40px;
}

.piramid{
  position: relative;
  top: 0;
  left: 100px;
}

#v1{
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-top: 0px solid transparent;
  border-left: 100px solid transparent;
  border-bottom: 150px solid #e74c3c;
}

#v2{
    width: 160px;
    height: 0px;
    border-right: 0px solid transparent;
    border-left: 60px solid transparent;
    border-bottom: 100px solid #f1c40f;
    position: relative;
    right: 60px;
}

#v3{
    width: 160px;
    height: 0px;
    border-right: 60px solid transparent;
    border-left: 0px solid transparent;
    border-bottom: 100px solid #d35400;
    position: relative;
    bottom: 100px;
    left: 100px;
}

#v4{
  width: 220px;
  height: 0px;
  border-right: 0px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #f39c12;
  position: relative;
  bottom: 100px;
  right: 120px;
}

#v5{
  width: 220px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 0px solid transparent;
  border-bottom: 100px solid #27ae60;
  position: relative;
  bottom: 200px;
  left: 100px;
}

#v6{
  width: 560px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #2ecc71;
  position: relative;
  right: 180px;
  bottom: 200px;
}

#v7{
  width: 680px;
  height: 0px;
  border-right: 60px solid transparent;
  border-left: 60px solid transparent;
  border-bottom: 100px solid #3498db;
  position: relative;
  right: 240px;
  bottom: 200px;
}


#i1{
  background: url("../../assets/icons/agua.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#i2{
  background: url("../../assets/icons/hamburguesa.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#i3{
  background: url("../../assets/icons/jamon.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#i4{
  background: url("../../assets/icons/filete.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#i5{
  background: url("../../assets/icons/fresas.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

#i6{
  background: url("../../assets/icons/cereal.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i7{
  background: url("../../assets/icons/avena.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i8{
  background: url("../../assets/icons/tocino.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i9{
  background: url("../../assets/icons/emparedado.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i10{
  background: url("../../assets/icons/pizza.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i11{
  background: url("../../assets/icons/pastelito.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i12{
  background: url("../../assets/icons/pan.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i13{
  background: url("../../assets/icons/papas-fritas.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i14{
  background: url("../../assets/icons/pan.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i15{
  background: url("../../assets/icons/pollo.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i16{
  background: url("../../assets/icons/queso.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i17{
  background: url("../../assets/icons/verduras.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i18{
  background: url("../../assets/icons/naranja.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i19{
  background: url("../../assets/icons/manzana.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
#i20{
  background: url("../../assets/icons/leche.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

</style>

