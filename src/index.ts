import Cliente from "./models/Cliente";
import Administrador from "./models/Administrador";

console.clear();

const cliente1 = new Cliente(
    "Cleori",
    "123.456.789-00",
    "42999999999",
    101,
    "23/03/2026"
);

cliente1.mostrarDados();

console.log("------------------");

const admin1 = new Administrador("Emerson", "admin01");
admin1.mostrarDados();
admin1.gerenciarSistema();