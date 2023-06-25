app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template:
    /*html*/
    `
    <div class="product-display"> 
        <div class="product-container">
          <div class="product-image">
            <img :class="{'out-of-stock-img':!inStock}" v-bind:src="image" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="inventory > 10">In Stock</p>
            <p v-if="inventory <= 10 && inventory > 0">Almost sold out!</p>
            <p v-else>Out of Stock</p>
            <p>{{sale}}</p>
            <product-details :details="details"></product-details>
            <ul>
              <li v-for="(size,index) in sizes" :key="index">{{size}}</li>
            </ul>
            <p>Shipping: {{ shipping }}</p>
            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateProductVariant(index)"
              class="color-circle"
              :style="{'background-color': variant.color}"
            >
            </div>
            <button
              class="button"
              @click="addToCart"
              :disabled="!inStock"
              :class="{disabledButton:!inStock}"
            >
              Add to Cart
            </button>
            <button class="button" @click="removeFromCart">
              Remove from Cart
            </button>
            <a :href="url">Made by Vue Mastery</a>
          </div>
        </div>
    </div>`,
  data() {
    return {
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
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id);
    },
    removeFromCart() {
      this.$emit("remove-from-cart",this.variants[this.selectedVariant].id);
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
    sale() {
      if (this.onSale) return this.brand + " " + this.product + " is on sale";
      return " ";
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
