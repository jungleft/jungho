<template>
  <div id="app">
    <div v-if="start" :class="{'hue-rotate': rot}">
      <div id="nav" :class="{dark:dark}">
        <img class="big" :src="'./img/'+name[idx]">
        <router-link to="/"><img class="small" src="./assets/home.png"></router-link> 
        <router-link to="/contact"><img id="info" class="small" src="./assets/info.png"></router-link>
        <router-link to="/project"><img class="small" src="./assets/works.png"></router-link>
        <router-link to="/drawing"><img class="small" src="./assets/dyo.png"></router-link>
      </div>
      <div id="d" :class="{dark:dark}">
        <a @click="start = false">重選</a>
      </div>
      <router-view :dark="dark"/>
    </div>
    <div class="flex" v-else>
      <a @click="normal()">一般</a>
      <a @click="bw()">黑白</a>
      <a @click="rotate()">色相旋轉</a>
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
      start: false
    }
  },
  methods: {
    change() {
      this.idx++
      if (this.idx == 2) {
        this.idx = 0
      }
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
    }
  },
  mounted() {
    setInterval(this.change, 1500)
  }
}
</script>

<style>

#d {
  position: fixed;
  top: 85vh;
  left: 1em;
  z-index: 9;
}

#d.dark {
  color: white;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  font-size: 28px;
}

.flex a {
  margin: 2em;
}

.hue-rotate {
  filter:hue-rotate(90deg);
  -webkit-filter:hue-rotate(90deg);
}


h1 {
 font-family: "Courier New", "LiSong Pro";
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
  padding: 3px;
}

#nav.dark img {
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
.big{
  height: 5em;
}

button {
  font-size: 26px;
}
</style>
