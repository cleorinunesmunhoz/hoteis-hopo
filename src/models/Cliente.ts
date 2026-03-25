import Usuario from "./Usuario";

export default class Cliente extends Usuario{
   
    private cpf: string;
    
    constructor(cpf: string) {
        super();
        this.cpf = cpf;
    }
   
    public get getCpf(): string {
        return this.cpf;
    }
    public set setCpf(novoCpf: string) {
        this.cpf = novoCpf;
    }

    public mostrarDados(): void {
        console.log("Nome: " + super.getNome);
        console.log("CPF: " + this.cpf);
    }
}