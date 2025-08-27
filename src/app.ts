import express, {Application} from "express";
import { env } from "./config/env";

const app: Application = express();


app.listen(() => {
    console.log(`App running on port: ${env.PORT}` )
})