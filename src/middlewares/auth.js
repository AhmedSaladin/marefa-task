import ApiError from "../utility/error.js";
import { status } from "../utility/statusCode.js";
export default (req, res, next) => {
  const role = req.headers["role"];
  if (role !== "admin")
    throw new ApiError("check out your header *_* ", status.FORBIDDEN);
  next();
};
