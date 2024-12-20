<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo" :class="{dark: dark}">
    <!-- 畫布元素，綁定滑鼠和觸控事件 -->
    <canvas id="canvas" 
      @mousedown="startPainting" 
      @mouseup="finishedPainting" 
      @mousemove="draw"
      @touchstart="startTouchPainting" 
      @touchmove="drawTouch" 
      @touchend="finishedPainting">
    </canvas>
    
    <!-- 控制面板 -->
    <div id="c">
      <!--<h3>draw your own!</h3> -->
      <a id="save" @click="save()">SAVE</a>
      <a id="clear" @click="clear()">ERASE</a>
      <!-- 顏色選擇器 -->
      <div class="small">
        <color-picker id="color-picker" :width="150" :height="150" v-model="color"></color-picker>
      </div>
    </div>
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
  data() {
    return {
      test: [],
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#4060BF',
    };
  },
  methods: {
    // 刪除圖片
    del(i) {
      // 監聽資料庫變化並刪除指定索引的圖片
      db.collection('img').onSnapshot((snapshot) => {
        snapshot.docs.forEach((doc, idx) => {
          if (idx === i) {
            db.collection('img').doc(doc.id).delete()
          }
        });
      });
    },

    // 載入已存在的圖片到畫布
    use(s) {
      const canvas = document.getElementById('canvas');
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.finishedPainting();
      const result = new Image();
      result.src = s;
      canvas.getContext('2d').drawImage(result, 0, 0);
    },

    // 儲存畫布內容到 Firebase
    save() {
      const canvas = document.getElementById('canvas');
      this.$firestoreRefs.test.add({src: canvas.toDataURL()})
      this.$router.push('/');
    },

    // 將畫布內容轉換為 Blob 並上傳到 Firebase Storage
    toBlob() {
      const storageRef = firebase.storage().ref();
      const mountainsRef = storageRef.child('mountains.jpg');
      const canvas = document.getElementById('canvas');
      canvas.toBlob((blob) => {
        const image = new Image();
        image.src = blob;
        image.setAttribute('crossorigin', 'anonymous');
        mountainsRef.put(blob);
      });
    },

    // 開始繪畫（滑鼠）
    startPainting(e) {
      this.painting = true;
      this.draw(e);
    },

    // 開始繪畫（觸控）
    startTouchPainting(e) {
      e.preventDefault();
      this.painting = true;
      this.drawTouch(e);
    },

    // 結束繪畫
    finishedPainting() {
      this.painting = false;
      this.ctx.beginPath();
      this.toBlob();
    },

    // 觸控繪畫處理
    drawTouch(e) {
      e.preventDefault();
      if (!this.painting) return;
      // 設定繪畫樣式
      this.ctx.lineWidth = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.lineCap = 'round';
      // 繪製線條
      this.ctx.lineTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    },

    // 滑鼠繪畫處理
    draw(e) {
      if (!this.painting) return;
      // 設定繪畫樣式
      this.ctx.lineWidth = 10;
      this.ctx.fillStyle = this.color;
      this.ctx.strokeStyle = this.color;
      this.ctx.lineCap = 'round';
      // 繪製線條
      this.ctx.lineTo(e.clientX, e.clientY);
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.moveTo(e.clientX, e.clientY);
    },

    // 清除畫布
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

    toDataURL('https://firebasestorage.googleapis.com/v0/b/drawing-board-e34b6.appspot.com/o/mountains.jpg?alt=media&token=4d2ab532-d69a-42e5-889b-86dd76d14371', 
      (dataURL) => {
        const result = new Image();
        result.src = dataURL;
        result.onload = () => {
          const canvas = document.getElementById('canvas');
          canvas.getContext('2d').drawImage(result, 0, 0);
          if (localStorage.src) {
            use(localStorage.src)
          }
        }
      }
    );
    if (localStorage.src) {
      this.use(localStorage.src)
    }
    // console.log(dataURL);
    // now just to show that passing to a canvas doesn't hold the same results
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

canvas {
  position: relative;
  cursor: se-resize;
  z-index: 1;
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
  z-index: 2;
  bottom: 0;
  right: 0;
}

#color-picker {
  transform: scale(0.8);
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