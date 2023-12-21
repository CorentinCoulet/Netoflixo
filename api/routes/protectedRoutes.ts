const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/protected', authMiddleware, (res: Response) => {
  res.json();
});

export default router;
