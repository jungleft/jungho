<template>
  <div class="hello" :class="{dark:dark}">
    <h2>Jan</h2>
    <div class="work" v-for="i in items" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/jan'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
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
    msg: String,
    dark: String
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
      items: [
        {src: '01.jpg', hover: false},
        {src: '02.jpg', hover: false},
        {src: '03.jpg', hover: false},
        {src: '04.jpg', hover: false},
        {src: '05.jpg', hover: false},
        {src: '06.jpg', hover: false},
        {src: '07.jpg', hover: false},
        {src: '08.jpg', hover: false},
        {src: '09.jpg', hover: false},
        {src: '10.jpg', hover: false},
        {src: 'img499.jpg', hover: false},
        {src: 'img500.jpg', hover: false},
        {src: 'img501.jpg', hover: false},
        {src: 'img502.jpg', hover: false},
        {src: 'img503.jpg', hover: false},
        {src: 'img504.jpg', hover: false},
        {src: 'img505.jpg', hover: false},
        {src: 'img506.jpg', hover: false},
        {src: 'img507.jpg', hover: false},
        {src: 'img508.jpg', hover: false},
        {src: 'img509.jpg', hover: false},
        {src: 'img510.jpg', hover: false},
        {src: 'img511.jpg', hover: false},
        {src: 'img512.jpg', hover: false},
        {src: 'img513.jpg', hover: false},
        {src: 'img514.jpg', hover: false},
        {src: 'img515.jpg', hover: false},
        {src: 'img516.jpg', hover: false},
        {src: 'img517.jpg', hover: false},
        {src: 'img518.jpg', hover: false},
        {src: 'img519.jpg', hover: false} ],
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
  bottom: 5em;
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
