<?php

class User {
    private string $id;
    private string $name;
    private DateTime $birthdate;
    private string $email;
    private string $password;

    function __construct(string $id, 
        string $name, 
        DateTime $birthdate, 
        string $email, 
        string $password) {
        $this->id = $id;
        $this->name = $name;
        $this->birthdate = $birthdate;
        $this->email = $email;
        $this->password = $password;
    }

    function toString(): string {
        return json_encode([
            "id" => $this->id, 
            "name" => $this->name, 
            "birthdate" => $this->birthdate, 
            "email" => $this->email, 
            "password" => $this->password
        ]);
    }
}