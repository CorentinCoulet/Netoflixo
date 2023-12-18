import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
require('dotenv').config();

interface CustomRequest extends Request {
    userId?: string; 
}

const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  const secretKey = process.env.JWT_SECRET;

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    if (typeof token !== 'string' || typeof secretKey !== 'string') {
        return res.status(401).json({ message: 'Unauthorized' });
    }  
    const decoded = jwt.verify(token, secretKey);      
    (req as CustomRequest).userId = (decoded as { userId: string }).userId;
    next();
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

export default authMiddleware;
