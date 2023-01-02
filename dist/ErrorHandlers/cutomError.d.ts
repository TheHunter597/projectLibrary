export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    abstract message: string;
    abstract isOperational: boolean;
    constructor(message: string);
    serializeError?(error: any): {
        message: string;
        statusCode: number;
        status: string;
        fullError: any;
    };
}
