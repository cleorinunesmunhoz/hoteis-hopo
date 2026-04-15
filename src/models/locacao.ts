import Cliente from "./cliente";
import Quarto from "./quarto";
import TipoQuarto from "../enum/tipoQuarto";

export default class Locacao {

    private cliente: Cliente;
    private quarto: Quarto;

    constructor(cliente: Cliente, quarto: Quarto) {
        this.cliente = cliente;
        this.quarto = quarto;
    }

    public get getCliente(): Cliente {
        return this.cliente;
    }

    public set setCliente(novoCliente: Cliente) {
        this.cliente = novoCliente;
    }

    public get getQuarto(): Quarto {
        return this.quarto;
    }

    public set setQuarto(novoQuarto: Quarto) {
        this.quarto = novoQuarto;
    }

    public calcularValorTotal(): number {
        let valorDiaria: number = 0;

        if (this.quarto.getTipo === TipoQuarto.SOLTEIRO) {
            valorDiaria = 100;
        } else if (this.quarto.getTipo === TipoQuarto.CASAL) {
            valorDiaria = 180;
        } else if (this.quarto.getTipo === TipoQuarto.LUXO) {
            valorDiaria = 300;
        }

        return valorDiaria * this.quarto.getDias;
    }

    public mostrarDados(): void {
        console.log("Nome: " + this.cliente.getNome);
        console.log("CPF: " + this.cliente.getCpf);
        console.log("Quarto: " + this.quarto.getNumero);
        console.log("Tipo: " + this.quarto.getTipo);
        console.log("Dias: " + this.quarto.getDias);
        console.log("Valor total: " + this.calcularValorTotal());
    }
}