<?php

require_once "../../domain/user.php";
require_once "./userLoginRepository.php";

class LoginUser {
    private $repository;

    function __construct($_repository) {
        $repository = $_repository;
    }

    public function init($email, $password) {
        $user = $repository->init($email, $password);

        if(!$user) throw new Exception("User not found.");

        return $user;
    }
}