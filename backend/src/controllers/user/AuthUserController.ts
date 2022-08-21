import { Request, Response } from "express";
import { AuthUserService } from "../../services/user";

class AuthUserController {
  static async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const authResponse = await AuthUserService.execute({
        email,
        password,
      });

      return response.json(authResponse);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { AuthUserController };
