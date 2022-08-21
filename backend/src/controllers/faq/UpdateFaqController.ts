import { Request, Response } from "express";
import { UpdateFaqService } from "../../services/faq";

class UpdateFaqController {
  static async handle(request: Request, response: Response) {
    try {
      const { question, answer } = request.body;
      const { id } = request.params;

      const faq = await UpdateFaqService.execute({
        question,
        answer,
        faqId: id,
      });

      return response.json(faq);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { UpdateFaqController };
