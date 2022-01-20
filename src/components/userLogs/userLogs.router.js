import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import auth from "../../middlewares/auth.js";
import { userLogins, activeUsers } from "./userLogs.controller.js";

const router = Router();

router.get("/user-logins", auth, asyncHandler(userLogins));
router.get("/active-users", auth, asyncHandler(activeUsers));

export default router;
