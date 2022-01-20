import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { tagList } from "./tag.controller.js";
import auth from "../../middlewares/auth.js";
import validation from "../../middlewares/validatior.js";
import { BodySchema } from "../userLogs/user.validation.schema.js";
const router = Router();

router.post(
  "/courses-list",
  auth,
  validation(BodySchema),
  asyncHandler(tagList)
);

export default router;
