<template>
  <div id="app">
    <div id="nav">
      <h1>Jung Ho</h1>
      <router-link to="/">home</router-link> 
      <router-link to="/project">project</router-link>
      <router-link to="/contact">contact</router-link>
      <router-link to="/drawing">d.y.o.</router-link>
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
      dark: false
    }
  }
}
</script>

<style>

#d {
  position: fixed;
  bottom: 5em;
  left: 1em;
}


h1 {
 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  text-align: left;
  position: fixed;
  top:0;
  left:0;
  padding: 30px;
}

#nav a {
  display: block;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #F5B041;
}
</style>
