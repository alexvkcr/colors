<template>
  <div id="app">
    <app-header class="header"></app-header>
    <side-bar class="side-bar"></side-bar>
    <div class="main"><router-view></router-view></div>
    <app-footer class="footer"></app-footer>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
