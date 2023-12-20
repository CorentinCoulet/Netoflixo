// import express, { Express } from 'express';
const express = require('express');
// import cors from 'cors';
import authMiddleware from './middleware/authMiddleware';
import loginRoutes from './routes/loginRoutes';
import registerRoutes from './routes/registerRoutes';
const cors = require('cors');
// const authMiddleware = require('./middleware/authMiddleware');
// const loginRoutes = require('./routes/loginRoutes');
// const registerRoutes = require('./routes/registerRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/secure', authMiddleware);

app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});