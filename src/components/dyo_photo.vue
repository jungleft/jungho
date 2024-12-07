<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo" :class="{dark: dark}">
    <!-- 畫布元素，綁定滑鼠和觸控事件 -->
    <canvas id="canvas"></canvas>
    
    <!-- 控制面板 -->
    <div id="c">
      <input id="file" type="file" @change="uploadFile" accept="image/*, .heic, .heif, .HEIC, .HEIF">
    </div>
  </div>
</template>

<script>

import { db } from '../db.js';
import Pica from 'pica';
import heic2any from 'heic2any';

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
    async uploadFile(e) {
      const file = e.target.files[0];
      
      if (!file) {
        return;
      }

      // 更新檔案類型檢查邏輯
      const isHeic = (file.type === '' || file.type === 'image/heic' || 
                     file.type === 'image/heif') && 
                     (file.name.toLowerCase().endsWith('.heic') || 
                     file.name.toLowerCase().endsWith('.heif'));

      try {
        let processedFile = file;
        // 只在確認為 HEIC/HEIF 格式時進行轉換
        if (isHeic) {
          console.log('處理 HEIC 檔案:', file.name);
          try {
            const blob = await heic2any({
              blob: file,
              toType: 'image/jpeg',
              quality: 0.95
            });
            
            const resultBlob = Array.isArray(blob) ? blob[0] : blob;
            processedFile = new File([resultBlob], file.name.replace(/\.(heic|HEIC|heif|HEIF)$/, '.jpg'), {
              type: 'image/jpeg'
            });
          } catch (heicError) {
            // 如果轉換失敗，檢查是否已經是 JPEG 格式
            if (heicError.message.includes('already browser readable')) {
              console.log('檔案已經是可讀格式，繼續處理');
              processedFile = file;
            } else {
              console.error('HEIC 轉換錯誤:', heicError);
              window.alert('HEIC 圖片轉換失敗，請重試');
              return;
            }
          }
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
        reader.readAsDataURL(processedFile);
      } catch (error) {
        console.error('圖片處理錯誤:', error);
        window.alert('圖片處理失敗，請重試');
      }
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