import Cliente from "../models/cliente";
import Quarto from "../models/quarto";
import Locacao from "../models/locacao";

export default class Banco {

    public clientes: Cliente[] = [];
    public quartos: Quarto[] = [];
    public locacoes: Locacao[] = [];
}