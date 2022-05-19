import { SHA256 } from "crypto-js";
import { Http } from "../../../shared/infrastructure/Http";
import { UserLoginRepository } from "../../application/login/UserLoginRepository";
import { User } from "../../domain/user";
import { UserEmail } from "../../domain/userEmail";
import { UserId } from "../../domain/userId";
import { UserPassword } from "../../domain/userPassword";

export class UserLoginApiRepository implements UserLoginRepository {
    async login(email: UserEmail, password: UserPassword): Promise<User> {
        const params = {
            email: email.value,
            password: password.value
        }

        const response = await Http.Init("POST", "user/infrastructure/login/userLoginController.php",
            JSON.stringify(params))
        if (response.status !== 200)
            throw new Error(response.result)

        return new User(
            UserId.Generate(),
            "Sebastian Moreno Acero",
            new Date(),
            new UserEmail("sysma40@gmail.com"),
            new UserPassword(SHA256("b7b9531c3e").toString())
        )
    }
}