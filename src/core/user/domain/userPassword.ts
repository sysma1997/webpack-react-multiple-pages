export class UserPassword {
    readonly value: string

    constructor(value: string) {
        if (value.length !== 64)
            throw new Error(`Password: '${value}' does not meet the required parameters, ` +
                `verify that it is in sha256.`)

        this.value = value
    }
}