<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo" :class="{dark: dark}">
    <!-- 畫布元素，綁定滑鼠和觸控事件 -->

<p>+請投稿在路上觀察到的東西+<br>ex. 視覺、聽覺、觸覺、空間感...<br>可選擇塗鴉、照片、文字來表達</p>

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
  background-color: white;
  width: 100%;
  height: 100vh;
}

p{
  padding-top: 25em;
  padding-bottom: 2em;
}

</style>