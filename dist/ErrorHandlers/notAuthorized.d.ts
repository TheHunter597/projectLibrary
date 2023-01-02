import { CustomError } from "./cutomError";
export declare class notAuthorized extends CustomError {
    message: string;
    statusCode: number;
    isOperational: boolean;
    constructor(message: string);
}
