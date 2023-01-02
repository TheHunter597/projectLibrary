import { Request, Response, NextFunction } from "express";
interface err extends Error {
    status: string;
    statusCode: number;
    isOperational: boolean;
    fullError: any;
}
export declare const ErrorHandler: (err: err, req: Request, res: Response, next: NextFunction) => void;
export {};
