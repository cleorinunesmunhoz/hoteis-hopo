import TipoQuarto from "../enum/tipoQuarto";

export default class Quarto {

    private numero: number;
    private tipo: TipoQuarto;

    constructor(numero: number, tipo: TipoQuarto) {
        this.numero = numero;
        this.tipo = tipo;
    }

    public get getNumero(): number {
        return this.numero;
    }

    public get getTipo(): TipoQuarto {
        return this.tipo;
    }

    public mostrarDados(): void {
        console.log(`Quarto: ${this.numero}\nTipo: ${this.tipo}`);
    }
}