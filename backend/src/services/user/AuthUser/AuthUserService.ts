import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { IAuthUserDTO } from "./AuthUserDTO";
import { UserRepository } from "../../../repositories/UserRepository";

class AuthUserService {
  static async execute({ email, password }: IAuthUserDTO) {
    try {
      const SECRET_TOKEN = process.env.SECRET_TOKEN;

      const userAlreadyExists = await UserRepository.get({ email });

      if (!userAlreadyExists) {
        return { success: false, error: "Email/Password incorrect!" };
      }

      const passwordMatch = await compare(password, userAlreadyExists.password);

      if (!passwordMatch) {
        return { success: false, error: "Email/Password incorrect!" };
      }

      const token = sign({ email: userAlreadyExists.email }, SECRET_TOKEN, {
        subject: userAlreadyExists.id,
        expiresIn: "1d",
      });

      return {
        success: true,
        name: userAlreadyExists.name,
        admin: userAlreadyExists.admin,
        token,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { AuthUserService };
