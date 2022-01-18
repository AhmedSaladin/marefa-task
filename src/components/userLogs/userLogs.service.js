import UserLogsRepository from "./userLogs.repository.js";
import ApiError from "../../utility/error.js";
import { status } from "../../utility/statusCode.js";
import mongoose from "mongoose";

export default {
  /**
   *
   * @param {string} id
   * @param {object} date
   * @returns object
   */
  logins: async (id, date) => {
    if (!mongoose.isValidObjectId(id))
      throw new ApiError("invalid user id", status.BAD_REQUEST);
    const from = new Date(date.from).toISOString();
    const to = new Date(date.to).toISOString();
    const result = await UserLogsRepository.userLoginInSpecificPeriod(
      id,
      from,
      to
    );
    if (!result.length)
      return { message: "user didn't signin in this interval" };
    return result[0];
  },
};
