<?php

require_once(realpath(dirname(__FILE__) . "/shared/domain/uuid.php"));
require_once(realpath(dirname(__FILE__) . "/shared/infrastructure/databases/mysql/mySql.php"));

/* $mysql = new MySql();

$result = $mysql->get("SELECT * FROM Users LIMIT 1");

if(count($result) > 0) foreach($result as $user) {
    print_r(json_encode($user));
}
else print_r("not found"); */

/* try {
    $uuid = new Uuid($_GET["id"]);
} catch (Exception $ex) {
    http_response_code(400);
    print_r($ex->getMessage());
} */

OAUTH_SIG_METHOD_RSASHA1("level");