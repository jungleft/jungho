<template>
  <div class="scan" :class="{dark:dark}">
    <h2>Scanography</h2>
    <p>2021<br>Messing around scanner.</p>
    <p><router-link to="/scan_photo">photo</router-link></p>
      <p><router-link to="/scan_match">match</router-link></p>
      <p><router-link to="/scan_bag">bag</router-link></p>
      <p><router-link to="/scan_card">card</router-link></p>
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
  margin-bottom: 1.5em;
}

h4{
  text-align: left;
  margin-left: 0.5em;
}

p{
  margin-bottom: 1em;
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

ul {
  list-style: none;
  width: 33vw;
  text-align: left;
  margin: 5em auto;
}

li {
  margin: 0.5em auto;
}

a {
  color: #566573;
}

a:visited {
  color: #AF601A;
}

</style>
