<template>
  <div class="hello" :class="{dark:dark}">
    <p><router-link to="/contact">hey there!</router-link></p>

    <a @click="use(items[idx] && items[idx].src || items[idx])">
      <img :src="items[idx] && items[idx].src || items[idx]" :style="{left: left + 'px', top: top + 'px'}">
    </a>
  </div>
</template>

<script>
//  import { db } from '../db';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: Boolean,
  },
 // firestore: {
 //   items: db.collection('img'),
 // },
  methods: {
    use(s) {
      localStorage.src = s;
      this.$router.push('/drawing')
    },
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
      items: ['https://jungleft.github.io/jungho//img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_0.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_1.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_2.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_3.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_4.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_5.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_6.jpg', 
      'https://jungleft.github.io/jungho/img/c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_7.jpg']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  padding-top: 4em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}

.dark {
  filter: grayscale(100%);
  background-color: black;
}

h1 {
  color: #EAC257;
}
p {
  color: #9CDA68;
  margin-top: 25em;
  margin-left: 50em;
}
img {
  width: 250px;
  position: fixed;
  z-index: -9;
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
  color: #F8C471;
}

a:visited {
  color: #F8C471;
}
</style>
