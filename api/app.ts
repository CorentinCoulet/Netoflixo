import express, { Express } from 'express';
import cors from 'cors';
import authMiddleware from './middleware/authMiddleware';
import loginRoutes from './routes/loginRoutes';
import registerRoutes from './routes/registerRoutes';

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use('/api/secure', authMiddleware);

app.use('/api/login', loginRoutes);
app.use('/api/register', registerRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});