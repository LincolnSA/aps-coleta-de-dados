import { IUpdateFaqDTO } from "./UpdateFaqDTO";
import { FaqRepository } from "../../../repositories/FaqRepository";

class UpdateFaqService {
  static async execute({ question, answer, faqId }: IUpdateFaqDTO) {
    try {
      const faq = await FaqRepository.update({ question, answer, faqId });

      return faq;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { UpdateFaqService };
