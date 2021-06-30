import express from 'express';
import { vinhoRouter } from './vinho.router';

export const apiRouter = express.Router();

apiRouter.use('/vinhos', vinhoRouter);

apiRouter.get('/', (req, res, next)=>{
    console.log(req.query)
    res.json({
        "id": "1",
        "name": "Luiz"
    });
});
