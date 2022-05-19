export class UserEmail {
    readonly value: string

    constructor(value: string) {
        if (!UserEmail.Validate(value))
            throw new Error(`Email: '${value}' not valid.`)

        this.value = value
    }

    static Validate(value: string): boolean {
        const isValid = String(value)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )

        if (isValid) return true
        return false
    }
}