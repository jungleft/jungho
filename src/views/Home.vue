<template>
  <div class="home" :class="{dark:dark}">
    <HelloWorld msg="Welcome to Your Vue.js App" :dark="dark"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  props: {
    dark: Boolean,
  },
  components: {
    HelloWorld
  }
}
</script>
