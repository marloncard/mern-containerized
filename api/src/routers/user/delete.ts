import { Response, Request, NextFunction } from 'express';
import joi from 'joi';
import { User } from '../../models/Users';

export const schema = {
  params: joi.object({id: joi.string().required()})
};

export async function handler(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findOneAndDelete({_id: req.params.id});
      res.json(user);
  } catch (err) {
      next(err);
  };
}