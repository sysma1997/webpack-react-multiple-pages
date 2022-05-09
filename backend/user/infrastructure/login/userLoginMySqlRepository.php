<?php 

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userEmail.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userPassword.php"));
require_once(realpath(dirname(__FILE__) . "/../../application/login/userLoginRepository.php"));
require_once(realpath(dirname(__FILE__) . "/../../../shared/infrastructure/databases/mysql/mySql.php"));

class UserLoginMySqlRepository implements UserLoginRepository {
    private MySql $database;

    function __construct() {
        $this->database = new MySql();
    }

    public function init(UserEmail $email, UserPassword $password): User {
        $this->database->get(
            "SELECT * FROM Users WHERE email = :email AND password = :password;", 
            [
                "email" => $email->get(), 
                "password" => $password->get()
            ]
        );

        
    }
}