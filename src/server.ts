import express from "express";

import { router } from "./routes";

import "./database";
import "reflect-metadata";

const app = express();

app.use(express.json());

app.listen(3333, () => console.log("Case stone server is running"));

app.use(router);
