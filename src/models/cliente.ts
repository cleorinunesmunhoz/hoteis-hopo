import Pessoa from "./pessoa";

export default class Cliente extends Pessoa {

    private cpf: string;

    constructor(nome: string, cpf: string) {
        super(nome);
        this.cpf = cpf;
    }

    public get getCpf(): string {
        return this.cpf;
    }

    public set setCpf(novoCpf: string) {
        this.cpf = novoCpf;
    }

    public mostrarDados(): void {
        console.log("Nome: " + this.getNome + "\nCPF: " + this.getCpf);
    }
}