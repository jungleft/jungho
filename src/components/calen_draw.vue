<template>
  <div class="calen" :class="{dark:dark}">
    <h2>Moon/Sun</h2>
    <p>2021<br>Everyday calendar drawing<br> and daily window(Sep-Jan)</p>

    <h3>Sep</h3>
    <div class="work" v-for="i in items9" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/sep'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>

     <h3>Aug</h3>
    <div class="work" v-for="i in items8" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/aug'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>


     <h3>Jul</h3>
    <div class="work" v-for="i in items7" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/jul'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>

      <h3>Jun</h3>
    <div class="work" v-for="i in items6" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/jun'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>

     <h3>May</h3>
    <div class="work" v-for="i in items5" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/may'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>

     <h3>Apr</h3>
    <div class="work" v-for="i in items4" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/apr'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>

    <h3>Mar</h3>
    <div class="work" v-for="i in items3" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/mar'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>

    <h3>Feb</h3>
    <div class="work" v-for="i in items2" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/feb'+ (i.hover ? 1 : 0) +'/' + i.src" />
      </a>
    </div>
    
    <h3>Jan</h3>
    <div class="work" v-for="i in items" :key="i.src">
      <a @mouseover="i.hover=true" @mouseout="i.hover=false" @click="i.hover = !i.hover">
      <img :src="'./img/jan'+ (i.hover ? 1 : 0) +'/' + i.src" />
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
      items9: [
        {src: 'img287.jpg', hover: false},
        {src: 'img288.jpg', hover: false},
        {src: 'img289.jpg', hover: false},
        {src: 'img290.jpg', hover: false},
        {src: 'img291.jpg', hover: false},
        {src: 'img292.jpg', hover: false},
        {src: 'img293.jpg', hover: false},
        {src: 'img294.jpg', hover: false},
        {src: 'img295.jpg', hover: false},
        {src: 'img296.jpg', hover: false},
        {src: 'img297.jpg', hover: false},
        {src: 'img298.jpg', hover: false},
        {src: 'img299.jpg', hover: false},
        {src: 'img300.jpg', hover: false},
        {src: 'img301.jpg', hover: false},
        {src: 'img302.jpg', hover: false},
        {src: 'img303.jpg', hover: false},
        {src: 'img304.jpg', hover: false},
        {src: 'img305.jpg', hover: false},
        {src: 'img306.jpg', hover: false},
        {src: 'img307.jpg', hover: false},
        {src: 'img308.jpg', hover: false},
        {src: 'img309.jpg', hover: false},
        {src: 'img310.jpg', hover: false},
        {src: 'img311.jpg', hover: false},
        {src: 'img312.jpg', hover: false},
        {src: 'img313.jpg', hover: false},
        {src: 'img314.jpg', hover: false},
        {src: 'img315.jpg', hover: false},
        {src: 'img316.jpg', hover: false}, ],
      items8: [
        {src: 'img256.jpg', hover: false},
        {src: 'img257.jpg', hover: false},
        {src: 'img258.jpg', hover: false},
        {src: 'img259.jpg', hover: false},
        {src: 'img260.jpg', hover: false},
        {src: 'img261.jpg', hover: false},
        {src: 'img262.jpg', hover: false},
        {src: 'img263.jpg', hover: false},
        {src: 'img264.jpg', hover: false},
        {src: 'img265.jpg', hover: false},
        {src: 'img266.jpg', hover: false},
        {src: 'img267.jpg', hover: false},
        {src: 'img268.jpg', hover: false},
        {src: 'img269.jpg', hover: false},
        {src: 'img270.jpg', hover: false},
        {src: 'img271.jpg', hover: false},
        {src: 'img272.jpg', hover: false},
        {src: 'img273.jpg', hover: false},
        {src: 'img274.jpg', hover: false},
        {src: 'img275.jpg', hover: false},
        {src: 'img276.jpg', hover: false},
        {src: 'img277.jpg', hover: false},
        {src: 'img278.jpg', hover: false},
        {src: 'img279.jpg', hover: false},
        {src: 'img280.jpg', hover: false},
        {src: 'img281.jpg', hover: false},
        {src: 'img282.jpg', hover: false},
        {src: 'img283.jpg', hover: false},
        {src: 'img284.jpg', hover: false},
        {src: 'img285.jpg', hover: false}, 
        {src: 'img286.jpg', hover: false} ],
      items7: [
        {src: 'img225.jpg', hover: false},
        {src: 'img226.jpg', hover: false},
        {src: 'img227.jpg', hover: false},
        {src: 'img228.jpg', hover: false},
        {src: 'img229.jpg', hover: false},
        {src: 'img230.jpg', hover: false},
        {src: 'img231.jpg', hover: false},
        {src: 'img232.jpg', hover: false},
        {src: 'img233.jpg', hover: false},
        {src: 'img234.jpg', hover: false},
        {src: 'img235.jpg', hover: false},
        {src: 'img236.jpg', hover: false},
        {src: 'img237.jpg', hover: false},
        {src: 'img238.jpg', hover: false},
        {src: 'img239.jpg', hover: false},
        {src: 'img240.jpg', hover: false},
        {src: 'img241.jpg', hover: false},
        {src: 'img242.jpg', hover: false},
        {src: 'img243.jpg', hover: false},
        {src: 'img244.jpg', hover: false},
        {src: 'img245.jpg', hover: false},
        {src: 'img246.jpg', hover: false},
        {src: 'img247.jpg', hover: false},
        {src: 'img248.jpg', hover: false},
        {src: 'img249.jpg', hover: false},
        {src: 'img250.jpg', hover: false},
        {src: 'img251.jpg', hover: false},
        {src: 'img252.jpg', hover: false},
        {src: 'img253.jpg', hover: false},
        {src: 'img254.jpg', hover: false}, 
        {src: 'img255.jpg', hover: false} ],
      items6: [
        {src: 'img032.jpg', hover: false},
        {src: 'img033.jpg', hover: false},
        {src: 'img034.jpg', hover: false},
        {src: 'img035.jpg', hover: false},
        {src: 'img036.jpg', hover: false},
        {src: 'img037.jpg', hover: false},
        {src: 'img038.jpg', hover: false},
        {src: 'img039.jpg', hover: false},
        {src: 'img040.jpg', hover: false},
        {src: 'img041.jpg', hover: false},
        {src: 'img042.jpg', hover: false},
        {src: 'img043.jpg', hover: false},
        {src: 'img044.jpg', hover: false},
        {src: 'img045.jpg', hover: false},
        {src: 'img046.jpg', hover: false},
        {src: 'img047.jpg', hover: false},
        {src: 'img048.jpg', hover: false},
        {src: 'img049.jpg', hover: false},
        {src: 'img050.jpg', hover: false},
        {src: 'img051.jpg', hover: false},
        {src: 'img052.jpg', hover: false},
        {src: 'img053.jpg', hover: false},
        {src: 'img054.jpg', hover: false},
        {src: 'img055.jpg', hover: false},
        {src: 'img056.jpg', hover: false},
        {src: 'img057.jpg', hover: false},
        {src: 'img058.jpg', hover: false},
        {src: 'img059.jpg', hover: false},
        {src: 'img060.jpg', hover: false},
        {src: 'img061.jpg', hover: false} ],
      items5: [
        {src: 'img001.jpg', hover: false},
        {src: 'img002.jpg', hover: false},
        {src: 'img003.jpg', hover: false},
        {src: 'img004.jpg', hover: false},
        {src: 'img005.jpg', hover: false},
        {src: 'img006.jpg', hover: false},
        {src: 'img007.jpg', hover: false},
        {src: 'img008.jpg', hover: false},
        {src: 'img009.jpg', hover: false},
        {src: 'img010.jpg', hover: false},
        {src: 'img011.jpg', hover: false},
        {src: 'img012.jpg', hover: false},
        {src: 'img013.jpg', hover: false},
        {src: 'img014.jpg', hover: false},
        {src: 'img015.jpg', hover: false},
        {src: 'img016.jpg', hover: false},
        {src: 'img017.jpg', hover: false},
        {src: 'img018.jpg', hover: false},
        {src: 'img019.jpg', hover: false},
        {src: 'img020.jpg', hover: false},
        {src: 'img021.jpg', hover: false},
        {src: 'img022.jpg', hover: false},
        {src: 'img023.jpg', hover: false},
        {src: 'img024.jpg', hover: false},
        {src: 'img025.jpg', hover: false},
        {src: 'img026.jpg', hover: false},
        {src: 'img027.jpg', hover: false},
        {src: 'img028.jpg', hover: false},
        {src: 'img029.jpg', hover: false},
        {src: 'img030.jpg', hover: false}, 
        {src: 'img031.jpg', hover: false} ],
      items4: [
        {src: 'img046.jpg', hover: false},
        {src: 'img047.jpg', hover: false},
        {src: 'img048.jpg', hover: false},
        {src: 'img049.jpg', hover: false},
        {src: 'img050.jpg', hover: false},
        {src: 'img051.jpg', hover: false},
        {src: 'img052.jpg', hover: false},
        {src: 'img053.jpg', hover: false},
        {src: 'img054.jpg', hover: false},
        {src: 'img055.jpg', hover: false},
        {src: 'img056.jpg', hover: false},
        {src: 'img057.jpg', hover: false},
        {src: 'img058.jpg', hover: false},
        {src: 'img059.jpg', hover: false},
        {src: 'img060.jpg', hover: false},
        {src: 'img061.jpg', hover: false},
        {src: 'img062.jpg', hover: false},
        {src: 'img063.jpg', hover: false},
        {src: 'img064.jpg', hover: false},
        {src: 'img065.jpg', hover: false},
        {src: 'img066.jpg', hover: false},
        {src: 'img067.jpg', hover: false},
        {src: 'img068.jpg', hover: false},
        {src: 'img069.jpg', hover: false},
        {src: 'img070.jpg', hover: false},
        {src: 'img071.jpg', hover: false},
        {src: 'img072.jpg', hover: false},
        {src: 'img073.jpg', hover: false},
        {src: 'img074.jpg', hover: false},
        {src: 'img075.jpg', hover: false} ],
        items3: [
        {src: 'img001.jpg', hover: false},
        {src: 'img002.jpg', hover: false},
        {src: 'img003.jpg', hover: false},
        {src: 'img004.jpg', hover: false},
        {src: 'img005.jpg', hover: false},
        {src: 'img006.jpg', hover: false},
        {src: 'img007.jpg', hover: false},
        {src: 'img008.jpg', hover: false},
        {src: 'img009.jpg', hover: false},
        {src: 'img010.jpg', hover: false},
        {src: 'img011.jpg', hover: false},
        {src: 'img012.jpg', hover: false},
        {src: 'img013.jpg', hover: false},
        {src: 'img014.jpg', hover: false},
        {src: 'img015.jpg', hover: false},
        {src: 'img016.jpg', hover: false},
        {src: 'img017.jpg', hover: false},
        {src: 'img018.jpg', hover: false},
        {src: 'img019.jpg', hover: false},
        {src: 'img020.jpg', hover: false},
        {src: 'img021.jpg', hover: false},
        {src: 'img022.jpg', hover: false},
        {src: 'img023.jpg', hover: false},
        {src: 'img024.jpg', hover: false},
        {src: 'img025.jpg', hover: false},
        {src: 'img026.jpg', hover: false},
        {src: 'img027.jpg', hover: false},
        {src: 'img028.jpg', hover: false},
        {src: 'img029.jpg', hover: false},
        {src: 'img030.jpg', hover: false},
        {src: 'img031.jpg', hover: false} ],
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
       {src:'img851.jpg',hover: false} ],
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
        {src: 'img519.jpg', hover: false} ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h2{
  padding-top: 1em;
}
h3{
  padding-top: 2em;
}
p{
  padding-top: 1em;
  padding-bottom: 2em;
}

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
