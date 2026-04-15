import TipoQuarto from "../enum/tipoQuarto";

export default class Quarto {

    private numero: number;
    private tipo: TipoQuarto;
    private dias: number;

    constructor(numero: number, tipo: TipoQuarto, dias: number) {
        this.numero = numero;
        this.tipo = tipo;
        this.dias = dias;
    }

    public get getNumero(): number {
        return this.numero;
    }

    public get getTipo(): TipoQuarto {
        return this.tipo;
    }

    public get getDias(): number {
        return this.dias;
    }

    public set setDias(novoDias: number) {
        this.dias = novoDias;
    }

    public mostrarDados(): void {
        console.log("Quarto: " + this.numero);
        console.log("Tipo: " + this.tipo);
        console.log("Dias: " + this.dias);
    }
}