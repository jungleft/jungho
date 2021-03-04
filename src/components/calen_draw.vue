<template>
  <div class="hello" :class="{dark:dark}">
    <div id="d">
      <input type="checkbox" v-model="dark" />黑白模式
    </div>
    <h2>Jan</h2>
    <div class="work" v-for="i in items" :key="i">
      <img :src="'./img/jan0/' + i">
    </div>
    <h2>Feb</h2>
    <div class="work" v-for="i in items2" :key="i">
      <img :src="'./img/feb0/' + i">
    </div>
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
      dark: false,
      left: 0,
      top: 0,
      dir: 1,
      dir2: 1,
      idx: 0,
      items: ['01.jpg','02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg','08.jpg','09.jpg','10.jpg','img499.jpg','img500.jpg','img501.jpg','img502.jpg','img503.jpg','img504.jpg','img505.jpg','img506.jpg','img507.jpg','img508.jpg','img509.jpg','img510.jpg','img511.jpg','img512.jpg','img513.jpg','img514.jpg','img515.jpg','img516.jpg','img517.jpg','img518.jpg','img519.jpg' ],
      items2: ['img824.jpg','img825.jpg','img826.jpg','img827.jpg','img828.jpg','img829.jpg','img830.jpg','img831.jpg','img832.jpg','img833.jpg','img834.jpg','img835.jpg','img836.jpg','img837.jpg','img838.jpg','img839.jpg','img840.jpg','img841.jpg','img842.jpg','img843.jpg','img844.jpg','img845.jpg','img846.jpg','img847.jpg','img848.jpg','img849.jpg','img850.jpg','img851.jpg']
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
  bottom: 3em;
  left: 1em;
}

.work {
  display: inline-block;
  padding: 1em;
}

.work img {
  width: 200px;
}
</style>
