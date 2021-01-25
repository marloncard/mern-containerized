import {Response, Request, NextFunction} from 'express';
import { User } from '../../models/Users';


export async function handler(req: Request, res: Response, next: NextFunction) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        console.log(err);
    };
}
