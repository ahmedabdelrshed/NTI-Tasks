import express from 'express';
import dotenv from 'dotenv';
import database from './config/DB';
import mountRoutes from './routes';

const app: express.Application = express();

app.use(express.json());
dotenv.config();

database()

mountRoutes(app)
app.listen(process.env.PORT, () => {
    console.log(`Server is Fire at http://localhost:${process.env.PORT}`);
});
