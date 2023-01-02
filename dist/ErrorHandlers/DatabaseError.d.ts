import { CustomError } from "./cutomError";
export declare class DatabaseError extends CustomError {
    message: string;
    statusCode: number;
    isOperational: boolean;
    constructor(message: string, statusCode: number);
    serializeError(error: any): {
        message: string;
        statusCode: number;
        status: string;
        fullError: any;
    };
}
