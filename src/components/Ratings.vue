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