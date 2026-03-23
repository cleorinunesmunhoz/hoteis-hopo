export default class Cliente {
    private nome: string;
    private cpf: string;
    private telefone: string;
    private numeroQuarto: number;
    private dataEntrada: string;

    constructor(
        nome: string,
        cpf: string,
        telefone: string,
        numeroQuarto: number,
        dataEntrada: string
    ) {
        this.nome = nome;
        this.cpf = cpf;
        this.telefone = telefone;
        this.numeroQuarto = numeroQuarto;
        this.dataEntrada = dataEntrada;
    }

    public mostrarDados(): void {
        console.log("Nome: " + this.nome);
        console.log("CPF: " + this.cpf);
        console.log("Telefone: " + this.telefone);
        console.log("Quarto: " + this.numeroQuarto);
        console.log("Data de entrada: " + this.dataEntrada);
    }
}