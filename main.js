const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      url: "https://www.vuemastery.com/",
      inStock: false,
      inventory: 0,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 1, color: "green" },
        { id: 2, color: "blue" },
      ],
      sizes: ["S", "M", "L", "XL"],
    };
  },
  methods:{
    addCart() {
      this.cart++
    }
  },
})
