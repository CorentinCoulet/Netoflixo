/// <reference types="express-serve-static-core" />
declare const jwt: any;
declare const Express: any;
interface CustomRequest extends Express.Request {
    userId?: string;
}
declare const authMiddleware: (req: any, res: any, next: any) => any;
