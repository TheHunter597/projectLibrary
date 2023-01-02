"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateInputs = void 0;
const ValidationError_1 = require("../ErrorHandlers/ValidationError");
const validateInputs = (inputs) => {
    return (req, res, next) => {
        for (let i = 0; i < inputs.length; i++) {
            if (!req.body.hasOwnProperty(inputs[i])) {
                const message = `${inputs.join(",")} should be provided`;
                return next(new ValidationError_1.ValidationError(message, 400));
            }
        }
        next();
    };
};
exports.validateInputs = validateInputs;
