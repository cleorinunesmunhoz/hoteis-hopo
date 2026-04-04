export default class Administrador {
    private nome!: string;

    public get getNome(): string {
        return this.nome;
    }

    public set setNome(novoNome: string) {
        this.nome = novoNome;
    }
}