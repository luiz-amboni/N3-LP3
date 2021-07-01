import express from 'express';
import Restaurante from '../models/restauranet.model';

export const restauranteRouter = express.Router();


restauranteRouter.post('/', (req, res, next)=>{
    const restaurante = new Restaurante(req.body);
    restaurante.save(err=>{
        if (err){
            res.status(500).json(err)
        }else {
            res.status(201).json(restaurante);
        };
    })
});

restauranteRouter.get('/', (req, res, next)=>{
    const restaurantes = Restaurante.find((err, restaurantes)=>{
        if (err){
            res.status(500).json(err);
        }else {
            res.json(restaurantes);
        }
    });
});

restauranteRouter.get('/:id', (req, res, next)=>{
    const id = req.params.id;
    const restaurante = Restaurante.findById(id,(err:any, restaurante:any)=>{
        if (err){
            res.status(500).json(err);
        }else if (restaurante) {
            res.json(restaurante);
        }else {
            res.status(404).send();
        }
    })
})

restauranteRouter.put('/:id', (req, res, next)=>{
    const restaurante = Restaurante.findByIdAndUpdate(req.params.id, req.body,(err:any, restaurante:any)=>{
        if (err){
            res.status(500).json(err);
        }else if (restaurante){
            res.send(restaurante);
        }else {
            res.status(404).send();
        }
    })
});

restauranteRouter.delete('/:id', (req, res, next)=>{
    const restaurante = Restaurante.deleteOne({ _id:req.params.id }, (err:any)=>{
        if (err){
            res.status(500).json();
        }else {
            res.send('Restaurante excluído da base de dados!!!');
        }
    })
})