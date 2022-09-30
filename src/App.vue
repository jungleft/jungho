<template>
  <div id="app">
    <div id="main" v-if="start" :class="{'hue-rotate': rot, blur: blur, invert: iv}">
      <div id="nav" :class="{dark:dark}">
        <img class="big" :src="'./img/'+name[idx]">
        <router-link to="/"><img class="small" src="./assets/home.png" alt="home"></router-link> 
        <router-link to="/contact"><img id="info" class="small" src="./assets/info.png" alt="info"></router-link>
        <router-link to="/project"><img class="small" src="./assets/works.png" alt="works"></router-link>
        <router-link to="/drawing"><img id="dyo" class="small" src="./assets/dyo.png" alt="dyo"></router-link>
      </div>
      <div id="d" :class="{dark:dark}">
        <a @click="reset()">
          <img class="big" v-show="!blur && !dark && !iv && !rot" src="./assets/eyes.png">
          <img class="big" v-show="!blur && dark && !iv && !rot" src="./assets/bw.png">
          <img class="big" v-show="!blur && !dark && !iv && rot" src="./assets/rotate.png">
          <img class="big" v-show="blur && !dark && !iv && !rot" src="./assets/bl.png">
          <img class="big" v-show="!blur && !dark && iv && !rot" src="./assets/iv.png"></a>
      </div>
      <router-view :dark="dark"/>
    </div>
    <div class="flex" v-else>
      <a @click="normal()" @mouseover= "focus='normal'"><img class="small" title="normal" src="./assets/normal.png"><span class="l" v-show="focus == 'normal'"><br/>Normal</span></a>
      <a @click="bw()" @mouseover="focus='bw'"><img class="small" title="grayscale" src="./assets/bw.png"><span class="l" v-show="focus == 'bw'"><br/>Grayscale</span></a>
      <a @click="rotate()" @mouseover="focus='rotate'"><img class="small" title="rotate" src="./assets/rotate.png"><span class="l" v-show="focus == 'rotate'"><br/>Rotate</span></a>
      <a @click="bl()" @mouseover="focus='bl'"><img class="small" title="blur" src="./assets/bl.png"><span class="l" v-show="focus == 'bl'"><br/>Blur</span></a>
      <a @click="invert()" @mouseover="focus='invert'"><img class="small" title="invert" src="./assets/iv.png"><span class="l" v-show="focus == 'invert'"><br/>Invert</span></a>
    </div>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'App',
  data() {
    return {
      dark: false,
      name: ['cjh.png','jh.png'],
      idx: 0,
      rot: false,
      blur: false,
      start: false,
      iv: false,
      focus: null
    }
  },
  methods: {
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
}

.hello {
  background-image: url('');
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
  background-color: white;
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
  z-index: 9;
  top:0;
  left:0;
  padding: 30px;
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
.big{
  height: 4em;
}

button {
  font-size: 26px;
}

@media screen and (max-width: 420px) {

  .small{
    height: 1em;
  }
  #info{
    height: .8em;
  }
  #dyo{
    height: 1.6em;
  }
  .big{
    height: 2em;
  }
}

</style>
