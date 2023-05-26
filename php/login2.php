<html>
<head><title>css</title>
<style>p {background-color:cyan;}
body{background-color:black;}
</style>
<a href="login1.php"><font size="+5" color="dark orchid">BACK</font></A><BR>
<?php
$user = $_POST['un'];
 $pass = $_POST['pwd'];
 
 if($user=='admin' && $pass=='admin')
 {
	 
	 echo "<p align='center'><font color='red' size='+5' face='Modern No. 20'> Congrulation Login Successfully</font><a href='viewdata.php'><br><br><font color='yellow green' size='+5' face='Modern No. 20'>view data</font></a></p>";
 }

	 else{
	 echo "<p align='center'><font color='red' size='+5' face='Modern No. 20'>Incorrect Password/Login</font></p>";
	 }
	 
?>
