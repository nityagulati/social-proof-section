<template>
  <div class="container">
    <h1 class="title">{{ title }}</h1>
    <p class="message">{{ message }}</p>
    <Ratings />
    <Reviews />
    <SiteFooter />
  </div>
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
  },
  data() {
    return {
      title: '10,000+ of our users love our products.',
      message: 'We only provide great products combined with excellent customer service. See what our satisfied customers are saying about our services.',
    }
  },
}
</script>

<style>

</style>
