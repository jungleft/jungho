<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo_text" :class="{dark: dark}">
    <input id="input-text" type="text" v-model="message" />
    <button id="save-button" @click="save">SAVE</button>
  </div>
</template>

<script>

import { db } from '../db.js';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    dark: Boolean,
  },
  firestore: {
    text: db.collection('text'),
  },
  metaInfo: {
    title: '圖鴨板',
  },
  data() {
    return {
      text: [],
      message: 'Hello World!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#4060BF',
    };
  },
  watch: {
    message(newVal) {
      localStorage.text = newVal
    }
  },
  methods: {

    // 儲存文字內容到 Firebase
    save() {
      this.$firestoreRefs.text.add(
        {
          content: this.message
        }
      )
      this.$router.push('/gallary');
    }
  },
  mounted() {
    if (localStorage.text) {
      this.message = localStorage.text
    }
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.dyo_text {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 600px) {
  .dyo_text {
    flex-direction: column;
  }
  #save-button {
    margin-top: 1em;
  }
}

input { 
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid #000;
  outline: none;
}

</style>