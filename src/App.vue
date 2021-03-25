<template>
  <div id="app">
    <div id="nav" :class="{dark:dark}">
      <img class="big" :src="'./img/'+name[idx]">
      <router-link to="/"><img class="small" src="./assets/home.png"></router-link> 
      <router-link to="/contact"><img id="info" class="small" src="./assets/info.png"></router-link>
      <router-link to="/project"><img class="small" src="./assets/works.png"></router-link>
      <router-link to="/drawing"><img class="small" src="./assets/dyo.png"></router-link>
    </div>
    <div id="d">
      <input type="checkbox" v-model="dark" />黑白模式
    </div>
    <router-view :dark="dark"/>
  </div>
</template>

<script type="text/javascript">

export default {
  name: 'App',
  data() {
    return {
      dark: false,
      name: ['cjh.png','jh.png'],
      idx: 0
    }
  },
  methods: {
    change() {
      this.idx++
      if (this.idx == 2) {
        this.idx = 0
      }
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
  bottom: 5em;
  left: 1em;
  z-index: 9;
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
</style>
