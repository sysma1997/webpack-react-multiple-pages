<?php

require_once "../../domain/user.php";

interface UserLoginRepository {
    function init($email, $password): User;
}