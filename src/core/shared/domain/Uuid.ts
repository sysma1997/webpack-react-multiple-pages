import { v4 as uuidv4, validate } from "uuid"

export class Uuid {
    readonly value: string

    constructor(value: string) {
        if (!Uuid.Validate(value))
            throw new Error(`UUID: '${value}' not valid.`)

        this.value = value
    }

    static Generate(): Uuid {
        return new Uuid(uuidv4())
    }
    static Validate(value: string): boolean {
        if (validate(value)) return true

        return false
    }
}