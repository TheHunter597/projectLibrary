"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationError = void 0;
const cutomError_1 = require("./cutomError");
class ValidationError extends cutomError_1.CustomError {
    constructor(message, statusCode) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.isOperational = true;
        this.status = this.statusCode.toString().startsWith("4") ? "error" : "fail";
        Object.setPrototypeOf(this, ValidationError.prototype);
    }
}
exports.ValidationError = ValidationError;
