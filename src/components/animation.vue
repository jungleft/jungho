<template>
  <div class="scan" :class="{dark:dark}">
    <h2>Moving Images</h2>
    <p>2018-2020<br>Experimental pieces I did when<br>studying in the IABA Kingston.</p>
    <iframe src="https://player.vimeo.com/video/418366721" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/418366721">The British Museum</a> from <a href="https://vimeo.com/user84130549">JUNG HO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<iframe src="https://player.vimeo.com/video/377326463" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/377326463">Character Lip sync  ( feat. Liza )</a> from <a href="https://vimeo.com/user84130549">JUNG HO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<iframe src="https://player.vimeo.com/video/377325401" width="640" height="528" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/377325401">Postcode Lottery</a> from <a href="https://vimeo.com/user84130549">JUNG HO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<iframe src="https://player.vimeo.com/video/326914723" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/326914723">Play the Scene</a> from <a href="https://vimeo.com/user84130549">JUNG HO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<iframe src="https://player.vimeo.com/video/326915884" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/326915884">Walk the Walk</a> from <a href="https://vimeo.com/user84130549">JUNG HO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
<iframe src="https://player.vimeo.com/video/420255342" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
<p><a href="https://vimeo.com/420255342">The Portfolio</a> from <a href="https://vimeo.com/user84130549">JUNG HO</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
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
  padding-top: 1.5em;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
h2{
  padding-top: 1em;
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
  bottom: 3em;
  left: 1em;
}

.work {
  display: inline-block;
  padding: 1em;
}

.work img {
  width: 300px;
}
</style>
