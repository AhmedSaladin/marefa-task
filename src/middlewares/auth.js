import ApiError from "../utility/error.js";
import { status } from "../utility/statusCode.js";
export default (req, res, next) => {
  const role = req.body.role;

  if (role !== "admin")
    throw new ApiError("something went wrong *_* ", status.FORBIDDEN);
  next();
};
