export default class Administrador {
    private nome: string;
    private login: string;

    constructor(nome: string, login: string) {
        this.nome = nome;
        this.login = login;
    }

    public mostrarDados(): void {
        console.log("Administrador: " + this.nome);
        console.log("Login: " + this.login);
    }

    public gerenciarSistema(): void {
        console.log(this.nome + " está gerenciando o sistema.");
    }
}