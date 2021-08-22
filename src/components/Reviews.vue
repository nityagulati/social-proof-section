<template>
    <div class="reviews-container">
        <div v-for="review in reviews" :key="review.id" class="review-display">
            <img :src="review.image" alt="Reviewer Profile Pic" class="review-image">
            <p class="review-name">{{review.name}}
                <span v-if="review.verifiedBuyer" class="review-verified-buyer">
                    Verified Buyer
                </span>
            </p>
            <p class="review-comment">{{review.comment}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'reviews-container',
    data() {
        return {
            reviews: [
                {
                    id: 2001,
                    name: 'Colton Smith',
                    verifiedBuyer: true,
                    image: require('@/assets/images/image-colton.jpg'),
                    comment: `"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!"`,
                },
                {
                    id: 2002,
                    name: 'Irene Roberts',
                    verifiedBuyer: true,
                    image: require('@/assets/images/image-irene.jpg'),
                    comment: `"Customer service is always excellent and very quick turn around. completely delighted with the simplicity of the purchase and the speed of delivery."`,
                },
                {
                    id: 2003,
                    name: 'Anne Wallace',
                    verifiedBuyer: true,
                    image: require('@/assets/images/image-anne.jpg'),
                    comment: `"Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"`,
                },
            ],
        }
    },
}
</script>

<style lang="scss">
.reviews-container {
    margin-top: 3.2em;
    color: $color--base;
    text-align: left;

    .review-display {
        @include flex;
        background-color: $color--primary;
        font-size: $font-size--small;
        padding: 2.7em 2.2em;
        margin: 2em 0;
        border-radius: 8px;
    }

     .review-image {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 1.6em;
    }

    .review-name {
      font-weight: $font-weight--bold;
      flex: 1;
      line-height: 20px;

      .review-verified-buyer {
          display: block;
          color: $color--accent;
          font-weight: $font-weight--regular;
        } 
    }

    .review-comment {
      line-height: 22px;
      margin-top: 1.5em;
    }
}

// responsive styles
@include mq($width-sm) {
    .reviews-container {
        margin: 5em 2em;
    }  
}

@include mq($width-md) {
    .reviews-container {
        @include flex;
        margin: 3em auto;
        height: 300px;

        .review-display {
            flex: 1;
            margin: 1em;
            padding: 2em;

            &:first-of-type {
                align-self: flex-start;
            }

            &:last-of-type {
                align-self: flex-end;
            }
        }
    }
}

@include mq($width-lg) {
    .reviews-container {
        height: 266px;
    } 
}
</style>