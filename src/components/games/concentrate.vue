<template>
    <div id="container"></div>
</template>
<style>
#container { width: 800px; }
ul { padding: 0;  margin: 0;}
li {
  padding: 0;
  float: left;
  margin: 10px;
  list-style: none;
  width: 150px;
  height: 150px;
}

img { 
  width: 100%;
  height: 100%;
}
</style>
<script>
export default {
    data(){
        return{
            guess1: "",
            guess2: "",
            count: 0
        }
    },
    created(){
        var images =  [];

        // get images, place them in an array & randomize the order
        for (var i = 0; i < 8; i++) { 
            var rand = Math.floor(Math.random() * (1200 - 900 + 1) + 900); 
            var img = '../../src/assets/images/icons' + rand + '.svg';
            images.push(img);
            images.push(img);
        }

        // randomize array of images
        function randomizeImages(){
        Array.prototype.randomize = function()
        {
            var i = this.length, j, temp;
            while ( --i )
            {
                j = Math.floor( Math.random() * (i - 1) );
                temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        };
  
            images.randomize();
        }

        randomizeImages();

        // output images then hide them
        var output = "<ol>"; 
        for (var i = 0; i < 16; i++) { 
            output += "<li>";
            output += "<img src = '" + images[i] + "'/>";
            output += "</li>";
        }

        output += "</ol>";
        document.getElementById("container").innerHTML = output;

        $("img").hide();
   
    },
    methods:{
        

    }
}
</script>
