import { IGetFaqDTO } from "./GetFaqDTO";
import { FaqRepository } from "../../../repositories/FaqRepository";

class GetFaqService {
  static async execute({ faqId }: IGetFaqDTO) {
    try {
      const faq = await FaqRepository.get({ faqId });

      if (!faq) {
        return { error: "Faq not exists!" };
      }

      return faq;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { GetFaqService };
