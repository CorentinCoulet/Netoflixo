import express, { Request, Response } from 'express';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.get('/protected', authMiddleware, (req: Request, res: Response) => {
  res.json({ message: 'You have access to this protected route' });
});

export default router;
