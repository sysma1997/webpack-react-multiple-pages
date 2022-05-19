import { UserEmail } from "./userEmail"
import { UserId } from "./userId"
import { UserPassword } from "./userPassword"

export class User {
    readonly id: UserId
    readonly name: string
    readonly date: Date
    readonly email: UserEmail
    readonly password: UserPassword

    constructor(id: UserId,
        name: string,
        date: Date,
        email: UserEmail,
        password: UserPassword) {
        this.id = id
        this.name = name
        this.date = date
        this.email = email
        this.password = password
    }
}