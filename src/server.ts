import cors from "cors";
import express, { Request, Response, NextFunction } from "express";

import "reflect-metadata";
import "express-async-errors";
import { AppError } from "./errors/AppError";
import { router } from "./routes";

import "./database";

import "./shared/container";

const app = express();

app.use(express.json());

const allowedOrigins = ["http://localhost:3333"];

const options: cors.CorsOptions = {
    origin: allowedOrigins,
};

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

app.use(cors(options));

app.listen(3333, () => console.log("Case stone server is running"));

app.use(router);
