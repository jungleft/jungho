<template>
  <div class="hello" ;class="{dark:dark}">
    <h1>何容</h1>
    <input type="checkbox" v-model="dark">黑暗模式
    <img :src="'/img/' + items[idx]" @click="next()" :style="{left: left + 'px', top: top + 'px'}">
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
      left: 0,
      top: 0,
      dir: 1,
      dir2: 1,
      idx: 0,
      items: ['c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_0.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_1.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_2.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_3.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_4.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_5.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_6.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_7.jpg', ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #EAC257;
}
p {
  color: #9CDA68;
}
img {
  width: 300px;
  position: fixed;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
