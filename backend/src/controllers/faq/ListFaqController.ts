import { Request, Response } from "express";
import { ListFaqService } from "../../services/faq";

class ListFaqController {
  static async handle(request: Request, response: Response) {
    try {
      const { user_id, is_admin } = request;

      const faqs = await ListFaqService.execute({
        userId: user_id,
        isAdmin: is_admin,
      });

      return response.json(faqs);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { ListFaqController };
