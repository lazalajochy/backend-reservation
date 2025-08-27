import express, { Application } from "express";
import { env } from "./config/env";
import { globalMiddlewares } from "./middlewares/globalMiddlewares";


const app: Application = express();

globalMiddlewares.forEach((middleware) => {
    (middleware instanceof express.Router) ? app.use('/api', middleware) : app.use(middleware)

})


app.listen(env.PORT, () => {
  console.log(`🚀 App running on port: ${env.PORT}`);
});
