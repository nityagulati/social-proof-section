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