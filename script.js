// reference :simple stage message board - adapted from link

async function loadProduct() {
  // console.log('hello world');
  const shopContainer = document.querySelector('.shop-container');
  const response = await fetch('product');
  // console.log(response);
  let product;
  if (response.ok) {
    product = await response.json();
  } else {
    product = [{ src: 'failed to load brick' }];
  }
  // console.log(product);
  showProduct(product, shopContainer);
}

window.addEventListener('load', loadProduct);

function showProduct(product, where) {
  for (const item of product) {
    const productBox = document.createElement('div');
    productBox.className = 'product-box';
    const img = document.createElement('img');
    img.src = item.img;
    img.className = 'item-img';
    productBox.append(img);

    const cartButton = document.createElement('button');
    cartButton.textContent = 'add-to-cart';
    cartButton.className = 'add-to-cart';

    productBox.append(cartButton);
    const detail = document.createElement('p');
    detail.className = 'p';
    detail.textContent = `${item.name}, ${item.price}`;
    productBox.append(detail);

    where.append(productBox);
  }
}


// // import * as auth0 from './auth0.js';
// window.addEventListener('load', init);
// let data;
// function init() {
//   // auth0.executeAuth0();
//   // fetchData();
//   // item = productBox();
//   // buyButton();
//   // imgEl = productImages();
//   // subMenuBasket = basket();
//   // addKeyListeners();
//   // price = increseTotal();

// }

// function showProduct(product,where){
//   for( const item of product){
//     const imgEl = document.createElement("img");
//   imgEl.className = "box2";
//   imgEl.src = item.img;
//   divEl.appendChild(textDiv);
//   divEl.appendChild(imgEl);
//   if (shopContainer) {
//     shopContainer.appendChild(divEl);
//   }
//   const divEl = document.createElement("div");
//   divEl.className = "box";

//   const textDiv = document.createElement("div");
//   textDiv.className = "text";
//   const h3El = document.createElement("h3");
//   h3El.className = "name";
//   h3El.textContent = item.name;
// }

// //reference :simple stage message board - adapted from link
// async function loadData() {
//   console.log('hello world');
//   const shopContainer = document.querySelector(".shop-container");
//   const response = await fetch('product');
//   // console.log(response);
//   let product;
//   if (response.ok) {
//     product = await response.json();
//   } else {
//     product = [{ src: 'failed to load brick' }];
//   }
//   showData(product, shopContainer);
// }

// window.addEventListener('load', loadData);


// // import { data } from "../data.js";

// // Cache the DOM
// const basketNum = document.querySelector(".submenu span");
// const subMenuEl = document.querySelector(".submenu");
// const subMenuBasket = document.querySelector(".submenu-basket");
// const shopCartEl = document.querySelector("#shopping-cart");
// const shopContainer = document.querySelector(".shop-container")
//   ? document.querySelector(".shop-container")
//   : "";
// const shopContainerBoxes = document.querySelectorAll(".shop-container > div");
// const totalBalance = document.querySelector(".total-balance");
// const checkoutBtn = document.querySelector("#checkout");
// let count = 0;
// let balance = 0;
// let productsInBasket = [];

// // login & out for admin
// // const login = document.createElement('button');
// // login.id = 'login';
// // login.className = 'account';
// // login.textContent = 'Login';
// // login.disabled = true;
// // loginContainer.append(login);
// // const logout = document.createElement('button');
// // logout.id = 'logout';
// // logout.className = 'account';
// // logout.textContent = 'Logout';
// // logout.disabled = true;
// // loginContainer.append(logout);


// // Setup Localhost Storage
// // for (let i of data) {
// //   let dataKey = i.name;
// //   let dataValue = i.stock;
// //   if (!localStorage.getItem(dataKey)) {
// //     localStorage.setItem(dataKey, dataValue);
// //   }
// // }
// // for (let product of productsInBasket) {
// // }


// // fetch data function
// // export async function fetchData(){
// //   const response = await fetch('/product');
// //   if (response.ok) {
// //     return await response.json();
// //   } else {
// //     throw response;
// //   }
// // }

// // function to display products from data.js file
// function productBox(){
//   // for(let item of data){
//   // const divEl = document.createElement("div");
//   // divEl.className = "box";
//   // }
//   // const textDiv = document.createElement("div");
//   // textDiv.className = "text";
//   // const h3El = document.createElement("h3");
//   // h3El.className = "name";
//   // h3El.innerText = item.name;
// }

// // function buyButton(){
// //   const textDiv = document.querySelector(".text");
// //   console.log(textDiv);
// //  // Buy Now Button
// // const buyNowEl = document.createElement("button");
// // buyNowEl.className = "buy-now";
// // buyNowEl.innerText = "Buy Now";
// // const h3El = document.querySelector(".name");
// //  // textDiv.appendChild(h2El);
// // textDiv.appendChild(h3El);
// // textDiv.appendChild(pEl);
// // textDiv.appendChild(buyNowEl);
// // }

// // function productImages(){
// //   // Product Image
// //   const imgEl = document.createElement("img");
// //   imgEl.className = "box2";
// //   imgEl.src = item.img;

//   // Append Product Text Box, and Product Image to Product Box
//   // divEl.appendChild(textDiv);
//   // divEl.appendChild(imgEl);

//   // If user is on Shop.js page, it appends the Product(s)
//   // if (shopContainer) {
//   //   shopContainer.appendChild(divEl);
// //   }
// // }

// function showProduct(product,where){
//   for( const item of products){
//     const imgEl = document.createElement("img");
//   imgEl.className = "box2";
//   imgEl.src = item.img;
//   divEl.appendChild(textDiv);
//   divEl.appendChild(imgEl);
//   if (shopContainer) {
//     shopContainer.appendChild(divEl);
//   }
//   const divEl = document.createElement("div");
//   divEl.className = "box";

//   const textDiv = document.createElement("div");
//   textDiv.className = "text";
//   const h3El = document.createElement("h3");
//   h3El.className = "name";
//   h3El.textContent = item.name;
// }
// // TURN INTO FUNCTION Display Products from data.js file

// // for (let item of data) {
// //   // Product Box
// //   const divEl = document.createElement("div");
// //   divEl.className = "box";

// //   // Product Box (for Name, price, and Buy Now Button)
// //   const textDiv = document.createElement("div");
// //   textDiv.className = "text";

// //   // const h2El = document.createElement("h2");
// //   //h2El.innerText = "50% OFF";

// //   // Product Name
// //   const h3El = document.createElement("h3");
// //   h3El.innerText = item.name;

// //   // Product Price
// //   const pEl = document.createElement("p");
// //   pEl.innerText = `£ ${item.price}`;
// //   pEl.dataset.price = item.price;
// //   pEl.className = "";

// //   // Buy Now Button
// //   const buyNowEl = document.createElement("button");
// //   buyNowEl.className = "buy-now";
// //   buyNowEl.innerText = "Buy Now";

// //   // textDiv.appendChild(h2El);
// //   textDiv.appendChild(h3El);
// //   textDiv.appendChild(pEl);
// //   textDiv.appendChild(buyNowEl);

// //   // Product Image
// //   const imgEl = document.createElement("img");
// //   imgEl.className = "box2";
// //   imgEl.src = item.img;

// //   // Append Product Text Box, and Product Image to Product Box
// //   divEl.appendChild(textDiv);
// //   divEl.appendChild(imgEl);

// //   // If user is on Shop.js page, it appends the Product(s)
// //   if (shopContainer) {
// //     shopContainer.appendChild(divEl);
// //   }
// // }

// // Open/Close Basket
// function basket(){

// if (subMenuBasket) {
//   subMenuBasket.addEventListener("click", function () {
//     if (shopCartEl.classList.contains("active")) {
//       shopCartEl.classList.remove("active");
//     } else {
//       shopCartEl.classList.add("active");
//     }
//   });

//   document.addEventListener("click", function (event) {
//     if (
//       event.target.id === "shopping-cart" ||
//       event.target.classList.contains("submenu-basket") ||
//       event.target.classList.contains("u-full-width") ||
//       event.target.classList.contains("c-item") ||
//       event.target.classList.contains("c-name") ||
//       event.target.classList.contains("cart") ||
//       event.target.classList.contains("c-del") ||
//       event.target.classList.contains("c-qty") ||
//       event.target.classList.contains("c-total")
//     ) {
//     } else {
//       shopCartEl.classList.remove("active");
//     }
//   });
// }
// }

// function addKeyListeners(){
// if (shopCartEl) {
//   shopCartEl.addEventListener("click", removeEl);
//   // checkoutBtn.addEventListener("click", checkout);
// }
// }

// // Calculates the Total Balance inside Basket
// function increaseTotal(price) {
//   balance += price;
//   totalBalance.textContent = balance.toFixed(2);
// }

// function checkStock(elem) {
//   let result = false;

//   for (let i in localStorage) {
//     let dataName = i;
//     let dataStock = localStorage.getItem(i);

//     if (dataName == elem && +dataStock > 0) {
//       dataStock--;
//       localStorage.setItem(dataName, dataStock);
//       result = true;
//     }
//   }
//   return result;
// }

// // Removes all elemnents inside Basket (only when user uses Checkout)
// function removeAll() {
//   while (tableBody.hasChildNodes()) {
//     tableBody.removeChild(tableBody.lastChild);
//   }
// }

// function checkout() {
//   // Alert Message
//   checkoutPopUp();
//   // reset total balance
//   balance = 0;
//   totalBalance.textContent = 0;
//   // reset basket Count
//   count = 0;
//   basketNum.textContent = count;
//   // remove all items in basket
//   removeAll();
// }

// // Simulates the Checkout | Checkout PopUp
// function checkoutPopUp() {
//   const divEl = document.createElement("div");
//   const h2El = document.createElement("h2");
//   const h3El = document.createElement("h3");
//   const closeBtn = document.createElement("button");

//   h2El.textContent = "Your purchase is processed";
//   h3El.textContent = `Your total costs are: ${totalBalance.textContent}`;
//   divEl.className = "popup-menu";
//   closeBtn.textContent = "Close";
//   closeBtn.className = "closeBtn";

//   divEl.appendChild(h2El);
//   divEl.appendChild(h3El);
//   divEl.appendChild(closeBtn);

//   document.querySelector("body").appendChild(divEl);
// }

// // Closes the Pupup when user clicks CLOSE button
// document.addEventListener("click", function (event) {
//   if (event.target.classList.contains("closeBtn")) {
//     event.target.parentNode.parentNode.removeChild(event.target.parentNode);
//   }
// });

// // load: () => {
// //   console.log("Hey");
// // };


// // ADMIN PAGE JS

// // let table = document.getElementById('stock-level');
// // let updatingTd;

// // table.addEventListener("click", function(event){

// //   let result = event.target.closest('update-cancel,.update-submit,td');

// //   if (!table.contains(results)) return;

// //   if(result.className=='update-cancel'){
// //     completeTdUpdate(UpdatingTd.elem,false);
// //   } else if (reult.className == 'update-submit'){
// //     completeTdUpdate(updatingTd.elem, true);
// //   }else if (result.nodeName == 'TD'){
// //     if (updatingTd) return;

// //     makeTdCustomisable(result);
// //   }
// // });

// // function makeTdCustomisable(td) {
// //   updatingTd = {
// //     elem: td,
// //     data: td.innerHTML
// //   };

// //   td.classList.add('update-td');

// //   let textArea = document.createElement('textarea');
// //   textArea.style.width = td.clientWidth + 'px';
// //   textArea.style.height = td.clientHeight + 'px';
// //   textArea.className = 'update-area';

// //   textArea.value = td.innerHTML;
// //   td.innerHTML = '';
// //   td.appendChild(textArea);
// //   textArea.focus();

// //   td.insertAdjacentHTML("beforeEnd",
// //     '<div class="update-controls"><button class="update-ok">OK</button><button class="update-cancel">CANCEL</button></div>'
// //   );
// // }

// function finishTdUpdate(td, isOk) {
//   if (isOk) {
//     td.innerHTML = td.firstChild.value;
//   } else {
//     td.innerHTML = updatingTd.data;
//   }
//   td.classList.remove('update-td');
//   updatingTd = null;
// }
// }
