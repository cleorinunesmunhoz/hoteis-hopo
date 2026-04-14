import * as readlineSync from "readline-sync";
import HotelController from "../controller/hotelController";
import Cliente from "../models/cliente";
import Quarto from "../models/quarto";
import TipoQuarto from "../enum/tipoQuarto";
import Locacao from "../models/locacao";

export default class FirstScreen {

    private controller: HotelController;

    constructor(controller: HotelController) {
        this.controller = controller;
    }

    public iniciar(): void {

        let opcao: number;

        do {
            console.log("\n1 - Cadastrar Cliente");
            console.log("2 - Cadastrar Quarto");
            console.log("3 - Fazer Locação");
            console.log("4 - Listar Clientes");
            console.log("5 - Listar Quartos");
            console.log("6 - Listar Locações");
            console.log("0 - Sair");

            opcao = Number(readlineSync.question("Escolha: "));

            switch (opcao) {

                case 1:
                    this.cadastrarCliente();
                    break;

                case 2:
                    this.cadastrarQuarto();
                    break;

                case 3:
                    this.fazerLocacao();
                    break;

                case 4:
                    this.controller.listarClientes();
                    break;

                case 5:
                    this.controller.listarQuartos();
                    break;

                case 6:
                    this.controller.listarLocacoes();
                    break;

                case 0:
                    console.log("Saindo...");
                    break;

                default:
                    console.log("Opção inválida");
            }

        } while (opcao !== 0);
    }

    private cadastrarCliente(): void {

        const nome = readlineSync.question("Nome: ");
        const cpf = readlineSync.question("CPF: ");

        const cliente = new Cliente(nome, cpf);
        this.controller.cadastrarCliente(cliente);

        console.log("Cliente cadastrado!");
    }

    private cadastrarQuarto(): void {

        const numero = Number(readlineSync.question("Numero do quarto: "));
        const tipoInput = readlineSync.question("Tipo (SOLTEIRO, CASAL, LUXO): ");

        const tipo = TipoQuarto[tipoInput as keyof typeof TipoQuarto];

        const quarto = new Quarto(numero, tipo);
        this.controller.cadastrarQuarto(quarto);

        console.log("Quarto cadastrado!");
    }

    private fazerLocacao(): void {

        const cliente = this.controller["banco"].clientes[0];
        const quarto = this.controller["banco"].quartos[0];

        if (!cliente || !quarto) {
            console.log("Cadastre cliente e quarto primeiro!");
            return;
        }

        const locacao = new Locacao(cliente, quarto);
        this.controller.cadastrarLocacao(locacao);

        console.log("Locação realizada!");
    }
}