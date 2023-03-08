const cart = {
  hPdt: null,
  hItems: null,
  items: {},
  iURL: 'images/',

  save: () => {
    localStorage.setItem('cart', JSON.stringify(cart.items));
  },

  load: () => {
    cart.items = localStorage.getItem('cart');
    if (cart.items == null) {
      cart.items = {};
    } else {
      cart.items = JSON.parse(cart.items);
    }
  },

  nuke: () => {
    cart.items = {};
    cart.updateCartNumber(0);
    localStorage.removeItem('cart');
    cart.list();
  },


  init: () => {
    cart.hPdt = document.querySelector('.shop-container');
    cart.hItems = document.getElementById('cart-items');

    cart.hPdt.innerHTML = '';
    const template = document.getElementById('template-product').content;
    let p;
    let item;
    let part;

    for (const id in products) {
      p = products[id];
      item = template.cloneNode(true);
      item.querySelector('.p-img').src = cart.iURL + p.img;
      item.querySelector('.p-name').textContent = p.name;
      item.querySelector('.p-desc').textContent = p.desc;
      item.querySelector('.p-price').textContent = '£' + p.price.toFixed(2);
      item.querySelector('.p-add').onclick = () => {
        cart.add(id);
      };
      cart.hPdt.appendChild(item);
    }

    cart.load();

    cart.list();

    cart.updateCartNumber();
  },

  // LIST CURRENT CART ITEMS
  list: () => {
    cart.hItems.innerHTML = '';
    let item;
    let part;
    let pdt;
    let empty = true;
    for (const key in cart.items) {
      if (cart.items.hasOwnProperty(key)) {
        empty = false;
        break;
      }
    }

    if (empty) {
      item = document.createElement('div');
      item.innerHTML = 'Cart is empty';
      cart.hItems.appendChild(item);
    } else {
      const template = document.getElementById('template-cart').content;
      let p;
      let total = 0;
      let subtotal = 0;
      for (const id in cart.items) {
        p = products[id];
        item = template.cloneNode(true);
        item.querySelector('.c-del').onclick = () => {
          cart.remove(id);
        };
        item.querySelector(
          '.c-image',
        ).innerHTML = `<img src="${p.img}" alt="Product Image" />`;
        item.querySelector('.c-name').textContent = p.name;
        item.querySelector('.c-qty').value = cart.items[id];
        item.querySelector('.c-qty').onchange = function () {
          cart.change(id, this.value);
        };
        cart.hItems.appendChild(item);

        subtotal = cart.items[id] * p.price;
        total += subtotal;
      }

      item = document.createElement('div');
      item.className = 'c-total';
      item.id = 'c-total';
      item.innerHTML = 'TOTAL: £' + total.toFixed(2);
      cart.hItems.appendChild(item);

      item = document
        .getElementById('template-cart-checkout')
        .content.cloneNode(true);
      cart.hItems.appendChild(item);
    }
  },
  add: (id) => {
    if (!cart.checkStock(products[id].name)) {
      return;
    }
    if (cart.items[id] === undefined) {
      cart.items[id] = 1;
    } else {
      cart.items[id]++;
    }
    cart.save();
    cart.list();
    cart.updateCartNumber();
  },

  change: (pid, qty) => {
    if (qty <= 0) {
      delete cart.items[pid];
      cart.save();
      cart.list();
    }

    else {
      cart.items[pid] = qty;
      let total = 0;
      for (const id in cart.items) {
        total += cart.items[id] * products[id].price;
        document.getElementById('c-total').innerHTML = 'TOTAL: $' + total;
      }
    }
  },

  // REMOVE ITEM FROM CART
  remove: (id) => {
    delete cart.items[id];
    cart.save();
    cart.list();
    cart.updateCartNumber();
  },

  updateCartNumber: (num) => {
    const cartNumEl = document.getElementById('cartNum');
    const cartItems = localStorage.getItem('cart');
    const cartItemsObj = JSON.parse(cartItems);
    let cartNumTotal = 0;

    if (cartItems) {
      for (const [key, value] of Object.entries(cartItemsObj)) {
        cartNumTotal += value;
      }
    }

    if (num === 0) {
      cartNumEl.innerText = 0;
    } else {
      cartNumEl.innerText = cartNumTotal;
    }
  },

  checkStock: (product) => {
    const productStock = localStorage.getItem(product);
    if (productStock && productStock > 0) {
      console.log(localStorage.getItem(product));
      return true;
    } else {
      return false;
    }
  },
  checkoutPopUp: () => {
    const divEl = document.createElement('div');
    const h2El = document.createElement('h2');
    const h3El = document.createElement('h3');
    const closeBtn = document.createElement('button');

    h2El.textContent = 'Your purchase is processed';
    divEl.className = 'popup-menu';
    closeBtn.textContent = 'Close';
    closeBtn.className = 'closeBtn';

    divEl.appendChild(h2El);
    divEl.appendChild(h3El);
    divEl.appendChild(closeBtn);

    document.querySelector('body').appendChild(divEl);
  },
  checkout: () => {
    cart.checkoutPopUp();
  },
};
window.addEventListener('DOMContentLoaded', cart.init);



// const cart = {
//   // (A) PROPERTIES
//   hPdt: null, // html products list
//   hItems: null, // html current cart
//   items: {}, // current items in cart
//   iURL: 'images/', // product image url folder

//   // (B) LOCALSTORAGE CART
//   // (B1) SAVE CURRENT CART INTO LOCALSTORAGE
//   save: () => {
//     localStorage.setItem('cart', JSON.stringify(cart.items));
//   },

//   // (B2) LOAD CART FROM LOCALSTORAGE
//   load: () => {
//     cart.items = localStorage.getItem('cart');
//     if (cart.items == null) {
//       cart.items = {};
//     } else {
//       cart.items = JSON.parse(cart.items);
//     }
//   },

//   // (B3) EMPTY ENTIRE CART
//   nuke: () => {
//     cart.items = {};
//     cart.updateCartNumber(0);
//     localStorage.removeItem('cart');
//     cart.list();
//   },

//   // (C) INITIALIZE
//   init: () => {
//     // (C1) GET HTML ELEMENTS
//     cart.hPdt = document.querySelector('.shop-container');
//     cart.hItems = document.getElementById('cart-items');

//     // (C2) DRAW PRODUCTS LIST
//     cart.hPdt.innerHTML = '';
//     const template = document.getElementById('template-product').content;
//     let p;
//     let item;
//     // part;

//     // fetch products
//     for (const id in product) {
//       p = product[id];
//       item = template.cloneNode(true);
//       item.querySelector('.p-img').src = cart.iURL + p.img;
//       item.querySelector('.p-name').textContent = p.name;
//       item.querySelector('.p-desc').textContent = p.desc;
//       item.querySelector('.p-price').textContent = '£' + p.price.toFixed(2);
//       item.querySelector('.p-add').onclick = () => {
//         cart.add(id);
//       };
//       cart.hPdt.appendChild(item);
//     }

//     // (C3) LOAD CART FROM PREVIOUS SESSION
//     cart.load();

//     // (C4) LIST CURRENT CART ITEMS
//     cart.list();

//     // (C5) DISPALY CART LENGTH
//     cart.updateCartNumber();
//   },

//   // (D) LIST CURRENT CART ITEMS (IN HTML)
//   list: () => {
//     // (D1) RESET
//     cart.hItems.innerHTML = '';
//     let item;
//     let part;
//     let pdt;
//     let empty = true;
//     for (const key in cart.items) {
//       if (cart.items.hasOwnProperty(key)) {
//         empty = false;
//         break;
//       }
//     }

//     // (D2) CART IS EMPTY
//     if (empty) {
//       item = document.createElement('div');
//       item.innerHTML = 'Cart is empty';
//       cart.hItems.appendChild(item);
//     }

//     // (D3) CART IS NOT EMPTY - LIST ITEMS
//     else {
//       const template = document.getElementById('template-cart').content;
//       let p;
//       let total = 0;
//       let subtotal = 0;
//       for (const id in cart.items) {
//         // (D3-1) PRODUCT ITEM
//         p = product[id];
//         item = template.cloneNode(true);
//         item.querySelector('.c-del').onclick = () => {
//           cart.remove(id);
//         };
//         item.querySelector(
//           '.c-image',
//         ).innerHTML = `<img src="${p.img}" alt="Product Image" />`;
//         item.querySelector('.c-name').textContent = p.name;
//         item.querySelector('.c-qty').value = cart.items[id];
//         item.querySelector('.c-qty').onchange = function () {
//           cart.change(id, this.value);
//         };
//         cart.hItems.appendChild(item);

//         // (D3-2) SUBTOTAL
//         subtotal = cart.items[id] * p.price;
//         total += subtotal;
//       }

//       // (D3-3) TOTAL AMOUNT
//       item = document.createElement('div');
//       item.className = 'c-total';
//       item.id = 'c-total';
//       item.innerHTML = 'TOTAL: £' + total.toFixed(2);
//       cart.hItems.appendChild(item);

//       // (D3-4) EMPTY & CHECKOUT
//       item = document
//         .getElementById('template-cart-checkout')
//         .content.cloneNode(true);
//       cart.hItems.appendChild(item);
//     }
//   },

//   // (E) ADD ITEM INTO CART
//   add: (id) => {
//     if (!cart.checkStock(product[id].name)) {
//       return;
//     }
//     if (cart.items[id] == undefined) {
//       cart.items[id] = 1;
//     } else {
//       cart.items[id]++;
//     }
//     cart.save();
//     cart.list();
//     cart.updateCartNumber();
//   },

//   // (F) CHANGE QUANTITY
//   change: (pid, qty) => {
//     // (F1) REMOVE ITEM
//     if (qty <= 0) {
//       delete cart.items[pid];
//       cart.save();
//       cart.list();
//     }

//     // (F2) UPDATE TOTAL ONLY
//     else {
//       cart.items[pid] = qty;
//       let total = 0;
//       for (const id in cart.items) {
//         total += cart.items[id] * product[id].price;
//         document.getElementById('c-total').innerHTML = 'TOTAL: $' + total;
//       }
//     }
//   },

//   // (G) REMOVE ITEM FROM CART
//   remove: (id) => {
//     delete cart.items[id];
//     cart.save();
//     cart.list();
//     cart.updateCartNumber();
//   },

//   updateCartNumber: (num) => {
//     const cartNumEl = document.getElementById('cartNum');
//     const cartItems = localStorage.getItem('cart');
//     const cartItemsObj = JSON.parse(cartItems);
//     let cartNumTotal = 0;

//     if (cartItems) {
//       for (const [key, value] of Object.entries(cartItemsObj)) {
//         cartNumTotal += value;
//       }
//     }

//     if (num == 0) {
//       cartNumEl.innerText = 0;
//     } else {
//       cartNumEl.innerText = cartNumTotal;
//     }
//   },

//   checkStock: (product) => {
//     const productStock = localStorage.getItem(product);
//     if (productStock && productStock > 0) {
//       console.log(localStorage.getItem(product));
//       return true;
//     } else {
//       return false;
//     }
//   },
//   checkoutPopUp: () => {
//     const divEl = document.createElement('div');
//     const h2El = document.createElement('h2');
//     const h3El = document.createElement('h3');
//     const closeBtn = document.createElement('button');

//     h2El.textContent = 'Your purchase is processed';
//     divEl.className = 'popup-menu';
//     closeBtn.textContent = 'Close';
//     closeBtn.className = 'closeBtn';

//     divEl.appendChild(h2El);
//     divEl.appendChild(h3El);
//     divEl.appendChild(closeBtn);

//     document.querySelector('body').appendChild(divEl);
//   },

//   // (H) CHECKOUT
//   checkout: () => {
//     // SEND DATA TO SERVER
//     // CHECKS
//     // SEND AN EMAIL
//     // RECORD TO DATABASE
//     // PAYMENT
//     // WHATEVER IS REQUIRED
//     // alert("YOUR ORDER HAS BEEN PROCESSED!");
//     cart.checkoutPopUp();
//     cart.nuke();

//     /*
//     var data = new FormData();
//     data.append("cart", JSON.stringify(cart.items));
//     data.append("products", JSON.stringify(products));

//     fetch("SERVER-SCRIPT", { method:"POST", body:data })
//     .then(res=>res.text()).then((res) => {
//       console.log(res);
//     })
//     .catch((err) => { console.error(err); });
//     */
//   },
// };
// window.addEventListener('DOMContentLoaded', cart.init);
