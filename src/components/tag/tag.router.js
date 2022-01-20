import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { tagList } from "./tag.controller.js";

const router = Router();

router.get("/courses-list", asyncHandler(tagList));

export default router;
