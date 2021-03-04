<template>
  <div class="hello" :class="{dark:dark}">
    <div id="d">
      <input type="checkbox" v-model="dark" />黑暗模式
    </div>
    <h2>my works</h2>
    <ul>
      <li><router-link to="/fluid">fluid lines</router-link></li>
      <li><router-link to="/calen">canlender drawing</router-link></li>
      <li><router-link to="/animation">animation</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}

.dark {
  background-color: black;
}
#d {
  position: fixed;
  bottom: 3em;
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
  width: 33vw;
  text-align: left;
  margin: 0 auto;
}

</style>
