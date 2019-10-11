export class Operation {
    Codigo: number;
    Nombre: string;
    Credito: boolean;
    Debito: boolean;
    Estado: boolean;

    constructor(codigo: number,
                nombre: string,
                credito: boolean,
                debito: boolean,
                estado: boolean) {
        this.Codigo = codigo;
        this.Nombre = nombre;
        this.Credito = credito;
        this.Debito = debito;
        this.Estado = estado;
    }
}
