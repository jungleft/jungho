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
      const reader = new FileReader();
      
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          // 計算適當的尺寸，保持原始比例
          const maxDimension = 400;
          let targetWidth, targetHeight;
          
          if (img.width >= img.height) {
            // 寬圖片
            if (img.width > maxDimension) {
              targetWidth = maxDimension;
              targetHeight = Math.round((maxDimension * img.height) / img.width);
            } else {
              // 保持原始尺寸
              targetWidth = img.width;
              targetHeight = img.height;
            }
          } else {
            // 長圖片
            if (img.height > maxDimension) {
              targetHeight = maxDimension;
              targetWidth = Math.round((maxDimension * img.width) / img.height);
            } else {
              // 保持原始尺寸
              targetWidth = img.width;
              targetHeight = img.height;
            }
          }
          
          // 設定 canvas 尺寸
          this.canvas.width = targetWidth;
          this.canvas.height = targetHeight;
          
          // 使用 pica 進行圖片縮放
          const pica = new Pica();
          pica.resize(img, this.canvas, {
            width: targetWidth,
            height: targetHeight,
          })
          .then(() => {
            // 將 canvas 轉換為 base64 字串
            const dataURL = this.canvas.toDataURL('image/jpeg');
            
            // 儲存 base64 字串到 Firestore
            this.$firestoreRefs.photos.add({
              url: file.name,
              src: dataURL,
            });
          });
        };
        img.src = event.target.result;
      };
      
      reader.readAsDataURL(file);

      window.alert('上傳成功');
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