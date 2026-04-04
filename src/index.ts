import Admheranca from "./models/Admheranca";

const adm = new Admheranca("admin123");

adm.setNome = "Carlos";

adm.mostrarDados();

console.log(adm.getNome);
console.log(adm.getLogin);

adm.setLogin = "novoAdmin";
adm.setNome = "João";

adm.mostrarDados();