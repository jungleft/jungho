<template>
  <div class="hello" :class="{dark:dark}">
    <h2>info</h2>
    <img :src="'./img/author.jpg'"/>
    <h4>何容</h4>
    <p>生長於木柵。曾經在國外當一碗麥片粥，後來無功而返。<br>喜歡提出問題多過於明確的定論，想就是找到自己的夢想。<br>最近興趣是尋找路上阿彌陀佛標語。  </p>
    <p>email: <a href="mailto:gteyuoi@gmail.com" target="_blank">gteyuoi@gmail.com </a></p>
    <p>instagram: <a href="https://www.instagram.com/jungleft/" target="_blank" rel="noopener noreferrer">@jungleft</a></p>
    <p>阿密陀佛: <a href="https://www.instagram.com/amitopho/" target="_blank" rel="noopener noreferrer">@amitopho</a></p>
    <p class="last">(open for commissions.)</p>
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
      items: ['c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_0.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_1.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_2.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_3.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_4.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_5.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_6.jpg', 'c48c4fa8b906854d6327b27f30b1d24ca_4620693218563810026_210127_7.jpg', ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.hello {
  padding-top: 3em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: scroll;
}

.dark {
  filter: grayscale(100%);
  background-color: black;
}

h2 {
  list-style: none;
  width: 33vw;
  text-align: left;
  margin: 1em auto;
  margin-bottom: 1em;
}
p {
  list-style: none;
  width: 33vw;
  text-align: left;
  margin: 0.7em auto;
}
h4 {
  list-style: none;
  width: 33vw;
  text-align: left;
  margin: 0.7em auto;
  margin-bottom: 1em;
}
img {
  width: 200px;
  margin-left: -18vw;
  margin-bottom: 1em;
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
  color: #17202A;
}

a:visited {
  color: #17202A;
}

.last {
  margin-bottom: 5em;
}
</style>
