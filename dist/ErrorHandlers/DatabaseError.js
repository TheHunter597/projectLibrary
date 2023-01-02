"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseError = void 0;
const cutomError_1 = require("./cutomError");
class DatabaseError extends cutomError_1.CustomError {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.isOperational = true;
        Object.setPrototypeOf(this, DatabaseError.prototype);
    }
    serializeError(error) {
        const errorMessage = Object.keys(error.errors)
            .map((errorKey) => {
            return error.errors[errorKey].message;
        })
            .join();
        return {
            message: errorMessage,
            statusCode: this.statusCode,
            status: "error",
            fullError: error,
        };
    }
}
exports.DatabaseError = DatabaseError;
