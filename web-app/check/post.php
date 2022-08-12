
<?php
// header('Content-Type:application/json');

header('Access-Control-Allow-Origin: *');

header('Access-Control-Allow-Methods: POST');

include "../../config.php";

$data = json_decode(file_get_contents("php://input"), true);

$getData = $data['name'];
$userId = $data['userId'];
$get = json_encode($getData);
$sql = "INSERT INTO checkprod(cartItem,names) VALUES('{$get}','{$userId}')";

$result = mysqli_query($conn, $sql) or die();

if ($result) {
    echo "Successfully done";
} else {

    echo "not done";
}
