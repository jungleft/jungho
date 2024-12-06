<template>
  <div class="hello" :class="{dark:dark}">


    <a v-for="(item, i) in items" :key="item.src" @click="use(item)">
      <img class="img" :src="item.src" :style="{left: left_array[i] + 'px', top: top_array[i] + 'px'}">
    </a>

    <div class="text-box" v-for="(item, i) in texts" :key="item.id" :style="{left: left_text_array[i] + 'px', top: top_text_array[i] + 'px'}">
      <p class="my-text">{{ item.content }}</p>
    </div>

    <div class="photo-box" v-for="(item, i) in photos" :key="item.id" :style="{left: left_photo_array[i] + 'px', top: top_photo_array[i] + 'px'}">
      <img class="photo" :src="item.src">
    </div>

    <!-- 
    <a @click="use(items[idx] && items[idx].src || items[idx])">
      <img :src="items[idx] && items[idx].src || items[idx]" :style="{left: left + 'px', top: top + 'px'}">
    </a> -->

  </div>
</template>

<script>
  import { db } from '../db';

export default {
  name: 'HelloWorld',
  // 元件接收的屬性
  props: {
    msg: String,
    dark: Boolean,
  },
  // Firestore 數據綁定
  firestore: {
    items: db.collection('img'),
    texts: db.collection('text'),
    photos: db.collection('photo'),
  },
  methods: {
    // 使用選中的圖片並導航到繪圖頁面
    use(s) {
      localStorage.src = s;
      this.$router.push('/drawing')
    },
    // 切換到下一張圖片
    next() {
      this.idx = Number(this.idx) + 1
      if (this.idx >= this.items.length) {
        this.idx = 0
      }
      localStorage.idx = this.idx
    },
    next_text() {
      this.idx_text = Number(this.idx_text) + 1
      if (this.idx_text >= this.texts.length) {
        this.idx_text = 0
      }
      localStorage.idx_text = this.idx_text
    },
    next_photo() {
      this.idx_photo = Number(this.idx_photo) + 1
      if (this.idx_photo >= this.photos.length) {
        this.idx_photo = 0
      }
      localStorage.idx_photo = this.idx_photo
    },
    // 控制圖片移動的方法
    move() {
      this.top += 1 * this.dir2    // 垂直移動
      this.left += 1 * this.dir    // 水平移動
      
      // 當圖片碰到左右邊界時
      if(this.left == window.innerWidth - 300 || this.left == 0) {
        this.dir *= -1             // 改變水平移動方向
        this.next()                // 切換下一張圖片
      }
      // 當圖片碰到上下邊界時
      if(this.top == window.innerHeight - 200 || this.top == 0) {
        this.dir2 *= -1            // 改變垂直移動方向
        this.next()                // 切換下一張圖片
      }
    },
    move_all() {

      this.left_array = this.left_array.map((item, i) => item + 1 * this.dir1_array[i])
      this.top_array = this.top_array.map((item, i) => item + 1 * this.dir2_array[i])

      this.left_text_array = this.left_text_array.map((item, i) => item + 1 * this.dir1_text_array[i])
      this.top_text_array = this.top_text_array.map((item, i) => item + 1 * this.dir2_text_array[i])

      this.left_photo_array = this.left_photo_array.map((item, i) => item + 1 * this.dir1_photo_array[i])
      this.top_photo_array = this.top_photo_array.map((item, i) => item + 1 * this.dir2_photo_array[i])

      // 當圖片碰到左右邊界時
      const imgWidth = window.innerWidth <= 768 ? 150 : 250;

      for (let i = 0; i < this.left_array.length; i++) {
        if(this.left_array[i] == window.innerWidth - imgWidth || this.left_array[i] == 0) {
          this.dir1_array[i]  *= -1             // 改變水平移動方向
          this.next()                // 切換下一張圖片
        } 
      }

      for (let i = 0; i < this.top_array.length; i++) {
        // 當圖片碰到上下邊界時
        if(this.top_array[i] == window.innerHeight - 200 || this.top_array[i] == 0) {
          this.dir2_array[i] *= -1            // 改變垂直移動方向
          this.next()                // 切換下一張圖片
        }
      }

      // 當文字碰到左右邊界時
      const font_size = window.innerWidth <= 768 ? 14 : 18;
      for (let i = 0; i < this.left_text_array.length; i++) {
        if (!this.texts[i]) continue;
        let textWidth = this.texts[i].content.length * font_size * 1.5;
        if(this.left_text_array[i] >= window.innerWidth - textWidth || this.left_text_array[i] <= 0) {
          this.dir1_text_array[i] *= -1
          this.next_text()
        }
      }

      // 當文字碰到上下邊界時
      for (let i = 0; i < this.top_text_array.length; i++) {
        if(this.top_text_array[i] >= window.innerHeight - font_size * 2 || this.top_text_array[i] <= 0) {
          this.dir2_text_array[i] *= -1
          this.next_text()
        }
      }

      // 當照片碰到左右邊界時
      const photoWidth = window.innerWidth <= 768 ? 100 : 150;

      for (let i = 0; i < this.left_photo_array.length; i++) {
        if(this.left_photo_array[i] >= window.innerWidth - photoWidth || this.left_photo_array[i] <= 0) {
          this.dir1_photo_array[i] *= -1
          this.next_photo()
        }
      }

      for (let i = 0; i < this.top_photo_array.length; i++) {
        // 獲取當前照片元素
        const photoElement = document.querySelectorAll('.photo')[i];
        if (!photoElement) continue;
        
        // 等待圖片載入完成後再取得實際高度
        if (!photoElement.complete) {
          photoElement.onload = () => {
            const photoBox = photoElement.parentElement;
            if (photoBox) {
              photoBox.style.height = photoElement.offsetHeight + 'px';
            }
          }
        } else {
          const photoBox = photoElement.parentElement;
          if (photoBox) {
            photoBox.style.height = photoElement.offsetHeight + 'px';
          }
        }
        
        const photoHeight = photoElement.offsetHeight;
        if(this.top_photo_array[i] >= window.innerHeight - photoHeight || this.top_photo_array[i] <= 0) {
          this.dir2_photo_array[i] *= -1;
          this.next_photo();
        }
      }
    }
  },
  watch: {
    photos: function(newVal) {
      console.log(newVal)
      this.left_photo_array = new Array(newVal.length).fill(0).map(() => 
        Math.floor(Math.random() * (window.innerWidth - 300)))
      this.top_photo_array = new Array(newVal.length).fill(0).map(() => 
        Math.floor(Math.random() * (window.innerHeight - 200)))
      this.dir1_photo_array = new Array(newVal.length).fill(1)
      this.dir2_photo_array = new Array(newVal.length).fill(1)
    },
    items: function(newVal) {
      console.log(newVal)
      this.left_array = new Array(newVal.length).fill(0).map(() => 
        Math.floor(Math.random() * (window.innerWidth - 300)))
      this.top_array = new Array(newVal.length).fill(0).map(() => 
        Math.floor(Math.random() * (window.innerHeight - 200)))
      this.dir1_array = new Array(newVal.length).fill(1)
      this.dir2_array = new Array(newVal.length).fill(1)
    },
    texts: function(newVal) {
      console.log(newVal)
      // 使用隨機值初始化文字位置陣列
      this.left_text_array = new Array(newVal.length).fill(0).map(() => 
        Math.floor(Math.random() * (window.innerWidth - 200)))
      this.top_text_array = new Array(newVal.length).fill(0).map(() => 
        Math.floor(Math.random() * (window.innerHeight - 100)))
      this.dir1_text_array = new Array(newVal.length).fill(1)
      this.dir2_text_array = new Array(newVal.length).fill(1)
    }
  },
  // 元件掛載時啟動移動動畫
  mounted() {
    if (localStorage.idx) {
      this.idx = localStorage.idx
    }
    setInterval(this.move_all, 15)     // 每15毫秒執行一次move方法
  },
  // 元件的數據
  data() {
    return {
      left_array: [0, 0, 0, 0, 0, 0, 0, 0],
      top_array: [0, 0, 0, 0, 0, 0, 0, 0],
      dir1_array: [1, 1, 1, 1, 1, 1, 1, 1],
      dir2_array: [1, 1, 1, 1, 1, 1, 1, 1],
      left_photo_array: [0, 0, 0, 0, 0, 0, 0, 0],
      top_photo_array: [0, 0, 0, 0, 0, 0, 0, 0],
      dir1_photo_array: [1, 1, 1, 1, 1, 1, 1, 1],
      dir2_photo_array: [1, 1, 1, 1, 1, 1, 1, 1],
      left: 0,
      top: 0,
      dir: 1,
      dir2: 1,
      idx: 0,
      idx_text: 0,
      texts: [],
      photos: [],
      items: ['https://jungleft.github.io/jungho//img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_0.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_1.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_2.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_3.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_4.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_5.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_6.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_7.jpg'],
      left_text_array: [0, 0, 0, 0, 0, 0, 0, 0],
      top_text_array: [0, 0, 0, 0, 0, 0, 0, 0],
      dir1_text_array: [1, 1, 1, 1, 1, 1, 1, 1],
      dir2_text_array: [1, 1, 1, 1, 1, 1, 1, 1],
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.hello {
  padding-top: 4em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  background-color: white;
}

.dark {
  filter: grayscale(100%);
  background-color: black;
}

h1 {
  color: #EAC257;
}
p {
  color: #9CDA68;
  margin-top: 25em;
  margin-left: 50em;
}
img {
  width: 250px;
  position: fixed;
  z-index: -9;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #229954;
}

a:visited {
  color: #229954;
}

.my-text {
  font-size: 18px;
  color: #229954;
  margin: 0;
  text-align: center;
}

.text-box {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 6;
  width: fit-content;
  overflow-wrap: break-word;
  word-wrap: break-word;
  border-radius: 5px;
  padding: 10px;
}

.photo-box {
  width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 6;
}

.photo {
  width: 150px;
  height: auto;
  border-radius: 5px;
  opacity: 0.5;
}


@media (max-width: 768px) {
  .my-text {
    font-size: 14px;
  }
  .img {
    max-width: 150px !important;
  }
  .photo-box {
    width: 100px;
  }
  .photo {
    width: 100px;
  }
}
</style>
