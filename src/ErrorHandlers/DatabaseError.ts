import { CustomError } from "./cutomError";

export class DatabaseError extends CustomError {
  isOperational: boolean;
  constructor(public message: string, public statusCode: number) {
    super(message);
    this.isOperational = true;
    Object.setPrototypeOf(this, DatabaseError.prototype);
  }
  serializeError(error: any): {
    message: string;
    statusCode: number;
    status: string;
    fullError: any;
  } {
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
