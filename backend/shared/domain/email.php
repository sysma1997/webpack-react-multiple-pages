<?php

class Email {
    private string $value;

    function __construct(string $value) {
        if(!Email::Validate($value))
            throw new Exception("Email: '$value' is not email valid.");
        
        $this->value = $value;
    }

    public function get(): string {
        return $this->value;
    }

    public static function Validate(string $value): bool {
        if (!is_string($value) || 
            (preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/', 
            $value) !== 1)) {
            return false;
        }
        
        return true; 
    }
}