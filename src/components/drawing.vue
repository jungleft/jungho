<template>
  <div class="dyo" :class="{dark: dark}">
    <canvas id="canvas" @mousedown="startPainting" @mouseup="finishedPainting" @mousemove="draw" @touchstart="startTouchPainting" @touchmove="drawTouch" @touchend="finishedPainting"></canvas>
    <div id ="c">
      <h3> draw your own!</h3>
      <a id ="save" @click="save()">SAVE</a>
      <a id ="clear" @click="clear()">ERASE</a>
      <div class="small">
        <color-picker :width="150" :height="150" v-model="color"></color-picker>
      </div>
    </div>
     <router-link to="/gallary" id="g"><img id="gallary" class="small" src="../assets/gallary.png" alt="gallary"></router-link>
  </div>
</template>

<script>

import ColorPicker from 'vue-color-picker-wheel';
import firebase from 'firebase';
import { db } from '../db.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: Boolean,
  },
  firestore: {
    test: db.collection('img'),
  },
  metaInfo: {
    title: '圖鴨板',
  },
  components: {
    ColorPicker,
  },
  methods: {
    del(i) {
      db.collection('img').onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc, idx) => {
          console.log(idx);
          if (idx === i) {
            db.collection('img').doc(doc.id).delete().catch((error) => {
              console.log(error);
            });
          }
        });
      });
    },
    use(s) {
      const canvas = document.getElementById('canvas');
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.finishedPainting();
      const result = new Image();
      result.src = s;
      canvas.getContext('2d').drawImage(result, 0, 0);
    },
    save() {
      const canvas = document.getElementById('canvas');
      this.$firestoreRefs.test.add({src: canvas.toDataURL()})
      this.$router.push('/gallary');
    },
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
    clear() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.finishedPainting();
    },
  },
  mounted() {

    var use = this.use
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
        if (localStorage.src) {
          use(localStorage.src)
        }
      };
    });
    if (localStorage.src) {
      this.use(localStorage.src)
    }
    // console.log(dataURL);
    // now just to show that passing to a canvas doesn't hold the same results
  },
  data() {
    return {
      test: [],
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

canvas {
  cursor: se-resize;
}

#g {
  position: fixed;
  top:3em;
  right:2em;
}

#gallary {
  height: 3.5em;
}

#c {
  position: fixed;
  bottom: 110px;
  right: 2em;
  padding-right: 1em;
}

.dark {
  filter: grayscale(100%);
  background-color: black;
}

a#save {
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  background-color: #F9E79F;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

a#clear {
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  background-color: #D6EAF8;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

.small {
  height: 150px;
}

</style>