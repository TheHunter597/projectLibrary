import { NextFunction, Request, Response } from "express";
import { notAuthorized } from "../ErrorHandlers/notAuthorized";
import jwt from "jsonwebtoken";

interface jwtData {
  id: string;
  Email: string;
}

declare global {
  namespace Express {
    interface Request {
      user: jwtData;
    }
  }
}

async function checkUserSignedIn(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.session?.jwt) {
    return next(new notAuthorized("Please sign in to do this action"));
  }
  const data = jwt.verify(
    req.session.jwt,
    process.env["jwt-secret"]!
  ) as jwtData;
  req.user = data;
  next();
}

export default checkUserSignedIn;
