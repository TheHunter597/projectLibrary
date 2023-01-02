import { CustomError } from "./cutomError";

export class notAuthorized extends CustomError {
  statusCode = 401;
  isOperational;
  constructor(public message: string) {
    super(message);
    this.message = message;
    this.isOperational = true;
  }
}
