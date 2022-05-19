<?php 

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userId.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userEmail.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userPassword.php"));
require_once(realpath(dirname(__FILE__) . "/../../application/login/userLoginRepository.php"));
require_once(realpath(dirname(__FILE__) . "/../../../shared/infrastructure/databases/mysql/mySql.php"));

class UserLoginMySqlRepository implements UserLoginRepository {
    private MySql $database;

    function __construct() {
        $this->database = new MySql();
    }

    public function init(UserEmail $email, UserPassword $password): ?User {
        $result = $this->database->get(
            "SELECT * FROM Users 
            WHERE email = :email AND 
            password = :password 
            LIMIT 1;", 
            [
                "email" => $email->get(), 
                "password" => $password->get()
            ]
        );
        if(count($result) == 0) return null;

        foreach($result as $_user) {
            $user = new User(
                new UserId($_user["id"]), 
                $_user["name"], 
                new DateTime($_user["birthdate"]), 
                new UserEmail($_user["email"]), 
                new UserPassword($_user["password"])
            );
        }

        return $user;
    }
}