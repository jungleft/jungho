<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo" :class="{dark: dark}">
    <!-- 畫布元素，綁定滑鼠和觸控事件 -->

<!-- <p>+請投稿在路上觀察到的東西+</p>-->
<router-link to="/drawing" class="ui huge green button">塗鴉</router-link>
<router-link to="/dyo_photo" class="ui huge green button">照片</router-link>
<router-link to="/dyo_text" class="ui huge green button">文字</router-link>
 </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  
  data() {
    return {
      test: [],
      message: 'Hello Vue!',
      vueCanvas: null,
      painting: false,
      canvas: null,
      ctx: null,
      color: '#4060BF',
    };
  },
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dyo {
  background-color: #000;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.ui.button {
margin: 1em;
color:#000;
}

p{
  padding-top: 25em;
  padding-bottom: 2em;
  color: #fff;
}

</style>