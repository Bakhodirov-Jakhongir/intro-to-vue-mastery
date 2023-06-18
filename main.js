const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      url: "https://www.vuemastery.com/",
      inStock:false,
      inventory:0 ,
      onSale:true
    };
  },
});
