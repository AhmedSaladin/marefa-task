import { Router } from "express";
import asyncHandler from "../../middlewares/asyncHandler.js";
import { tagList } from "./tag.controller.js";
import auth from "../../middlewares/auth.js";

const router = Router();

router.get("/courses-list", auth, asyncHandler(tagList));

export default router;
