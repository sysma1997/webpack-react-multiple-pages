<?php

class Uuid {
    private string $value;

    function __construct(string $value) {
        if(!Uuid::Validate($value)) 
            throw new Exception("UUID: '$value' is not a UUID valid.");
        
        $this->value = $value;
    }

    public function get(): String {
        return $this->value;
    }

    public static function Validate(string $value): bool {
        if (!is_string($value) || 
            (preg_match('/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/', 
            $value) !== 1)) {
            return false;
        }

        return true;
    }
}