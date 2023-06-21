const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      url: "https://www.vuemastery.com/",
      inventory: 10,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% polyester"],
      variants: [
        {
          id: 1,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 20,
        },
        {
          id: 2,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 1,
        },
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
    updateProductVariant(index) {
      this.selectedVariant = index;
      console.log(index);
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
  },
});
