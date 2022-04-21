<?php

class UserPassword {
    private string $value;

    function __construct(string $value) {
        if(strlen($value) !== 64) 
            throw new Exception("Password: '$value' does not meet the required parameters, " . 
                "verify that it is in sha256.");
        
        $this->value = $value;
    }

    public function get(): string {
        return $this->value;
    }
}