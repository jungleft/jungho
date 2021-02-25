import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { firestorePlugin } from 'vuefire'
import db from './db'

console.log(db)

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
