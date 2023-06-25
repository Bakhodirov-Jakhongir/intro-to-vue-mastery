const app = Vue.createApp({
  data() {
    return {
      cart: 0,
      premium: true,
    };
  },
  methods: {
    updateCart() {
      this.cart++;
    },
    removeCart() {
      if (this.cart >= 1) this.cart--;
    },
  },
});