import ItemController from "./Controllers/ItemController.js";
import ListController from "./Controllers/ListController.js";
import { loadState } from "./Utils/LocalStorage.js";


class App {
    listController = new ListController()
    itemController = new ItemController()
}

window["app"] = new App();
loadState()
