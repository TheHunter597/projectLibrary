"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notAuthorized = void 0;
const cutomError_1 = require("./cutomError");
class notAuthorized extends cutomError_1.CustomError {
    constructor(message) {
        super(message);
        this.message = message;
        this.statusCode = 401;
        this.message = message;
        this.isOperational = true;
    }
}
exports.notAuthorized = notAuthorized;
