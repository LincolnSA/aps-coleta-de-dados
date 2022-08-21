import { prismaClient } from "../prisma/prismaClient";

class UserRepository {
  static async create({ name, email, password, admin }) {
    try {
      const user = await prismaClient.users.create({
        data: { name, email, password, admin },
      });

      return user;
    } catch (error) {
      throw new Error("Error create user");
    }
  }
  static async get({ email }) {
    try {
      const user = await prismaClient.users.findFirst({
        where: { email },
      });

      return user;
    } catch (error) {
      throw new Error("Error get user");
    }
  }
}
export { UserRepository };
