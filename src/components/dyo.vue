<template>
  <!-- 畫布容器，可切換深色模式 -->
  <div class="dyo" :class="{dark: dark}">
    <!-- 畫布元素，綁定滑鼠和觸控事件 -->
 <router-link to="/dyo_photo">照片</router-link>
 <router-link to="/dyo_text">文字</router-link>
  <router-link to="/drawing">塗鴉</router-link>

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

canvas {
  position: relative;
  cursor: se-resize;
  z-index: 1;
}

#g {
  position: fixed;
  top:3em;
  right:2em;
}

#gallary {
  height: 3.5em;
}

#c {
  position: fixed;
  z-index: 2;
  bottom: 0;
  right: 0;
}

#color-picker {
  transform: scale(0.8);
}

.dark {
  filter: grayscale(100%);
  background-color: black;
}

a#save {
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  background-color: #F9E79F;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

a#clear {
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  background-color: #D6EAF8;
  padding: 3px;
  border-radius: 5px;
  color: black;
}

.small {
  height: 150px;
}


</style>