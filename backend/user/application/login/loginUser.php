<?php

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/userLoginRepository.php"));

class LoginUser {
    private UserLoginRepository $repository;

    function __construct(UserLoginRepository $repository) {
        $this->repository = $repository;
    }

    public function init(string $email, string $password): ?User {
        $user = $this->repository->init($email, $password);

        if(is_null($user)) throw new Exception("User not found.");

        return $user;
    }
}