import { Request, Response, NextFunction } from 'express';

export const ensureAuthenticated = (req: Request, res: Response, next: NextFunction) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.status(401).json({ msg: 'Please log in to view this resource' });
  }
};
