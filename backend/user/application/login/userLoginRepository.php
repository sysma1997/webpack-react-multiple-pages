<?php

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));

interface UserLoginRepository {
    public function init(string $email, string $password): ?User;
}