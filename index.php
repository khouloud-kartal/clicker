<?php
    require_once ('User.php');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js" defer></script>
    <link rel="stylesheet" href="style.css">
    <title>Clicker Game</title>
</head>
<body>
    
    <main>
        
        <button type="submit" id="login">Login</button>
        <button type="submit" id="register">register</button>

        <div id="divForm">

        </div>

        <button type="submit" id="disconnect" name="disconnect">Disconnect</button>



        <?php
       
            if(isset($_SESSION['login'])){
                echo 'Bonjour ' . $_SESSION['login'];
            }
        ?>


    </main>

</body>
</html>