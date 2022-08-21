import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { prismaClient } from "../prisma/prismaClient";

interface IPayload {
  sub: string;
}

export const ensureAuthenticated = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const authToken = request.headers.authorization;

    if (!authToken) {
      return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    const { sub } = verify(token, process.env.SECRET_TOKEN) as IPayload;

    const { admin } = await prismaClient.users.findFirst({
      where: { id: sub },
    });

    request.user_id = sub;
    request.is_admin = admin;

    return next();
  } catch (error) {
    return response.status(401).end();
  }
};
