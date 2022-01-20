import { status } from "../utility/statusCode.js";
import ApiError from "../utility/error.js";
/**
 *
 * @param {joi.ObjectSchema<any>} schema
 * @returns {Object} object values
 */
export default (schema) => (req, res, next) => {
  const { value, error } = schema.validate(req.body);
  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    throw new ApiError(errorMessage, status.BAD_REQUEST);
  }
  Object.assign(req.body, value);
  next();
};
