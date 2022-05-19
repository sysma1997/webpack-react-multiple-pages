<?php 

class MySql {
    private PDO $database;

    function __construct() {
        $host = getenv("MYSQL_HOST");
        $dbname = getenv("MYSQL_DB");
        $user = getenv("MYSQL_USER");
        $password = getenv("MYSQL_PASSWORD");

        $this->database = new PDO("mysql:" . 
            "host=" . $host . ";" . 
            "dbname=" . $dbname . ";", 
            $user, 
            $password);
    }

    public function set(string $query, array $parameters) {
        try {
            $sentence = $this->database->prepare($query);
            foreach ($parameters as $key => $value) {
                $sentence->bindValue($key, $value);
            }
            return $sentence->execute();
        } catch (PDOException $pdoex) {
            throw new Exception($pdoex->getMessage() . "<br />");
        }
    }
    public function get(string $query, array $parameters = []) {
        try {
            $result = [];

            $sentence = $this->database->prepare($query);
            foreach ($parameters as $key => $value) {
                $sentence->bindValue($key, $value);
            }
            if($sentence->execute()) {
                while($row = $sentence->fetch()) {
                    $result[] = $row;
                }
            }

            return $result;
        } catch (PDOException $pdoex) {
            throw new Exception($pdoex->getMessage() . "<br />");
        }
    }
}