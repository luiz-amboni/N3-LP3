import { Document, model, Schema } from "mongoose";
import { RestauranteInterface } from "../interfaces/restaurante.interface";

export interface RestauranteModelInterface extends RestauranteInterface, Document{

};

export var RestauranteSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    }
});

const Restaurante = model<RestauranteModelInterface>('Restaurantes', RestauranteSchema);

export default Restaurante;