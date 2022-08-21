import { Request, Response } from "express";
import { CreateFaqService } from "../../services/faq";

class CreateFaqController {
  static async handle(request: Request, response: Response) {
    try {
      const { question, answer } = request.body;
      const { user_id } = request;

      const faq = await CreateFaqService.execute({
        question,
        answer,
        userId: user_id,
      });

      return response.json(faq);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { CreateFaqController };
