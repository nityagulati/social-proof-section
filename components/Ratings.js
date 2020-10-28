app.component('ratings', {
    template: 
    /*html*/
    `<div class = "ratings-container">
        <div v-for="rating in ratings"
             :key="rating.id"
             class="ratings-display">
            <img v-for="index in rating.stars" :key="index" :src="starImage">
            <p class="ratings-desc">Rated {{ rating.stars }} Stars in {{ rating.rater }}</p>
        </div>
    </div>`,

    data() {
        return {
            starImage: '/assets/images/icon-star.svg',
            ratings: [ 
                { id: 1001, stars: 5, rater: 'Reviews'},
                { id: 1002, stars: 5, rater: 'Report Guru'},
                { id: 1003, stars: 5, rater: 'BestTech'},
            ]
        }
    }
})