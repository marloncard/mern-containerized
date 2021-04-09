import { Response, Request, NextFunction } from 'express';
import joi from 'joi';
import { User } from '../../models/Users';

export const schema = {
  body: joi.object({
    userName: joi.string().required(),
    firstName: joi.string(),
    lastName: joi.string(),
    email: joi.string().required().email(),
  })
};

export async function handler(req: Request, res: Response, next: NextFunction) {
    const user = new User(req.body);
    await user.save()
      .then(() => {
        res.status(200).json(user);
      })
      .catch(err => next(err));
}
