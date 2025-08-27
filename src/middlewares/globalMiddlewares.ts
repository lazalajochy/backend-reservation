import express from "express";
import router from "../route";

export const globalMiddlewares = [
    express.json(),
    express.urlencoded({extended:true}),
    router
]