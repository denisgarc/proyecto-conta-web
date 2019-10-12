import { Brand } from './Brand';
import { Color } from './Color';

export class Product {
    Codigo: number;
    Marca: Brand;
    Color: Color;
    Descripcion: string;
    Tamano: number;
    Estado: boolean;
    Nombre: string;

    constructor(codigo: number,
                marca: Brand,
                color: Color,
                descripcion: string,
                tamano: number,
                estado: boolean) {
        this.Codigo = codigo;
        this.Marca = marca;
        this.Color = color;
        this.Descripcion = descripcion;
        this.Tamano = tamano;
        this.Estado = estado;
        this.Nombre = descripcion + ' Marca ' + marca.Nombre + ' Color ' + color.Nombre + ' Talla ' + tamano;
    }
}
