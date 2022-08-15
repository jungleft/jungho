<template>
  <div class="fluid" :class="{dark:dark}">
    <h2>Fluid Lines</h2>
    <p>2021<br>Watercolour on paper (4K).</p>
    <div class="work" v-for="i in items" :key="i">
      <img :src="'./img/' + i.src">
      <h4>{{i.txt}}</h4>
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
      items: [{src:'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_2.jpg', txt:'fluid lines, green'}, {src:'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_3.jpg', txt:'fluid lines, blue'}, {src:'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_4.jpg', txt:'fluid lines, blank space'}, {src:'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_5.jpg', txt:'fluid lines, statue'}, {src:'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_6.jpg', txt:'fluid lines, clouds'}, {src:'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_7.jpg', txt:'fluid lines, orange sky'}, {src:'IMG_9037.jpeg', txt:'fluid lines, dark'}, {src:'IMG_9036.jpeg', txt:'fluid lines, darker'},  {src:'IMG_9038.jpeg', txt:'fluid lines, cut out'}, {src:'IMG_9142.jpeg', txt:'fluid lines, grayscale'} ]
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

h4{
  text-align: left;
  margin-left: 0.5em;
}

p{
  padding-top: 1em;
  padding-bottom: 2em;
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
