import { Request, Response } from "express";
import { DeleteFaqService } from "../../services/faq";

class DeleteFaqController {
  static async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const faq = await DeleteFaqService.execute({ faqId: id });

      return response.json(faq);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { DeleteFaqController };
