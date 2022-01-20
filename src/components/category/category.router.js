import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { categoriesViews } from "./category.controller.js";
import auth from "../../middlewares/auth.js";

const router = Router();

router.get("/categories-views", auth, asyncHandler(categoriesViews));

export default router;
