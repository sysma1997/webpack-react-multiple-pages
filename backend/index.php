<?php

require_once(realpath(dirname(__FILE__) . "/shared/infrastructure/databases/mysql/mySql.php"));

$mysql = new MySql();

$result = $mysql->get("SELECT * FROM Users");

foreach($result as $user) {
    print_r($user);
}