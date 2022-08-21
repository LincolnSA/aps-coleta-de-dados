import { IListFaqDTO } from "./ListFaqDTO";
import { FaqRepository } from "../../../repositories/FaqRepository";

class ListFaqService {
  static async execute({ userId, isAdmin }: IListFaqDTO) {
    try {
      const faqs = await FaqRepository.list({ userId, isAdmin });
      return faqs;
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
export { ListFaqService };
