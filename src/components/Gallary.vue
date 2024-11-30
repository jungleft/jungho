<template>
  <div class="gallary-container">
    <div class="gallary">
      <h2>gallary</h2>
      <div class = "block" v-for="(t) in test" :key="t.src">
        <a @click="use(t.src)"><img class ="g" :src="t.src"/></a>
      </div>
      <div>
        <h3>
          <router-link to="/drawing">Back</router-link>
      </h3>
      </div>
    </div>
    <div class="gallary">
      <h2>text</h2>
    <div class = "block" v-for="(t) in text" :key="t.content">
        <div class = "g padded gold">{{ t.content }}</div>
      </div>
    </div>
  </div>
</template>

<script>

import { db } from '../db';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  metaInfo: {
    title: '畫廊',
  },
  firestore: {
    test: db.collection('img'),
    text: db.collection('text'),
  },
  methods: {
    use(s) {
      localStorage.src = s;
      this.$router.push('/drawing')
    }
  },
  mounted() {
  },
  data() {
    return {
      text: null,
      test: null,
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#000000',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.gallary-container {
  display: flex;
  flex-direction: row;
}

@media screen and (max-width: 600px) {
  .gallary-container {
    flex-direction: column;
  }
}

.gallary {
  max-width: 800px;
  margin: 4em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

a#save {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  background-color: #3f3;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

a#clear {
  cursor: pointer;
  display: inline-block;
  font-size: 18px;
  background-color: yellow;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

#canvas {
    border: 3px solid black;
}

#c {
  position: fixed;
  bottom: 0;
  right: 0;
}

.g {
  max-height: 20vmin;
  border: 3px gold ridge;
  border-radius: 15px;
}

.gold {
  color: rgb(41, 3, 154) !important;
}

.padded {
  padding: 1em;
  font-size: 1.5em;
}

a {
  cursor: pointer;
}

a:visited {
  color: #AF601A;
}

.block {
  display: block;
}


h2 {
  margin-top: 2em;
  margin-bottom: 2em;
}

h3 {
  margin-top: 2em;
}
</style>
