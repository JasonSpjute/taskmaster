import ItemController from "./Controllers/ItemController.js";
import ListController from "./Controllers/ListController.js";


class App {
    listController = new ListController()
    itemController = new ItemController()
}

window["app"] = new App();
