import Express from "express";
import app from "./src/app.js";
import logger from "./src/configs/logger.js";
const PORT = process.env.PORT || 3000;
const server = Express();

app(server);

server.listen(PORT, () => logger.info("Server running"));


