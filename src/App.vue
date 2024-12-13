<template>
  <div id="app">
    <!-- 主要內容區域，根據start狀態顯示，包含各種視覺效果class -->
    <div id="main" v-if="start" :class="{'hue-rotate': rot, blur: blur, invert: iv}">
      <!-- 導航欄，可切換深色模式 -->
      <div id="nav" :class="{dark:dark}">
        <!-- 頂部大圖輪播 -->
        <!--<img class="big" :src="'./img/'+name[idx]">-->
        <!-- 導航連結區域 -->
        <router-link to="/"><img class="small" src="./assets/home.png" alt="首頁"></router-link> 
        <!--
        <router-link to="/contact"><img id="info" class="small" src="./assets/info.png" alt="聯絡資訊"></router-link>
        <router-link to="/project"><img class="small" src="./assets/works.png" alt="作品集"></router-link> -->
        
       
        <router-link class="large-font" to="/drawing" v-show="in_dyo()">塗鴉+</router-link>
        <router-link class="large-font" to="/dyo_photo" v-show="in_dyo()">照片+</router-link>
        <router-link class="large-font" to="/dyo_text" v-show="in_dyo()">文字+</router-link>
        <router-link class="large-font" to="/gallary" v-show="in_dyo()">相簿→
        </router-link>

        <router-link class="large-font" to="/dyo" v-show="!in_dyo()">投稿→</router-link>
        <!--<router-link to="/gallary" v-show="!in_dyo()"><img id="gallary" class="big" src="./assets/gallary.png" alt="相簿"></router-link>-->
        <!--<router-link to="/shop"><img id="shop" class="small" src="./assets/shop.png" alt="商店"></router-link>-->
        <a @click="reset()" v-show="!in_dyo()">
          <!-- 不同效果狀態下顯示的圖示 -->
          <!--<img class="big" v-show="!blur && !dark && !iv && !rot" src="./assets/eyes.png">
          <img class="big" v-show="!blur && dark && !iv && !rot" src="./assets/bw.png">
          <img class="big" v-show="!blur && !dark && !iv && rot" src="./assets/rotate.png">
          <img class="big" v-show="blur && !dark && !iv && !rot" src="./assets/bl.png">
          <img class="big" v-show="!blur && !dark && iv && !rot" src="./assets/iv.png">--></a>
      </div>
      <!-- 視覺效果切換按鈕區域 -->
        
      <!-- 路由視圖區域 -->
      <router-view :dark="dark" :pets="pets"/>
    </div>
    <!-- 效果選擇介面 -->
    <div class="flex" v-else>
      <!-- 各種視覺效果選項 -->
      <a @click="normal()" @mouseover= "focus='normal'"><img class="small" title="normal" src="./assets/normal.png"><span class="l" v-show="focus == 'normal'"><br/>一般</span></a>
      <a @click="bw()" @mouseover="focus='bw'"><img class="small" title="grayscale" src="./assets/bw.png"><span class="l" v-show="focus == 'bw'"><br/>灰階</span></a>
      <a @click="rotate()" @mouseover="focus='rotate'"><img class="small" title="rotate" src="./assets/rotate.png"><span class="l" v-show="focus == 'rotate'"><br/>旋轉</span></a>
      <a @click="bl()" @mouseover="focus='bl'"><img class="small" title="blur" src="./assets/bl.png"><span class="l" v-show="focus == 'bl'"><br/>模糊</span></a>
      <a @click="invert()" @mouseover="focus='invert'"><img class="small" title="invert" src="./assets/iv.png"><span class="l" v-show="focus == 'invert'"><br/>反轉</span></a>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'App',
  data() {
    return {
      dark: false,      // 深色模式開關
      name: ['cjh.png','jh.png'],  // 輪播圖片名稱陣列
      idx: 0,           // 當前顯示圖片索引
      rot: false,       // 色相旋轉效果開關
      blur: false,      // 模糊效果開關
      start: true,      // 是否顯示主畫面
      iv: false,        // 反轉效果開關
      focus: 'iv',  // 當前聚焦的效果選項
      pets: [           // 商品資料陣列
        { i: 1, n: '01', price: 1800, src: './img/rug/t01.jpeg', 
        imgs: ['./img/rug/t01.jpeg','./img/rug/t02.jpeg', './img/rug/t03.jpeg', './img/rug/t04.jpeg', './img/rug/t05.jpeg', './img/rug/t06.jpg'] },
        { i: 2, n: '02', price: 200, src: './img/sticker/s01.jpeg', 
        imgs: ['./img/sticker/s01.jpeg','./img/sticker/s02.jpeg', './img/sticker/s03.jpeg', './img/sticker/s04.jpeg', './img/sticker/s05.jpeg', './img/sticker/s06.jpg'] },
        { i: 3, n: '03', price: 117, src: './img/glass/g01.jpeg', 
        imgs: ['./img/glass/g01.jpeg','./img/glass/g02.jpeg', './img/glass/g03.jpeg', './img/glass/g04.jpeg', './img/glass/g05.jpeg', './img/glass/g06.jpeg'] },
      ]
    }
  },
  methods: {
    in_dyo() {
      return this.$route.path === '/dyo' ||
       this.$route.path === '/dyo_photo' || 
       this.$route.path === '/dyo_text' || 
       this.$route.path === '/drawing'
    },
    change() {
      this.idx++
      if (this.idx == 2) {
        this.idx = 0
      }
    },
    reset() {
      this.blur = false;
      this.dark = false;
      this.rot = false;
      this.start = false;
      this.iv = false;
    },
    normal() {
      this.start = true
    },
    bw() {
      this.dark = true
      this.start = true
    },
    rotate() {
      this.rot = true
      this.start = true
    },
    bl() {
      this.blur = true
      this.start = true
    },
    invert() {
      this.iv = true
      this.start = true
    }
  },
  mounted() {
    console.log(this.$router.currentRoute.path)
    if (this.$router.currentRoute.path == '/gallary') {
      this.start = true;
    }
    setInterval(this.change, 1500)
  }
}
</script>

<style>

body {
  cursor: crosshair;
  background-color: #000;
}

.hello {
}

a {
  cursor: cell !important; 
}

.l {
  font-size: 16px;
}

#d {
  position: fixed;
  top: 85vh;
  left: 1em;
  z-index: 9;
}

#d.dark {
  color: white;
}

#main {
  background-color: #000;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 28px;
}

@media screen and (max-width: 600px) {
  .flex {
    height: auto;
    flex-direction: column;
  }
}

.large-font {
  font-size: 1.2em;
  line-height: 2em;
}

.flex a {
  margin: 1em 2em;
}


.blur {
  filter:blur(3px);
  -webkit-filter:blur(3px);
}

.hue-rotate {
  filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
}

.invert {
  filter:invert(1);
  -webkit-filter:invert(1);
}

.invert img.small, .invert img.big {
  filter:invert(1);
  -webkit-filter:invert(1);
}

h1 {
 font-family: "Courier New", "LiSong Pro";
}

p {
  font-size: 0.9em;

}

#app {
  font-family: "Courier New", "LiSong Pro", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  cursor: pointer;
}

#nav {
  text-align: left;
  position: fixed;
  z-index: 10;
  top:0;
  left:0;
  padding: 30px;
  background-color: rgb(110, 252, 40) !important; /* 這行之後可以拿掉 */
}

@media screen and (max-width: 600px) {
  #nav {
    padding: 10px;
  }
}

#nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
  font-family: "Courier New";
  padding: 0;
}

#nav.dark img {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

#d.dark img {
  -webkit-filter: invert(100%);
  filter: invert(100%);
}

#nav a.router-link-exact-active {
  color: #F5B041;
}
.small{
  height: 2em;
}
#info{
  height: 1.6em;
}
#dyo{
  height: 2.3em;
}
#shop{
  padding-top: 1em;
  width: 50%;
  height: 3em;
}
#gallary{
  position: relative;
  left: -2em;
}

.big{
  height: 4em;
}

button {
  font-size: 26px;
}

@media screen and (min-width: 751px) {
  #cst.thin-only, .thin-only {
    display: none !important;
  }
}

@media screen and (max-width: 750px) {
  #cs.fat-only, .fat-only {
    display: none !important;
  }
}

@media screen and (max-width: 420px) {

  .small{
    height: 1.6em;
  }
  #info{
    height: 1.6em;
  }
  #dyo, #dyo_photo, #dyo_text {
    height: 1.6em;
  }
  .big{
    height: 2em;
  }
}

</style>
