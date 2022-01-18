import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { userLogins } from "./userLogs.controller.js";

const router = Router();

router.get("/user-logins", asyncHandler(userLogins));

export default router;
