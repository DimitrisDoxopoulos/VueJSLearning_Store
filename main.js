var app = new Vue({
    el: '#app',
    data: {
        product : 'Socks',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory : 100,
        details : ["80% cotton", "20% polyester", "Gender-neutral"],
        inStock: true,
        variants: 
            [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: './assets/vmSocks-green-onWhite.jpg'
                },
                {
                    variantId : 2235,
                    variantColor : "blue",
                    variantImage: './assets/vmSocks-blue-onWhite.jpg'
                }
            ],
        cart: 0,
        
    },
    methods : {
        addToCart : function () {
            this.cart += 1
        },
        updateProduct : function (variantImage) {
            this.image = variantImage
        }
    }
})

/* 
    new Vue creates a new vue instance. This is the root of the Vue application.
    It is created by passing an {options} object into it that has a variety of optional
    properties which are used to store data and perform actions.

    In order to form relationships between the Vue instance and parts of the DOM, we use the 
    property el:. Here we specify that we want to plug our instance into the div with the
    id of app.

    The Vue instance can also have a property for data. Here we are giving our instance the value
    Socks. In order to display it, we use {{ }} to surround the variable (see index.html)

    The double curly brace syntax ( {{ }} ) is called an expression.
    Used to produce or evaluate a value
    Examples:
        {{ product + '?' }}
        {{ firstName + ' ' + lastName }}
        {{ clicked ? true : false }}
        {{ message.split('').reverse().join('') }}
    
    Anywhere that relies on o ur instance's data, will update when that data changes
*/