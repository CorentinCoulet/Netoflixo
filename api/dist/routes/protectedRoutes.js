"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
router.get('/protected', authMiddleware, (res) => {
    res.json();
});
exports.default = router;
