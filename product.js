

    Vue.component('product',{
        props : {
            premium : {
                type: Boolean,
                required: true
            }
        },
        template: `
        <div type="text/x-template" id='product' :premium="premium">
            <div class="product">
                <div class="product-image">
                    <img v-bind:src="image" alt="green-shocks" class="">
                </div>
                <div class="product-info">
                    <h1>{{ title }}</h1>
                    <p v-if="inStock > 10">In Stock</p>
                    <p v-else-if="inStock <= 10 && inStock > 0">Almost Sold Out!</p>
                    <p v-else>Out Of Stock</p>
                    <p>Shipping: {{ shipping }}</p>
            
                    <ul>
                        <li v-for="detail in details">{{ detail }}</li>
                    </ul>
            
                    <div v-for="(variant, index) in variants" :key="variant.variantId" class="color-box"
                        :style="{backgroundColor: variant.variantColor}" @mouseover="updateProduct(index)">
                    </div>
            
                    <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
                        Add to Cart
                    </button>

                     <button v-on:click="removeFromCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">
                        Remove from Cart
                    </button>
                </div>
            </div>

            <product-tabs :reviews="reviews"></product-tabs>

        </div>
        `,
        data() 
            {
                return {
                    brand: 'Vue Mastery',
                    product : 'Socks',
                    // image: './assets/vmSocks-green-onWhite.jpg',
                    selectedVariant : 0,
                    // inventory : 100,
                    details : ["80% cotton", "20% polyester", "Gender-neutral"],
                    // inStock: true,
                    variants: 
                        [
                            {
                                variantId: 2234,
                                variantColor: "green",
                                variantImage: './assets/vmSocks-green-onWhite.jpg',
                                variantQuantity : 10
                            },
                            {
                                variantId : 2235,
                                variantColor : "blue",
                                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                                variantQuantity : 0
                            }
                        ],
                    reviews: []
                }
            },
        methods : {
            addToCart : function () {
                this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
            },
             removeFromCart : function () {
                this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
            },
            // updateProduct : function (variantImage) {
            //     this.image = variantImage
            // },
            updateProduct : function(index){
                this.selectedVariant = index
            }
        },
        computed : {
            title() {
                return this.brand + " " + this.product
            },
            image() {
                return this.variants[this.selectedVariant].variantImage
            },
            inStock() {
                return this.variants[this.selectedVariant].variantQuantity
            },
            shipping() {
                if (this.premium) {
                    return "Free"
                } else {
                    return 2.99
                }
            }
        },
        mounted() {
            eventBus.$on('review-submitted', productReview => {
                this.reviews.push(productReview)
            })
        }
    })
