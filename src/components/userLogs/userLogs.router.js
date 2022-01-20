import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import auth from "../../middlewares/auth.js";
import validation from "../../middlewares/validatior.js";
import { userLogins, activeUsers } from "./userLogs.controller.js";
import { BodySchema } from "./user.validation.schema.js";
const router = Router();

router.post(
  "/user-logins",
  auth,
  validation(BodySchema),
  asyncHandler(userLogins)
);
router.get("/active-users", auth, asyncHandler(activeUsers));

export default router;
