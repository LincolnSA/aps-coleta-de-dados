import { ICreateFaqDTO } from "./CreateFaqDTO";
import { FaqRepository } from "../../../repositories/FaqRepository";

class CreateFaqService {
  static async execute({ question, answer, userId }: ICreateFaqDTO) {
    try {
      const faq = await FaqRepository.create({ question, answer, userId });

      return faq;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { CreateFaqService };
