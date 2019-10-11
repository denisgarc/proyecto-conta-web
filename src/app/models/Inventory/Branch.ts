export class Branch {
    Codigo: number;
    Nombre: string;
    NombreAbreviado: string;
    Estado: boolean;

    constructor(codigo: number,
                nombre: string,
                nombreAbrev: string,
                estado: boolean) {
        this.Codigo = codigo;
        this.Nombre = nombre;
        this.NombreAbreviado = nombreAbrev,
        this.Estado = estado;
    }
}
