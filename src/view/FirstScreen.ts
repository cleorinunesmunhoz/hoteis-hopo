const promptSync = require("prompt-sync");

export default class FirstScreen {
    private prompt = promptSync();

    constructor() {
        this.mainMenu();
    }
    public mainMenu():void {
        let open = true;

        while (open) {
            console.log("\n=== SISTEMA HOTEL ===\n");
            const option = parseInt(
                this.prompt("1. Cadastrar Cliente\n2.Mostrar Cliente\n3. Sair\nEscolha:")
            );
            switch (option) {
                case 1:
                    console.log("Cadastrar cliente...");
                    break;
                    case 2:
                        console.log("Mostrar cliente...");
                        break;
                        case 3:
                            open = false;
                            console.log("Saindo...");
                            break;
                            default:
                                console.log("Opção inválida");
            }
        }
    }
}