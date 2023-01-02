import { NextFunction, Request, Response } from "express";
export declare const validateInputs: (inputs: string[]) => (req: Request, res: Response, next: NextFunction) => void;
