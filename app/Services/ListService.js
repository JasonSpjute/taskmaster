import { ProxyState } from "../AppState.js";
import List from "../Models/List.js";
import { saveState } from "../Utils/LocalStorage.js";

class ListService {

  createList(rawList) {
    console.log("creating list from service");
    let list = new List(rawList);
    let lists = ProxyState.lists
    lists.push(list)
  }
  deleteList(listId) {
    ProxyState.lists = ProxyState.lists.filter(p => p.listId != listId);
    ProxyState.items = ProxyState.items.filter(p => p.listId != listId);
  }
  constructor(){
    ProxyState.on("lists", saveState)
  }
}

const service = new ListService();
export default service;
