Vue.component('product-tabs', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <span class="tab"
                :class="{ activeTab: selectedTab === tab }"
                v-for="(tab, index) in tabs" :key="index" 
                @click="selectedTab = tab"
            >
                {{ tab }}
            </span>

            <h2>Reviews</h2>
            <div v-show="selectedTab === 'Reviews'">
                <p v-if="!reviews.length">There are no reviews yet.</p>

                <ul>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.review }}</p>
                        <p>{{ review.rating }}</p>
                    </li>
                </ul>
            </div>

            <product-review
                v-show="selectedTab === 'Make a Review'"
            ></product-review>
        </div>


    `,
    data() {
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    },
})