import express from 'express';
import cors from 'cors';
import { apiRouter } from './api/api.router';
import mongoose from 'mongoose';

const mongodbUrl = 'mongodb+srv://luiz:pause1029@cluster0.fkir0.mongodb.net/restaurantes'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', apiRouter);

mongoose.connect(mongodbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}).then(result =>{
    console.log('Conectado ao banco')
})

app.listen(8080, ()=>{
    console.log("Server is running")
});

