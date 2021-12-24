<?php

class User {
    private string $email;
    private string $password;

    function __construct(string $email, string $password) {
        $this->email = $email;
        $this->password = $password;
    }
}