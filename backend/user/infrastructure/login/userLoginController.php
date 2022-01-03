<?php 

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../application/login/loginUser.php"));
require_once(realpath(dirname(__FILE__) . "/./userLoginDatabaseRepository.php"));

require_once(realpath(dirname(__FILE__) . "/../../../shared/infrastructure/controller/headers.php"));

$json = json_decode(file_get_contents("php://input"));

if (!isset($json->email) || 
    !isset($json->password)) {
    $message = "";

    if(!isset($json->email)) 
        $message = "$message Email required.";
    if(!isset($json->password))
        $message = "$message Password required.";

    print_r($message);
    return;
}

$email = $json->email;
$password = $json->password;

$repository = new UserLoginDatabaseRepository();
$login = new LoginUser($repository);

try {
    $user = $login->init($email, $password);
    print_r($user->toString());
} catch (Exception $ex) {
    http_response_code(400);
    print_r($ex->getMessage());
}
