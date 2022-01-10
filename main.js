var eventBus = new Vue();

var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        removeFromCart(id){
            this.cart.splice(id, 1)
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