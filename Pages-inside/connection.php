<?php
$_servername ="localhost";
$_username ="root";
$_password ="";
$dbname="travel_agency";

    $conn=mysqli_connect($_servername, $_username, $_password, $dbname);
if($conn){
    echo "connection ok";
}
else{
    echo "connection failed";
}
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$confirm_password=$_POST['confirm_password'];



$php="INSERT INTO `travel` ( `username`, `email`, `password`, `confirm_password`, `date`) VALUES ( '$username', '$email', '$password', '$confirm_password', current_timestamp());";
echo $php;
?>