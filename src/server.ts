import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";

import "reflect-metadata";
import "express-async-errors";
import { AppError } from "./errors/AppError";
import { router } from "./routes";

import "./database";

import "./shared/container";

const app = express();

dotenv.config();

app.use(express.json());

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        return response.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`,
        });
    }
);

app.use(cors());

app.listen(process.env.PORT || 3333, () =>
    console.log("Case stone server is running")
);

app.use(router);
