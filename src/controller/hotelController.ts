import Banco from "../database/banco";
import Cliente from "../models/cliente";
import Quarto from "../models/quarto";
import Locacao from "../models/locacao";

export default class HotelController {

    private banco: Banco;

    constructor(banco: Banco) {
        this.banco = banco;
    }

    public cadastrarCliente(cliente: Cliente): void {
        this.banco.clientes.push(cliente);
    }

    public cadastrarQuarto(quarto: Quarto): void {
        this.banco.quartos.push(quarto);
    }

    public cadastrarLocacao(locacao: Locacao): void {
        this.banco.locacoes.push(locacao);
    }

    public listarClientes(): void {
        for (const cliente of this.banco.clientes) {
            cliente.mostrarDados();
            console.log("------------------");
        }
    }

    public listarQuartos(): void {
        for (const quarto of this.banco.quartos) {
            quarto.mostrarDados();
            console.log("------------------");
        }
    }

    public listarLocacoes(): void {
        for (const locacao of this.banco.locacoes) {
            locacao.mostrarDados();
            console.log("------------------");
        }
    }
}