import Cliente from "./cliente";
import Quarto from "./quarto";

export default class Locacao {

    private cliente: Cliente;
    private quarto: Quarto;

    constructor(cliente: Cliente, quarto: Quarto) {
        this.cliente = cliente;
        this.quarto = quarto;
    }

    public mostrarDados(): void {
        console.log("=== LOCAÇÃO ===");
        this.cliente.mostrarDados();
        this.quarto.mostrarDados();
    }
}