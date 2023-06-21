const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      url: "https://www.vuemastery.com/",
      inStock: false,
      outOfStockImage:'./assets/images/out-of-stock-img.jpg',
      inventory: 10,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        { id: 1, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart++;
    },
    removeFromCart() {
      if (this.cart >= 1) {
        this.cart--;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
