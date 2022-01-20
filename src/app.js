import "./configs/db.js";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import NotFound from "./middlewares/notFound.js";
import ErrorHandler from "./middlewares/errorHandler.js";
import { successHandler, errorHandler } from "./configs/morgan.js";
import User from "./components/userLogs/userLogs.router.js";
import Category from "./components/category/category.router.js";
import Tag from "./components/tag/tag.router.js";
import { json } from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./docs/swagger.js";

export default (app) => {
  app.use(successHandler);
  app.use(errorHandler);
  app.use(cors());
  app.use(helmet());
  app.use(compression());
  app.use(json());
  app.use(User);
  app.use(Tag);
  app.use(Category);
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  app.use("*", NotFound);
  app.use(ErrorHandler);
};
