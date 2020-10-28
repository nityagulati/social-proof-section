app.component('reviews', {
    template: 
    /*html*/
    `<div class="reviews-container">
        <div v-for="review in reviews" class="review-display" :key="review.id">
            <img :src="getImgUrl(review.name)" class="review-image" alt="profile pic">
            <h3 class="review-name">{{ review.name }}</h3>
            <p v-if="review.verifiedBuyer" class="review-verified-buyer">Verified Buyer</p>
            <p class="review-comment">{{ review.comment }}</p>
        </div>
    </div>`,

    data() {
        return {
            reviews: [
                { id: 2001,
                  name: 'Colton Smith',
                  verifiedBuyer: true, 
                  comment: `"We needed the same printed design as the one we had ordered a week prior.
                            Not only did they find the original order, but we also received it in time. Excellent!"` 
                },
                { id: 2002, 
                  name: 'Irene Roberts',
                  verifiedBuyer: true, 
                  comment: `"Customer service is always excellent and very quick turn around. Completely
                            delighted with the simplicity of the purchase and the speed of delivery."` 
                },
                { id: 2003, 
                  name: 'Anne Wallace',
                  verifiedBuyer: true, 
                  comment: `"Put an order with this company and can only praise them for the very high
                            standard. Will definitely use them again and recommend them to everyone!"` 
                },
            ]
        }
    },

    methods: {
        getImgUrl(name) {
            return ('/assets/images/image-' + name.split(' ')[0] + '.jpg')
        }
    }
})