import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { categoriesViews } from "./category.controller.js";

const router = Router();

router.get("/categories-views", asyncHandler(categoriesViews));

export default router;
