<template>
    <div class="ratings-container">
        <div v-for="rating in ratings"
             :key="rating.id"
             class="rating-display">
             <div class="rating-stars">
                <img v-for="index in rating.stars" :key="index" :src="starImage">
             </div>
            <p class="rating-desc">Rated {{ rating.stars }} Stars in {{ rating.rater }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ratings-container',
    data() {
        return {
            starImage: require('@/assets/images/icon-star.svg'),
            ratings: [ 
                { id: 1001, stars: 5, rater: 'Reviews'},
                { id: 1002, stars: 5, rater: 'Report Guru'},
                { id: 1003, stars: 5, rater: 'BestTech'},
            ],
        }
    },
}
</script>

<style lang="scss">
.ratings-container {
    margin-top: 2.7em;

  .rating-display {
    background-color: $color--secondary;
    padding: 1em;
    margin-bottom: 2em;
    border-radius: 8px;

    .rating-stars > * {
        margin: 0 0.5em;
    }

    .rating-desc {
      font-weight: $font-weight--bold;
      font-size: $font-size--small;
      color: $color--primary;
      margin-top: 1em;
    }
  }
} 

// responsive styles
@include mq($width-sm) {
    .ratings-container {
        .rating-display {
            margin: 2em;
        }
    }
}

@include mq($width-md) {
    .ratings-container {
        margin-top: 0;

        .rating-display {
            @include flex($justify-content:space-around, $align-items:baseline);
            width: 400px;
            max-width: 445px;
            margin: 0;
            margin-bottom: 2em;

            &:nth-of-type(2) {
                margin-left: 3em;
            }

            &:last-of-type {
                margin-left: 6em;
            }
        }
    }
}

@include mq($width-lg) {
    .ratings-container {
        margin-left: 2.7em;
        min-width: 540px;
        align-self: center;
    }
}  
</style>