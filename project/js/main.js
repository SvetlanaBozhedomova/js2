const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    filtered: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    cartUrl: '/getBasket.json',
    cartItems: [],
    imgCart: 'https://via.placeholder.com/50x100',
    userSearch: '',
    show: false
  },
  methods: {
    filter() {
      const regexp = new RegExp(this.userSearch, 'i');
      this.filtered = this.products.filter(product => regexp.test(product.product_name));
    },
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(element) {
      //console.log('addProduct: ' + element.id_product);
      this.getJson(`${API}/addToBasket.json`)
        .then(data => {
          if (data.result === 1) {
            let find = this.cartItems.find(
              el => el.id_product === element.id_product);
            if (find) {
              find.quantity++;
            } else {
              let newElem = Object.assign({ quantity: 1 }, element);
              this.cartItems.push(newElem);
            }
          } else {
            alert('Error: result != 1');
          }
        })
    },
    removeProduct(element) {
      //console.log('removeProduct: ' + element.id_product);
      this.getJson(`${API}/deleteFromBasket.json`)
        .then(data => {
          if (data.result === 1) {
            if (element.quantity > 1) {
              element.quantity--;
            } else {
              this.cartItems.splice(this.cartItems.indexOf(element), 1);
            }
          } else {
            alert('Error: result != 1');
          }
        })
    }
  },
  mounted() {
    this.getJson(`${API + this.cartUrl}`)
      .then(data => {
        //console.log(data.contents);
        //console.log([...data.contents]);
        for (let el of data.contents) {
          this.cartItems.push(el);
        };
      });
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      });
    this.getJson(`getProducts.json`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
          this.filtered.push(el);
        }
      });
  }
});