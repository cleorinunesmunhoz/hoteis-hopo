import Admheranca from "./models/Admheranca";
//para ligar a tela principal(firtscreen)
import FirstScreen from "./view/FirstScreen";

const adm = new Admheranca("admin123");

adm.setNome = "Carlos";

adm.mostrarDados();

console.log(adm.getNome);
console.log(adm.getLogin);

adm.setLogin = "novoAdmin";
adm.setNome = "João";

adm.mostrarDados();


new FirstScreen();