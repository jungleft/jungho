<template>
  <div class="hello" :class="{dark:dark}">
    <h2>scanography</h2>
    <div class="work" v-for="i in items" :key="i">
      <img :src="'./img/' + i.src">
      <p>{{i.txt}}</p>
    </div>
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
      left: 0,
      top: 0,
      dir: 1,
      dir2: 1,
      idx: 0,
      items: [{src:'img593.jpg', txt:'01'}, {src:'img594.jpg', txt:'02'}, {src:'img595.jpg', txt:'03'}, {src:'img596.jpg', txt:'04'}, {src:'img599.jpg', txt:'05'}, {src:'img600.jpg', txt:'06'} ]
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

h2 {
  padding-top: 1em;
}
p{
  text-align: left;
  margin-left: 1em;
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
  padding: 3em;
}

.work img {
  width: 600px;
}

</style>
