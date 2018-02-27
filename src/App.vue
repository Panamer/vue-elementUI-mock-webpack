<template>
  <div id="app">
    <router-view/>
    <img src="./assets/image/arteon.jpg">
  </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style lang='scss' rel="stylesheet/scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  img {
    width: 100%;
  }
}
</style>
