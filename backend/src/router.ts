import { Router } from "express";
import { AuthUserController, CreateUserController } from "./controllers/user";
import { ensureAuthenticated } from "./middlewares";
import {
  CreateFaqController,
  DeleteFaqController,
  GetFaqController,
  ListFaqController,
  UpdateFaqController,
} from "./controllers/faq";

const router = Router();

router.post("/login", AuthUserController.handle);
router.post("/users", CreateUserController.handle);

router.post("/faqs", ensureAuthenticated, CreateFaqController.handle);
router.get("/faqs", ensureAuthenticated, ListFaqController.handle);
router.get("/faqs/:id", ensureAuthenticated, GetFaqController.handle);
router.post("/faqs/:id/edit", ensureAuthenticated, UpdateFaqController.handle);
router.get("/faqs/:id/delete", ensureAuthenticated, DeleteFaqController.handle);

export { router };
