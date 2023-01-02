import { config } from "dotenv";
import { Request, Response, NextFunction } from "express";
config();

interface err extends Error {
  status: string;
  statusCode: number;
  isOperational: boolean;
  fullError: any;
}

const prodErroHandler = (err: err, req: Request, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};

const devErrorHandler = (err: err, req: Request, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    fullError: err.fullError,
  });
};

export const ErrorHandler = (
  err: err,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "fail";
  err.message = err.message || "Something went wrong";
  err.fullError = err.fullError || err.message;
  if (
    process.env.ENVIROMENT === "PRODUCTION" ||
    process.env.ENVIROMENT == undefined
  ) {
    prodErroHandler(err, req, res);
  } else if (process.env.ENVIROMENT === "DEVELOPMENT") {
    devErrorHandler(err, req, res);
  }
};
