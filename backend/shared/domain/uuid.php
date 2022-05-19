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
            (preg_match('/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i', 
            $value) !== 1)) {
            return false;
        }

        return true;
    }
    public static function Generate($data = null): Uuid {
        $data = $data ?? random_bytes(16);
        assert(strlen($data) == 16);
    
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);
    
        $uuid = vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
        return new Uuid($uuid);
    }
}