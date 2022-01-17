import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import NotFound from "./middlewares/notFound.js";
import ErrorHandler from "./middlewares/errorHandler.js";
import { successHandler, errorHandler } from "./configs/morgan.js";
import { json } from "express";
import "./configs/db.js";

export default (app) => {
  app.use(successHandler);
  app.use(errorHandler);
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(json());
  app.use("*", NotFound);
  app.use(ErrorHandler);
};
