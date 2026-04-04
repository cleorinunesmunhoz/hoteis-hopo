import Administrador from "./Administrador";

export default class Admheranca extends Administrador {
    private login: string;

    constructor(login: string) {
        super();
        this.login = login;
    }

    public get getLogin(): string {
        return this.login;
    }

    public set setLogin(novoLogin: string) {
        this.login = novoLogin;
    }

    public mostrarDados(): void {
        console.log("Nome: " + this.getNome);
        console.log("Login: " + this.login);
    }
}
    