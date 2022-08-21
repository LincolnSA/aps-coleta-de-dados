import { hash } from "bcryptjs";
import { ICreateUserDTO } from "./CreateUserDTO";
import { UserRepository } from "../../../repositories/UserRepository";

class CreateUserService {
  static async execute({
    name,
    email,
    password,
    admin = false,
  }: ICreateUserDTO) {
    try {
      if (!name && !email && !password) {
        return { success: false, error: "All fields need to be filled!" };
      }

      const userAlreadyExists = await UserRepository.get({ email });

      if (userAlreadyExists) {
        return { success: false, error: "User already exists!" };
      }

      const passwordHash = await hash(password, 8);

      const user = await UserRepository.create({
        name,
        email,
        password: passwordHash,
        admin,
      });

      delete user.password;

      return { success: true, ...user };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { CreateUserService };
