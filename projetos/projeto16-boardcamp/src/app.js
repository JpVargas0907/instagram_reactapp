import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.listen(port || 5000, () => {
    console.log('Ouvindo na porta 5000')
})