import { CustomError } from "./cutomError";
export declare class ValidationError extends CustomError {
    message: string;
    statusCode: number;
    isOperational: boolean;
    status: "error" | "fail";
    constructor(message: string, statusCode: number);
}
