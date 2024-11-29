<template>
  <div class="hello" :class="{dark:dark}">
    <ul>
      <h2>works</h2>
      <li><router-link to="/calen">moon/sun</router-link></li>
      <li><router-link to="/fluid">fluid lines</router-link></li>
      <li><router-link to="/thav_sketch">sketch</router-link></li>
      <li><router-link to="/animation">moving images</router-link></li>
      <li><router-link to="/scano">scanography</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: Boolean
  },
  methods: {
  },
  mounted() {
  },
  data() {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  padding-top: 1.5em;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
}

.dark {
  filter: grayscale(100%);
  background-color: black;
}

#d {
  position: fixed;
  bottom: 5em;
  left: 1em;
}

.work {
  display: inline-block;
  padding: 1em;
}

.work img {
  width: 300px;
}

ul {
  position: relative;
  z-index: 10;
  list-style: none;
  width: 33vw;
  text-align: left;
  margin: 5em auto;
}

h2 {
  margin-bottom: 2em;
}

li {
  margin: 0.8em auto;
}

a {
  color: #17202A;
}

a:visited {
  color: #17202A;
}
</style>
