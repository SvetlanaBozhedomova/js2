const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// let getRequest = (url, cb) => {
//     let xhr = new XMLHttpRequest();
//     // window.ActiveXObject -> xhr = new ActiveXObject()
//     xhr.open("GET", url, true);
//     xhr.onreadystatechange = () => {
//         if(xhr.readyState === 4){
//             if(xhr.status !== 200){
//                 console.log('Error');
//             } else {
//                 cb(xhr.responseText);
//             }
//         }
//     };
//     xhr.send();
// };

class ProductsList {
  constructor(container = '.products') {
    this.container = container;
    this.goods = [];     //массив товаров из JSON документа
    this._getProducts()
      .then(data => {    //data - объект js
        this.goods = [...data];
        //console.log(this.goods);
        this.render()
      });
  }
  // _fetchProducts(cb){
  //     getRequest(`${API}/catalogData.json`, (data) => {
  //         this.goods = JSON.parse(data);
  //         console.log(this.goods);
  //         cb();
  //     })
  // }
  _getProducts() {
    return fetch(`${API}/catalogData.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      });
  }
  //calcSum() {
  //  return this.allProducts.reduce((accum, item) => accum += item.price, 0);
  //}
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new ProductItem(product);
      block.insertAdjacentHTML('beforeend', productObj.render());
    }
  }
}

class ProductItem {
  constructor(product, img = 'https://via.placeholder.com/200x150') {
    this.title = product.product_name;
    this.price = product.price;
    this.id = product.id_product;
    this.img = img;
  }
  render() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
  }
}

let list = new ProductsList();

class Basket {
  constructor(container = '.cart') {
    this.container = container;
    this.goods = [];     //массив товаров из JSON документа
    this._clickBasket();
    this._getBasketItems()
      .then(data => {    //data - объект js
        this.goods = [...data.contents];
        //console.log(this.goods);
        this.render();
      });
  }
  _clickBasket() {
    document.querySelector('.btn-cart').addEventListener('click', () => {
      document.querySelector(this.container).classList.toggle('invisible');
    });
  }
  _getBasketItems() {
    return fetch(`${API}/getBasket.json`)
      .then(result => result.json())
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const productObj = new BasketItem();
      block.insertAdjacentHTML('beforeend', productObj.render(product));
    }
  }
}

class BasketItem {
  render(product, img = 'https://via.placeholder.com/200x150') {
    return `<div class="cart-item" data-id="${product.id_product}">
              <img src="${img}" alt="Some img">
              <div class="cart-item-desc">
                <h3>${product.product_name}</h3>
                <p>${product.price} $</p>
                <p>Quantity: ${product.quantity}</p>
              </div>
              <button class="del-btn">X</button>
            </div>`;
  }
}

let cartList = new Basket();
