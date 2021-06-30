import express from 'express';
import cors from 'cors';
import { apiRouter } from './api/api.router';

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

app.listen(8080, ()=>{
    console.log("Server is running")
});

