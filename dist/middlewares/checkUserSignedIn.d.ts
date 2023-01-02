import { NextFunction, Request, Response } from "express";
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
export declare function checkUserSignedIn(req: Request, res: Response, next: NextFunction): Promise<void>;
export {};
