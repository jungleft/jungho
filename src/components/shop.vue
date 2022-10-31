<template>
  <div class="hello" :class="{dark:dark}">
    <router-link id="c" to="/cart"><img src="" alt="cart"></router-link>
    <h1>寵物線上看</h1>
    <div id="cs" class="ui two doubling stackable cards container">
      <div class="ui attached card" v-for="p in pets" :key="p.n">
        <div class="ui image">
          <img :src="p.src"/>
        </div>
        <div class="description">
          <h3>{{p.n}}</h3>
          價格：$NTD{{p.price}}
        </div>
        <div class="ui bottom attached buttons">
          <a class="ui button" :class = "{green: !inCart(p), blue: inCart(p)}" tabindex="0" @click="toggleCart(p)">
            {{ !inCart(p) ? '加入購物車' : '從購物車中移除' }} <i class="cart icon"/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Shop',
  props: {
    msg: String
  },
  metaInfo: {
    title: '歡迎'
  },
  methods: {
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
      pets: [
        { i: 1, n: '小咪', price: 300, src: './img/author.jpg' },
        { i: 2, n: '阿肥', price: 500, src: './img/author.jpg' },
        { i: 3, n: '大頭', price: 200, src: './img/author.jpg' },
        { i: 4, n: '珠珠', price: 1000, src: './img/author.jpg' },
        { i: 5, n: '比爾', price: 400, src: './img/author.jpg' },
        { i: 6, n: '邱吉', price: 300, src: './img/author.jpg' }
        
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#cs {
  width: 60%;
  margin: 0 auto;
}

#c {
  position: fixed;
  top: 1em;
  right: 4em;
  font-size: 22px;
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
