<template>
  <div class="hello" :class="{dark:dark}">
    <p><router-link to="/project">𓆏</router-link></p>

    <a @click="use(items[idx] && items[idx].src || items[idx])">
      <img :src="items[idx] && items[idx].src || items[idx]" :style="{left: left + 'px', top: top + 'px'}">
    </a>
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
      localStorage.idx = this.idx
      if (this.idx === this.items.length) {
        this.idx = 0
      }
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
    }
  },
  // 元件掛載時啟動移動動畫
  mounted() {
    if (localStorage.idx) {
      this.idx = localStorage.idx
    }
    setInterval(this.move, 15)     // 每15毫秒執行一次move方法
  },
  // 元件的數據
  data() {
    return {
      left: 0,
      top: 0,
      dir: 1,
      dir2: 1,
      idx: 0,
      items: ['https://jungleft.github.io/jungho//img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_0.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_1.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_2.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_3.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_4.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_5.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_6.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_7.jpg']
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
</style>
