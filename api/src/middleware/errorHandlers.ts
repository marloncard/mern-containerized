import { Errback, Request, Response, NextFunction } from 'express';

interface Errorback extends Errback {
    status?: number;
    message?: string;
}
// Send status code but if undefined send 500
export function errorHandler(error: Errorback, req: Request, res: Response, next: NextFunction) {
    res.status(error.status || 500);
    res.json({
        error: {
            message: `ErrorMessage: ${error.message}`
        }
    })
}   
// Handle 404 errors (nonexistant routes)
export function handle404(req: Request, res: Response, next: NextFunction) {
    const err = new Error("Not Found")
    res.status(404);
    next(err);
}