// alexdcerda = xKnjuuvXYIqL3ISr
// mongodb+srv://alexdcerda:xKnjuuvXYIqL3ISr@expenses.xft3k.mongodb.net/

import express, {Express} from 'express';
import mongoose from 'mongoose';
import financialRecordRouter from './routes/financial-records';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../.env') });

const app: Express = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  throw new Error("MONGO_URI is not defined in the environment variables.");
}

mongoose.connect(mongoUri).then(() => console.log('MongoDB Connected'))
.catch(err => console.error('Failed to connect to mongodb', err));

app.use('/financial-records', financialRecordRouter);

app.listen(port, () => {
    console.log(`Server Running on Port ${port}`)
})