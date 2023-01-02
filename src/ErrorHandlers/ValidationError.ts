import { CustomError } from "./cutomError";

export class ValidationError extends CustomError {
  isOperational: boolean;
  status: "error" | "fail";
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.isOperational = true;
    this.status = this.statusCode.toString().startsWith("4") ? "error" : "fail";
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}
