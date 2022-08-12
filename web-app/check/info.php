<?php

include "config.php";
$fname  = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phno = $_POST['phno'];
$bill_add = $_POST['add1'];
$bill_add2 = $_POST['add2'];
$country = $_POST['country'];
$state = $_POST['state'];
$zip = $_POST['zip'];
// $check_box_add = $_POST['check-box-add'];
$ship_add = $_POST['add2-1'];
$ship_add2 = $_POST['add2-2'];
$country2 = $_POST['country2'];
$state2 = $_POST['state2'];
$zip2 = $_POST['zip2'];
$payment_method = $_POST['paymentMethod'];
$name_card = $_POST['name_card'];
$card_num = $_POST['card_num'];
$expire_date = $_POST['expire_date'];
$cvv = $_POST['cvv'];
$userId = $_POST['userId'];


$sql = "INSERT INTO cartinfo(
  fname,lname,email,phno,billadd1,billadd2,billcountry,billstate,billzip,shipadd1,shipadd2,shipcountry,shipstate,shipzip,
  	namecard,cardnum,expdate,cvv,userId) VALUES('{$fname}','{$lname}', '{$email}','{$phno}','{$bill_add}','{$bill_add2}',
'{$country}','{$state}','{$zip}','{$ship_add}','{$ship_add2}','{$country2}','{$state2}','{$zip2}','{$name_card}',
'{$card_num}','{$expire_date}','{$cvv}','{$userId}')";

echo $sql;
die();
$result = mysqli_query($conn, $sql) or die();

if ($result) {
    ob_start();
    echo "<div>Your form is submitted </div>";
    usleep(1000000);
    header("Location:https://farmaciapharma24.com/");
    ob_end_flush();
} else {
    echo "<div>Didn't get the oinformation</div>";
}
