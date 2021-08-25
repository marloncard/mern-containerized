import { Response, Request, NextFunction } from 'express';
import joi from 'joi';
import { User } from '../../models/Users';

export const schema = {
  params: joi.object({id: joi.string().required()}),
  body: joi.object({
    userName: joi.string(),
    firstName: joi.string(),
    lastName: joi.string(),
    email: joi.string().email(),
  })
};

export async function handler(req: Request, res: Response, next: NextFunction) {
  try {
    const user = await User.findOneAndUpdate({_id: req.params.id}, req.body, 
      {
        omitUndefined:true, // omit fields with undefined
        new:true, // return instance after updates
        useFindAndModify: false // use MongoDB's new findOneAndUpdate function
      }
    );
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}