export class Brand {
    Codigo: number;
    Nombre: string;
    Estado: boolean;

    constructor(codigo: number,
                nombre: string,
                estado: boolean) {
        this.Codigo = codigo;
        this.Nombre = nombre;
        this.Estado = estado;
    }
}
