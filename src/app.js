import express from 'express';
import cors from 'cors';
import paletasRouter from './routers/paletas.routers.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use('/paletas', paletasRouter);

app.get('/', (req, res) => res.redirect('/paletas/info'));

export default app;
