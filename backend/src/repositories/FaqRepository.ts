import { prismaClient } from "../prisma/prismaClient";

class FaqRepository {
  static async create({ question, answer, userId }) {
    try {
      const faq = prismaClient.faqs.create({
        data: { question, answer, userId },
      });

      return faq;
    } catch (error) {
      throw new Error("Error create faq");
    }
  }

  static async get({ faqId }) {
    try {
      const faq = await prismaClient.faqs.findFirst({ where: { id: faqId } });
      return faq;
    } catch (error) {
      throw new Error("Error get faq");
    }
  }

  static async list({ userId, isAdmin }) {
    try {
      return isAdmin
        ? await prismaClient.faqs.findMany({
            include: {
              user: {
                select: {
                  name: true,
                  email: true,
                },
              },
            },
          })
        : await prismaClient.faqs.findMany({ where: { userId } });
    } catch (error) {
      throw new Error("Error list faqs");
    }
  }

  static async update({ question, answer, faqId }) {
    try {
      const faq = await prismaClient.faqs.update({
        data: { question, answer, created_at: new Date() },
        where: { id: faqId },
      });

      return faq;
    } catch (error) {
      throw new Error("Error update faq");
    }
  }

  static async delete({ faqId }) {
    try {
      const faq = await prismaClient.faqs.delete({ where: { id: faqId } });
      return faq;
    } catch (error) {
      throw new Error("Error delete faq");
    }
  }
}
export { FaqRepository };
