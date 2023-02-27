<?php
require_once ('User.php');

if(isset($_POST['login']) && isset($_POST['password']) && isset($_POST['passwordConfirm'])){
    if($_POST['password'] === $_POST['passwordConfirm']){
        $newUser->Register($_POST['login'], $_POST['password']);
    } 
}

?>


<form method="POST" id="registerForm">

    <input type="text" name="login" id="login">
    <input type="text" name="password" id="password">
    <input type="text" name="passwordConfirm" id="passwordConfirm">
    <button type="submit" id="registerBtn" name="submit">Register</button>

</form>