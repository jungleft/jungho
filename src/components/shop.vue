<template>
  <div class="hello" :class="{dark:dark}">
    <router-link to="/cart"><i class="cart icon"/>cart</router-link>
    <h1>寵物線上看</h1>
    <div class="ui four doubling stackable cards container">
      <div class="ui attached card" v-for="p in pets" :key="p.n">
        <div class="ui image">
          <img :src="'https://loremflickr.com/320/240/pet?random='+ p.i + '&lock=' + p.i"/>
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
        { i: 1, n: '小咪', price: 300 },
        { i: 2, n: '阿肥', price: 500 },
        { i: 3, n: '大頭', price: 200 },
        { i: 4, n: '珠珠', price: 1000 },
        { i: 5, n: '比爾', price: 400 },
        { i: 6, n: '邱吉', price: 300 },
        { i: 7, n: '嘟嘟', price: 200 },
        { i: 8, n: '阿胖', price: 2300 }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
