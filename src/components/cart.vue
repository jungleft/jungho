<template>
  <div class="about">
    <h1>我的購物車</h1>
    <div class="ui four doubling stackable cards container">
      <div class="ui attached card" v-for="p in mycarts" :key="p.n">
        <div class="ui image">
          <img :src="p.src"/>
        </div>
        <div class="description">
          <h3>{{p.n}}</h3>
          價格：$NTD{{p.price}}
        </div>
        <a class="ui button" :class = "{green: !inCart(p), blue: inCart(p)}" tabindex="0" @click="toggleCart(p)">
          {{ !inCart(p) ? '加入購物車' : '從購物車中移除' }} <i class="cart icon"/>
        </a>
      </div>
    </div>
    <br/>
    <br/>
    <div class="ui form container">
      <div class="ui field">
        總金額 {{countTotal()}}
      </div>
      <h4 class="ui dividing header">訂單資訊</h4>
      <div class="field">
        <div class="two fields">
          <div class="field">
            <div class="ui labeled input">
              <label class="ui label">訂購人</label>
              <input type="text" name="shipping[first-name]" placeholder="Name" v-model="name">
            </div>
          </div>
          <div class="field">
            <div class="ui labeled input">
              <label class="ui label">手機號碼</label>
              <input type="text" name="phone" placeholder="Phone" v-model="phone">
            </div>
          </div>
        </div>
      </div>
      <div class="field">
        <div class="ui labeled input">
          <label class="ui label">地址</label>
          <input type="text" name="shipping[address]" placeholder="Street Address" v-model="addr">
        </div>
      </div>
      <div class="field">
        <div class="ui labeled input">
          <label class="ui label">帳號末五碼</label>
          <input type="text" name="five" placeholder="帳號末五碼" v-model="five">
        </div>
      </div>
      <a class="ui large green button" @click="submit()">下訂單</a>
      <br> <p>註解：會自動導向信箱發送訊息</p>
    </div>
    <br/>
    <br/>
  
  </div>
</template>

<script>
export default {
  name: 'AbOut',
  metaInfo: {
    title: '我的收藏'
  },
  data () {
    return {
      mycarts: [],
      myrecords: [],
      name: '',
      phone: '',
      addr: '',
      five: ''
    }
  },
  methods: {
    today () {
      const t = new Date()
      return t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate()
    },
    submit () {
      var price = 0
      var items = []
      for (var i = 0; i < this.mycarts.length; i++) {
        price += this.mycarts[i].price
      }
      for (var j = 0; j < this.mycarts.length; j++) {
        items.push(this.mycarts[j].n + '/$NTD' + this.mycarts[j].price)
      }
      var names = items.join(',')
      const t = this.today()
      const record = 'mailto:gteyuoi@gmail.com?subject=' + t + this.name + '訂購' + names + '&body=' + t + this.name + '訂購' + names + ' ===> 總金額$NTD' + price + '===> 寄送地址' + this.addr + ' ===> 電話' + this.phone + '===> 末五碼' + this.five
      window.open(record)
      this.mycarts = []
      this.name = ''
      this.phone = ''
      this.five = ''
      this.addr = ''
      this.myrecords.push(record)
      localStorage.setItem('mycarts', JSON.stringify(this.mycarts))
      localStorage.setItem('myrecords', JSON.stringify(this.myrecords))
    },
    countTotal () {
      var ans = 0
      for (var i = 0; i < this.mycarts.length; i++) {
        ans += this.mycarts[i].price
      }
      return ans
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
  mounted () {
    if (localStorage.mycarts) {
      this.mycarts = JSON.parse(localStorage.getItem('mycarts') || '[]')
    }
    if (localStorage.myrecords) {
      this.myrecords = JSON.parse(localStorage.getItem('myrecords') || '[]')
    }
  }
}
</script>