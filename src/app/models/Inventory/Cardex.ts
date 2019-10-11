import {Product} from './Product';
import { Operation } from './Operation';
import {Branch} from './Branch';

export class Cardex {
    Id: number;
    Sucursal: Branch;
    Operacion: Operation;
    Producto: Product;
    FechaOperacion: Date;
    Cantidad: number;
    Descripcion: string;

    constructor(id: number,
               sucursal: Branch,
               operacion: Operation,
               producto: Product,
               fechaOperacion: Date,
               cantidad: number,
               descripcion: string) {
        this.Id = id;
        this.Sucursal = sucursal;
        this.Operacion = operacion;
        this.Producto = producto;
        this.FechaOperacion = fechaOperacion;
        this.Cantidad = cantidad;
        this.Descripcion = descripcion;
    }
}
