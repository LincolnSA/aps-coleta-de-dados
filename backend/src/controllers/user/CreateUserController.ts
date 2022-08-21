import { Request, Response } from "express";
import { CreateUserService } from "../../services/user";

class CreateUserController {
  static async handle(request: Request, response: Response) {
    try {
      const { name, email, password, admin } = request.body;

      const user = await CreateUserService.execute({
        name,
        email,
        password,
        admin,
      });

      return response.json(user);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { CreateUserController };
