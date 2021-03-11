<template>
  <div class="hello" :class="{dark:dark}">
    <h2>Jan</h2>
    <div class="work" v-for="i in items" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/jan'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>
    <h2>Feb</h2>
    <div class="work" v-for="i in items2" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/feb'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
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
      items2: [
      {src:'img824.jpg',hover: false},
      {src:'img825.jpg',hover: false},
      {src:'img826.jpg',hover: false},
      {src:'img827.jpg',hover: false},
      {src:'img828.jpg',hover: false},
      {src:'img829.jpg',hover: false},
      {src:'img830.jpg',hover: false},
      {src:'img831.jpg',hover: false},
      {src:'img832.jpg',hover: false},
      {src:'img833.jpg',hover: false},
      {src:'img834.jpg',hover: false},
      {src:'img835.jpg',hover: false},
      {src:'img836.jpg',hover: false},
      {src:'img837.jpg',hover: false},
      {src:'img838.jpg',hover: false},
      {src:'img839.jpg',hover: false},
      {src:'img840.jpg',hover: false},
      {src:'img841.jpg',hover: false},
      {src:'img842.jpg',hover: false},
      {src:'img843.jpg',hover: false},
      {src:'img844.jpg',hover: false},
      {src:'img845.jpg',hover: false},
      {src:'img846.jpg',hover: false},
      {src:'img847.jpg',hover: false},
      {src:'img848.jpg',hover: false},
      {src:'img849.jpg',hover: false},
      {src:'img850.jpg',hover: false},
      {src:'img851.jpg',hover: false},],
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
