<?php 

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../application/login/loginUser.php"));
require_once(realpath(dirname(__FILE__) . "/./userLoginDatabaseRepository.php"));

require_once(realpath(dirname(__FILE__) . "/../../../shared/infrastructure/controller/headers.php"));

$json = json_decode(file_get_contents("php://input"));

$email = $json->email;
$password = $json->password;

$repository = new UserLoginDatabaseRepository();
$login = new LoginUser($repository);

try {
    $user = $login->init($email, $password);
    print_r($user);
} catch (Exception $ex) {
    print_r($ex);
}
