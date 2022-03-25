//класс списка товаров магазина
class ProductList {
  constructor(container = '.products') {
    this.container = container;  //селектор div'а для всех товаров 
    this.goods = [];      //массив для списка товаров
    this._fetchProducts(); //рекомендация, чтобы метод был вызван в текущем классе
    this.render(); //вывод товаров на страницу, сразу вызывается
  }
  //заполнить goods товарами
  _fetchProducts() {
    this.goods = [
      { id: 1, title: 'Notebook', price: 2000 },
      { id: 2, title: 'Mouse', price: 20 },
      { id: 3, title: 'Keyboard', price: 200 },
      { id: 4, title: 'Gamepad', price: 50 },
    ];
  }
  //записать в html весь список товаров   
  render() {
    const block = document.querySelector(this.container);
    for (let product of this.goods) {
      const item = new ProductItem(product);
      block.insertAdjacentHTML("beforeend", item.render());
    }
  }
  //посчитать суммарную стоимость всех товаров
  calcTotalCost() {
    let sum = 0;
    this.goods.forEach(product => sum = sum + product.price);
    return sum;
  }
}

//класс одного товара магазина
class ProductItem {
  constructor(product, img = 'img/pict.jpg') {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
    this.img = img;
  }
  //записать html одного товара
  render() {
    return `<div class="product-item">
              <img src="${this.img}">
              <h3>${this.title}</h3>
              <p>${this.price}</p>
              <button class="buy-btn">Купить</button>
          </div>`
  }
}

//класс корзины (списка выбранных товаров)
class Cart {
  constructor() {
    this.cartGoods = [];  //список товаров корзины
  }
  clearCart() { };  //очистить корзину
  addProduct(product) { };  //добавить product в корзину
  deleteProduct(product) { };  //удалить product из корзины
  calcTotalCost() { };   //посчитать стоимость товаров корзины
  showCart() { };    //показать товары корзины
}

//класс одного товара корзины
class CartItem {
  constructor(product) {
    this.title = product.title;
    this.id = product.id;
    this.price = product.price;
  }
  showProduct() { };  //показать инф-цию о продукте
}

let list = new ProductList();
console.log(list.calcTotalCost());

/* let btn = document.querySelector('.btn-cart');
btn.addEventListener('click', () => console.log(list.calcTotalCost())); */
