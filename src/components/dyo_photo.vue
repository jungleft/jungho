<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo" :class="{dark: dark}">
    <!-- 畫布元素，綁定滑鼠和觸控事件 -->
    <canvas id="canvas"></canvas>
    
    <!-- 控制面板 -->
    <div id="c">
      <input id="file" type="file" @change="uploadFile" accept="image/*">
    </div>
  </div>
</template>

<script>

import { db } from '../db.js';
import Pica from 'pica';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: Boolean,
  },
  firestore: {
    photos: db.collection('photo'),
  },
  metaInfo: {
    title: '上傳照片',
  },
  data() {
    return {
      photos: [],
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#4060BF',
    };
  },
  methods: {
    uploadFile(e) {
      const file = e.target.files[0];
      
      // 檢查是否有選擇檔案
      if (!file) {
        return;
      }

      // 檢查檔案格式
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
      if (!allowedTypes.includes(file.type)) {
        window.alert('不支援的檔案格式！請上傳 JPG、PNG、GIF圖片檔案。');
        return;
      }

      const reader = new FileReader();
      
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // 計定最大尺寸限制
          const MAX_DIMENSION = 400;
          let targetWidth = img.width;
          let targetHeight = img.height;
          
          // 如果圖片尺寸超過限制，等比例縮小
          if (img.width > MAX_DIMENSION || img.height > MAX_DIMENSION) {
            if (img.width > img.height) {
              targetWidth = MAX_DIMENSION;
              targetHeight = Math.round(img.height * (MAX_DIMENSION / img.width));
            } else {
              targetHeight = MAX_DIMENSION;
              targetWidth = Math.round(img.width * (MAX_DIMENSION / img.height));
            }
          }
          
          // 設置 canvas 尺寸為目標尺寸
          this.canvas.width = targetWidth;
          this.canvas.height = targetHeight;
          
          // 使用 pica 處理圖片
          const pica = new Pica({
            features: ['js', 'wasm', 'cib'],
          });
          
          // 建立臨時 canvas 並設置為原始尺寸
          const tempCanvas = document.createElement('canvas');
          tempCanvas.width = targetWidth;
          tempCanvas.height = targetHeight;
          const tempCtx = tempCanvas.getContext('2d');
          tempCtx.drawImage(img, 0, 0, targetWidth, targetHeight);
          
          pica.resize(tempCanvas, this.canvas, {
            quality: 3,
            alpha: true,
            unsharpAmount: 80,
            unsharpRadius: 0.6,
            unsharpThreshold: 2
          })
          .then(() => {
            // 使用較高品質的 JPEG 輸出
            const dataURL = this.canvas.toDataURL('image/jpeg', 0.95);
            
            this.$firestoreRefs.photos.add({
              url: file.name,
              src: dataURL,
            });
            window.alert('上傳成功');
          })
          .catch(err => {
            console.error('圖片處理錯誤:', err);
            window.alert('圖片處理失敗，請重試');
          });
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    },
  },
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dyo {
  width: 100%;
  height: 100vh;
}

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
  bottom: 1em;
  right: 1em;
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

#file {
  font-size: 1.2em;
  cursor: pointer;
}

</style>