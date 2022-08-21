import { IDeleteFaqDTO } from "./DeleteFaqDTO";
import { FaqRepository } from "../../../repositories/FaqRepository";

class DeleteFaqService {
  static async execute({ faqId }: IDeleteFaqDTO) {
    try {
      const faq = await FaqRepository.delete({ faqId });

      return faq;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { DeleteFaqService };
