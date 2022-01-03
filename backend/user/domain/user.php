<?php

class User {
    private string $email;
    private string $password;

    function __construct(string $email, string $password) {
        $this->email = $email;
        $this->password = $password;
    }

    function toString(): string {
        return json_encode([
            "email" => $this->email, 
            "password" => $this->password
        ]);
    }
}