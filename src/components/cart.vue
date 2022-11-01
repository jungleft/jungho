<template>
  <div class="about">
    <router-link id="c" to="/shop"><img id="shop" class="small" src="../assets/shop.png" alt="shop"></router-link>
    <h2>購物車</h2>
    <div id="cst" class="ui divided list container thin-only">
      <div class="item" v-for="p in mycarts" :key="p.n">
        <div>
          <img class="ui tiny floted left image" :src="p.src"/>
          <span>
            {{p.n}}: 
            $NTD{{p.price}}
          </span>
          <a class="ui button" :class = "{green: !inCart(p), blue: inCart(p)}" tabindex="0" @click="toggleCart(p)">
            {{ !inCart(p) ? '加入購物車' : '從購物車中移除' }} <i class="cart icon"/>
          </a>
        </div>
      </div>
    </div>
    <div id="cs" class="ui four doubling stackable cards container fat-only">
      <div class="ui attached card" v-for="p in mycarts" :key="p.n">
        <div class="ui image">
          <img :src="p.src"/>
        </div>
        <div class="description">
          <h3>{{p.n}}</h3>
          $NTD{{p.price}}
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
        <label class="ui label"><h4>Total<br>
          <span class="blue">$NTD&nbsp;{{countTotal()}}</span></h4></label>
      </div>
      <br>
      <h3>訂單資訊</h3>
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
      <div class="inline fields">
        <label>選擇付款方式：</label>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="type" v-model="type" value="now">
            <label>匯款</label>
          </div>
        </div>
        <div class="field">
          <div class="ui radio checkbox">
            <input type="radio" name="type" v-model="type" value="later">
            <label>貨到付款</label>
          </div>
        </div>
      </div>
      <div class="field" v-show="type == 'now'">
        <div class="ui labeled input">
          <label class="ui label">帳號末五碼</label>
          <input type="text" name="five" placeholder="帳號末五碼" v-model="five">
        </div>
      </div>
      <div class="field" v-show="type == 'later'">
        <div class="ui labeled input">
          <label class="ui label">7-11門市</label>
          <input type="text" name="five" placeholder="門市" v-model="seven">
        </div>
      </div>
      <br> <p>備註：<br>下訂單後會自動導向信箱<br>請發送郵件即可完成訂單</p>
      <a class="ui large green button" @click="submit()">下訂單</a>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
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
      type: 'now',
      mycarts: [],
      myrecords: [],
      name: '',
      phone: '',
      addr: '',
      five: '',
      seven: ''
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
      var record = ''
      if (this.type === 'now') {
        record = 'mailto:gteyuoi@gmail.com?subject=' + t + this.name + '訂購' + names + '&body=' + t + this.name + '訂購' + names + ' ===> 總金額$NTD' + price + '===> 寄送地址' + this.addr + ' ===> 電話' + this.phone + '===> 末五碼' + this.five
      } else {
        record = 'mailto:gteyuoi@gmail.com?subject=' + t + this.name + '訂購' + names + '&body=' + t + this.name + '訂購' + names + ' ===> 總金額$NTD' + price + '===> 寄送地址' + this.addr + ' ===> 電話' + this.phone + '===> 門市' + this.seven     
      }
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

<style scoped>

#cs {
  width: 60%;
  margin: 0 auto;
}

.cards {
  display: flex;
  justify-content: center;
}

#c {
  position: fixed;
  top: 1em;
  right: 4em;
  font-size: 22px
}
#shop {
  height: 3em;
}
  
.hello {
  padding-top: 3em;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  overflow: scroll;
}

.about {
  padding-left: 120px !important;
}

h2 {
  padding-top: 3em;
  margin-bottom: 1em;
}
h3 {
  margin-bottom: 1em;
}

.floted.left {
  float: left;
}

.blue {
  color: #2185d0;
}

</style>