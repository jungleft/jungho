<template>
  <div class="hello" :class="{dark:dark}">
    <router-link id="c" to="/cart"><img id="cart" class="small" src="../assets/cart.png" alt="cart"></router-link>
    <h2>shop</h2>
    <div id="cs" class="ui two doubling stackable cards container">
      <div class="ui attached card" v-for="(p, idx) in pets" :key="p.n">
        <div class="ui image">
          <router-link :to="'/item/' + idx">
            <img :src="p.src"/>
          </router-link>
        </div>
        <div class="description">
          <h3>{{p.n}}</h3>
          $NTD{{p.price}}
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
    pets: Array,
    msg: String,
    dark: Boolean
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
