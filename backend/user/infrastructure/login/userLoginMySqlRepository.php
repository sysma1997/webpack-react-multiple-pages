<?php 

require_once(realpath(dirname(__FILE__) . "/../../domain/user.php"));
require_once(realpath(dirname(__FILE__) . "/../../application/login/userLoginRepository.php"));
require_once(realpath(dirname(__FILE__) . "/../../../shared/infrastructure/databases/mysql/mySql.php"));

class UserLoginMySqlRepository implements UserLoginRepository {
    private MySql $database;

    function __construct() {
        $this->database = new MySql();
    }

    public function init(string $email, string $password): ?User {
        if ($email != "sysma1997@gmail.com" || 
            $password != "462afefdb4c64d4e4cabe9a6f89ad34cace6700e774c6ce47078435c895e03e5") 
            return null;
        
        return new User($email, $password);
    }
}