import { NextFunction, Request, Response } from "express";
import { ValidationError } from "../ErrorHandlers/ValidationError";

export const validateInputs = (inputs: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    for (let i = 0; i < inputs.length; i++) {
      if (!req.body.hasOwnProperty(inputs[i])) {
        const message = `${inputs.join(",")} should be provided`;
        return next(new ValidationError(message, 400));
      }
    }
    next();
  };
};
