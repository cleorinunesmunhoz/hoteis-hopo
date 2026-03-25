export default class Administrador {
    private nome: string;
    private login: string;

    constructor(nome: string, login: string) {
        this.nome = nome;
        this.login = login;
    }
    public get getNome(): string {
        return this.nome;
    }
    public set setNome(novoNome: string) {
        this.nome = novoNome;
    }
    public get getLogin(): string {
        return this.login;
    }
    public set setLogin(novoLogin: string) {
        this.login = novoLogin;
    }
    public mostrarDados(): void {
        console.log("Administrador: " + this.nome);
        console.log("Login: " + this.login);
    }

    public gerenciarSistema(): void {
        console.log(this.nome + " está gerenciando o sistema.");
    }
}