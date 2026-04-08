
import FirstScreen from "./view/FirstScreen";

export default class MainController{
    private FirstScreen!: FirstScreen;

    constructor(){
        this.FirstScreen = new FirstScreen(); 
    }
}