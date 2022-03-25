<?php

$mysqlHost = getenv("MYSQL_HOST");
$mysqlDB = getenv("MYSQL_DB");
$mysqlUser = getenv("MYSQL_USER");
$mysqlPassword = getenv("MYSQL_PASSWORD");

try {
    $mdb = new PDO("mysql:host=$mysqlHost;dbname=$mysqlDB", $mysqlUser, $mysqlPassword);
    foreach($mdb->query("SELECT * FROM Users") as $row) {
        print_r($row);
    }
    $mdb = null;
} catch (PDOException $pdoex) {
    die($pdoex->getMessage() . "<br />");
}