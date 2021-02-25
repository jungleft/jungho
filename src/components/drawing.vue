<template>
  <div class="hello" :class="{dark:dark}">
    <canvas id="canvas" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw"></canvas>
  </div>
</template>

<script>

import firebase from 'firebase'
// import db from '../db'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: String
  },
  methods: {
    toBlob() {
      var storageRef = firebase.storage().ref();
      var mountainsRef = storageRef.child('mountains.jpg');
      var canvas = document.getElementById('canvas');
      canvas.toBlob(function(blob){
        var image = new Image();
        image.src = blob;
        image.setAttribute('crossorigin', 'anonymous');
        mountainsRef.put(blob).then(() => {
          console.log('Uploaded a blob or file!');
        });
      }); 
    },
    startPainting(e) {
      this.painting = true;
      console.log(this.painting)
      this.draw(e)
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      this.ctx.beginPath()
      this.toBlob()
    },
    draw(e) {
      if(!this.painting) return

      this.ctx.lineWidth = 10;
      this.ctx.lineCap ="round"
      
     this.ctx.lineTo(e.clientX,e.clientY)
     this.ctx.stroke()

     this.ctx.beginPath()
     this.ctx.moveTo(e.clientX,e.clientY)
    }
  },
  mounted() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");  

    // Resize canvas
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    function toDataURL(url, callback){
      var xhr = new XMLHttpRequest();
      xhr.open('get', url);
      xhr.responseType = 'blob';
      xhr.onload = function(){
        var fr = new FileReader();
      
        fr.onload = function(){
          callback(this.result);
        };
      
        fr.readAsDataURL(xhr.response); // async call
      };
      
      xhr.send();
    }

    toDataURL('https://cors-anywhere.herokuapp.com/https://firebasestorage.googleapis.com/v0/b/drawing-board-e34b6.appspot.com/o/mountains.jpg?alt=media&token=bd6a0a95-d47e-40f3-9470-ff48531e33d0', function(dataURL){
      var result = document.createElement('img')
      result.src = dataURL;
      // console.log(dataURL);
    // now just to show that passing to a canvas doesn't hold the same results
    var canvas = document.getElementById('canvas');
      canvas.getContext('2d').drawImage(result, 0,0);
    });
  },
  data() {
    return {
      message: 'Hello Vue!',
      vueCanvas:null,
      painting:false,
      canvas:null,
      ctx:null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#canvas {
    border: 3px solid black;
}
</style>
