import { User } from "../../domain/user";
import { UserEmail } from "../../domain/userEmail";
import { UserPassword } from "../../domain/userPassword";

export interface UserLoginRepository {
    login(email: UserEmail, password: UserPassword): Promise<User>
}