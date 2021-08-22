<template>
  <Ratings />
  <Reviews />
  <SiteFooter />
</template>

<script>
import Ratings from './components/Ratings.vue'
import Reviews from './components/Reviews.vue'
import SiteFooter from './components/SiteFooter.vue'

export default {
  name: 'App',
  components: {
    Ratings,
    Reviews,
    SiteFooter,
  }
}
</script>

<style>

</style>
