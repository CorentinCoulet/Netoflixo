"use strict";
const jwt = require('jsonwebtoken');
const Express = require('express');
require('dotenv').config();
const authMiddleware = (req, res, next) => {
    const token = req.headers ? req.headers('Authorization') : undefined;
    const secretKey = process.env.JWT_SECRET;
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        if (typeof token !== 'string' || typeof secretKey !== 'string') {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        next();
    }
    catch (error) {
        console.error('Error verifying token:', error);
        res.status(401).json({ message: 'Unauthorized' });
    }
};
module.exports = authMiddleware;
