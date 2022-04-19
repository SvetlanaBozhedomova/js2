Vue.component('products', {
  data() {
    return {
      filtered: [],
      products: [],
    }
  },
  mounted() {
    this.$parent.getJson(`/api/products`)
      .then(data => {
        for (let item of data) {
          this.$data.products.push(item);
          this.$data.filtered.push(item);
        }
      });
  },
  methods: {
    filter(userSearch) {
      let regexp = new RegExp(userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    }
  },
  template: `
    <div class="products-items">
      <product v-for="item of filtered" 
        :key="item.id_product" 
        :product="item"
        @add-product="$parent.$refs.cart.addProduct">
      </product>
    </div> `
});
// :img="imgProduct" 
// @add-product="$parent.$refs.cart.addProduct"  

Vue.component('product', {
  props: ['product', 'img'],
  template: `
    <article class="products-item">
      <a href="product.html">  
        <img class="products-item-photo" 
          :src="product.img_product" alt="photo">
        <div class="products-item-text-wrp">
          <h3 class="products-item-title">{{product.product_name}}</h3>
          <p class="products-item-text">Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.</p>
          <p class="products-item-price">&dollar;{{product.price}}</p>
        </div>
      </a>  
      <button class="products-item-btn"
        @click="$emit('add-product', product)">
        <img src="img/addcart.png" alt="cart">
        <span>Add to Cart</span>
      </button>
    </article> `
});
// src="img/products/product1.png" 
