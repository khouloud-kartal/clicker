<?php
require_once ('User.php');

if(isset($_POST['login']) && isset($_POST['password'])){

    $newUser->Connect($_POST['login'], $_POST['password']);
}

?>

<form method="post" id="loginForm">

    <input type="text" name="login" id="login">
    <input type="text" name="password" id="password">
    <button type="submit" id="loginBtn" name="submit">Login</button>

</form>

