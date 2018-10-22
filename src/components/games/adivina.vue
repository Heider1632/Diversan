<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-6">
                <b-card class="box1 q-1" bg-variant="light">
                    <b-form-group horizontal
                        label="¿Cuántos grupos alimenticios conforman la piramide alimenticia?"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0 title">
                    <!-- options -->
                    <b-form-group horizontal @click.native="op1()"
                        label="A: 3"
                        label-class="text-sm-right"
                        label-for="op1">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op2()"
                        label="B: 2"
                        label-class="text-sm-right"
                        label-for="op2">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op3()"
                        label="C: 5"
                        label-class="text-sm-right"
                        label-for="op3">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op4()"
                        label="D: 6"
                        label-class="text-sm-right"
                        label-for="op4">
                    </b-form-group>
                </b-form-group>
            </b-card>
            <br />
            <b-card class="box1 q-3" bg-variant="light">
                    <b-form-group horizontal
                        label="¿Cuál es el primer nivel en la piramide alimenticia?"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0 title">
                    <!-- option -->
                    <b-form-group horizontal @click.native="op5()"
                        label="A: Carnes"
                        label-class="text-sm-right"
                        label-for="nestedStreet">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op6()"
                        label="B: Frutas"
                        label-class="text-sm-right"
                        label-for="nestedCity">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op7()"
                        label="C: Agua"
                        label-class="text-sm-right"
                        label-for="nestedState">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op8()"
                        label="D: Dulces"
                        label-class="text-sm-right"
                        label-for="nestedCountry">
                    </b-form-group>
                </b-form-group>
            </b-card>
            </div>
            <!-- box 2-->
            <div class="col-lg-6 col-md-6 col-sm-6">
            <b-card class="box2 q-2" bg-variant="light">
                    <b-form-group horizontal
                        :label-cols="6"
                        label="¿Cuál son los nombres de los grupos alimenticios de color verde?"
                        label-size="lg"
                        label-class="font-weight-bold pt-0"
                        class="mb-0 title">
                    <b-form-group horizontal @click.native="op9()" 
                        :label-cols="6"
                        label="A: Frutas"
                        label-class="text-lg-right"
                        label-for="nestedStreet">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op10()" 
                        :label-cols="6"
                        label="B: Carnes"
                        label-class="text-lg-right"
                        label-for="nestedCity">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op11()"
                        :label-cols="6"
                        label="C: Vegetales"
                        label-class="text-lg-right"
                        label-for="nestedState">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op12()"
                        :label-cols="6"
                        label="D: Cereales"
                        label-class="text-sm-right"
                        label-for="nestedCountry">
                    </b-form-group>
                </b-form-group>
            </b-card>
            <br />
            <b-card class="box2 q-4" bg-variant="light">
                    <b-form-group horizontal
                        :label-cols="6"
                        breakpoint="lg"
                        label="¿Por qué es importante alimentarse bien?"
                        label-size="lg"
                        label-class="font-weight-bold"
                        class="mb-0">
                    <b-form-group horizontal @click.native="op13()"
                        :label-cols="10"
                        label="A: Porque creces sano y fuerte"
                        label-class="text-lg-right"
                        label-for="nestedStreet">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op14()"
                        :label-cols="10"
                        label="B: Porque puedes jugar sin ningún problema"
                        label-class="text-lg-right"
                        label-for="nestedCity">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op15()"
                        :label-cols="10"
                        label="C: Porque te evita enfermedades"
                        label-class="text-lg-right"
                        label-for="nestedState">
                    </b-form-group>
                    <b-form-group horizontal @click.native="op16()"
                        :label-cols="10"
                        label="D: Porque duermes bien"
                        label-class="text-lg-right"
                        label-for="nestedCountry">
                    </b-form-group>
                </b-form-group>
            </b-card>
            </div>
        </div>
    </div>
    
</template>
<script>
import swal from 'sweetalert2'
export default {
    name: 'adivina',
    data(){
        return{

        }
    },
    methods:{
        op1: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op2: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op3: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })

        },
        op4: function(){
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
        op5: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op6: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op7: function(){
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
        op8: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        //q3//
        op9: function(){
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
        op10: function(){
            swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op11: function(){
             swal({
                type: 'error',
                title: 'Oops...',
                text: 'Intentalo de nuevo',
                animation: false,
                customClass: 'animated tada'
            })
        },
        op12: function(){
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
        op13: function(){
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
        op14: function(){
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
        op15: function(){
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
        op16: function(){
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
.box1{
    margin-left: 0px;
}

.box2{
    margin-left: 0px;
    margin-right: 0px;
    width: 550px;
}

.text-lg-right{
    width: 120px;
}
label:hover{
    background-color: #0033cc;
    color: #fff; 
}
</style>

