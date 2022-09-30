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
    next() {
      this.idx += 1
      if (this.idx === this.items.length) {
        this.idx = 0
      }
    },
    move() {
      this.top += 1 * this.dir2
      this.left += 1 * this.dir
      if(this.left == window.innerWidth - 300 || this.left == 0) {
        this.dir *= -1
        this.next()
      }
      if(this.top == window.innerHeight - 200 || this.top == 0) {
        this.dir2 *= -1
        this.next()
      }
    }
  },
  mounted() {
    setInterval(this.move, 15)
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
  z-index: -1;
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
  color: #566573;
}

a:visited {
  color: #AF601A;
}
</style>
