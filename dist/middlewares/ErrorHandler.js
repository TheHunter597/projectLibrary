"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const prodErroHandler = (err, req, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
};
const devErrorHandler = (err, req, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
        fullError: err.fullError,
    });
};
const ErrorHandler = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "fail";
    err.message = err.message || "Something went wrong";
    err.fullError = err.fullError || err.message;
    if (process.env.ENVIROMENT === "PRODUCTION" ||
        process.env.ENVIROMENT == undefined) {
        prodErroHandler(err, req, res);
    }
    else if (process.env.ENVIROMENT === "DEVELOPMENT") {
        devErrorHandler(err, req, res);
    }
};
exports.ErrorHandler = ErrorHandler;
