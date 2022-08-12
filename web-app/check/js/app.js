
// variables and constants
const cartContainer = document.querySelector('.cart-container');
const cartList = document.querySelector('.cart-list');
const cartTotalValue = document.getElementById('cart-total-value');
const cartCountInfo = document.getElementById('cart-count-info');
const closeBtn = document.getElementById('close-btn');
const checkOut = document.querySelector('#check-out-cart');
const cart = document.querySelector('#cart-name');
// const productList = document.querySelector('.product-list');


let cartItemID = 1;

eventListeners();

// all event listeners
function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        // loadJSON();
        loadCart();
    });

}

// update cart info
function updateCartInfo() {
    let cartInfo = findCartInfo();
    // cartCountInfo.textContent = cartInfo.productCount;
    // cartTotalValue.textContent = cartInfo.total;
}




// purchase product
function purchaseProduct(e) {
    if (e.target.classList.contains('add-to-cart-btn')) {
        let product = e.target.parentElement.parentElement;
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
    addToCartList(productInfo);
    saveProductInStorage(productInfo);
    checkOutCart(productInfo);

}

// add the selected product to the cart list
function addToCartList(product) {

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
// check out total

const cartTotal = () => {
    const total = findCartInfo();
    console.log(total);
    cart.innerHTML = `
    <span class="text-muted">Your cart</span>
    <span class="badge badge-secondary badge-pill" name="total_cart">${total.productCount}</span>`;
    // console.log(cart);
    checkOut.appendChild(cart);

    checkOutCart(total);
}

// check discount

function checkDis() {
    let coupon = document.getElementById('input_discount').value;
    let arr = [];
    $.ajax({
        url: "codes.json",
        type: "get",
        success: function (data) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].name == coupon) {
                    arr.push(data[i].id);
                }
            }
            if (arr.length === 0)
                alert("This Coupon is not aplicable");
        }

    })

}


// calculate discount
function checkDiscount(amount) {

    let discoutnrate = (amount * 0.1);
    let rate = amount - discoutnrate;
    return rate;
}

//admin  api for checkout data
function showData() {
    return localStorage.getItem('total_data') ? JSON.parse(localStorage.getItem('total_data')) : [];

}
//table data
function data_table(data) {
    let total_products = data[0];
    let total_amount = data[1];
    return {
        total_products: total_products,
        total_amount: total_amount
    }

}
// get the order number
function getorderNum() {
    let arrData = JSON.parse(localStorage.getItem('total_data'));
    if (arrData == null) {
        return 0;
    } else {
        return arrData;
    }
}

//check out 
function checkOutCart(list) {
    const count = list.productCount;
    const product = getProductFromStorage();
    const cartItem = document.createElement('ul');
    cartItem.classList.add('cart-item');
    const name = [];
    const orderNum = getorderNum();

    for (var i = 0; i < count; i++) {
        cartItem.innerHTML += `
        
            <li class="list-group-item d-flex justify-content-between lh-condensed">
            <div>
            <input data-id=${product[i].id} class="hidden" value="${product[i].id}" name="prod_id[]">
            <img width="72" height="72" src=${product[i].imgSrc}>
              <h6 class="my-0 product_name" class="product_name" name="product_name[]">${product[i].name}</h6>
              <small class="text-muted" name="product_category[]">${product[i].category}</small>
            </div>
            <span class="text-muted product_price" name="product_price[]" >${product[i].price}</span>
            
          </li>
        `;

    }

    cartItem.innerHTML += ` 
    <li class="list-group-item d-flex justify-content-between">
  <span class="discount_amount">Discount Code</span>
  <button class="btn btn-success" onclick="checkDis()" id="checkDiscount">Check</button>
  <strong name ="discount_amount"><input type="text" id="input_discount"></strong>
  
   </li>
   
    <li class="list-group-item d-flex justify-content-between">
    <span class="total_amount">Total (USD)</span>
    <div class="rate_box">
    <span class="text-muted product_price" name ="total_price" id="total_price">${list.total}</span>
   <small class="text-muted fw-bold hidden product_Newprice" id="product_Newprice">0</small>
    </div>
  </li>`;

    let pName = document.querySelectorAll(".product_name");
    name.push(pName);
    checkOut.appendChild(cartItem);
    let countOrder = orderNum.orderNum; //get the order number 

    // check the nth order and apply discount 
    if (countOrder % 4 == 0 && countOrder != 0) {
        let discountedPrice = checkDiscount(list.total);
        document.getElementById('input_discount').value = "DIS10";
        let finalAmount = document.querySelector('#total_price');
        finalAmount.classList.add('pPrice');
        let newRateTag = finalAmount.nextElementSibling;
        newRateTag.classList.remove("hidden");
        document.getElementById('input_discount').value = "DIS10";
        let disBtn = document.getElementById('checkDiscount').classList;
        disBtn.add('hidden');
        document.getElementById('product_Newprice').innerHTML = discountedPrice.toFixed(2);
    }



}
cartTotal();

// close button of moodal box
$(document).ready(function () {
    $("#close-btn").on('click', () => {
        $("#modal").hide();
    })
    $(".box_info").on('click', () => {
        $("#modal").show();
    })
    // add tp  cart single pill


    $(document).on("click", "#buy-btn", function () {
        var pid = $(this).data("eid");
        var row = this;
        var nrow = $(row).closest("tr");

        let productInfo = {
            id: pid,
            imgSrc: document.querySelector(".post-img img").src,
            name: document.querySelector(".head-name h3").innerText,
            category: nrow[0].childNodes[0].innerText,
            price: nrow[0].childNodes[1].outerText
        }
        cartItemID++;
        console.log(productInfo);
        addToCartList(productInfo);
        saveProductInStorage(productInfo);
    })


    $.get("http://localhost/web-app/check/country.json",
        function (data) {
            // console.log(data);
            var realArray = data.countries;
            // console.log(realArray);
            $.map(realArray, function (val, i) {

                let html = `<option value=${i}>${val.country}</option>`;
                $("#country").append(html);
            });
            $.map(realArray, function (val, i) {

                let html = `<option value=${i}>${val.country}</option>`;
                $("#country2").append(html);
            });
        })


    $("#country").on("change", function () {
        var country = $("#country").val();
        // console.log(country);
        $.ajax({
            url: "http://localhost/web-app/check/country.json",
            type: "POST",
            data: { country: country },
            success: function (data) {
                let finaldata = data.countries[country].states;
                // console.log(finaldata);
                $.map(finaldata, function (val, i) {
                    let html = `<option value=${val}>${val}</option>`;
                    $("#state").append(html);
                })
            }

        })
    })
    $("#country2").on("change", function () {
        var country = $("#country2").val();
        // console.log(country);
        $.ajax({
            url: "http://localhost/web-app/check/country.json",
            type: "POST",
            data: { country: country },
            success: function (data) {
                let finaldata = data.countries[country].states;
                // console.log(finaldata);
                $.map(finaldata, function (val, i) {
                    let html = `<option value=${val}>${val}</option>`;
                    // console.log(html);
                    $("#state2").append(html);
                })
            }

        })
    })




});
