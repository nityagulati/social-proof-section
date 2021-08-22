<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Ratings />
</template>

<script>
import Ratings from './components/Ratings.vue'

export default {
  name: 'App',
  components: {
    Ratings,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
