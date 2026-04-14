import Banco from "./database/banco";
import HotelController from "./controller/hotelController";
import FirstScreen from "./view/firstScreen";

const banco = new Banco();
const controller = new HotelController(banco);

const tela = new FirstScreen(controller);

tela.iniciar();