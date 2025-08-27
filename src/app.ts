import express, { Application } from "express";
import { env } from "./config/env";
import { globalMiddlewares } from "./middlewares/globalMiddlewares";
import logger from "./utils/logger";

const app: Application = express();

globalMiddlewares.forEach((middleware) => {
    (middleware instanceof express.Router) ? app.use('/api', middleware) : app.use(middleware)
})

app.listen(env.PORT, () => {
    logger.info(`🚀 App running on port: ${env.PORT}`);
});
