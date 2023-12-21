"use strict";
const express = require('express');
const cors = require('cors');
const authMiddlewares = require('./middleware/authMiddleware.ts');
const loginRoutes = require('./routes/loginRoutes');
const registerRoutes = require('./routes/registerRoutes');
const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/secure', authMiddlewares);
app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
