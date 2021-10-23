const app = Vue.createApp({
    data() {
        return {
            product:"Something new",
            image:'./assets/images/socks_green.jpg',
            inStock:false,
            cart:0,
            details:['80% cotton' , '20% polyester' , "Gender-neutral"],
            variants:[
                {
                    variantId:2234,
                    variantColor:'green',
                    variantImage:'./assets/images/socks_green.jpg',
                },
                {
                    variantId:2235,
                    variantColor:'blue',
                    variantImage:'./assets/images/socks_blue.jpg'
                }
            ]
        }
    },
    methods: {
        addCart() {
            this.cart+=1;
        },
        updateProduct(variantImage) {
            this.image = variantImage
        }
    },
})

app.mount('#app');
