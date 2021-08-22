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

<style lang="scss">
.container {
  margin: 5em 1.5em;

  .title {
    color: $color--primary;
    font-size: $font-size--large;
    margin-bottom: 1.2em;
  }

  .message {
    color: $color--text;
    font-weight: $font-weight--medium;
    line-height: 25px;
  }
}

// responsive styles
@include mq($width-duo) {
  .container {
    margin: 5em;
  }
}

@include mq($width-sm) {
  .container {
    margin: 5em 10em;
  }
}

@include mq($width-md) {
  .container {
    @include flex;
    margin: 5em;

    .intro {
      flex: 1;
      padding-right: 3em;
      text-align: left;
    }
  }
}

@include mq($width-lg) {
  .container {
    .title {
      font-size: $font-size--xlarge;
      margin-bottom: 0.5em;
    }
  }
}
</style>
