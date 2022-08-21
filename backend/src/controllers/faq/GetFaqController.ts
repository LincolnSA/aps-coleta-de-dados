import { Request, Response } from "express";
import { GetFaqService } from "../../services/faq";

class GetFaqController {
  static async handle(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const faq = await GetFaqService.execute({ faqId: id });

      return response.json(faq);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { GetFaqController };
