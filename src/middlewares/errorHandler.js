import "dotenv/config";
import { status } from "../utility/statusCode.js";
import logger from "../configs/logger.js";

// eslint-disable-next-line no-unused-vars
export default (err, req, res, next) => {
  const { message } = err;
  const statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR;
  if (process.env.NODE_ENV === "development") logger.error(err);
  res.locals.errorMessage = message;
  res.status(statusCode).json({ error: message });
};

const exitHandler = () => {
  logger.info("Server closed");
  process.exit(1);
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  process.exit(1);
});
