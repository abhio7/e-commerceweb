<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="description" content="">
  <meta name="author" content="">
  <link rel="icon" href="../../../../favicon.ico">

  <title>Checkout </title>

  <!-- Bootstrap core CSS -->
  <link href="css/bootstrap.min.css" rel="stylesheet">

  <!-- Custom styles for this template -->
  <link href="form-validation.css" rel="stylesheet">
  <script type="text/javascript" src="../js/jquery.js"></script>
  <style>
    #input_discount {
      width: 60px;
      border: 3px solid #555;

    }

    .rate_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }

    .pPrice {
      -webkit-text-decoration-line: line-through;
      /* Safari */
      text-decoration-line: line-through;
    }

    .hidden {
      display: none;
    }
  </style>
</head>

<body class="bg-light" onload="addItem()">

  <div class="container">
    <div class="py-5 text-center">
      <a href="">
        <img class="d-block mx-auto mb-4" src="../images/banner-img.png" alt="" width="265" height="72">

      </a>
      <h2>Checkout form</h2>

    </div>

    <div class="row">
      <div class="col-md-6 order-md-2 mb-4 " id="check-out-cart">
        <h4 class="d-flex justify-content-between align-items-center mb-3" id="cart-name" style="font-size: 200;">
        </h4>


      </div>
      <div class="col-md-6 order-md-1">
        <h4 class="mb-3">Billing address</h4>
        <form class="needs-validation" action="thankyou.php" method="POST" novalidate>
          <div class="row">
            <input type="text" class="hidden" id="userId" name="userId">
            <div class="col-md-6 mb-3">
              <label for="firstName">First name</label>
              <input type="text" class="form-control" id="firstName" placeholder="" value="" name="fname" required>
              <div class="invalid-feedback">
                Valid first name is required.
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName">Last name</label>
              <input type="text" class="form-control" id="lastName" placeholder="" value="" name="lname" required>
              <div class="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
          </div>



          <div class="mb-3">
            <label for="email">Email </label>
            <input type="email" class="form-control" id="email" name="email" placeholder="you@example.com">
            <div class="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>
          <div class="mb-3">
            <label for="phone">Phone Number
              <input type="text" class="form-control" id="phno" name="phno" placeholder="(999)-(999)-(9999)">
              <div class="invalid-feedback">
                Please enter a valid Phone Number
              </div>
          </div>

          <div class="mb-3">
            <label for="address">Address</label>
            <input type="text" class="form-control" id="address" placeholder="" name="add1" required>
            <div class="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div class="mb-3">
            <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
            <input type="text" class="form-control" id="address2" name="add2" placeholder="Apartment or suite">
          </div>

          <div class="row">
            <div class="col-md-5 mb-3">
              <label for="country">Country</label>
              <select class="custom-select d-block w-100" id="country" class="country" name="country" required>
                <option value="">Choose...</option>
                <!-- <option>United States</option> -->
              </select>
              <div class="invalid-feedback">
                Please select a valid country.
              </div>
            </div>
            <div class="col-md-4 mb-3">
              <label for="state">State</label>
              <select class="custom-select d-block w-100" id="state" name="state" required>
                <option value="">Choose...</option>
              </select>
              <div class="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="zip">Zip</label>
              <input type="text" class="form-control" id="zip" placeholder="" name="zip" required>
              <div class="invalid-feedback">
                Zip code required.
              </div>
            </div>
          </div>

          <hr class="mb-4">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="same-address" name="check-box-add" onclick="myFunction()">
            <label class="custom-control-label" for="same-address">Shipping address is same as my billing
              address</label>
          </div>
          <div class="mb-4" id="ship-address">
            <div class="mb-3">
              <label for="address">Address</label>
              <input type="text" class="form-control" id="address" name="add2-1" placeholder="" required>
              <div class="invalid-feedback">
                Please enter your shipping address.
              </div>
            </div>

            <div class="mb-3">
              <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
              <input type="text" class="form-control" id="address2" name="add2-2" placeholder="Apartment or suite">
            </div>


            <div class="row">
              <div class="col-md-5 mb-3">
                <label for="country">Country</label>
                <select class="custom-select d-block w-100" id="country2" class="country" name="country2" required>
                  <option value="">Choose...</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state2" name="state2" required>
                  <option value="">Choose...</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="zip">Zip</label>
                <input type="text" class="form-control" id="zip" placeholder="" name="zip2" required>
                <div class="invalid-feedback">
                  Zip code required.
                </div>
              </div>
            </div>
          </div>

          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="save-info">
            <label class="custom-control-label" for="save-info">Save this information for next time</label>
          </div>
          <hr class="mb-4">

          <h4 class="mb-3">Payment</h4>

          <div class="d-block my-3">
            <div class="custom-control custom-radio">
              <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" checked required>
              <label class="custom-control-label" for="credit">Credit card</label>
            </div>
            <div class="custom-control custom-radio">
              <input id="debit" name="paymentMethod" type="radio" class="custom-control-input" required>
              <label class="custom-control-label" for="debit">Debit card</label>
            </div>

          </div>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="cc-name">Name on card</label>
              <input type="text" class="form-control" id="cc-name" name="name_card" placeholder="" required>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>
            <div class="col-md-6 mb-3">
              <label for="cc-number">Card number</label>
              <input type="text" class="form-control" id="cc-number" name="card_num" placeholder="" required>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" name="expire_date" placeholder="" required>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>
            <div class="col-md-3 mb-3">
              <label for="cc-expiration">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" name="cvv" placeholder="" required>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
          <hr class="mb-4">
          <button class="btn btn-primary btn-lg btn-block" id="submit" type="submit">Continue to checkout</button>
        </form>
      </div>
    </div>

    <footer class="my-5 pt-5 text-muted text-center text-small">
      <p class="mb-1">&copy; 2021-2022 Farmacia pharma24</p>
      <ul class="list-inline">
        <li class="list-inline-item"><a href="https://farmaciapharma24.com/Policy.php">Privacy</a></li>
        <li class="list-inline-item"><a href="https://farmaciapharma24.com/Made.php">Terms</a></li>
        <li class="list-inline-item"><a href="https://farmaciapharma24.com/Conditions.phpe">Support</a></li>
      </ul>
    </footer>
  </div>

  <!-- Bootstrap core JavaScript
    ================================================== -->
  <!-- Placed at the end of the document so the pages load faster -->
  <script>
    window.jQuery || document.write('<script src="../../../../assets/js/vendor/jquery-slim.min.js"><\/script>')
  </script>
  <!-- <script src="../../../../assets/js/vendor/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="../../../../assets/js/vendor/holder.min.js"></script> -->

  <script>
    // Example starter JavaScript for disabling form submissions if there are invalid fields
    (function() {
      'use strict';

      window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');

        // Loop over them and prevent submission
        // var validation = Array.prototype.filter.call(forms, function(form) {
        //   form.addEventListener('submit', function(event) {
        //     if (form.checkValidity() === false) {
        //       event.preventDefault();
        //       event.stopPropagation();
        //     }
        //     form.classList.add('was-validated');
        //   }, false);
        // });
      }, false);
    })();
  </script>



  <script src="js/app.js"></script>

  <script>
    function myFunction() {
      var addForm = document.getElementById("ship-address");
      var checkAdd = document.getElementById("same-address");
      addForm.classList.toggle("hidden");
    }

    function addItem() {
      let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      let arrRan = Math.floor(Math.random() * 26);

      randomNum = arr[arrRan] + "-" + Math.floor(Math.random() * 100);
      // console.log(randomNum);

      document.getElementById("userId").value = randomNum;
      let value = [];
      let value2 = [];
      var input = document.getElementsByName('product_name[]');
      var input2 = document.getElementsByName('product_category[]');

      let news = document.getElementsByName("product_name").innerHTML;


      for (let i = 0; i < input.length; i++) {
        let a = input[i].innerHTML;
        let c = input2[i].innerHTML;
        value.push(a);
        value.push(c);

      }

      let d = JSON.stringify(value2);
      const b = value;

      $(document).ready(function() {

        var jinput = [];
        var j = $('[name=product_name').val();
        jinput.push(b);
        // console.log(jinput);

        $("#submit").on("click", (e) => {
          let final = {
            name: b,
            userId: randomNum
          }
          let finalData = JSON.stringify(final);

          function setData(arr) {
            localStorage.setItem('total_data', JSON.stringify(arr));
          }


          // get data from checkout api
          function getData() {
            let arrData = JSON.parse(localStorage.getItem('total_data'));
            return arrData;
          }
          //calculate discount rate 
          // function calculateDiscount(discount) {
          //   let old_data = findCartInfo();
          //   console.log(old_data);
          //   let total = parseInt(old_data.total) - parseInt(discount);
          //   console.log(total);
          //   return total;
          // }

          //update the checkout api
          function updateData(data) {

            let old_data = getData();
            let dis = parseInt(old_data.discountAmount) + parseInt(data[2]);
            let total = parseInt(old_data.totalAmount) + parseInt(data[0]);
            total = total.toString();

            let productInfo = {
              orderNum: old_data.orderNum + 1,
              totalAmount: total,
              totalProduct: data[1] + old_data.totalProduct,
              discountAmount: dis
            }
            setData(productInfo);

          }

          // add data in checkout api if it doesn't exist
          function addData(data) {
            let productInfo = {
              orderNum: data[3],
              totalAmount: data[0],
              totalProduct: data[1],
              discountAmount: data[2]
            }
            setData(productInfo);
          }


          const totalData = findCartInfo();
          let discountedRate = document.getElementById('product_Newprice').innerHTML;


          //Admin checkout  API  
          const checoutFinalApi = () => {
            let order_no = 1;
            let arrData = getData();
            if (arrData == null) {
              let newData = [totalData.total, totalData.productCount, discountedRate, order_no];
              addData(newData);
            } else {
              let Data = [];


              Data.push(totalData.total, totalData.productCount, discountedRate, order_no);
              updateData(Data);
            }
          }
          checoutFinalApi(); //call checkout api

        })
      });
    }
  </script>
</body>

</html>