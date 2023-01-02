import { NextFunction, Request, Response } from "express";
declare const validateInputs: (inputs: string[]) => (req: Request, res: Response, next: NextFunction) => void;
export default validateInputs;
