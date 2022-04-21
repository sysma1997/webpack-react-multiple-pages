<?php

require_once(realpath(dirname(__FILE__) . "/userId.php"));
require_once(realpath(dirname(__FILE__) . "/userEmail.php"));
require_once(realpath(dirname(__FILE__) . "/userPassword.php"));

class User {
    private UserId $id;
    private string $name;
    private DateTime $birthdate;
    private UserEmail $email;
    private UserEmail $password;

    function __construct(UserId $id, 
        string $name, 
        DateTime $birthdate, 
        UserEmail $email, 
        UserPassword $password) {
        $this->id = $id;
        $this->name = $name;
        $this->birthdate = $birthdate;
        $this->email = $email;
        $this->password = $password;
    }

    function toString(): string {
        return json_encode([
            "id" => $this->id->get(), 
            "name" => $this->name, 
            "birthdate" => $this->birthdate, 
            "email" => $this->email->get(), 
            "password" => $this->password->get()
        ]);
    }
}