import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { userLogins, activeUsers } from "./userLogs.controller.js";

const router = Router();

router.get("/user-logins", asyncHandler(userLogins));
router.get("/active-users", asyncHandler(activeUsers));

export default router;
