export abstract class CustomError extends Error {
  abstract statusCode: number;
  abstract message: string;
  abstract isOperational: boolean;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
  serializeError?(error: any): {
    message: string;
    statusCode: number;
    status: string;
    fullError: any;
  };
}
