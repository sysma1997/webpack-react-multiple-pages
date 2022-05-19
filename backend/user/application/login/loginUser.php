<?php

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userEmail.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userPassword.php"));
require_once(realpath(dirname(__FILE__) . "/userLoginRepository.php"));

class LoginUser {
    private UserLoginRepository $repository;

    function __construct(UserLoginRepository $repository) {
        $this->repository = $repository;
    }

    public function init(string $email, string $password): User {
        $userEmail = new UserEmail($email);
        $userPassword = new UserPassword($password);
        $user = $this->repository->init($userEmail, $userPassword);

        if(is_null($user)) throw new Exception("User not found.");

        return $user;
    }
}