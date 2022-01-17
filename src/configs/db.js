import Mongoose from "mongoose";
import "dotenv/config";
import logger from "./logger.js";

Mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => logger.info("db connected"));
