import Cliente from "./models/Cliente";
import Administrador from "./models/Administrador";

console.clear();

const cliente1 = new Cliente(
    "Cleori",
    
);

cliente1.mostrarDados();

console.log("Nome pelo get:", cliente1.getNome);

cliente1.setNome = "Cleonice";

console.log("Depois do set:");

console.log("------------------");

const admin1 = new Administrador("cleo", "admin01");
admin1.mostrarDados();
admin1.gerenciarSistema();