<?php

require_once(realpath(dirname(__FILE__) . "/shared/infrastructure/databases/mysql/mySql.php"));

$mysql = new MySql();

print_r($mysql->get("SELECT * FROM Users"));