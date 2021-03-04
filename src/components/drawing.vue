<template>
  <div class="hello" :class="{dark: dark}">
    <canvas id="canvas" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" @touchstart="startTouchPainting" @touchmove="drawTouch" @touchend="finishedPainting"></canvas>
    <div id ="c">
      <h3> draw your own!</h3>
      <color-picker v-model="color"></color-picker>
      <p>
          Color:
          <input v-model="color" type="text">
      </p>
    </div>
  </div>
</template>

<script>

import ColorPicker from 'vue-color-picker-wheel';
import firebase from 'firebase';
// import db from '../db'

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: String,
  },
  metaInfo: {
    title: '圖鴨板',
  },
  components: {
    ColorPicker,
  },
  methods: {
    toBlob() {
      const storageRef = firebase.storage().ref();
      const mountainsRef = storageRef.child('mountains.jpg');
      const canvas = document.getElementById('canvas');
      canvas.toBlob((blob) => {
        const image = new Image();
        image.src = blob;
        image.setAttribute('crossorigin', 'anonymous');
        mountainsRef.put(blob).then(() => {
          console.log('Uploaded a blob or file!');
        });
      });
    },
    startPainting(e) {
      this.painting = true;
      console.log(this.painting);
      this.draw(e);
    },
    startTouchPainting(e) {
      e.preventDefault();
      this.painting = true;
      console.log(this.painting);
      this.drawTouch(e);
    },
    finishedPainting() {
      this.painting = false;
      console.log(this.painting);
      this.ctx.beginPath();
      this.toBlob();
    },
    drawTouch(e) {
      e.preventDefault();
      console.log(e);
      if (!this.painting) return;
      this.ctx.lineWidth = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.lineCap = 'round';
      this.ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    },
    draw(e) {
      if (!this.painting) return;
      this.ctx.lineWidth = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.lineCap = 'round';
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY);
    },
  },
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    // Resize canvas
    this.canvas.height = window.innerHeight;
    this.canvas.width = window.innerWidth;

    function toDataURL(url, callback) {
      const xhr = new XMLHttpRequest();
      xhr.open('get', url);
      xhr.responseType = 'blob';
      xhr.onload = () => {
        const fr = new FileReader();
        // eslint-disable-next-line
        fr.onload = function () {
          callback(this.result);
        };
        fr.readAsDataURL(xhr.response); // async call
      };
      xhr.send();
    }
    toDataURL('https://firebasestorage.googleapis.com/v0/b/drawing-board-e34b6.appspot.com/o/mountains.jpg?alt=media&token=4d2ab532-d69a-42e5-889b-86dd76d14371', (dataURL) => {
      const result = new Image();
      result.src = dataURL;
      result.onload = () => {
        const canvas = document.getElementById('canvas');
        canvas.getContext('2d').drawImage(result, 0, 0);
      };
    });
    // console.log(dataURL);
    // now just to show that passing to a canvas doesn't hold the same results
  },
  data() {
    return {
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#000000',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#canvas {
   
}

#c {
  position: fixed;
  bottom: 0;
  right: 0;
  padding-right: 1em;
}

</style>