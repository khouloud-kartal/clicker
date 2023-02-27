<?php

session_start();

class User
{
    private $id;
    public $login;
    public $passwordConfirm;
    // public $email;
    // public $firstname;
    // public $lastname;
    private $conn;
    var $error;

    public function __construct() {

        $db_username = 'root';
        $db_password = '';

        try{

            $this->conn = new PDO('mysql:host=localhost;dbname=clicker;charset=utf8', $db_username, $db_password);


            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


            //echo "You are connected to the database <br>";
        }

        catch(PDOException $e){

            echo "Error : " . $e->getMessage();

        }
        

    }

    public function Register($login, $password) {

        $error = "";

        $sql = "SELECT * FROM users WHERE login=:login";
       
        $req = $this->conn->prepare($sql);
        $req->execute(array(':login' => $login));
        $row = $req->rowCount();
        
        if($row <= 0) {    
            if(strlen($login) >= 4 && !preg_match("[\W]", $login) && strlen($password) >= 5 ) {
                    
                    $hash = password_hash($password, PASSWORD_DEFAULT);

                    $sql = "INSERT INTO `users` (`login`, `password`) VALUES (:login, :password)";
                    $req = $this->conn->prepare($sql);
                    $req->execute(array(':login' => $login,
                                        ':password' => $hash,));
                    

                    $this->error = 'Success! Your account is now created and you can login';
                                        

            }else{

                if(strlen($login) < 4 || preg_match("[\W]", $login)) {

                    $this->error = "Your login must contain at least 4 caracters and no specials caracters";

                }

                if(strlen($password) < 5) {

                    $this->error = "Your password must contain at least 5 caracters";

                }
            }
            
        }else{ $this->error = 'Error! The login already exist. Please choose another one '; }

        // return $error;
        echo $this->error;

    }


    public function Connect($login, $password) {

        $sql = "SELECT * FROM users WHERE login=:login";
        
        $req = $this->conn->prepare($sql);
        $req->execute(array(':login' => $login));
        $row = $req->rowCount();

        if($row == 1){    

            $tab = $req->fetch(PDO::FETCH_ASSOC);
            $dataPass = $tab['password'];
            $id = $tab['id'];

            if(password_verify($password,$dataPass)){   

                $_SESSION['id'] = $id;
                $_SESSION['login'] = $login;
                $_SESSION['password'] = $dataPass;

                header('Location: index.php');

                die();

                echo '<strong>Success!</strong> You\'re connected<br>';

            }else{   
                $this->error = 'Error! Wrong password<br>';
                echo 'Error! Wrong password<br>';
            }
        }else{    
            $this->error = 'Error! The login do not exist.';
            echo 'Error! The login do not exist.';
        }

    }

    public function Disconnect() {

        session_destroy();
        header('Location: ./register.php');
        exit('Vous avez bien été deconnecté');

    }

    public function Delete() {

        if($_SESSION){

            $sessionId = $_SESSION['id'];

            $sql = "DELETE FROM `utilisateurs` WHERE id = :sessionId";
        
            $req = $this->conn->prepare($sql);
            $req->execute(array(':sessionId' => $sessionId));

            session_destroy();
            exit('You have deleted your account');


        }else{
            $this->error = 'Please login to delete your account<br>';
        }

    }

    
    public function GetAllInfos() {

        if($_SESSION){
            return $_SESSION;
        }else{
            echo 'Please login to view your infos<br>';
        }

    }

    public function GetLogin() {

        if($_SESSION){
            return $_SESSION['login'];
        }else{
            echo 'Please login to view your login<br>';
        }

    }

}

$newUser = new User();


?>