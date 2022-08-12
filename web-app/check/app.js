
// variables and constants
const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');
const cartCountInfo = document.getElementById('cart-count-info');
const closeBtn = document.getElementById('close-btn');
let cartItemID = 1;

eventListeners();

// all event listeners
function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
        // newloadJSON();
        loadCart();
    });
    // toggle navbar when toggle button is clicked
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('show-navbar');
    });

    // show/hide cart container
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container');
    });

    // add to cart
    productList.addEventListener('click', purchaseProduct);

    // delete from cart
    cartList.addEventListener('click', deleteProduct);
}



// update cart info
function updateCartInfo() {
    let cartInfo = findCartInfo();
    // checkDiscount(cartInfo);
    cartCountInfo.textContent = cartInfo.productCount;
    console.log(cartCountInfo.textContent);
    cartTotalValue.textContent = cartInfo.total;
}

const checkDiscount = (item) => {
    console.log(item);
    console.log('hi')
}

async function loadJSON() {

    const getData = await fetch('furniture.json', {


    });
    // console.log(getData);
    const data = await getData.json();
    console.log(data);
    let htmlData = '';
    data.forEach(product => {
        htmlData += ` <div class = "product-item">
        <div class = "product-img">
            <img src = "images/${product.Image}" alt = "product image">
           <button type = "button" class = "add-to-cart-btn">
           <a href="medicine/${product.link}">   <i class = "fas fa-shopping-cart"></i>Add To Cart</a>
              </button>
          </div>

          <div class = "product-content">
          <a href="medicine/${product.link}">      <h3 class = "product-name">${product.Name}</h3></a>
              <span class = "product-category">${product.Description}</span>
              <p class = "product-price">$${product.Price}</p>
          </div>
      </div>`
            ;
    })
    productList.innerHTML = htmlData;
    // console.log(htmlData);


}
// purchase product
function purchaseProduct(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        let product = e.target.parentElement.parentElement;
        // console.log(product);
        getProductInfo(product);
    }
}

// get product info after add to cart button click
function getProductInfo(product) {
    let productInfo = {
        id: cartItemID,
        imgSrc: product.querySelector('.product-img img').src,
        name: product.querySelector('.product-name').textContent,
        category: product.querySelector('.product-category').textContent,
        price: product.querySelector('.product-price').textContent
    }
    cartItemID++;
    // console.log(productInfo);
    addToCartList(productInfo);
    saveProductInStorage(productInfo);
}

// add the selected product to the cart list
function addToCartList(product) {
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML = `
        <img src = "${product.imgSrc}" alt = "product image">
        <div class = "cart-item-info">
            <h3 class = "cart-item-name">${product.name}</h3>
            <span class = "cart-item-price">${product.price}</span>
        </div>
        <button type = "button" class = "cart-item-del-btn">
        <i class = "fas fa-times"></i>
    </button>
       
       
    `;
    console.log(cartItem);
    cartList.appendChild(cartItem);
}

// save the product in the local storage
function saveProductInStorage(item) {
    let products = getProductFromStorage();
    products.push(item);
    localStorage.setItem('products', JSON.stringify(products));
    updateCartInfo();
}

// get all the products info if there is any in the local storage
function getProductFromStorage() {
    return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
    // returns empty array if there isn't any product info
}

// load carts product
function loadCart() {
    let products = getProductFromStorage();
    if (products.length < 1) {
        cartItemID = 1; // if there is no any product in the local storage
    } else {
        cartItemID = products[products.length - 1].id;
        cartItemID++;
        // else get the id of the last product and increase it by 1
    }
    products.forEach(product => addToCartList(product));

    // calculate and update UI of cart info 
    updateCartInfo();
}

// calculate total price of the cart and other info
function findCartInfo() {
    let products = getProductFromStorage();
    let total = products.reduce((acc, product) => {
        let price = parseFloat(product.price.substr(1)); // removing dollar sign
        return acc += price;
    }, 0); // adding all the prices

    return {
        total: total.toFixed(2),
        productCount: products.length

    }
}

// delete product from cart list and local storage
function deleteProduct(e) {
    let cartItem;
    if (e.target.tagName === "BUTTON") {
        cartItem = e.target.parentElement;
        cartItem.remove(); // this removes from the DOM only
    } else if (e.target.tagName === "I") {
        cartItem = e.target.parentElement.parentElement;
        cartItem.remove(); // this removes from the DOM only
    }

    let products = getProductFromStorage();
    let updatedProducts = products.filter(product => {
        return product.id !== parseInt(cartItem.dataset.id);
    });
    localStorage.setItem('products', JSON.stringify(updatedProducts)); // updating the product list after the deletion
    updateCartInfo();
}

// close button of moodal box
$(document).ready(function () {
    $("#close-btn").on('click', () => {
        $("#modal").hide();
    })
    $(".box_info").on('click', () => {
        $("#modal").show();
    });




})