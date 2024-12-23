import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
const app = express();
import cookieParser from 'cookie-parser';
import connectDB from './db/db.js';
connectDB();
import userRoutes from './routes/user.route.js';
import captionRoutes from './routes/caption.route.js';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => {
    res.send('Welcome')
})
app.use('/users', userRoutes);
app.use('/caption', captionRoutes);

export default app;

