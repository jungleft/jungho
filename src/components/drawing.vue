<template>
  <div class="hello" :class="{dark:dark}">
    <canvas id="canvas" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    toBlob() {
      var canvas = document.getElementById('canvas');
      canvas.toBlob(function(blob){
        var image = new Image();
        image.src = blob;
        var storageRef = '' //firebase
        storageRef.child('images/' + "apple").put(blob);
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
