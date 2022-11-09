<template>
  <div class="hello" :class="{dark:dark}">
    <router-link id="c" to="/shop"><img id="shop" src="../assets/back.png" alt="shop"></router-link>
    <div class="ui grid container">
      <div class="ui row" v-for="(p, idx) in pets" :key="p.n" v-show="idx == $route.params.id">
        <div class="ui seven wide column">
          <a @click="next()">
            <img class="lg" v-if="p.imgs" :src="p.imgs[m]"/>
          </a>
        </div>
        <div class="column">
          <div class="description">
            <h3>{{p.n}}</h3>
            $NTD{{p.price}}
          </div>
          <div class="ui buttons">
            <a class="ui button" :class = "{green: !inCart(p), blue: inCart(p)}" tabindex="0" @click="toggleCart(p)">
              {{ !inCart(p) ? '加入購物車' : '從購物車中移除' }} <i class="cart icon"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
    pets: Array,
    msg: String,
    dark: Boolean
  },
  metaInfo: {
    title: '歡迎'
  },
  methods: {
    next () {
      this.m++
      if (this.m === this.pets[this.$route.params.id].imgs.length) {
        this.m = 0
      }
    },
    toggleCart (p) {
      var mycarts = JSON.parse(localStorage.getItem('mycarts') || '[]')
      if ((mycarts || []).filter(function (o) {
        return o.n === p.n
      }).length > 0) {
        const ans = (mycarts || []).filter(function (o) {
          return o.n !== p.n
        })
        mycarts = [ ...ans]
        localStorage.setItem('mycarts', JSON.stringify(mycarts));
      } else {
        mycarts.push(p)
        localStorage.setItem('mycarts', JSON.stringify(mycarts));
      }
      this.mycarts = JSON.parse(localStorage.getItem('mycarts') || '[]')
      this.$forceUpdate()
    },
    inCart (p) {
      const mycarts = JSON.parse(localStorage.getItem('mycarts') || '[]')
      if ((mycarts || []).filter(function (o) {
        return o.n === p.n
      }).length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      m: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#cart {
  height: 5em;
}

#cs {
  width: 50%;
  margin: 0 auto;
}

#c {
  position: fixed;
  z-index: 9;
  top: 1em;
  right: 4em;
  font-size: 22px;
}

.lg {
  margin-top: 3em;
  margin-left: 10em;
  width: 100%;
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
