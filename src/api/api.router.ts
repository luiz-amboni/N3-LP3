import express from 'express';
import { restauranteRouter } from './restaurante.router';

export const apiRouter = express.Router();

apiRouter.use('/restaurantes', restauranteRouter);

