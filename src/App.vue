<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Ratings />
  <Reviews />
</template>

<script>
import Ratings from './components/Ratings.vue'
import Reviews from './components/Reviews.vue'

export default {
  name: 'App',
  components: {
    Ratings,
    Reviews,
  }
}
</script>

<style>

</style>
