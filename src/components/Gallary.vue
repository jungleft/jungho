<template>
  <div class="gallary">
    <h2>gallary</h2>
    <div class = "inline" v-for="(t) in test" :key="t.src">
      <a @click="use(t.src)"><img class ="g" :src="t.src"/></a>
    </div>
    <div>
      <h3>
        <router-link to="/drawing">Back</router-link>
      </h3>
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

.gallary {
  max-width: 800px;
  margin: 4em auto;
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
  height: 20vmin;
  border: 3px gold ridge;
  border-radius: 15px;
}

a {
  cursor: pointer;
}

a:visited {
  color: #AF601A;
}

.inline {
  display: inline-block;
}

h2 {
  margin-top: 2em;
  margin-bottom: 2em;
}

h3 {
  margin-top: 2em;
}
</style>
