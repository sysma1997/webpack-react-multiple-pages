<?php

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userEmail.php"));
require_once(realpath(dirname(__FILE__) . "/../../domain/userPassword.php"));

interface UserLoginRepository {
    public function init(UserEmail $email, UserPassword $password): ?User;
}