import express from 'express';

export const vinhoRouter = express.Router();


vinhoRouter.post('/', (req, res, next)=>{
    const vinho = req.body;
    console.log(vinho);
    vinho.id = 1;
    res.status(201).json(vinho);
});

vinhoRouter.put('/:id', (req, res, next)=>{
    const vinho = req.body;
    console.log(vinho);
    console.log(req.params);
    res.json(vinho)
});